import React from "react";
import { Card, Text } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled(Text)`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export function RestaurantInfoCard() {
  const title = "Some restaurant";

  return (
    <Card elevation={5}>
      <Card.Cover
        source={{
          uri:
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        }}
      />
      <Card.Content>
        <Title>{title}</Title>
      </Card.Content>
    </Card>
  );
}
