import React from "react";
import styled from "styled-components/native";

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountBackgroundImage = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
  resizeMode: "cover",
})`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
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
