import { Button, Screen, Text } from "@/components/ui";
import { useTheme } from "@/theme";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { ImageCarousel, SlideIndicator } from "./components";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&auto=format",
    title: "Desafios que unem",
    description: "Entre em grupos, faça check-ins e mostre consistência real.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&auto=format",
    title: "Gamificação real",
    description: "Ganhe XP, suba de nível e desbloqueie conquistas únicas.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop&auto=format",
    title: "Competição saudável",
    description: "Rankings globais e entre amigos para manter a chama acesa.",
  },
] as const;

type WelcomeScreenProps = {
  onLogin: () => void;
  onRegister: () => void;
};

export function WelcomeScreen({ onLogin, onRegister }: WelcomeScreenProps) {
  const { colors, spacing } = useTheme();
  const [index, setIndex] = useState(0);
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
            Criar conta gratuita
          </Button>
          <Button variant="ghost" full onPress={onLogin}>
            Já tenho conta — Entrar
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
