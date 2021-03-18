import React, { useState } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { useRestaurants } from "../../../services/restaurants/restaurants.context";

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
  padding: ${(props) => props.theme.space[3]};
  margin-bottom: ${(props) => props.theme.space[5]};
`;

const RestaurantInfoCardContainer = styled.View`
  margin: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[1]};
`;

export function RestaurantsScreen() {
  const { restaurants } = useRestaurants();

  const [searchQuery, setSearchQuery] = useState("");

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
          data={restaurants}
          renderItem={(props) => (
            <RestaurantInfoCardContainer>
              <RestaurantInfoCard {...props} />
            </RestaurantInfoCardContainer>
          )}
          keyExtractor={(item) => item.vicinity}
        />
      </RestaurantListContainer>
    </Container>
  );
}
