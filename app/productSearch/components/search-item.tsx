import { View, Text, Pressable } from "react-native";
import React from "react";
import { ArrowUpLeft } from "lucide-react-native";
import { COLOR } from "@/constants/colors";
import Button from "@/components/ui/button";

export default function SearchItem() {
  return (
    <Button
      onPress={() => {
        console.log(1);
      }}
      buttonStyle={{
        paddingHorizontal: 18,
        paddingVertical: 12,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      titleStyle={{
        color: COLOR.IN_ACTIVE,
      }}
    >
      <Text
        style={{
          fontSize: 13,
        }}
      >
        SearchItem
      </Text>
      <ArrowUpLeft color={COLOR.IN_ACTIVE} size={22} strokeWidth={1.8} />
    </Button>
  );
}
