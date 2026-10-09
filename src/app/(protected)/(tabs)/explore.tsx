import { EmptyState, Screen } from "@/components/ui";

export default function ExploreRoute() {
  return (
    <Screen style={{ justifyContent: "center", alignItems: "center" }}>
      <EmptyState
        icon="🔍"
        title="Não há nada para explorar"
        description="Ainda não há nada para explorar"
        onCta={() => {}}
        cta="Explorar"
      />
    </Screen>
  );
}
