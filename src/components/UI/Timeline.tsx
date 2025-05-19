// Timeline.tsx
import {
  useInfiniteQuery,
  QueryKey,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query'
import { useVirtualizer } from '@tanstack/react-virtual'
import {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from 'react'
import throttle from 'lodash.throttle'
import Loading from './Loading'

// If TypeScript cannot find types for lodash.throttle, create src/@types/lodash.throttle.d.ts:
// declare module 'lodash.throttle' {
//   function throttle<T extends (...args: any[]) => any>(
//     func: T,
//     wait: number,
//     options?: { leading?: boolean; trailing?: boolean }
//   ): T;
//   export default throttle;
// }

export interface TimelineProps<T> {
  queryKey: QueryKey
  fetchNewer: (cursor: string) => Promise<T[]>
  fetchOlder: (cursor: string) => Promise<T[]>
  getItemDate: (item: T) => Date
  renderItem: (item: T) => React.ReactNode
  initialCursor?: string
  throttleDelay?: number
  overscan?: number
  estimateSize?: number
}

const Timeline = <T,>({
  queryKey,
  fetchNewer,
  fetchOlder,
  getItemDate,
  renderItem,
  initialCursor = new Date().toISOString(),
  throttleDelay = 3000, // 3-second delay before another fetch
  overscan = 5,
  estimateSize = 72,
}: TimelineProps<T>) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isThrottled, setIsThrottled] = useState(false)

  // React Query configuration with caching
  const queryOptions: UseInfiniteQueryOptions<T[], Error> = {
    queryKey,
    queryFn: async ({ pageParam }) => {
      try {
        const { direction, cursor } = pageParam as { direction: 'newer' | 'older'; cursor: string }
        return direction === 'newer'
          ? await fetchNewer(cursor)
          : await fetchOlder(cursor)
      } catch (error: unknown) {
        throw new Error((error as Error).message || 'Data fetching error')
      }
    },
    initialPageParam: { direction: 'older', cursor: initialCursor },
    getNextPageParam: (lastPage) =>
      lastPage.length > 0
        ? { direction: 'older', cursor: getItemDate(lastPage[lastPage.length - 1]).toISOString() }
        : undefined,
    getPreviousPageParam: (firstPage) =>
      firstPage.length > 0
        ? { direction: 'newer', cursor: getItemDate(firstPage[0]).toISOString() }
        : undefined,
    staleTime: 60000, // cache data for 60 seconds
  }

  const { data, fetchNextPage, fetchPreviousPage, isFetching } = useInfiniteQuery(queryOptions)

  // Flatten & sort pages (newest first)
  const allItems = useMemo(
    () => data?.pages.flat().sort((a, b) => getItemDate(b).getTime() - getItemDate(a).getTime()) || [],
    [data?.pages, getItemDate]
  )

  const rowVirtualizer = useVirtualizer({
    count: allItems.length,
    getScrollElement: () => containerRef.current,
    estimateSize: () => estimateSize,
    overscan,
  })

  // Scroll to top helper
  const scrollToTop = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0
    }
  }, [])

  // Throttled scroll handler
  const handleScroll = useCallback(
    throttle(() => {
      const container = containerRef.current
      if (!container || isThrottled) return

      setIsThrottled(true)
      const { scrollTop, scrollHeight, clientHeight } = container

      // Fetch newer when near top and jump view
      if (scrollTop < 100 && !isFetching) {
        fetchPreviousPage().then(() => scrollToTop())
      }

      // Fetch older when near bottom
      if (scrollTop + clientHeight > scrollHeight - 100 && !isFetching) {
        fetchNextPage()
      }

      // Delay release of throttle (timer setting)
      setTimeout(() => setIsThrottled(false), throttleDelay)
    }, throttleDelay),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isFetching, fetchNextPage, fetchPreviousPage, throttleDelay, isThrottled, scrollToTop]
  )

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <div ref={containerRef} className="h-[620px] overflow-y-auto border border-gray-200 rounded-lg shadow-sm">
      <div style={{ height: `${rowVirtualizer.getTotalSize()}px` }} className="relative">
        {rowVirtualizer.getVirtualItems().map((virtualItem) => (
          <div
            key={virtualItem.key}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${virtualItem.size}px`,
              transform: `translateY(${virtualItem.start}px)`,
            }}
          >
            {renderItem(allItems[virtualItem.index])}
          </div>
        ))}
      </div>

      {isFetching && (
        <div className="text-center p-4 text-gray-500">
          <span className="animate-pulse">  <Loading  overlay={true} />  </span>
        </div>
      )}
    </div>
  )
}

export default Timeline
