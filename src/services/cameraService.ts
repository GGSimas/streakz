import { launchImageLibraryAsync } from "expo-image-picker";

export async function pickImage(): Promise<string | undefined> {
  const result = await launchImageLibraryAsync({
    mediaTypes: ["images"],
    allowsEditing: true,
    aspect: [1, 1],
    quality: 0.8,
  });

  if (result.canceled) {
    return undefined;
  }

  return result.assets[0].uri;
}
