import { StackNavigationProp } from "@react-navigation/stack";
import LottieView from "lottie-react-native";
import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import { Spacer } from "@components/Spacer";

import { AuthenticationStackParamList } from "@infrastructure/navigation/authentication.navigator";

import {
  AccountBackground,
  AccountCard,
  AnimationWrapper,
  AuthButton,
  Title,
} from "../components/account.styles";

const Container = styled(View)`
  height: 100%;
`;

export function AccountScreen({
  navigation,
}: {
  navigation: StackNavigationProp<AuthenticationStackParamList, "account">;
}) {
  return (
    <Container>
      <AccountBackground>
        <AnimationWrapper>
          <LottieView
            key="animation"
            autoPlay
            loop
            resizeMode="cover"
            source={require("@assets/watermelon.json")}
          />
        </AnimationWrapper>
        <Title>Meals To Go</Title>
        <AccountCard>
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
        </AccountCard>
      </AccountBackground>
    </Container>
  );
}
