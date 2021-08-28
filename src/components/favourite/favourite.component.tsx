import { Ionicons } from "@expo/vector-icons";
import React from "react";

import { useFavourites } from "@services/favourites/favourites.context";
import { IRestaurantTransformed } from "@services/restaurants/restaurants";

import { FavouriteContainer } from "./favourite.styles";

type Props = {
  restaurant: IRestaurantTransformed;
};

export function Favourite({ restaurant }: Props) {
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
