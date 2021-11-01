import { RestaurantsResponse, Restaurant } from "@globalTypes/restaurants";

export const restaurantsRequest = async (
  location: string
): Promise<RestaurantsResponse> => {
  try {
    // using a temporally ngrok proxy
    const response = await fetch(
      `http://f119-2800-200-f408-b030-6eb5-5c20-7f30-26eb.ngrok.io/mealstogo-eeb03/us-central1/placesNearby?location=${location}`
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
