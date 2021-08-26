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

import { AuthenticationStackParamList } from "../../../infrastructure/navigation/authentication.navigator";

import { useAuthentication } from "../../../services/authentication/authentication.context";

import { Text } from "../../../components/typography/text.component";

const Container = styled(View)`
  height: 100%;
`;

type ScreenNavigationProp = StackNavigationProp<
  AuthenticationStackParamList,
  "register"
>;

type Props = {
  navigation: ScreenNavigationProp;
};

export function RegisterScreen({ navigation }: Props) {
  const { register, error: authError } = useAuthentication();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [validationError, setValidationError] = useState("");

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setValidationError("Password should be equal to confirm password");
      return;
    }

    register(email, password).then();

    setValidationError("");
  };

  const error = validationError ? validationError : authError;

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
          <Spacer position="bottom" size="large" />
          <AuthTextInput
            label="Confirm Password"
            value={confirmPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(text) => setConfirmPassword(text)}
          />
          <ErrorContainer>
            {error ? <Text variant="error">{error}</Text> : null}
          </ErrorContainer>
          <AuthButton mode="contained" icon="email" onPress={handleRegister}>
            Register
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
