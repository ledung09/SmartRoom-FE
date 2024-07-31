import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLOR } from "@/constants/colors";
import { ChevronLeft, X } from "lucide-react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";

export default function CustomHeader({
  title = "",
  goBack = false,
  exit = false,
  exitRoute = "",
}: {
  title?: string;
  goBack?: boolean;
  exit?: boolean;
  exitRoute?: string;
}) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: Constants.statusBarHeight + 0.5,
        backgroundColor: COLOR.PRIMARY,
        position: "relative",
      }}
    >
      <View
        style={{
          position: "absolute",
          bottom: 12,
          width: "100%",
        }}
      >
        <Text
          style={{
            display: "none",
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
}
