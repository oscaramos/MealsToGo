import AppLoading from "expo-app-loading";
import React from "react";

import { useAuthentication } from "@services/authentication/authentication.context";

import { AppNavigator } from "./app.navigator";
import { AuthenticationNavigator } from "./authentication.navigator";

export const AppNavigation = () => {
  const { user, loading } = useAuthentication();

  if (loading) {
    return <AppLoading />;
  }

  return !user ? <AuthenticationNavigator /> : <AppNavigator />;
};
