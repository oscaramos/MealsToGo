import React from "react";
import styled from "styled-components/native";
import { useTheme } from "styled-components/native";

type sizeVariantTypes = "small" | "medium" | "large";
type positionVariantTypes = "top" | "left" | "bottom" | "right";

interface ISpacerProps {
  position: positionVariantTypes;
  size: sizeVariantTypes;
}

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

interface ISpacerVariantProps {
  variant: string;
}

const SpacerVariant = styled.View<ISpacerVariantProps>`
  ${(props) => props.variant}
`;

export function Spacer({ position, size }: ISpacerProps) {
  const theme = useTheme();
  const variant = `${marginVariant[position]}: ${
    theme.space[sizeVariant[size]]
  }`;

  return <SpacerVariant variant={variant} />;
}
