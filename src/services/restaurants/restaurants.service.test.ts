import { IRestaurantsResponse, IRestaurantsTransformed } from "./restaurants";
import { restaurantsRequest } from "./restaurants.service";

const restaurantsTransform = (
  response: IRestaurantsResponse
): IRestaurantsTransformed => {
  return {
    ...response,
    results: response.results.map((restaurant) => ({
      ...restaurant,
      isOpenNow: !!restaurant.opening_hours?.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    })),
  };
};

test("mockup and transform is working", async () => {
  const response = await restaurantsRequest();
  const transformed = restaurantsTransform(response);
  console.log(transformed);
});
