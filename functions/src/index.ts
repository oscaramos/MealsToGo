// noinspection JSUnusedGlobalSymbols
import * as functions from "firebase-functions";

import { geocodeRequest } from "./geocode";

export const geocode = functions.https.onRequest((request, response) => {
  geocodeRequest(request, response);
});
