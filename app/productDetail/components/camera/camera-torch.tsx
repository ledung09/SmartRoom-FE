import { View, Text } from "react-native";
import React from "react";
import { Button } from "@rneui/themed";
import { Flashlight } from "lucide-react-native";

interface CameraTorchProps {
  control: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

export default function CameraTorch({ control }: CameraTorchProps) {
  return (
    <Button
      onPress={() => {
        control[1](!control[0]);
      }}
      type="clear"
      titleStyle={{
        color: "black",
      }}
      containerStyle={{
        borderRadius: 9999,
        position: "absolute",
        top: 20,
        right: 20,
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
      <Flashlight color={"white"} size={28} strokeWidth={2.5} />
    </Button>
  );
}
