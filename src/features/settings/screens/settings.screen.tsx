import React from "react";
import { Button } from "react-native";
import { View, Text } from "react-native";

import { useAuthentication } from "@services/authentication/authentication.context";

export function SettingsScreen() {
  const { logout } = useAuthentication();

  return (
    <View>
      <Text>SettingsScreen</Text>
      <Button title="logout" onPress={() => logout()} />
    </View>
  );
}
