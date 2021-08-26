import React from "react";
import { Button, TextInput } from "react-native-paper";
import styled from "styled-components/native";

import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/text.component";

const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

const AccountBackgroundImage = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
  resizeMode: "cover",
})`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;

type AccountBackgroundProps = {
  children: React.ReactNode;
};

export function AccountBackground({ children }: AccountBackgroundProps) {
  return (
    <AccountBackgroundImage>
      <AccountCover />
      {children}
    </AccountBackgroundImage>
  );
}

export const AccountCard = styled.View`
  background-color: rgba(255, 255, 255, 0.3);
  padding: ${(props) => props.theme.sizes[2]};
`;

export const AuthTextInput = styled(TextInput)`
  width: 300px;
`;

export const Title = styled(Text as any)`
  font-size: 30px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;
