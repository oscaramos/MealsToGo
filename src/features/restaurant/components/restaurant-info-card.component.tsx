import React from "react";
// @ts-ignore
import { range } from "lodash";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../../components/Spacer";
import { Text } from "../../../components/typography/text.component";

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
