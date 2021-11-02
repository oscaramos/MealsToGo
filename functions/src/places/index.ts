import { Client } from "@googlemaps/google-maps-services-js";
import * as functions from "firebase-functions";
import * as url from "url";

import { addMockImage, mocks } from "./mock";

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
      data.results = data.results.map(addMockImage);
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
    res.data.results = res.data.results.map(addMockImage);
    return response.json(res.data);
  } catch (e) {
    response.status(400);
    return response.send(e.response.data.error_message);
  }
}
