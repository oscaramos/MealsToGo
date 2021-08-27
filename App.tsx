import React from "react";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components";

import { Lato_400Regular } from "@expo-google-fonts/lato";
import { Oswald_400Regular, useFonts } from "@expo-google-fonts/oswald";

import { theme } from "@infrastructure/theme";
import { AppNavigation } from "@infrastructure/navigation/app.navigation";

import { LocationProvider } from "@services/location/location.context";
import { FavouritesProvider } from "@services/favourites/favourites.context";
import { RestaurantsProvider } from "@services/restaurants/restaurants.context";
import { AuthenticationProvider } from "@services/authentication/authentication.context";

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
      <AuthenticationProvider>
        <LocationProvider>
          <RestaurantsProvider>
            <FavouritesProvider>
              <AppNavigation />
            </FavouritesProvider>
          </RestaurantsProvider>
        </LocationProvider>
      </AuthenticationProvider>
    </ThemeProvider>
  );
}
