import React from "react";
import styled from "styled-components/native";

import { Restaurant } from "@services/restaurants/restaurants";

import { Text } from "../../typography/text.component";

const Container = styled.View`
  width: 120px;
`;

const Photo = styled.Image`
  width: 100%;
  height: 100px;

  border-radius: 20px;
`;

const Title = styled(Text as any)`
  text-align: center;
`;

export function RestaurantInfoCompacted({
  restaurant,
}: {
  restaurant: Restaurant;
}) {
  return (
    <Container>
      <Photo source={{ uri: restaurant.photo }} />
      <Title variant="caption">{restaurant.name}</Title>
    </Container>
  );
}
