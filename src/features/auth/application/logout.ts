import type { AuthUserRepository } from "../domain";

export async function logout(
  authUserRepository: AuthUserRepository,
): Promise<void> {
  await authUserRepository.logout();
}
