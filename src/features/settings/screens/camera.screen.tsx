import { Camera } from "expo-camera";
import React, { useRef, useState, useEffect } from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import { Text } from "@components/typography/text.component";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

export function CameraScreen() {
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);
  const cameraRef = useRef<Camera | null>();

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
    <ProfileCamera
      ref={(camera) => (cameraRef.current = camera)}
      type={Camera.Constants.Type.front}
    />
  );
}
