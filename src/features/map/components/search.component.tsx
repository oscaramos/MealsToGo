import React, { useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { useLocation } from "../../../services/location/location.context";
import { SafeAreaView } from "react-native-safe-area-context";

const SearchContainer = styled(SafeAreaView)`
  position: absolute;
  z-index: 999;
  width: 100%;

  padding: ${(props) => props.theme.space[3]};
`;

export function Search() {
  const { search } = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = () => {
    if (searchTerm === "") {
      return;
    }

    search(searchTerm);
  };

  return (
    <SearchContainer>
      <Searchbar
        icon="map"
        placeholder="Location"
        onChangeText={(query: string) => setSearchTerm(query)}
        onSubmitEditing={handleSubmit}
        value={searchTerm}
      />
    </SearchContainer>
  );
}
