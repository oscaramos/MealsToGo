import React, { useState } from "react";
import { useTheme } from "styled-components";
import { ActivityIndicator } from "react-native-paper";
import { FlatList, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { Search } from "../components/search.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { FavouritesBar } from "../../../components/favourite/favourites-bar.component";

import { RestaurantsStackParamList } from "../../../infrastructure/navigation/restaurants.navigator";

import { useRestaurants } from "../../../services/restaurants/restaurants.context";
import {
  ActivityContainer,
  Container,
  RestaurantInfoCardContainer,
  RestaurantListContainer,
} from "./restaurants.styles";

type ScreenNavigationProp = StackNavigationProp<
  RestaurantsStackParamList,
  "restaurants"
>;

type Props = {
  navigation: ScreenNavigationProp;
};

export function RestaurantsScreen({ navigation }: Props) {
  const theme = useTheme();

  const { restaurants, loading } = useRestaurants();

  const [openFavouritesBar, setOpenFavouritesBar] = useState(true);

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
