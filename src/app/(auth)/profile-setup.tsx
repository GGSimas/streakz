import { ProfileScreen } from "@/features/auth/screens/ProfileScreen";
import { useLocalSearchParams } from "expo-router";

export default function ProfileRoute() {
  const { name } = useLocalSearchParams<{ name?: string }>();

  return (
    <ProfileScreen
      initialName={typeof name === "string" ? name : ""}
      onDone={() => undefined}
    />
  );
}
