import React from "react";
import { Platform } from "react-native";

import { MainSreen } from "../screens/MainSreen";
import { PostScreen } from "../screens/PostScreen";
import { BookedScreen } from "../screens/BookedScreen";
import { AboutScreen } from "../screens/AboutScreen";
import { CreateScreen } from "../screens/CreateScreen";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../theme/theme";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        backgroundColor: "#c6cbef",
        labelStyle: {
          fontFamily: "OpenSansRegular",
        },

        activeTintColor: "#e91e63",
        itemStyle: { marginVertical: 10 },
      }}
    >
      <Drawer.Screen name="MainTabs" component={MyTabs} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Create" component={CreateScreen} />
    </Drawer.Navigator>
  );
}

const AppStackNavigator = createStackNavigator();
const AppScreenOptions = {
  headerTitleStyle: {
    fontFamily: "DancingScriptRegular",
    color: "#000",
    fontSize: 35,
  },
  // headerTransparent: true,

  headerStyle: { backgroundColor: "transparent" },
};

function AppStackScreen() {
  return (
    <AppStackNavigator.Navigator screenOptions={{ ...AppScreenOptions }}>
      <AppStackNavigator.Screen name="My blog" component={MainSreen} />
      <AppStackNavigator.Screen name="Post" component={PostScreen} />
      <AppStackNavigator.Screen name="Booked" component={BookedScreen} />
    </AppStackNavigator.Navigator>
  );
}

const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(BottomsTabConfig, {})
    : createBottomTabNavigator(BottomsTabConfig, {
        tabBarOpions: {
          activeTintColor: THEME.MAIN_COLOR,
        },
      });

const BottomsTabConfig = {};

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Main"
        component={AppStackScreen}
        options={{
          tabBarLabel: "All",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-albums" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Booked"
        component={BookedScreen}
        options={{
          tabBarLabel: "Booked",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-star" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export function AppNavigation() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

export default AppNavigation;
