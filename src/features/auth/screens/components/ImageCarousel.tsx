import { useTheme } from "@/theme";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from "react-native";

type ImageCarouselProps = {
  images: readonly string[];
  index: number;
  onIndexChange: (index: number) => void;
};

export function ImageCarousel({ images, index, onIndexChange }: ImageCarouselProps) {
  const { colors } = useTheme();
  const scrollRef = useRef<ScrollView>(null);
  const indexFromScroll = useRef(false);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (size.width === 0 || indexFromScroll.current) {
      indexFromScroll.current = false;
      return;
    }

    scrollRef.current?.scrollTo({ x: index * size.width, animated: true });
  }, [index, size.width]);

  function handleScrollEnd(event: NativeSyntheticEvent<NativeScrollEvent>) {
    if (size.width === 0) {
      return;
    }

    const next = Math.min(
      images.length - 1,
      Math.max(0, Math.round(event.nativeEvent.contentOffset.x / size.width)),
    );

    if (next === index) {
      return;
    }

    indexFromScroll.current = true;
    onIndexChange(next);
  }

  return (
    <View
      style={[styles.carousel, { backgroundColor: colors.bg }]}
      onLayout={(event) => {
        const { width, height } = event.nativeEvent.layout;
        setSize({ width, height });
      }}
    >
      {size.width > 0 ? (
        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleScrollEnd}
          style={StyleSheet.absoluteFill}
        >
          {images.map((uri) => (
            <Image
              key={uri}
              source={{ uri }}
              style={{ width: size.width, height: size.height }}
              contentFit="cover"
              accessibilityElementsHidden
            />
          ))}
        </ScrollView>
      ) : null}
      <LinearGradient
        pointerEvents="none"
        colors={[colors.bg, colors.bg, "rgba(13,13,18,0.2)"]}
        locations={[0, 0.4, 1]}
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0.5, y: 0 }}
        style={StyleSheet.absoluteFill}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    overflow: "hidden",
  },
});
