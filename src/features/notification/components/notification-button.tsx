import { Pressable, StyleSheet, useColorScheme } from "react-native";
import { Link } from "expo-router";

import { BellIcon } from "@/shared/assets/icons";
import { COLORS } from "@/shared/constants";

export const NotificationButton = () => {
  const colorScheme = useColorScheme() ?? "light";

  return (
    <Link href="/notification" asChild>
      <Pressable
        style={{
          ...styles.button,
          borderColor: COLORS[colorScheme].background,
          backgroundColor: COLORS[colorScheme].button,
        }}
      >
        <BellIcon style={styles.icon} color={COLORS[colorScheme].text} />
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    height: 50,
    width: 50,
    borderRadius: 100,
  },
  icon: {
    width: 25,
    height: 25,
  },
});
