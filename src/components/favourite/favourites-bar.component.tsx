import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { useFavourites } from "@services/favourites/favourites.context";
import { Restaurant } from "@services/restaurants/restaurants";

import { Spacer } from "../Spacer";
import { Text } from "../typography/text.component";
import { RestaurantInfoCompacted } from "./components/restaurant-Info-compacted.component";

const Container = styled.View`
  padding: ${(props) => props.theme.sizes[1]};
`;

export function FavouritesBar({
  onDetail,
}: {
  onDetail: (restaurant: Restaurant) => void;
}) {
  const { favourites } = useFavourites();

  if (favourites.length === 0) {
    return null;
  }

  return (
    <Container>
      <Spacer position="left" size="small">
        <Text variant="body">Favourites</Text>
      </Spacer>
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
