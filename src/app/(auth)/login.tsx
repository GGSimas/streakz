import { LoginScreen } from "@/features/auth/screens/LoginScreen";
import { router } from "expo-router";

export default function LoginRoute() {
  return <LoginScreen onBack={() => router.back()} />;
}
