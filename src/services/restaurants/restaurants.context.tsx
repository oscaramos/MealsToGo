import React from "react";
import useAsync from "react-use/lib/useAsync";
import { createContext, useContext } from "react";
import { IRestaurantTransformed } from "./restaurants";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

interface IRestaurantReturn {
  restaurants?: IRestaurantTransformed[];
  loading: boolean;
  error?: string;
}

const RestaurantsContext = createContext<IRestaurantReturn | undefined>(
  undefined
);

interface IRestaurantProviderProps {
  children: React.ReactNode;
}

export function RestaurantsProvider({ children }: IRestaurantProviderProps) {
  const state = useAsync(async () => {
    const response = await restaurantsRequest();
    return restaurantsTransform(response);
  });

  const restaurants = state.value;
  const loading = state.loading;
  const error = state.error?.message;

  return (
    <RestaurantsContext.Provider value={{ restaurants, loading, error }}>
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
