import React from "react";

import { useAuthentication } from "@services/authentication/authentication.context";

import { AppNavigator } from "./app.navigator";
import { AuthenticationNavigator } from "./authentication.navigator";

export const AppNavigation = () => {
  const { user } = useAuthentication();

  return !user ? <AuthenticationNavigator /> : <AppNavigator />;
};
