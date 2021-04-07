import React from "react";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from "react-native";

import { Spacer } from "../Spacer";

import { Text } from "../typography/text.component";

import { useFavourites } from "../../services/favourites/favourites.context";
import { IRestaurantTransformed } from "../../services/restaurants/restaurants";

import { RestaurantInfoCompacted } from "./components/restaurant-Info-compacted.component";

const Container = styled.View`
  padding: ${(props) => props.theme.sizes[1]};
`;

type Props = {
  onDetail: (restaurant: IRestaurantTransformed) => void;
};

export function FavouritesBar({ onDetail }: Props) {
  const { favourites } = useFavourites();

  return (
    <Container>
      <Text variant="body">Favourites</Text>
      <FlatList
        data={favourites}
        renderItem={({ item }) => (
          <Spacer position="right" size="medium">
            <TouchableOpacity onPress={() => onDetail(item)}>
              <RestaurantInfoCompacted restaurant={item} />
            </TouchableOpacity>
          </Spacer>
        )}
        keyExtractor={(item) => `favourite-bar-${item.name}`}
        horizontal
      />
    </Container>
  );
}
