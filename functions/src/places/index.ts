import { Client } from "@googlemaps/google-maps-services-js";
import * as functions from "firebase-functions";
import * as url from "url";

import { BackendRestaurant } from "../../../types/restaurants";
import { mocks } from "./mock";

const addGoogleImage = (restaurant: BackendRestaurant) => {
  const ref = restaurant.photos[0].photo_reference;
  return {
    ...restaurant,
    photo: !ref
      ? "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"
      : `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=${
          functions.config().google.key
        }`,
  };
};

export async function placesRequest(
  request: functions.https.Request,
  response: functions.Response,
  client: Client
) {
  // @ts-ignore
  const { location, mock }: { location: string; mock: string } = url.parse(
    request.url,
    true
  ).query;
  if (mock === "true") {
    // @ts-ignore
    const data = mocks[location];
    if (data) {
      data.results = data.results.map(addGoogleImage);
    }
    return response.json(data);
  }

  try {
    const res = await client.placesNearby({
      params: {
        location,
        radius: 1500,
        type: "restaurant",
        key: functions.config().google.key,
      },
      timeout: 1000,
    });
    // @ts-ignore
    res.data.results = res.data.results.map(addGoogleImage);
    return response.json(res.data);
  } catch (e) {
    response.status(400);
    return response.send(e.response.data.error_message);
  }
}
