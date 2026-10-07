import type { AuthUserRepository, RegisterParams } from "../domain";

export async function registerAccount(
  authUserRepository: AuthUserRepository,
  params: RegisterParams,
): Promise<void> {
  await authUserRepository.register(params);
}
