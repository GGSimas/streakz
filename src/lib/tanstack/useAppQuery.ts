import {
  useQuery,
  type RefetchOptions,
  type QueryKey,
  type UseQueryOptions,
  type QueryObserverResult,
} from "@tanstack/react-query";

type UseAppQueryParams<TData> = {
  queryKey: QueryKey;
  fetchFn: () => Promise<TData>;
  options?: Omit<
    UseQueryOptions<TData, Error, TData, QueryKey>,
    "queryKey" | "queryFn"
  >;
};

type UseAppQueryResult<TData> = {
  data?: TData;
  isLoading: boolean;
  error?: Error | null;
  isError: boolean;
  refetch: (
    options?: RefetchOptions,
  ) => Promise<QueryObserverResult<TData, Error>>;
};

export function useAppQuery<TData>({
  queryKey,
  fetchFn,
  options,
}: UseAppQueryParams<TData>): UseAppQueryResult<TData> {
  const { data, isLoading, isError, error, refetch } = useQuery<
    TData,
    Error,
    TData,
    QueryKey
  >({
    queryKey,
    queryFn: fetchFn,
    ...options,
  });

  return { data, isLoading, isError, error, refetch };
}
