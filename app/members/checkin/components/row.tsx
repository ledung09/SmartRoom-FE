import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLOR } from "@/constants/colors";
import { Button } from "@rneui/themed";
import { Trash } from "lucide-react-native";

export default function CheckInRow() {
  return (
    <View
      style={{
        paddingHorizontal: 4,
        paddingVertical: 16,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          width: 42,
          marginLeft: 10,
        }}
      >
        1
      </Text>
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
      <Button
        onPress={() => {
          console.log(1);
        }}
        titleStyle={{
          color: "red",
        }}
        type="clear"
        containerStyle={{
          borderRadius: 9999,
          marginLeft: "auto",
        }}
        buttonStyle={{
          width: 36,
          height: 36,
        }}
        icon={<Trash color={"red"} size={22} strokeWidth={2.2} />}
      />
    </View>
  );
}
