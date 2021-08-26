import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";

const Stack = createStackNavigator();

export function AuthenticationNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="account"
          component={() => (
            <View>
              <Text>Account</Text>
            </View>
          )}
        />
        <Stack.Screen
          name="register"
          component={() => (
            <View>
              <Text>Register</Text>
            </View>
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
