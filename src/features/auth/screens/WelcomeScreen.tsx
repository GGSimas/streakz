import { Button, Screen, Text } from "@/components/ui";
import { useAppTranslation } from "@/i18n";
import { useTheme } from "@/theme";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { ImageCarousel, SlideIndicator } from "./components";

const slideImages = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop&auto=format",
] as const;

type WelcomeScreenProps = {
  onLogin: () => void;
  onRegister: () => void;
};

export function WelcomeScreen({ onLogin, onRegister }: WelcomeScreenProps) {
  const { colors, spacing } = useTheme();
  const { t } = useAppTranslation();
  const [index, setIndex] = useState(0);
  const slides = [
    {
      image: slideImages[0],
      title: t("welcome.slides.together.title"),
      description: t("welcome.slides.together.description"),
    },
    {
      image: slideImages[1],
      title: t("welcome.slides.gamification.title"),
      description: t("welcome.slides.gamification.description"),
    },
    {
      image: slideImages[2],
      title: t("welcome.slides.competition.title"),
      description: t("welcome.slides.competition.description"),
    },
  ];
  const current = slides[index];

  return (
    <Screen edges={["bottom"]} style={styles.screen}>
      <ImageCarousel
        images={slides.map((slide) => slide.image)}
        index={index}
        onIndexChange={setIndex}
      />

      <View
        style={{
          paddingHorizontal: spacing[6],
          paddingTop: spacing[4],
          paddingBottom: spacing[10],
          gap: spacing[6],
        }}
      >
        <SlideIndicator
          count={slides.length}
          index={index}
          onChange={setIndex}
          labels={slides.map((slide) => slide.title)}
        />

        <View style={{ gap: spacing[2] }}>
          <Text variant="header">{current.title}</Text>
          <Text variant="subtitle" style={{ color: colors.label }}>
            {current.description}
          </Text>
        </View>

        <View style={{ gap: spacing[3] }}>
          <Button full onPress={onRegister}>
            {t("welcome.createAccount")}
          </Button>
          <Button variant="ghost" full onPress={onLogin}>
            {t("welcome.signIn")}
          </Button>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 0,
  },
});
