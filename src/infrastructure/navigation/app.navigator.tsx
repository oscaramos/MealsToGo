import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RestaurantsNavigator } from "./restaurants.navigator";

import { MapScreen } from "../../features/map/screens/map.screen";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";

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
        <Tab.Screen name="settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
