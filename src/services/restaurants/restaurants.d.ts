export interface IRestaurantsResponse {
  html_attributions: any[];
  next_page_token: string;
  results: IRestaurant[];
  status: string;
}

export interface IRestaurantsTransformed extends IRestaurantsResponse {
  results: IRestaurantTransformed[];
}

export interface IRestaurant {
  ix?: string;
  icon: string;
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
  photos: Photo[];
  geometry: Geometry;
  plus_code: PlusCode;
  opening_hours?: OpeningHours;
  business_status?: "CLOSED_TEMPORARILY" | "OPERATIONAL";
}

export interface IRestaurantTransformed extends IRestaurant {
  isOpenNow: boolean;
  isClosedTemporarily: boolean;
}

export interface Geometry {
  location: Location;
  viewport: Viewport;
}

export interface Location {
  lat: number;
  lng: number;
}

export interface Viewport {
  northeast: Location;
  southwest: Location;
}

export interface OpeningHours {
  open_now: boolean;
}

export interface Photo {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
}

export interface PlusCode {
  compound_code: string;
  global_code: string;
}
