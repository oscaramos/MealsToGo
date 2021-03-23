import React, { useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { useLocation } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  flex-grow: 0;
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
        placeholder="Location"
        onChangeText={(query: string) => setSearchTerm(query)}
        onSubmitEditing={handleSubmit}
        value={searchTerm}
      />
    </SearchContainer>
  );
}
