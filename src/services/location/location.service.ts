// @ts-ignore
import camelize from "camelize";

import { LocationResponse } from "../../../types/location";

export const locationRequest = async (
  searchTerm: string
): Promise<LocationResponse> => {
  try {
    // using a temporally ngrok proxy
    const response = await fetch(
      `http://f119-2800-200-f408-b030-6eb5-5c20-7f30-26eb.ngrok.io/mealstogo-eeb03/us-central1/geocode?city=${searchTerm}`
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
