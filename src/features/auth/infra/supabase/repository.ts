import {
  AuthUserRepository,
  LoginParams,
  RegisterParams,
  AuthUser,
} from "../../domain";
import { supabase } from "@/lib/supabase";
import { toAuthUser, toAuthError } from "./adapter";

async function login({ email, password }: LoginParams): Promise<AuthUser> {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw toAuthError(error);
  }
  return toAuthUser(data.user);
}

async function register({
  email,
  password,
  fullName,
}: RegisterParams): Promise<void> {
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
      },
    },
  });

  if (error) {
    throw toAuthError(error);
  }
}

async function getUser(): Promise<AuthUser | null> {
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    throw toAuthError(error);
  }

  if (!data.user) {
    return null;
  }

  return toAuthUser(data.user);
}

async function logout(): Promise<void> {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw toAuthError(error);
  }
}

async function getUserSession(): Promise<AuthUser | null> {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    throw toAuthError(error);
  }

  return data.session?.user ? toAuthUser(data.session.user) : null;
}

function listenToAuthStateChange(
  callback: (user: AuthUser | null) => void,
): () => void {
  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((_event, session) => {
    try {
      callback(session?.user ? toAuthUser(session.user) : null);
    } catch {
      callback(null);
    }
  });

  return () => subscription.unsubscribe();
}

export const authUserRepository: AuthUserRepository = {
  login,
  register,
  getUser,
  logout,
  getUserSession,
  listenToAuthStateChange,
};
