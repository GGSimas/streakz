import { useRepositories } from "@/providers/repositories";
import { useAppMutation, UseAppMutationOptions } from "@/lib/tanstack";
import { registerAccount } from "../../application";
import { RegisterParams } from "../../domain";

export function useRegisterAccount(
  options?: UseAppMutationOptions<void, RegisterParams>,
) {
  const { auth } = useRepositories();
  const { mutate, isLoading, error } = useAppMutation<void, RegisterParams>({
    mutationFn: ({ email, password, fullName }) =>
      registerAccount(auth, { email, password, fullName }),
    options,
  });

  return {
    register: (params: RegisterParams) => mutate(params),
    isLoading,
    error,
  };
}
