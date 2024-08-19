import type { OpaqueColorValue, TextProps } from "react-native";

export interface IconProps extends TextProps {
  size?: number;
  color?: string | OpaqueColorValue;
}
