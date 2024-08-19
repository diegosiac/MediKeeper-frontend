import { StyleSheet, View } from "react-native";

import { SectionLayout } from "../layouts";

import { MedicineRegistrationStatusCard } from "@/features/medicine/components";

export const MedicinesRegistrationStatusSection = () => {
  return (
    <SectionLayout title="Resumen de tu registro">
      <View style={styles.container}>
        <MedicineRegistrationStatusCard
          title="Total registrados"
          total={10}
          icon={<View />}
        />
        <View style={styles.bottomCards}>
          <MedicineRegistrationStatusCard title="Por expirar" total={8} />
          <MedicineRegistrationStatusCard title="Expirados" total={2} />
        </View>
      </View>
    </SectionLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  bottomCards: {
    flexDirection: "row",
    gap: 10,
  },
});
