import * as functions from "firebase-functions";
import * as url from "url";

import { addMockImage, mocks } from "./mock";

export function placesRequest(
  request: functions.https.Request,
  response: functions.Response
) {
  const { location } = url.parse(request.url, true).query;
  // @ts-ignore
  const data = mocks[location];
  if (data) {
    data.results = data.results.map(addMockImage);
  }

  response.json(data);
}
