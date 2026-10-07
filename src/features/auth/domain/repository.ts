import { AuthUser, LoginParams, RegisterParams } from "./types";

export interface AuthUserRepository {
  login(params: LoginParams): Promise<AuthUser>;
  register(params: RegisterParams): Promise<void>;
  getUser(): Promise<AuthUser | null>;
  logout(): Promise<void>;
}
