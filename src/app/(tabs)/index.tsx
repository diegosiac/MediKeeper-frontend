import { ScrollView, StyleSheet, View } from "react-native";

import {
  HeroSection,
  LastActivitySection,
  MedicinesRegistrationStatusSection,
} from "@/features/home/components";
import { ThemedView } from "@/shared/components";

export default function HomeScreen() {
  return (
    <ScrollView>
      <ThemedView>
        <HeroSection />
        <View style={styles.containerMain}>
          <MedicinesRegistrationStatusSection />
          <LastActivitySection />
        </View>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    padding: 25,
    gap: 30,
  },
});
