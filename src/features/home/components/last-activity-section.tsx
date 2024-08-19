import { StyleSheet } from "react-native";

import { LastActivity } from "../interfaces";
import { SectionLayout } from "../layouts";
import { LastActivityCard } from "./last-activity-card";

import { ThemedText, ThemedView } from "@/shared/components";
import { COLORS } from "@/shared/constants";

export const LastActivitySection = () => {
  const data: LastActivity[] = [
    {
      slug: "1",
      name: "Registro 1",
      date: new Date(),
      type: "registration",
    },
    {
      slug: "2",
      name: "Registro 2",
      date: new Date(),
      type: "edit",
    },
    {
      slug: "3",
      name: "Registro 3",
      date: new Date(),
      type: "delete",
    },
  ];

  return (
    <SectionLayout title="Tu ultima actividad">
      <ThemedView
        lightColor={COLORS.light.card}
        darkColor={COLORS.dark.card}
        style={styles.container}
      >
        {data.length === 0 ? (
          <ThemedText>No hay registros</ThemedText>
        ) : (
          data.map((activity) => (
            <LastActivityCard key={activity.slug} activity={activity} />
          ))
        )}
      </ThemedView>
    </SectionLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    gap: 10,
    padding: 5,
    minHeight: 200,
  },
});
