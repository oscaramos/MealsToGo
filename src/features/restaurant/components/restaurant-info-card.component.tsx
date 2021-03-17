import React from "react";
import { Card, Text } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled(Card.Content)`
  padding: ${(props) => props.theme.space[3]};
`;

const Title = styled(Text)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
`;

const Address = styled(Text)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export function RestaurantInfoCard() {
  const title = "Some restaurant";
  const address = "Avenida Benito 102";

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        source={{
          uri:
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        }}
      />
      <Info>
        <Title>{title}</Title>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
}
