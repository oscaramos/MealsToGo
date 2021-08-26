import { View } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import { StackNavigationProp } from "@react-navigation/stack";

import {
  AccountBackground,
  AccountCard,
  AuthButton,
  AuthTextInput,
  ErrorContainer,
  Title,
} from "../components/account.styles";
import { Spacer } from "../../../components/Spacer";
import { useAuthentication } from "../../../services/authentication/authentication.context";
import { AuthenticationStackParamList } from "../../../infrastructure/navigation/authentication.navigator";

import { Text } from "../../../components/typography/text.component";

const Container = styled(View)`
  height: 100%;
`;

type ScreenNavigationProp = StackNavigationProp<
  AuthenticationStackParamList,
  "login"
>;

type Props = {
  navigation: ScreenNavigationProp;
};

export function LoginScreen({ navigation }: Props) {
  const { login, error } = useAuthentication();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // By now
    // email: "test@test.com"
    // password:"password123"
    login(email, password).then();
  };

  return (
    <Container>
      <AccountBackground>
        <Title>Meals To Go</Title>
        <AccountCard>
          <AuthTextInput
            label="Email"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
          />
          <Spacer position="bottom" size="large" />
          <AuthTextInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
          />
          <ErrorContainer>
            {error ? <Text variant="error">{error}</Text> : null}
          </ErrorContainer>
          <AuthButton
            mode="contained"
            icon="lock-open-outline"
            onPress={handleLogin}
          >
            Login
          </AuthButton>
        </AccountCard>
        <Spacer position="top" size="large">
          <AuthButton mode="contained" onPress={() => navigation.goBack()}>
            Back
          </AuthButton>
        </Spacer>
      </AccountBackground>
    </Container>
  );
}
