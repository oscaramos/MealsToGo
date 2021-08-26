import React from "react";
import { Button } from "react-native-paper";
import styled from "styled-components/native";

import { colors } from "../../../infrastructure/theme/colors";

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
  padding: ${(props) => props.theme.sizes[1]};
`;
