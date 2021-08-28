import React, { createContext, useContext } from "react";
import useAsync from "react-use/lib/useAsync";

import { useLocation } from "../location/location.context";
import { IRestaurantTransformed } from "./restaurants";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

const RestaurantsContext = createContext<
  | {
      restaurants?: IRestaurantTransformed[];
      loading: boolean;
      error?: string;
    }
  | undefined
>(undefined);

export function RestaurantsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { location } = useLocation();

  const { value: restaurants, loading, error } = useAsync(async () => {
    if (!location) {
      return [];
    }
    const response = await restaurantsRequest(
      `${location.lat},${location.lng}`
    );
    return restaurantsTransform(response);
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        loading,
        error: error?.message,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
}

export function useRestaurants() {
  const context = useContext(RestaurantsContext);
  if (context === undefined) {
    throw new Error("useRestaurants must be within a RestaurantsProvider");
  }
  return context;
}
