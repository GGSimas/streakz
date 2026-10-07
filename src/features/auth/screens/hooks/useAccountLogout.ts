import { useAppMutation } from "@/lib/tanstack";
import { useRepositories } from "@/providers/repositories";

export function useAccountLogout() {
  const { auth } = useRepositories();
  const { mutate, isLoading, error } = useAppMutation<void, void>({
    mutationFn: auth.logout,
  });

  return { logout: mutate, isLoading, error };
}
