import React from "react";
import { ThemeProvider } from "styled-components";

import AppLoading from "expo-app-loading";
import { Ionicons } from "@expo/vector-icons";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import { Oswald_400Regular, useFonts } from "@expo-google-fonts/oswald";

import { theme } from "./src/infrastructure/theme";

import { MapScreen } from "./src/features/map/screens/map.screen";
import { SettingsScreen } from "./src/features/settings/screens/settings.screen";
import { RestaurantsScreen } from "./src/features/restaurant/screens/restaurants.screen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { LocationProvider } from "./src/services/location/location.context";
import { RestaurantsProvider } from "./src/services/restaurants/restaurants.context";
import { NavigationContainer } from "@react-navigation/native";

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
  tabBarIcon: ({ color, size }) => {
    return <Ionicons name={TAB_ICON[route.name]} size={size} color={color} />;
  },
});

export default function App() {
  const [fontsLoaded] = useFonts({
    Oswald_400Regular,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <LocationProvider>
        <RestaurantsProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={createScreenOptions}
              tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "gray",
              }}
            >
              <Tab.Screen name="restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="map" component={MapScreen} />
              <Tab.Screen name="settings" component={SettingsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsProvider>
      </LocationProvider>
    </ThemeProvider>
  );
}
