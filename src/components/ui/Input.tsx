import { useTheme } from "@/theme";
import { forwardRef, useState, type ForwardedRef, type ReactNode } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  type StyleProp,
  type TextInputProps,
  type TextStyle,
  type ViewStyle,
} from "react-native";

import { Text } from "./Text";

export type InputType = "text" | "email" | "password";

type InputProps = Omit<TextInputProps, "style"> & {
  label: string;
  type?: InputType;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

const typeProps: Record<InputType, Partial<TextInputProps>> = {
  text: {},
  email: {
    keyboardType: "email-address",
    autoCapitalize: "none",
    autoCorrect: false,
    autoComplete: "email",
    textContentType: "emailAddress",
  },
  password: {
    secureTextEntry: true,
    autoCapitalize: "none",
    autoCorrect: false,
    autoComplete: "password",
    textContentType: "password",
  },
};

export const Input = forwardRef(function Input(
  {
    label,
    type = "text",
    leftIcon,
    rightIcon,
    style,
    containerStyle,
    onFocus,
    onBlur,
    ...rest
  }: InputProps,
  ref: ForwardedRef<TextInput>,
) {
  const { colors, spacing, radius, text } = useTheme();
  const [focused, setFocused] = useState(false);

  return (
    <View style={[{ gap: spacing[1.5] }, containerStyle]}>
      <Text variant="label">{label}</Text>
      <View
        style={[
          styles.field,
          {
            backgroundColor: colors.input,
            borderColor: focused ? colors.focus : colors.inputBorder,
            borderRadius: radius.lg,
            paddingHorizontal: spacing[4],
            paddingVertical: spacing[3.5],
            gap: spacing[1],
          },
        ]}
      >
        {leftIcon}
        <TextInput
          ref={ref}
          accessibilityLabel={label}
          placeholderTextColor={colors.muted}
          selectionColor={colors.lime}
          {...typeProps[type]}
          {...rest}
          onFocus={(event) => {
            setFocused(true);
            onFocus?.(event);
          }}
          onBlur={(event) => {
            setFocused(false);
            onBlur?.(event);
          }}
          style={[
            styles.input,
            {
              fontFamily: text.body.fontFamily,
              fontSize: text.body.fontSize,
              color: colors.text,
            },
            style,
          ]}
        />
        {rightIcon}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  field: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
  },
  input: {
    flex: 1,
    padding: 0,
  },
});
