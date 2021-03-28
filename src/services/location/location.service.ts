import { LocationResponse } from "./location";
import { locations } from "./mocks/location.mock";

export const locationRequest = async (searchTerm: string) => {
  // @ts-ignore
  const response: LocationResponse | undefined = locations[searchTerm];
  if (!response) {
    throw "Location not found";
  }
  return response;
};

export const locationTransform = (response: LocationResponse) => {
  const geometry = response.results[0].geometry;
  return { ...geometry.location, viewport: geometry.viewport };
};
