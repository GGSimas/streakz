import { HomeScreen } from "@/features/home/screens";
import { router } from "expo-router";

export default function HomeRoute() {
  return (
    <HomeScreen
      onCheckin={() => undefined}
      onExplore={() => router.push("/explore")}
      onGroup={() => undefined}
      onNotifications={() => undefined}
    />
  );
}
