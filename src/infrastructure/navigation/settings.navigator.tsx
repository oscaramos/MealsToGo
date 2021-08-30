import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";

import { CameraScreen } from "@features/settings/screens/camera.screen";
import { FavouritesScreen } from "@features/settings/screens/favourites.screen";
import { SettingsScreen } from "@features/settings/screens/settings.screen";

export type SettingsStackParamList = {
  settings: undefined;
  favourites: undefined;
  camera: undefined;
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
      <SettingsStack.Screen
        options={{
          title: "Favourites",
        }}
        name="favourites"
        component={FavouritesScreen}
      />
      <SettingsStack.Screen
        options={{
          title: "Camera",
        }}
        name="camera"
        component={CameraScreen}
      />
    </SettingsStack.Navigator>
  );
};
