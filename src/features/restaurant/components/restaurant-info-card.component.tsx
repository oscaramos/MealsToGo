import React from "react";
import { range } from "lodash";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";
import { Card, Text } from "react-native-paper";

import star from "../../../../assets/star";

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

const Stars = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export function RestaurantInfoCard() {
  const title = "Some restaurant";
  const address = "Avenida Benito 102";
  const rating = 3.2;

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
        <Stars>
          {range(Math.floor(rating)).map(() => (
            <SvgXml xml={star} width={20} height={20} />
          ))}
        </Stars>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
}
