import { View, Text } from "react-native";
import React from "react";
import ShopItem from "@/components/common/item";

export default function SpecialSection() {
  return (
    <View
      style={{
        paddingHorizontal: 16,
        marginVertical: 10,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "700",
          marginBottom: 16,
        }}
      >
        Special For You
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 12,
        }}
      >
        {/* <ShopItem /> */}
        {/* <ShopItem /> */}
      </View>
    </View>
  );
}
