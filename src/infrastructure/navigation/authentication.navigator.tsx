import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { AccountScreen } from "@features/account/screens/account.screen";
import { LoginScreen } from "@features/account/screens/login.screen";
import { RegisterScreen } from "@features/account/screens/register.screen";

export type AuthenticationStackParamList = {
  account: undefined;
  login: undefined;
  register: undefined;
};

const Stack = createStackNavigator<AuthenticationStackParamList>();

export function AuthenticationNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="account" component={AccountScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
