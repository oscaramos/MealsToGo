import styled from "styled-components/native";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
  resizeMode: "cover",
})`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
