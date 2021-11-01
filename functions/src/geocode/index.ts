import { Client } from "@googlemaps/google-maps-services-js";
import * as functions from "firebase-functions";
import * as url from "url";

import { locations as locationsMock } from "./geocode.mock";

export async function geocodeRequest(
  request: functions.https.Request,
  response: functions.Response,
  client: Client
) {
  // @ts-ignore
  const { city, mock }: { city: string; mock: string } = url.parse(
    request.url,
    true
  ).query;

  if (mock === "true") {
    const locationMock = locationsMock[city.toLowerCase()];

    return response.json(locationMock);
  }

  try {
    const res = await client.geocode({
      params: {
        address: city,
        key: functions.config().google.key,
      },
      timeout: 1000,
    });

    return response.json(res.data);
  } catch (e) {
    response.status(400);
    return response.send(e.response.data.error_message);
  }
}
