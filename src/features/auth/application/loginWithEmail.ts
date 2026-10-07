import type { AuthUser, AuthUserRepository, LoginParams } from "../domain";

export async function loginWithEmail(
  authUserRepository: AuthUserRepository,
  params: LoginParams,
): Promise<AuthUser> {
  const authUser = await authUserRepository.login(params);
  return authUser;
}
