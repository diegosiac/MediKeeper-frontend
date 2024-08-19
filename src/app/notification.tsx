import { Stack } from "expo-router";

export default function Notification() {
  return (
    <>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerTitle: "Tus notificaciones",
        }}
      />
    </>
  );
}
