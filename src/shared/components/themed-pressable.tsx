import { forwardRef } from "react";
import {
  Pressable,
  type PressableProps,
  type StyleProp,
  View,
  type ViewStyle,
} from "react-native";

import { useThemeColor } from "@/shared/hooks";

interface ThemedPressableProps extends PressableProps {
  lightColor?: string;
  darkColor?: string;
  style?: StyleProp<ViewStyle> | undefined;
  pressedStyle?: StyleProp<ViewStyle> | undefined;
}

const ThemedPressable = forwardRef<View, ThemedPressableProps>(
  ({ style, pressedStyle, lightColor, darkColor, ...rest }, ref) => {
    const backgroundColor = useThemeColor(
      { light: lightColor, dark: darkColor },
      "button",
    );

    return (
      <Pressable
        ref={ref}
        style={({ pressed }) => {
          if (Array.isArray(style)) {
            return [{ backgroundColor }, ...style, pressed && pressedStyle];
          }

          return [{ backgroundColor }, style, pressed && pressedStyle];
        }}
        {...rest}
      />
    );
  },
);
ThemedPressable.displayName = "ThemedPressable";

export { ThemedPressable };
