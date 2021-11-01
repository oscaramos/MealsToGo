// @ts-ignore
import camelize from "camelize";

import { LocationResponse } from "../../../types/location";

export const locationRequest = async (
  searchTerm: string
): Promise<LocationResponse> => {
  try {
    const response = await fetch(
      `https://us-central1-mealstogo-eeb03.cloudfunctions.net/geocode?city=${searchTerm}`
    );
    return await response.json();
  } catch (e) {
    console.error(e);
    return {
      results: [],
    };
  }
};

export const locationTransform = (response: LocationResponse) => {
  const formattedResponse = camelize(response);
  const geometry = formattedResponse.results[0].geometry ?? {};

  return { ...geometry.location, viewport: geometry.viewport };
};
