import React from "react";
// @ts-ignore
import { range } from "lodash";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../../components/Spacer";
import { Text } from "../../../components/typography/text.component";
import { IRestaurantTransformed } from "../../../services/restaurants/restaurants";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

import {
  Address,
  Icon,
  Info,
  RestaurantCard,
  RestaurantCardCover,
  Section,
  SectionEnd,
  Stars,
} from "./restaurant-info-card.styles";

interface IRestaurantInfoCardProps {
  item: IRestaurantTransformed;
}

export function RestaurantInfoCard({
  item: {
    name: title,
    vicinity: address,
    rating = 0,
    isClosedTemporarily,
    isOpenNow,
    icon,
    photo,
  },
}: IRestaurantInfoCardProps) {
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        source={{
          uri: photo,
        }}
      />
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
