import { Ionicons } from "@expo/vector-icons";
import React from "react";

import { useFavourites } from "@services/favourites/favourites.context";

import { Restaurant } from "@globalTypes/restaurants";

import { FavouriteContainer } from "./favourite.styles";

export function Favourite({ restaurant }: { restaurant: Restaurant }) {
  const {
    isFavourite,
    addToFavourites,
    removeFromFavourites,
  } = useFavourites();

  return (
    <FavouriteContainer>
      {isFavourite(restaurant) ? (
        <Ionicons
          name="heart"
          size={32}
          color="tomato"
          onPress={() => removeFromFavourites(restaurant)}
        />
      ) : (
        <Ionicons
          name="heart-outline"
          size={32}
          color="white"
          onPress={() => addToFavourites(restaurant)}
        />
      )}
    </FavouriteContainer>
  );
}
