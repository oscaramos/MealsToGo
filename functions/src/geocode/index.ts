import * as functions from "firebase-functions";
import * as url from "url";

import { locations as locationsMock } from "./geocode.mock";

export function geocodeRequest(
  request: functions.https.Request,
  response: functions.Response
) {
  const { city } = url.parse(request.url, true).query;
  // @ts-ignore
  const locationMock = locationsMock[city.toLowerCase()];

  response.json(locationMock);
}
