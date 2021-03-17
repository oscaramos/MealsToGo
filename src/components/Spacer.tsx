import React from "react";
import styled from "styled-components/native";
import { useTheme } from "styled-components/native";

type sizeVariant = "small" | "medium" | "large";
type positionVariant = "top" | "left" | "bottom" | "right";

interface ISpacerProps {
  position: positionVariant;
  size: sizeVariant;
}

const space: Record<sizeVariant, number> = {
  small: 1,
  medium: 2,
  large: 3,
};

const margin: Record<positionVariant, string> = {
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
  const variant = `${margin[position]}: ${theme.space[space[size]]}`;

  return <SpacerVariant variant={variant} />;
}
