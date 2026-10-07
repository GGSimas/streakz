import { useRepositories } from "@/providers/repositories";
import { useAppMutation } from "@/lib/tanstack";
import { loginWithEmail } from "../../application";
import { AuthUser, LoginParams } from "../../domain";

export function useLoginAccount() {
  const { auth } = useRepositories();
  const { mutate, data, isLoading, error } = useAppMutation<
    AuthUser,
    LoginParams
  >({
    mutationFn: ({ email, password }) =>
      loginWithEmail(auth, { email, password }),
  });

  return {
    login: (params: LoginParams) => mutate(params),
    isLoading,
    error,
    data,
  };
}
