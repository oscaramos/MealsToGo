import React from "react";
import styled from "styled-components/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View } from "react-native";
import { AuthenticationStackParamList } from "../../../infrastructure/navigation/authentication.navigator";
import { Button as RNButton } from "react-native-paper";
import { AccountBackground } from "../components/account.styles";

const Container = styled(View)`
  height: 100%;
`;

const Button = styled(RNButton)``;

const Card = styled.View`
  background-color: rgba(255, 255, 255, 0.3);
  padding: ${(props) => props.theme.sizes[1]};
`;

type ScreenNavigationProp = StackNavigationProp<
  AuthenticationStackParamList,
  "account"
>;

type Props = {
  navigation: ScreenNavigationProp;
};

export function AccountScreen({ navigation }: Props) {
  return (
    <Container>
      <AccountBackground>
        <Card>
          <Button mode="contained" onPress={() => navigation.navigate("login")}>
            Login
          </Button>
          <Button
            mode="contained"
            onPress={() => navigation.navigate("register")}
          >
            Create an account
          </Button>
        </Card>
      </AccountBackground>
    </Container>
  );
}
