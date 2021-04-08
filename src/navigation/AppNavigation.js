import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainSreen } from "../screens/MainSreen";
import { PostScreen } from "../screens/PostScreen";
import { StyleSheet, Platform } from "react-native";
import { THEME } from "../theme/theme";

const Stack = createStackNavigator();

export function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Main"
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === "android" ? "#fff" : "transperent",
          },
        }}
      >
        <Stack.Screen
          name="Main"
          component={MainSreen}
          options={{ title: "My blog" }}
        />
        <Stack.Screen name="Post" component={PostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
