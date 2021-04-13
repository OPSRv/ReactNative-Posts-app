import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";

const AppBackground = ({ children }) => {
  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#992f6a"]}
      style={styles.gradient}
    >
      <View style={styles.container}>{children}</View>
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
