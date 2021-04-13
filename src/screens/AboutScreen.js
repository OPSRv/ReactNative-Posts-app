import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import AppBackground from "../theme/AppBackground";

export const AboutScreen = ({ navigation }) => {
  const [selectionCount] = useState(0);
  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props) => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title="Toogle Drawer"
            iconName="ios-menu"
            label="Toggle drawer"
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <AppBackground>
      <View style={styles.center}>
        <Text>AboutScreen</Text>
      </View>
    </AppBackground>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
