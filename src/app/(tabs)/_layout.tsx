import React from "react";
import { StyleSheet, useColorScheme } from "react-native";
import { Tabs } from "expo-router";

import {
  BarcodeIcon,
  HomeIcon,
  ListDetailsIcon,
  SearchIcon,
  UserIcon,
} from "@/shared/assets/icons";
import { COLORS } from "@/shared/constants";

export default function TabLayout() {
  const colorScheme = useColorScheme() ?? "light";

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS[colorScheme].tint,
        tabBarStyle: {
          backgroundColor: COLORS[colorScheme].background,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <HomeIcon color={color} style={styles.tabIcon} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <SearchIcon color={color} style={styles.tabIcon} />
          ),
        }}
      />
      <Tabs.Screen
        name="new"
        options={{
          title: "Explore",
          tabBarItemStyle: {
            backgroundColor: COLORS[colorScheme].tint,
            borderRadius: 10,
          },
          tabBarIcon: () => (
            <BarcodeIcon
              color={COLORS[colorScheme].background}
              style={styles.tabIcon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="medicines"
        options={{
          title: "Medicamentos",
          tabBarIcon: ({ color }) => (
            <ListDetailsIcon color={color} style={styles.tabIcon} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <UserIcon color={color} style={styles.tabIcon} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    width: 35,
    height: 35,
    fontSize: 35,
  },
});
