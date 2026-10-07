export type AuthErrorCode =
  | "invalid_credentials"
  | "email_already_registered"
  | "weak_password"
  | "network_error"
  | "unknown";

export class AuthError extends Error {
  constructor(
    public readonly code: AuthErrorCode,
    message: string,
  ) {
    super(message);
    this.name = "AuthError";
  }
}
