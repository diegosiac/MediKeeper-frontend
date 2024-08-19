import { useState } from "react";
import {
  type StyleProp,
  TextInput,
  type TextStyle,
  useColorScheme,
  View,
} from "react-native";
import { StyleSheet } from "react-native";

import { SearchIcon } from "@/shared/assets/icons";
import { COLORS } from "@/shared/constants";

interface Props {
  style?: StyleProp<TextStyle>;
}

export const SearchInput = ({ style }: Props) => {
  const colorScheme = useColorScheme();
  const [text, setText] = useState("");

  const onChangeText = (text: string) => {
    setText(text);
  };

  return (
    <View style={styles.container}>
      <SearchIcon
        style={[
          styles.icon,
          { color: COLORS[colorScheme ?? "light"].placeholder },
        ]}
      />
      <TextInput
        style={[
          styles.input,
          style,
          {
            backgroundColor: COLORS[colorScheme ?? "light"].button,
            color: COLORS[colorScheme ?? "light"].text,
            borderColor: COLORS[colorScheme ?? "light"].background,
          },
        ]}
        placeholder="Busca un medicamento..."
        placeholderTextColor={COLORS[colorScheme ?? "light"].placeholder}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    height: 50,
  },
  input: {
    borderRadius: 10,
    borderWidth: 3,
    padding: 10,
  },
  icon: {
    padding: 10,
    fontSize: 20,
    position: "absolute",
    zIndex: 1,
    right: 5,
    top: 4,
  },
});
