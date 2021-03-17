import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const Container = styled(SafeAreaView)`
  flex: 1;
  flex-direction: column;
`;

const SearchContainer = styled.View`
  flex-grow: 0;
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex-grow: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
  margin-bottom: ${(props) => props.theme.space[5]};
`;

const RestaurantInfoCardContainer = styled.View`
  margin: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[1]};
`;

const Restaurants = [
  {
    title: "Some restaurant",
    address: "Avenida Benito 102",
    rating: 3.2,
    isClosedTemporarily: false,
    isOpenNow: true,
    icon:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
  },
  {
    title: "Some restaurant 2",
    address: "Avenida Benito 102",
    rating: 3.2,
    isClosedTemporarily: false,
    isOpenNow: true,
    icon:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
  },
  {
    title: "Some restaurant 3",
    address: "Avenida Benito 102",
    rating: 3.2,
    isClosedTemporarily: false,
    isOpenNow: true,
    icon:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
  },
  {
    title: "Some restaurant 4",
    address: "Avenida Benito 102",
    rating: 3.2,
    isClosedTemporarily: false,
    isOpenNow: true,
    icon:
      "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
  },
];

export function RestaurantsScreen() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <Container>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantListContainer>
        <FlatList
          data={Restaurants}
          renderItem={(props) => (
            <RestaurantInfoCardContainer>
              <RestaurantInfoCard {...props} />
            </RestaurantInfoCardContainer>
          )}
          keyExtractor={(item) => item.title}
        />
      </RestaurantListContainer>
    </Container>
  );
}
