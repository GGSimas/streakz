import { RegisterScreen } from "@/features/auth/screens/RegisterScreen";
import { router } from "expo-router";

export default function RegisterRoute() {
  return (
    <RegisterScreen
      onBack={() => router.back()}
      onLogin={() => router.push("/login")}
      onNext={({ name }) => {
        router.replace({
          pathname: "/profile-setup",
          params: { name },
        });
      }}
    />
  );
}
