import { ForgotPasswordScreen } from "@/features/auth/screens/ForgotPasswordScreen";
import { router } from "expo-router";

export default function ForgotPasswordRoute() {
  return <ForgotPasswordScreen onBack={() => router.back()} />;
}
