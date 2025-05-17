// app/(tabs)/index.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function WorkOrdersTab() {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>The current Work Orders that are assigned to you will appear here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 18, fontWeight: "500" },
});
