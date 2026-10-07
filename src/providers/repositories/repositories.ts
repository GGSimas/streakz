import { AuthUserRepository } from "@/features/auth/domain";
import { authUserRepository } from "@/features/auth/infra/supabase/repository";

export type Repositories = {
  auth: AuthUserRepository;
};

export const repositories: Repositories = {
  auth: authUserRepository,
};
