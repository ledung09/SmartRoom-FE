import { View, Text } from "react-native";
import React from "react";
import { COLOR } from "@/constants/colors";

export default function Separator({
  width = 0.5,
  color = COLOR.IN_ACTIVE,
  opacity = 1,
}: {
  width?: number;
  color?: string;
  opacity?: number;
}) {
  return (
    <View
      style={{
        width: "100%",
        borderTopColor: color,
        borderTopWidth: width,
        opacity: opacity,
      }}
    ></View>
  );
}
