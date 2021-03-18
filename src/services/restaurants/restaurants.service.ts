import { mocks } from "./mock";
import { IRestaurantsResponse } from "./restaurants";

export const restaurantsRequest = async (
  location: string = "37.7749295,-122.4194155"
) => {
  // @ts-ignore
  const mock: IRestaurantsResponse | undefined = mocks[location];

  if (!mock) {
    throw "not found";
  }
  return mock;
};
