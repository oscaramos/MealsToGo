import React from "react";
import { range } from "lodash";
import { SvgXml } from "react-native-svg";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

import { Spacer } from "../../../components/Spacer";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

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

const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
`;

const Address = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Stars = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const SectionEnd = styled.View``;

const Image = styled.Image`
  width: 15px;
  height: 15px;
`;

const ClosedTemporallyText = styled.Text`
  color: red;
`;

export function RestaurantInfoCard() {
  const title = "Some restaurant";
  const address = "Avenida Benito 102";
  const rating = 3.2;
  const isClosedTemporarily = false;
  const isOpenNow = true;
  const icon =
    "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png";

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
        <Section>
          <Stars>
            {range(Math.floor(rating)).map((_, index) => (
              <SvgXml
                key={`${title}-${index}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Stars>
          <SectionEnd>
            {isClosedTemporarily && (
              <ClosedTemporallyText variant="label">
                CLOSED TEMPORARILY
              </ClosedTemporallyText>
            )}
            <Spacer position="left" size="large" />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Spacer position="left" size="large" />
            <Image source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
}
