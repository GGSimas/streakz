import {
  useMutation,
  type UseMutateAsyncFunction,
  type UseMutateFunction,
  type UseMutationOptions,
} from "@tanstack/react-query";

export type UseAppMutationOptions<TData, TVariables> = Omit<
  UseMutationOptions<TData, Error, TVariables>,
  "mutationFn"
>;

type UseAppMutationParams<TData, TVariables> = {
  mutationFn: (variables: TVariables) => Promise<TData>;
  options?: UseAppMutationOptions<TData, TVariables>;
};

type UseAppMutationResult<TData, TVariables> = {
  data?: TData;
  isLoading: boolean;
  error?: Error | null;
  isError: boolean;
  isSuccess: boolean;
  mutate: UseMutateFunction<TData, Error, TVariables>;
  mutateAsync: UseMutateAsyncFunction<TData, Error, TVariables>;
  reset: () => void;
};

export function useAppMutation<TData, TVariables = void>({
  mutationFn,
  options,
}: UseAppMutationParams<TData, TVariables>): UseAppMutationResult<
  TData,
  TVariables
> {
  const {
    data,
    isPending,
    isError,
    error,
    isSuccess,
    mutate,
    mutateAsync,
    reset,
  } = useMutation<TData, Error, TVariables>({
    mutationFn,
    ...options,
  });

  return {
    data,
    isLoading: isPending,
    isError,
    error,
    isSuccess,
    mutate,
    mutateAsync,
    reset,
  };
}
