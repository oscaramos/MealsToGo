import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Avatar, List } from "react-native-paper";
import styled from "styled-components/native";

import { Spacer } from "@components/Spacer";
import { Text } from "@components/typography/text.component";

import { SettingsStackParamList } from "@infrastructure/navigation/settings.navigator";

import { useAuthentication } from "@services/authentication/authentication.context";

const Container = styled.View`
  padding: ${(props) => props.theme.space[4]};
`;

const SettingsListItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

const AvatarIcon = styled(Avatar.Icon)`
  background-color: #2182bd;
`;

export function SettingsScreen({
  navigation,
}: {
  navigation: StackNavigationProp<SettingsStackParamList, "settings">;
}) {
  const { logout, user } = useAuthentication();

  return (
    <Container>
      <AvatarContainer>
        <AvatarIcon size={180} icon="human" />
        <Spacer position="top" size="large">
          <Text variant="label">{user?.email}</Text>
        </Spacer>
      </AvatarContainer>

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
    </Container>
  );
}
