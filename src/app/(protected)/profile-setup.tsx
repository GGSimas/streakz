import { ProfileScreen } from "@/features/auth/screens/ProfileScreen";
import { useAuth } from "@/providers/auth";
import { useLocalSearchParams } from "expo-router";

export default function ProfileSetupRoute() {
  const { name } = useLocalSearchParams<{ name?: string }>();
  const { user } = useAuth();
  const initialName =
    typeof name === "string" && name.length > 0 ? name : (user?.name ?? "");

  return (
    <ProfileScreen
      initialName={initialName}
      onDone={() => undefined}
    />
  );
}
