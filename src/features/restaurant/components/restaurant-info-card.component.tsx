import { range } from "lodash";
import React from "react";
import { SvgXml } from "react-native-svg";

import { Spacer } from "@components/Spacer";
import { Favourite } from "@components/favourite/favourite.component";
import { Text } from "@components/typography/text.component";

import { Restaurant } from "@globalTypes/restaurants";

import open from "../../../../assets/open";
import star from "../../../../assets/star";
import {
  Address,
  Icon,
  Info,
  RestaurantCard,
  RestaurantCardCover,
  RestaurantCardCoverContainer,
  Section,
  SectionEnd,
  Stars,
} from "./restaurant-info-card.styles";

export function RestaurantInfoCard({ item }: { item: Restaurant }) {
  const {
    name: title,
    vicinity: address,
    rating = 0,
    isClosedTemporarily,
    isOpenNow,
    icon,
    photo,
  } = item;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCoverContainer>
        <RestaurantCardCover
          source={{
            uri: photo,
          }}
        />
        <Favourite restaurant={item} />
      </RestaurantCardCoverContainer>
      <Info>
        <Text variant="label">{title}</Text>
        <Section>
          <Stars>
            {range(Math.floor(rating)).map((_: number, index: number) => (
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
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large" />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Spacer position="left" size="large" />
            <Icon source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
}
