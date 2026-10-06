import { radius } from "@/theme";
import { Image } from "expo-image";
import { StyleSheet, type StyleProp, type ImageStyle } from "react-native";

type AvatarProps = {
  uri: string;
  name: string;
  size?: number;
  style?: StyleProp<ImageStyle>;
};

export function Avatar({ uri, name, size = 40, style }: AvatarProps) {
  return (
    <Image
      source={{ uri }}
      accessibilityLabel={name}
      contentFit="cover"
      style={[styles.image, { width: size, height: size }, style]}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: radius.full,
    flexShrink: 0,
  },
});
