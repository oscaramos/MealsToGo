import { Coords } from "./services";

export interface RestaurantsResponse {
  html_attributions: any[];
  next_page_token: string;
  results: BackendRestaurant[];
  status: string;
}

export interface BackendRestaurant {
  ix?: string;
  icon?: string;
  name: string;
  scope?: string;
  rating?: number;
  types?: string[];
  place_id: string;
  vicinity: string;
  reference: string;
  price_level?: number;
  user_ratings_total?: number;
  permanently_closed?: boolean;
  photos: {
    height: number;
    html_attributions: string[];
    photo_reference: string;
    width: number;
  }[];
  geometry: {
    location: Coords;
    viewport: {
      northeast: Coords;
      southwest: Coords;
    };
  };
  plus_code?: {
    compound_code: string;
    global_code: string;
  };
  opening_hours?: {
    open_now: boolean;
  };
  business_status?: "CLOSED_TEMPORARILY" | "OPERATIONAL" | string;
  photo: string;
}

export interface Restaurant extends BackendRestaurant {
  isOpenNow: boolean;
  isClosedTemporarily: boolean;
}
