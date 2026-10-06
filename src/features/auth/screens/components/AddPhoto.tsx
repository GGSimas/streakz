import { Avatar, Text } from "@/components/ui";
import { useAppTranslation } from "@/i18n";
import { useTheme } from "@/theme";
import { Camera, User } from "lucide-react-native";
import { Pressable, StyleSheet, View } from "react-native";

const PHOTO_SIZE = 96;

type AddPhotoProps = {
  name: string;
  uri?: string;
  onPress: () => void;
};

export function AddPhoto({ name, uri, onPress }: AddPhotoProps) {
  const { colors, radius, spacing } = useTheme();
  const { t } = useAppTranslation();

  return (
    <View style={[styles.wrap, { gap: spacing[2] }]}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t("addPhoto.label")}
        onPress={onPress}
        style={styles.photo}
      >
        {uri ? (
          <Avatar
            uri={uri}
            name={name}
            size={PHOTO_SIZE}
            style={{ borderWidth: 3, borderColor: colors.lime }}
          />
        ) : (
          <View
            style={[
              styles.placeholder,
              {
                backgroundColor: colors.surface,
                borderColor: colors.lime,
              },
            ]}
          >
            <User color={colors.muted} size={32} strokeWidth={2} />
          </View>
        )}
        <View
          style={[
            styles.badge,
            { backgroundColor: colors.lime, borderRadius: radius.full },
          ]}
        >
          <Camera color={colors.onAccent} size={14} strokeWidth={2} />
        </View>
      </Pressable>
      <Text variant="label" style={{ color: colors.muted }}>
        {uri ? t("addPhoto.change") : t("addPhoto.add")}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: "center",
  },
  photo: {
    width: PHOTO_SIZE,
    height: PHOTO_SIZE,
  },
  placeholder: {
    width: PHOTO_SIZE,
    height: PHOTO_SIZE,
    borderRadius: PHOTO_SIZE / 2,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  badge: {
    position: "absolute",
    right: -4,
    bottom: -4,
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
});
