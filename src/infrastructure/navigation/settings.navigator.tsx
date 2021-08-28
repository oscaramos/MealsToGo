import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";

import { SettingsScreen } from "@features/settings/screens/settings.screen";

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
