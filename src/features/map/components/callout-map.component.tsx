import React from "react";
import { Image as RNImage, Platform } from "react-native";
import { WebView } from "react-native-webview";
import styled from "styled-components/native";

import { Text } from "@components/typography/text.component";

import { Restaurant } from "@services/restaurants/restaurants";

const Container = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const CompactImage = styled(RNImage)`
  width: 120px;
  height: 100px;
  border-radius: 10px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

function Image(props: React.ComponentProps<typeof RNImage>) {
  return Platform.OS === "android" ? (
    <CompactWebview
      {...(props as React.ComponentProps<typeof CompactWebview>)}
    />
  ) : (
    <CompactImage {...props} />
  );
}

export function CalloutMap({ restaurant }: { restaurant: Restaurant }) {
  return (
    <Container>
      <Image source={{ uri: restaurant.photo }} />
      <Text variant="caption">{restaurant.name}</Text>
    </Container>
  );
}
