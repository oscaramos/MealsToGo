import React from "react";
import styled, { useTheme } from "styled-components/native";

type sizeVariantTypes = "small" | "medium" | "large";
type positionVariantTypes = "top" | "left" | "bottom" | "right";

const sizeVariant: Record<sizeVariantTypes, number> = {
  small: 1,
  medium: 2,
  large: 3,
};

const marginVariant: Record<positionVariantTypes, string> = {
  top: "margin-top",
  left: "margin-left",
  bottom: "margin-bottom",
  right: "margin-right",
};

const SpacerVariant = styled.View<{
  variant: string;
}>`
  ${(props) => props.variant}
`;

export function Spacer({
  position,
  size,
  children,
}: {
  position: positionVariantTypes;
  size: sizeVariantTypes;
  children?: React.ReactNode;
}) {
  const theme = useTheme();
  const variant = `${marginVariant[position]}: ${
    theme.space[sizeVariant[size]]
  }`;

  return <SpacerVariant variant={variant}>{children}</SpacerVariant>;
}
