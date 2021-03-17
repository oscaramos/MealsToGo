import React from "react";
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

const ListContainer = styled.View`
  flex-grow: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

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
      <ListContainer>
        <RestaurantInfoCard />
      </ListContainer>
    </Container>
  );
}
