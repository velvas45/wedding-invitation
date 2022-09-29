import useSWR from "swr";

export default function useFetch(key, fetcher, option) {
  const { data, error } = useSWR(key, fetcher, option);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
