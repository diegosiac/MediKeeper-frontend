const tintColorLight = "#f7c523";
const tintColorDark = "#ebae00";

interface Colors {
  text: string;
  background: string;
  card: string;
  button: string;
  tint: string;
  icon: string;
  placeholder: string;
  tabIconDefault: string;
  tabIconSelected: string;
  success: string;
  destructive: string;
  warning: string;
}

export type ColorScheme = "light" | "dark";

export const COLORS: Record<ColorScheme, Colors> = {
  light: {
    text: "#212121",
    background: "#f9f9f9",
    card: "#eaeaea",
    button: "#efefef",
    tint: tintColorLight,
    icon: "#687076",
    placeholder: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    success: "#c6e3ae",
    destructive: "#e9b8b8",
    warning: "#fbe285",
  },
  dark: {
    text: "#f9f9f9",
    background: "#212121",
    card: "#2d2d2d",
    button: "#353535",
    tint: tintColorDark,
    icon: "#9BA1A6",
    placeholder: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    success: "#c6e3ae",
    destructive: "#e9b8b8",
    warning: "#fbe285",
  },
};
