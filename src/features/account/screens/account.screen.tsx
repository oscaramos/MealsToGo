import React from "react";
import styled from "styled-components/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View } from "react-native";
import { AuthenticationStackParamList } from "../../../infrastructure/navigation/authentication.navigator";
import { AccountBackground, AuthButton } from "../components/account.styles";
import { Spacer } from "../../../components/Spacer";

const Container = styled(View)`
  height: 100%;
`;

const Card = styled.View`
  background-color: rgba(255, 255, 255, 0.3);
  padding: ${(props) => props.theme.sizes[2]};
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
          <AuthButton
            mode="contained"
            icon="lock-open-outline"
            onPress={() => navigation.navigate("login")}
          >
            Login
          </AuthButton>
          <Spacer size="large" position="bottom" />
          <AuthButton
            icon="email"
            mode="contained"
            onPress={() => navigation.navigate("register")}
          >
            Register
          </AuthButton>
        </Card>
      </AccountBackground>
    </Container>
  );
}
