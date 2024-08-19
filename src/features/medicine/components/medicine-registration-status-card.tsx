import type { ReactNode } from "react";
import {
  type StyleProp,
  StyleSheet,
  useColorScheme,
  View,
  type ViewStyle,
} from "react-native";

import { MedicineBottleIcon } from "@/shared/assets/icons";
import { ThemedText, ThemedView } from "@/shared/components";
import { COLORS } from "@/shared/constants";

interface Props {
  title: string;
  total: number;
  style?: StyleProp<ViewStyle>;
  icon?: ReactNode;
}

export const MedicineRegistrationStatusCard = ({
  title,
  total,
  style: styleProp,
  icon,
}: Props) => {
  const colorScheme = useColorScheme() ?? "light";

  return (
    <ThemedView
      lightColor={COLORS.light.card}
      darkColor={COLORS.dark.card}
      style={[style.container, styleProp]}
    >
      <View>
        <ThemedText style={style.title}>{title}</ThemedText>
        <View style={style.totalContainer}>
          <ThemedText style={style.total}>{total}</ThemedText>
          <ThemedText style={style.totalSubtitle}>medicamentos</ThemedText>
        </View>
      </View>
      {icon && (
        <ThemedView
          lightColor={COLORS.light.card}
          darkColor={COLORS.dark.card}
          style={[
            style.iconContainer,
            {
              borderColor: COLORS[colorScheme].background,
            },
          ]}
        >
          <MedicineBottleIcon
            style={style.icon}
            color={COLORS[colorScheme].text}
          />
        </ThemedView>
      )}
    </ThemedView>
  );
};

const style = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 20,
    gap: 5,
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  totalContainer: {
    flexDirection: "row",
    gap: 7,
  },
  total: {
    fontSize: 40,
    fontWeight: "700",
    textAlignVertical: "bottom",
    maxWidth: 100,
  },
  totalSubtitle: {
    textAlignVertical: "bottom",
    paddingBottom: 8,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    paddingHorizontal: 15,
    borderWidth: 3,
  },
  icon: {
    width: 40,
    height: 40,
  },
});
