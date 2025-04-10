import useSWR from 'swr';

export interface Bank {
  name: string;
  slug: string;
  code: string;
  ussd: string;
  logo: string;
}

// A simple fetcher function that wraps the fetch API
const fetcher = (url: string) => fetch(url).then((res) => res.json());

// Custom hook that fetches bank data from the API endpoint
export function useBanks() {
  // Replace with your API endpoint URL (or local endpoint)
  const { data, error } = useSWR<Bank[]>('https://nigerianbanks.xyz', fetcher, {
    revalidateOnFocus: false, // Customize as needed
  });
  
  return {
    banks: data,
    isLoading: !error && !data,
    isError: error,
  };
}
