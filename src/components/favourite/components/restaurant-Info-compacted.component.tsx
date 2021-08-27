import React from "react";
import styled from "styled-components/native";

import { Text } from "../../typography/text.component";

import { IRestaurantTransformed } from "@services/restaurants/restaurants";

const Container = styled.View`
  width: 120px;
`;

const Photo = styled.Image`
  width: 100%;
  height: 100px;

  border-radius: 20px;
`;

const Title = styled(Text)`
  text-align: center;
`;

type Props = {
  restaurant: IRestaurantTransformed;
};

export function RestaurantInfoCompacted({ restaurant }: Props) {
  return (
    <Container>
      <Photo source={{ uri: restaurant.photo }} />
      <Title variant="caption">{restaurant.name}</Title>
    </Container>
  );
}
