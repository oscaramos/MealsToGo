import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import styled from "styled-components/native";

import { RestaurantsStackParamList } from "@infrastructure/navigation/restaurants.navigator";

import { useLocation } from "@services/location/location.context";
import { useRestaurants } from "@services/restaurants/restaurants.context";

import { CalloutMap } from "../components/callout-map.component";
import { Search } from "../components/search.component";

const Map = styled(MapView)`
  height: 100%;
`;

export function MapScreen({
  navigation,
}: {
  navigation: StackNavigationProp<
    RestaurantsStackParamList,
    "restaurant-details"
  >;
}) {
  const [latDelta, setLatDelta] = useState(0);

  const { location } = useLocation();

  const {
    lat = 0,
    lng = 0,
    viewport = { northeast: { lat: 0 }, southwest: { lat: 0 } },
  } = location || {};

  const { restaurants = [] } = useRestaurants();

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant, index) => (
          <Marker
            key={`${restaurant.name}-${index}`}
            coordinate={{
              latitude: restaurant.geometry.location.lat,
              longitude: restaurant.geometry.location.lng,
            }}
          >
            <Callout
              onPress={() =>
                navigation.navigate("restaurant-details", { item: restaurant })
              }
            >
              <CalloutMap restaurant={restaurant} />
            </Callout>
          </Marker>
        ))}
      </Map>
    </>
  );
}
