// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FF6600", // swap in your brand color
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Work Orders",
          tabBarIcon: ({ color }) => (
            <Feather name="file-text" size={20} color={color} />
          ),
        }}
      />
      {/* Later: add more Tabs.Screen entries here */}
    </Tabs>
  );
}
