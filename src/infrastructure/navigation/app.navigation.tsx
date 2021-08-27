import React from "react";

import { AppNavigator } from "./app.navigator";
import { AuthenticationNavigator } from "./authentication.navigator";
import { useAuthentication } from "../../services/authentication/authentication.context";

export const AppNavigation = () => {
  const { user } = useAuthentication();

  return !user ? <AuthenticationNavigator /> : <AppNavigator />;
};
