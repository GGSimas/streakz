export type GreetingPeriod = "morning" | "afternoon" | "evening";

export function getGreetingPeriod(date = new Date()): GreetingPeriod {
  const hour = date.getHours();

  if (hour < 12) {
    return "morning";
  }

  if (hour < 18) {
    return "afternoon";
  }

  return "evening";
}

export function getFirstName(fullName: string): string {
  const [firstName] = fullName.trim().split(/\s+/);
  return firstName || fullName;
}
