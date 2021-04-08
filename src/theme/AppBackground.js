import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const AppBackground = ({ children }) => {
  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#992f6a"]}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
});
export default AppBackground;
