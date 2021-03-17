import React from "react";
import { ThemeProvider } from "styled-components";

import { RestaurantsScreen } from "./src/features/restaurant/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RestaurantsScreen />
    </ThemeProvider>
  );
}
