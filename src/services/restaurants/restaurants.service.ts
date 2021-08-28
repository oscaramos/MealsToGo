import { mockImages, mocks } from "./mock";
import { RestaurantsResponse, Restaurant } from "./restaurants";

export const restaurantsRequest = async (
  location: string = "37.7749295,-122.4194155"
) => {
  // @ts-ignore
  const mock: RestaurantsResponse | undefined = mocks[location];

  if (!mock) {
    throw "not found";
  }
  return mock;
};

export const restaurantsTransform = (
  response: RestaurantsResponse
): Restaurant[] => {
  return response.results.map((restaurant) => ({
    ...restaurant,
    isOpenNow: !!restaurant.opening_hours?.open_now,
    isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    photo: mockImages[Math.floor(Math.random() * mockImages.length)],
  }));
};
