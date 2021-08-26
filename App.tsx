import React from "react";
import * as firebase from "firebase";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components";

import { Lato_400Regular } from "@expo-google-fonts/lato";
import { Oswald_400Regular, useFonts } from "@expo-google-fonts/oswald";

import { theme } from "./src/infrastructure/theme";
import { AppNavigation } from "./src/infrastructure/navigation/app.navigation";

import { LocationProvider } from "./src/services/location/location.context";
import { FavouritesProvider } from "./src/services/favourites/favourites.context";
import { RestaurantsProvider } from "./src/services/restaurants/restaurants.context";
import { AuthenticationProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyDxzLd_YaINJT_dx5T4QUpedHyEL0uoOw4",
  authDomain: "mealstogo-eeb03.firebaseapp.com",
  projectId: "mealstogo-eeb03",
  storageBucket: "mealstogo-eeb03.appspot.com",
  messagingSenderId: "277824969573",
  appId: "1:277824969573:web:3405cadd13c603ad969f8c",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

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
