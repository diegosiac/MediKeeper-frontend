import { type ReactNode } from "react";
import { type StyleProp, StyleSheet, View, type ViewStyle } from "react-native";

import { ThemedText } from "@/shared/components";

interface Props {
  title: string;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const SectionLayout = ({ title, children, style }: Props) => {
  return (
    <View style={[styles.container, style]}>
      <ThemedText type="subtitle">{title}</ThemedText>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
});
