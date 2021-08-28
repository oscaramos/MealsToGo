import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

import { Text } from "@components/typography/text.component";

import { RestaurantInfoCard } from "@features/restaurant/components/restaurant-info-card.component";
import {
  RestaurantInfoCardContainer,
  RestaurantListContainer,
} from "@features/restaurant/screens/restaurants.styles";

import { RestaurantsStackParamList } from "@infrastructure/navigation/restaurants.navigator";

import { useFavourites } from "@services/favourites/favourites.context";

export const FavouritesRestaurantListContainer = styled(
  RestaurantListContainer as any
)`
  margin-bottom: 0;
`;

const NoFavouritesArea = styled.View`
  align-items: center;
  justify-content: center;
`;

export function FavouritesScreen({
  navigation,
}: {
  navigation: StackNavigationProp<
    RestaurantsStackParamList,
    "restaurant-details"
  >;
}) {
  const { favourites } = useFavourites();

  return (
    <View>
      <FavouritesRestaurantListContainer>
        <FlatList
          data={favourites}
          renderItem={(props) => (
            <RestaurantInfoCardContainer>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("restaurant-details", {
                    item: props.item,
                  })
                }
              >
                <RestaurantInfoCard {...props} />
              </TouchableOpacity>
            </RestaurantInfoCardContainer>
          )}
          keyExtractor={(item) => item.vicinity}
        />
      </FavouritesRestaurantListContainer>
      <NoFavouritesArea>
        <Text>No favourites yet</Text>
      </NoFavouritesArea>
    </View>
  );
}
