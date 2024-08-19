import { Pressable, StyleSheet, useColorScheme, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link } from "expo-router";

import { NotificationButton } from "@/features/notification/components";
import { ClipboardListIcon, PillAddIcon } from "@/shared/assets/icons";
import { SearchInput, ThemedText, ThemedView } from "@/shared/components";
import { COLORS } from "@/shared/constants";

export const HeroSection = () => {
  const colorScheme = useColorScheme() ?? "light";
  const insets = useSafeAreaInsets();

  return (
    <ThemedView
      lightColor={COLORS.light.card}
      darkColor={COLORS.dark.card}
      style={[
        styles.container,
        {
          paddingTop: insets.top + 20,
        },
      ]}
    >
      <View style={styles.header}>
        <SearchInput />
        <NotificationButton />
      </View>
      <ThemedText
        type="title"
        style={{
          fontSize: 50,
          lineHeight: 50,
          marginTop: 40,
          fontWeight: "400",
        }}
      >
        Bienvenido
      </ThemedText>
      <View style={styles.containerButtons}>
        <ThemedView
          lightColor={COLORS.light.background}
          darkColor={COLORS.dark.background}
          style={styles.backgroundBar}
        />
        <Link href="/medicines" asChild>
          <Pressable
            style={{
              ...styles.button,
              ...styles.largeButton,
              borderColor: COLORS[colorScheme].background,
              backgroundColor: COLORS[colorScheme].button,
            }}
          >
            <ThemedView
              lightColor={COLORS.light.background}
              darkColor={COLORS.dark.background}
              style={styles.containerIconButton}
            >
              <ClipboardListIcon
                style={styles.iconButton}
                color={COLORS[colorScheme].text}
              />
            </ThemedView>
            <ThemedText style={styles.textButton}>Mis registros</ThemedText>
          </Pressable>
        </Link>
        <Link href="/new" asChild>
          <Pressable
            style={{
              ...styles.button,
              ...styles.largeButton,
              borderColor: COLORS[colorScheme].background,
              backgroundColor: COLORS[colorScheme].button,
            }}
          >
            <ThemedView
              lightColor={COLORS.light.background}
              darkColor={COLORS.dark.background}
              style={styles.containerIconButton}
            >
              <PillAddIcon
                style={styles.iconButton}
                color={COLORS[colorScheme].text}
              />
            </ThemedView>
            <ThemedText style={styles.textButton}>Agregar</ThemedText>
          </Pressable>
        </Link>
        <Link href="/notification" asChild>
          <Pressable
            style={{
              ...styles.button,
              ...styles.shortButton,
              borderColor: COLORS[colorScheme].background,
              backgroundColor: COLORS[colorScheme].tint,
            }}
          >
            <ThemedText style={styles.textButton}>IA</ThemedText>
          </Pressable>
        </Link>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 400,
    margin: 5,
    borderRadius: 30,
    padding: 20,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  containerButtons: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  button: {
    borderRadius: 100,
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
    borderWidth: 4,
    padding: 4,
    paddingRight: 8,
    height: 60,
  },
  textButton: {
    fontSize: 16,
    fontWeight: "500",
  },
  largeButton: {
    flexGrow: 1,
  },
  shortButton: {
    justifyContent: "center",
    width: 60,
  },
  backgroundBar: {
    width: "100%",
    height: 25,
    position: "absolute",
    borderRadius: 100,
  },
  containerIconButton: {
    width: 44,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    borderRadius: 20,
    padding: 5,
  },
  iconButton: {
    width: 25,
    height: 25,
    borderRadius: 100,
  },
});
