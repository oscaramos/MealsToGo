import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import React from "react";

import {
  IRestaurantDetailsScreenProps,
  RestaurantDetailsScreen,
} from "@features/restaurant/screens/restaurant-details.screen";
import { RestaurantsScreen } from "@features/restaurant/screens/restaurants.screen";

export type RestaurantsStackParamList = {
  restaurants: undefined;
  "restaurant-details": IRestaurantDetailsScreenProps;
};

const Tab = createStackNavigator<RestaurantsStackParamList>();

export function RestaurantsNavigator() {
  return (
    <Tab.Navigator
      headerMode="none"
      screenOptions={() => ({
        ...TransitionPresets.RevealFromBottomAndroid,
      })}
    >
      <Tab.Screen name="restaurants" component={RestaurantsScreen} />
      <Tab.Screen
        name="restaurant-details"
        component={RestaurantDetailsScreen}
      />
    </Tab.Navigator>
  );
}
