// noinspection JSUnusedGlobalSymbols
// eslint-disable-next-line
import { Client } from "@googlemaps/google-maps-services-js";
import * as functions from "firebase-functions";

import { geocodeRequest } from "./geocode";
import { placesRequest } from "./places";

const client = new Client({});

export const geocode = functions.https.onRequest((request, response) => {
  geocodeRequest(request, response, client).then();
});

export const placesNearby = functions.https.onRequest((request, response) => {
  placesRequest(request, response);
});
