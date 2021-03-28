import { Coords, ViewPort } from "../services";

export interface LocationResponse {
  results: Location[];
  status?: string;
}

export interface Location {
  geometry: {
    location: Coords;
    viewport: ViewPort;
  };
}
