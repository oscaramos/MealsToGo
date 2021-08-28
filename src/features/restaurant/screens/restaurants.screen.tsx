import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useTheme } from "styled-components";

import { FavouritesBar } from "@components/favourite/favourites-bar.component";

import { RestaurantsStackParamList } from "@infrastructure/navigation/restaurants.navigator";

import { useRestaurants } from "@services/restaurants/restaurants.context";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Search } from "../components/search.component";
import {
  ActivityContainer,
  Container,
  RestaurantInfoCardContainer,
  RestaurantListContainer,
} from "./restaurants.styles";

export function RestaurantsScreen({
  navigation,
}: {
  navigation: StackNavigationProp<RestaurantsStackParamList, "restaurants">;
}) {
  const theme = useTheme();

  const { restaurants, loading } = useRestaurants();

  const [openFavouritesBar, setOpenFavouritesBar] = useState(false);

  return (
    <Container>
      <Search
        open={openFavouritesBar}
        setOpen={(newOpen: boolean) => {
          setOpenFavouritesBar(newOpen);
        }}
      />
      {openFavouritesBar && (
        <FavouritesBar
          onDetail={(restaurant) =>
            navigation.navigate("restaurant-details", {
              item: restaurant,
            })
          }
        />
      )}
      {loading ? (
        <ActivityContainer>
          <ActivityIndicator
            size={50}
            animating
            color={theme.colors.brand.primary}
          />
        </ActivityContainer>
      ) : (
        <RestaurantListContainer>
          <FlatList
            data={restaurants}
            renderItem={(props) => (
              <RestaurantInfoCardContainer>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("restaurant-details", {
                      item: props.item,
                    })
                  }
                >
                  <RestaurantInfoCard {...props} />
                </TouchableOpacity>
              </RestaurantInfoCardContainer>
            )}
            keyExtractor={(item) => item.vicinity}
          />
        </RestaurantListContainer>
      )}
    </Container>
  );
}
