import { View, Text, TouchableOpacity, Button, Pressable } from "react-native";
import React from "react";
import { COLOR } from "@/constants/colors";
import { CheckBox } from "@rneui/themed";

export default function AddCheckInRow() {
  const [checked, setChecked] = React.useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };
  return (
    <TouchableOpacity
      onPress={handleChecked}
      style={{
        paddingVertical: 16,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View
        style={{
          marginRight: 10,
        }}
      >
        <CheckBox checked={checked} onPress={handleChecked} />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          paddingHorizontal: 4,
        }}
      >
        <Text
          style={{
            fontWeight: 800,
            fontSize: 13,
            letterSpacing: 0.25,
          }}
        >
          Đinh Lê Dũng
        </Text>
        <Text
          style={{
            color: COLOR.SLATE,
            fontSize: 10.5,
          }}
        >
          Điểm danh lúc: 21:00
        </Text>
      </View>
      <View
        style={{
          marginLeft: "auto",
        }}
      >
        <Text
          style={{
            fontSize: 12,
            marginRight: 10,
          }}
        >
          Đóng tháng
        </Text>
      </View>
    </TouchableOpacity>
  );
}
