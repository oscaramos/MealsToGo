import React from "react";
import AppLoading from "expo-app-loading";

import { AppNavigator } from "./app.navigator";
import { AuthenticationNavigator } from "./authentication.navigator";
import { useAuthentication } from "@services/authentication/authentication.context";

export const AppNavigation = () => {
  const { user, loading } = useAuthentication();

  if (loading) {
    return <AppLoading />;
  }

  return !user ? <AuthenticationNavigator /> : <AppNavigator />;
};
