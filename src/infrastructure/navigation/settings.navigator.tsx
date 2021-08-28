import React from "react";
import { SettingsScreen } from "@features/settings/screens/settings.screen";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

export type SettingsStackParamList = {
  settings: undefined;
  favourites: undefined;
};

const SettingsStack = createStackNavigator<SettingsStackParamList>();

export const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="settings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="favourites" component={() => null} />
    </SettingsStack.Navigator>
  );
};
