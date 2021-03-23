import React, { useState } from "react";
import styled from "styled-components/native";
import { ThemeProvider } from "styled-components";
import { BottomNavigation as PaperBottomNavigation } from "react-native-paper";

import AppLoading from "expo-app-loading";
import { Ionicons } from "@expo/vector-icons";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";

import { theme } from "./src/infrastructure/theme";

import { MapScreen } from "./src/features/map/screens/map.screen";
import { SettingsScreen } from "./src/features/settings/screens/settings.screen";
import { RestaurantsScreen } from "./src/features/restaurant/screens/restaurants.screen";

import { LocationProvider } from "./src/services/location/location.context";
import { RestaurantsProvider } from "./src/services/restaurants/restaurants.context";

type BottomNavigationProps = React.ComponentProps<typeof PaperBottomNavigation>;
type Routes = BottomNavigationProps["navigationState"]["routes"];

const BottomNavigation = styled(PaperBottomNavigation).attrs({
  barStyle: { backgroundColor: "white" },
})``;

export default function App() {
  const [fontsLoaded] = useFonts({
    Oswald_400Regular,
    Lato_400Regular,
  });

  const [index, setIndex] = useState(0);
  const [routes] = useState<Routes>([
    {
      key: "restaurants",
      title: "Restaurants",
      icon: ({ color }) => (
        <Ionicons name="restaurant" size={24} color={color} />
      ),
    },
    {
      key: "map",
      title: "Map",
      icon: ({ color }) => <Ionicons name="map" size={24} color={color} />,
    },
    {
      key: "settings",
      title: "Settings",
      icon: ({ color }) => <Ionicons name="settings" size={24} color={color} />,
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    restaurants: RestaurantsScreen,
    map: MapScreen,
    settings: SettingsScreen,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <LocationProvider>
        <RestaurantsProvider>
          <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            activeColor="red"
            inactiveColor="gray"
          />
        </RestaurantsProvider>
      </LocationProvider>
    </ThemeProvider>
  );
}
