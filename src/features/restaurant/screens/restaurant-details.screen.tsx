import React, { useState } from "react";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { IRestaurantTransformed } from "../../../services/restaurants/restaurants";

import { RestaurantsStackParamList } from "../../../infrastructure/navigation/restaurants.navigator";

const Container = styled(SafeAreaView)`
  flex: 1;
  flex-direction: column;
`;

export interface IRestaurantDetailsScreenProps {
  item: IRestaurantTransformed;
}

type ScreenNavigationProp = StackNavigationProp<
  RestaurantsStackParamList,
  "restaurant-details"
>;

type ScreenRouteProp = RouteProp<
  RestaurantsStackParamList,
  "restaurant-details"
>;

type Props = {
  navigation: ScreenNavigationProp;
  route: ScreenRouteProp;
};

export function RestaurantDetailsScreen({ route }: Props) {
  const { item } = route.params;

  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  return (
    <Container>
      <RestaurantInfoCard item={item} />
      <ScrollView>
        <List.Section title="Accordions">
          <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            expanded={breakfastExpanded}
            onPress={() => setBreakfastExpanded(!breakfastExpanded)}
          >
            <List.Item title="Eggs Benedict" />
            <List.Item title="Classic Breakfast" />
          </List.Accordion>

          <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="hamburger" />}
            expanded={lunchExpanded}
            onPress={() => setLunchExpanded(!lunchExpanded)}
          >
            <List.Item title="Mushroom Soup" />
            <List.Item title="Steak Sandwich" />
            <List.Item title="Burger w/ Fries" />
          </List.Accordion>

          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food-variant" />}
            expanded={dinnerExpanded}
            onPress={() => setDinnerExpanded(!dinnerExpanded)}
          >
            <List.Item title="Steak Fries" />
            <List.Item title="Spaghetti Bologna's" />
            <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          </List.Accordion>

          <List.Accordion
            title="Drinks"
            left={(props) => <List.Icon {...props} icon="cup" />}
            expanded={drinksExpanded}
            onPress={() => setDrinksExpanded(!drinksExpanded)}
          >
            <List.Item title="Coffee" />
            <List.Item title="Tea" />
            <List.Item title="Modelo" />
            <List.Item title="Coke" />
            <List.Item title="Fanta" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </Container>
  );
}
