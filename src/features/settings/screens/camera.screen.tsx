import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackNavigationProp } from "@react-navigation/stack";
import { Camera } from "expo-camera";
import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";

import { Text } from "@components/typography/text.component";

import { SettingsStackParamList } from "@infrastructure/navigation/settings.navigator";

import { useAuthentication } from "@services/authentication/authentication.context";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

export function CameraScreen({
  navigation,
}: {
  navigation: StackNavigationProp<SettingsStackParamList, "camera">;
}) {
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);
  const cameraRef = useRef<Camera | null>();
  const { user } = useAuthentication();

  const snap = async () => {
    if (cameraRef.current && user) {
      const photo = await cameraRef.current.takePictureAsync();
      await AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (!hasPermission) {
    return <Text>No access to camera</Text>;
  }
  return (
    <TouchableOpacity onPress={() => snap()}>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={Camera.Constants.Type.front}
      />
    </TouchableOpacity>
  );
}
