import React from "react";
import { View } from "react-native";
import { List } from "react-native-paper";
import styled from "styled-components/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { useAuthentication } from "@services/authentication/authentication.context";

import { SettingsStackParamList } from "@infrastructure/navigation/settings.navigator";

const SettingsListItem = styled(List.Item)`
  padding: 16px;
`;

type ScreenNavigationProp = StackNavigationProp<
  SettingsStackParamList,
  "settings"
>;

type Props = {
  navigation: ScreenNavigationProp;
};

export function SettingsScreen({ navigation }: Props) {
  const { logout } = useAuthentication();

  return (
    <View>
      <List.Section>
        <SettingsListItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("favourites")}
        />
        <SettingsListItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={() => logout()}
        />
      </List.Section>
    </View>
  );
}
