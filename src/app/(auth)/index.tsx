import { WelcomeScreen } from "@/features/auth/screens/WelcomeScreen";
import { router } from "expo-router";

export default function WelcomeRoute() {
  return (
    <WelcomeScreen
      onLogin={() => router.push("/login")}
      onRegister={() => router.push("/register")}
    />
  );
}
