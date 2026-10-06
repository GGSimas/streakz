import { RegisterScreen } from "@/features/auth/screens/RegisterScreen";
import { router, type RelativePathString } from "expo-router";

export default function RegisterRoute() {
  return (
    <RegisterScreen
      onBack={() => router.back()}
      onLogin={() => router.push("/login")}
      onNext={({ name }) => {
        router.push({
          pathname: "/profile-setup" as RelativePathString,
          params: { name },
        });
      }}
    />
  );
}
