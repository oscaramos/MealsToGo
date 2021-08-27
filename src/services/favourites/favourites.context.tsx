import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, createContext, useContext, useEffect } from "react";

import { IRestaurantTransformed } from "../restaurants/restaurants";
import { useAuthentication } from "../authentication/authentication.context";

type Return = {
  favourites: IRestaurantTransformed[];
  addToFavourites: (newRestaurant: IRestaurantTransformed) => void;
  removeFromFavourites: (restaurantToRemove: IRestaurantTransformed) => void;
  isFavourite: (restaurant: IRestaurantTransformed) => boolean;
};

const FavouritesContext = createContext<Return | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export function FavouritesProvider({ children }: Props) {
  const { user } = useAuthentication();
  const [favourites, setFavourites] = useState<IRestaurantTransformed[]>([]);

  const add = (newRestaurant: IRestaurantTransformed) => {
    setFavourites((prev) => [...prev, newRestaurant]);
  };

  const remove = (restaurantToRemove: IRestaurantTransformed) => {
    setFavourites((prev) =>
      prev.filter(
        (restaurant) => restaurant.place_id !== restaurantToRemove.place_id
      )
    );
  };

  const isFavourite = (restaurant: IRestaurantTransformed) => {
    return favourites.some(
      (favourite) => restaurant.place_id === favourite.place_id
    );
  };

  // load favourites
  useEffect(() => {
    (async () => {
      if (!user?.uid) return;

      const storedFavourites = await AsyncStorage.getItem(
        `@favourites-${user.uid}`
      );

      if (storedFavourites) {
        setFavourites(JSON.parse(storedFavourites));
      }
    })();
  }, [user?.uid]);

  // save favourites
  useEffect(() => {
    if (!user?.uid) return;

    AsyncStorage.setItem(
      `@favourites-${user.uid}`,
      JSON.stringify(favourites)
    ).then();
  }, [favourites, user?.uid]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
        isFavourite,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}

export function useFavourites() {
  const context = useContext(FavouritesContext);
  if (context === undefined) {
    throw new Error("useFavourites must be within a FavouritesProvider");
  }
  return context;
}
