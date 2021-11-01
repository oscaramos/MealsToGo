import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import React from "react";

import { RestaurantDetailsScreen } from "@features/restaurant/screens/restaurant-details.screen";
import { RestaurantsScreen } from "@features/restaurant/screens/restaurants.screen";

import { Restaurant } from "@globalTypes/restaurants";

export type RestaurantsStackParamList = {
  restaurants: undefined;
  "restaurant-details": {
    item: Restaurant;
  };
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
