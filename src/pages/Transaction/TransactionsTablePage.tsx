import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import DialogBox from '../../components/UI/DialogBox';
import {
  dummyTransactions,
  Transaction,
} from '../../components/mock/data/dummyTransactions';
import {
  TransactionDetail,
  transactionDetails,
} from '../../components/mock/data/transactionDetails';

const PAGE_SIZE = 10;

export default function TransactionsInfiniteScroll() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<TransactionDetail | null>(null);
  const { ref: sentinelRef, inView } = useInView();

  const {
    data,
    error,
    isError,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<{ data: Transaction[]; nextCursor?: number }, Error>({
    queryKey: ['transactions'],
    queryFn: async ({ pageParam = 0 }: { pageParam: number }) => {
 await new Promise((r) => setTimeout(r, 500));
      const start = pageParam * PAGE_SIZE;
      const end = start + PAGE_SIZE;
      const pageData = dummyTransactions.slice(start, end);
      const nextCursor = end < dummyTransactions.length ? pageParam + 1 : undefined;
      return { data: pageData, nextCursor };
    },
    initialPageParam: 0,                  // ← required in v5+ :contentReference[oaicite:5]{index=5}
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const openDetail = (id: string) => {
    const detail = transactionDetails[id];
    if (detail) {
      setSelected(detail);
      setIsOpen(true);
    }
  };

  if (isLoading) return <p>Loading…</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4">
      {data.pages.map((page, idx) => (
        <React.Fragment key={idx}>
          {page.data.map((txn) => (
            <div
              key={txn.id}
              className="flex justify-between items-center p-3 bg-white rounded shadow-sm"
            >
              <div>
                <p className="font-medium">{txn.recipientName}</p>
                <p className="text-xs text-gray-500">
                  {new Date(txn.date).toLocaleString('en-NG', {
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
              <div className="text-right">
                <p
                  className={`font-semibold ${
                    txn.amount < 0 ? 'text-red-600' : 'text-green-600'
                  }`}
                >
                  {txn.amount < 0 ? '-' : '+'}
                  {Math.abs(txn.amount).toLocaleString('en-NG', {
                    style: 'currency',
                    currency: 'NGN',
                  })}
                </p>
                <button
                  className="text-blue-600 hover:underline text-sm mt-1"
                  onClick={() => openDetail(txn.id)}
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}

      <div ref={sentinelRef} className="h-6 flex justify-center items-center">
        {isFetchingNextPage
          ? 'Loading more…'
          : hasNextPage
          ? 'Scroll to load more'
          : '— No more transactions —'}
      </div>

      {/* Details Dialog */}
      <DialogBox
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={selected?.narration}
        actionButton={{ text: 'Close', onClick: () => setIsOpen(false) }}
      >
        {selected && (
          <div className="space-y-2 text-sm">
            <p><strong>Description:</strong> {selected.description}</p>
            <p><strong>From:</strong> {selected.sender.name} ({selected.sender.bankName})</p>
            <p><strong>To:</strong> {selected.recipient.name} ({selected.recipient.bankName})</p>
            <p><strong>Amount:</strong> ₦{Math.abs(selected.amount).toLocaleString()}</p>
            <p><strong>Fees:</strong> ₦{selected.fees.toLocaleString()}</p>
            <p><strong>Status:</strong> {selected.status}</p>
            <p><strong>Date:</strong> {new Date(selected.dateDebited).toLocaleString('en-NG')}</p>
            <p><strong>Old Balance:</strong> ₦{selected.oldBalance.toLocaleString()}</p>
            <p><strong>New Balance:</strong> ₦{selected.newBalance.toLocaleString()}</p>
          </div>
        )}
      </DialogBox>
    </div>
  );
}
