import React from "react";
import styled from "styled-components/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { AuthenticationStackParamList } from "../../../infrastructure/navigation/authentication.navigator";
import { AccountBackground, AccountCard } from "../components/account.styles";

const Container = styled(View)`
  height: 100%;
`;

type ScreenNavigationProp = StackNavigationProp<
  AuthenticationStackParamList,
  "account"
>;

type Props = {
  navigation: ScreenNavigationProp;
};

export function LoginScreen({ navigation }: Props) {
  return (
    <Container>
      <AccountBackground>
        <Card>
          <Text>Login</Text>
        </Card>
      </AccountBackground>
    </Container>
  );
}
