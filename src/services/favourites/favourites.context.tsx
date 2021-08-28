import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

import { useAuthentication } from "../authentication/authentication.context";
import { Restaurant } from "../restaurants/restaurants";

const FavouritesContext = createContext<
  | {
      favourites: Restaurant[];
      addToFavourites: (newRestaurant: Restaurant) => void;
      removeFromFavourites: (restaurantToRemove: Restaurant) => void;
      isFavourite: (restaurant: Restaurant) => boolean;
    }
  | undefined
>(undefined);

export function FavouritesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuthentication();
  const [favourites, setFavourites] = useState<Restaurant[]>([]);

  const add = (newRestaurant: Restaurant) => {
    setFavourites((prev) => [...prev, newRestaurant]);
  };

  const remove = (restaurantToRemove: Restaurant) => {
    setFavourites((prev) =>
      prev.filter(
        (restaurant) => restaurant.place_id !== restaurantToRemove.place_id
      )
    );
  };

  const isFavourite = (restaurant: Restaurant) => {
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
