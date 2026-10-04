import { LoginScreen } from "@/features/auth/screens/LoginScreen";
import { router } from "expo-router";

export default function LoginRoute() {
  return (
    <LoginScreen
      onBack={() => router.back()}
      onRegister={() => router.push("/register")}
      onForgot={() => router.push("/forgot-password")}
      onLogin={() => undefined}
    />
  );
}
