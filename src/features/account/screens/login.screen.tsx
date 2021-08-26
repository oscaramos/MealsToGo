import { View } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button as RNButton, TextInput } from "react-native-paper";

import {
  AccountBackground,
  AccountCard,
  AuthButton,
  AuthTextInput,
} from "../components/account.styles";
import { Spacer } from "../../../components/Spacer";
import { useAuthentication } from "../../../services/authentication/authentication.context";
import { AuthenticationStackParamList } from "../../../infrastructure/navigation/authentication.navigator";

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
  const { login } = useAuthentication();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // By now
    // email: "test@test.com"
    // password:"password123"
    login(email, password).then(); // todo: catch when error and show its message
  };

  return (
    <Container>
      <AccountBackground>
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
          <AuthButton mode="contained" onPress={handleLogin}>
            Login
          </AuthButton>
        </AccountCard>
      </AccountBackground>
    </Container>
  );
}
