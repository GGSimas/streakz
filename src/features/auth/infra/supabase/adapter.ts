import { AuthUser, AuthErrorCode, AuthError } from "../../domain";
import {
  AuthUser as SupabaseAuthUser,
  AuthError as SupabaseAuthError,
} from "@supabase/supabase-js";

export function toAuthUser(data: SupabaseAuthUser): AuthUser {
  if (!data.email) {
    throw new Error("Email is required");
  }

  return {
    id: data.id,
    email: data.email,
    name: data.user_metadata.fullName,
    createdAt: data.created_at,
  };
}

export function toAuthError(error: SupabaseAuthError): AuthError {
  return new AuthError(mapAuthErrorCode(error.code), error.message);
}

export function mapAuthErrorCode(
  error: SupabaseAuthError["code"],
): AuthErrorCode {
  switch (error) {
    case "email_exists":
      return "email_already_registered";
    case "invalid_credentials":
      return "invalid_credentials";
    case "weak_password":
      return "weak_password";
    case "unexpected_failure":
    default:
      return "unknown";
  }
}
