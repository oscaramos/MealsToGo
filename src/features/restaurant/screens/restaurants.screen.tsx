import React from "react";
import { FlatList } from "react-native";
import { useTheme } from "styled-components";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { useRestaurants } from "../../../services/restaurants/restaurants.context";
import { useLocation } from "../../../services/location/location.context";

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

const ActivityContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export function RestaurantsScreen() {
  const theme = useTheme();
  const { restaurants, loading: restaurantsLoading } = useRestaurants();
  const { search, searchTerm, loading: locationLoading } = useLocation();

  const loading = restaurantsLoading || locationLoading;

  return (
    <Container>
      <SearchContainer>
        <Searchbar
          placeholder="Location"
          onChangeText={(query: string) => search(query)}
          value={searchTerm}
        />
      </SearchContainer>
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
                <RestaurantInfoCard {...props} />
              </RestaurantInfoCardContainer>
            )}
            keyExtractor={(item) => item.vicinity}
          />
        </RestaurantListContainer>
      )}
    </Container>
  );
}
