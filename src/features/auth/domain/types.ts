import { DateISO8601 } from "@/types";

export type AuthUser = {
  id: string;
  email: string;
  name?: string;
  createdAt: DateISO8601;
};

export type AuthSession = {
  user: AuthUser;
  accessToken: string;
  refreshToken: string;
};

export type LoginParams = {
  email: string;
  password: string;
};

export type RegisterParams = {
  email: string;
  password: string;
  fullName: string;
};
