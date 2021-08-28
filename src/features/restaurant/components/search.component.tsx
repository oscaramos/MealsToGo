import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { useLocation } from "@services/location/location.context";

const SearchContainer = styled.View`
  flex-grow: 0;
  padding: ${(props) => props.theme.space[3]};
`;

export function Search({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (newOpen: boolean) => void;
}) {
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
        icon={open ? "heart" : "heart-outline"}
        onIconPress={() => setOpen(!open)}
      />
    </SearchContainer>
  );
}
