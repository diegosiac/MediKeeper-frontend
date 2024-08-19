import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";

import { LastActivity } from "../interfaces";

import { ThemedPressable, ThemedText, ThemedView } from "@/shared/components";

interface Props {
  activity: LastActivity;
}

export const LastActivityCard = ({ activity }: Props) => {
  const { name, date, type } = activity;

  return (
    <Link href="/" asChild>
      <ThemedPressable
        onPress={() => console.log("press")}
        style={{
          ...styles.button,
        }}
        pressedStyle={styles.buttonPressed}
      >
        <View>
          <ThemedText>{name}</ThemedText>
          <ThemedText>{date.toDateString()}</ThemedText>
        </View>
        <ThemedView>
          <ThemedText>{type}</ThemedText>
        </ThemedView>
      </ThemedPressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonPressed: {
    opacity: 0.7,
  },
});
