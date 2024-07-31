import { View, Text } from "react-native";
import React from "react";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { X } from "lucide-react-native";

export default function CameraExit() {
  const navigation = useNavigation();
  return (
    <Button
      onPress={() => {
        navigation.goBack();
      }}
      type="clear"
      titleStyle={{
        color: "black",
      }}
      containerStyle={{
        borderRadius: 9999,
        position: "absolute",
        top: 20,
        left: 20,
      }}
      buttonStyle={{
        width: 42,
        height: 42,
      }}
    >
      <View
        style={{
          backgroundColor: "black",
          opacity: 0.5,
          borderRadius: 9999,
          position: "absolute",
          width: 42,
          height: 42,
        }}
      />
      <X color={"white"} size={28} strokeWidth={2.5} />
    </Button>
  );
}
