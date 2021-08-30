import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useCallback, useState } from "react";
import { TouchableOpacity } from "react-native";
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

const AvatarImage = styled(Avatar.Image)`
  background-color: #2182bd;
`;

export function SettingsScreen({
  navigation,
}: {
  navigation: StackNavigationProp<SettingsStackParamList, "settings">;
}) {
  const { logout, user } = useAuthentication();

  const [photo, setPhoto] = useState<string | null>(null);

  const getProfilePicture = useCallback(async (currentUser: typeof user) => {
    if (!currentUser) return;

    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  }, []);

  useFocusEffect(
    useCallback(() => {
      getProfilePicture(user).then();
    }, [user, getProfilePicture])
  );

  return (
    <Container>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("camera")}>
          {photo ? (
            <AvatarImage size={180} source={{ uri: photo }} />
          ) : (
            <AvatarIcon size={180} icon="human" />
          )}
        </TouchableOpacity>
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
