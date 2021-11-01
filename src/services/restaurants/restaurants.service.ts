import { RestaurantsResponse, Restaurant } from "@globalTypes/restaurants";

export const restaurantsRequest = async (
  location: string
): Promise<RestaurantsResponse> => {
  try {
    const response = await fetch(
      `https://us-central1-mealstogo-eeb03.cloudfunctions.net/placesNearby?location=${location}`
    );
    return await response.json();
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

export const restaurantsTransform = (
  response: RestaurantsResponse
): Restaurant[] => {
  return response.results.map((restaurant) => ({
    ...restaurant,
    isOpenNow: !!restaurant.opening_hours?.open_now,
    isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
  }));
};
