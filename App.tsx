import React from "react";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components";

import { Lato_400Regular } from "@expo-google-fonts/lato";
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";

import { RestaurantsScreen } from "./src/features/restaurant/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme";

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
      <RestaurantsScreen />
    </ThemeProvider>
  );
}
