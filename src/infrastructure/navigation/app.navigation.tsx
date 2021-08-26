import React, { useEffect } from "react";

import { AppNavigator } from "./app.navigator";
import { AuthenticationNavigator } from "./authentication.navigator";
import { useAuthentication } from "../../services/authentication/authentication.context";

export const AppNavigation = () => {
  const { user, login, logout } = useAuthentication();

  useEffect(() => {
    // login("test@test.com", "password123");
    logout();
  }, []);

  return !user ? <AuthenticationNavigator /> : <AppNavigator />;
};
