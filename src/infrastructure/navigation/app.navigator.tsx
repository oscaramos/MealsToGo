import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { MapScreen } from "@features/map/screens/map.screen";

import { SettingsNavigator } from "@infrastructure/navigation/settings.navigator";

import { RestaurantsNavigator } from "./restaurants.navigator";

const Tab = createBottomTabNavigator();

type CreateScreenOptionsFunction = React.ComponentProps<
  typeof Tab.Navigator
>["screenOptions"];

type IoniconsValues = React.ComponentProps<typeof Ionicons>["name"];

const TAB_ICON: Record<string, IoniconsValues> = {
  restaurants: "restaurant",
  map: "map",
  settings: "settings",
};

const createScreenOptions: CreateScreenOptionsFunction = ({ route }) => ({
  tabBarIcon: ({ color, size }) => (
    <Ionicons name={TAB_ICON[route.name]} size={size} color={color} />
  ),
});

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={createScreenOptions}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="map" component={MapScreen} />
        <Tab.Screen name="settings" component={SettingsNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
