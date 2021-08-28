import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  flex-direction: column;
`;

export const RestaurantListContainer = styled.View`
  flex-grow: 1;
  padding: ${(props) => props.theme.space[3]};
  margin-bottom: ${(props) => props.theme.space[5]};
`;

export const RestaurantInfoCardContainer = styled.View`
  margin: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[1]};
`;

export const ActivityContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
