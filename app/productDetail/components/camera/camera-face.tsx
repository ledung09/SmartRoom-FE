import { View, Text } from "react-native";
import React from "react";
import Button from "@/components/ui/button";
import { SwitchCamera } from "lucide-react-native";
import { CameraType } from "expo-camera";

interface CameraFaceProps {
  control: [CameraType, React.Dispatch<React.SetStateAction<CameraType>>];
}

export default function CameraFace({ control }: CameraFaceProps) {
  return (
    <Button
      onPress={() => {
        control[1]((current) => (current === "back" ? "front" : "back"));
      }}
      type="clear"
      titleStyle={{
        color: "black",
      }}
      containerStyle={{
        borderRadius: 9999,
        position: "absolute",
        left: "20%",
        marginLeft: -27,
        top: "50%",
        marginTop: -27,
      }}
      buttonStyle={{
        width: 54,
        height: 54,
      }}
    >
      <View
        style={{
          backgroundColor: "black",
          opacity: 0.5,
          borderRadius: 9999,
          position: "absolute",
          width: 54,
          height: 54,
        }}
      />
      <SwitchCamera color={"white"} size={27} strokeWidth={2} />
    </Button>
  );
}
