import Skeleton from "@/components/ui/skeleton";
import React from "react";
import { Text, View } from "react-native";

export default function LoadingCategory() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        paddingVertical: 8,
        paddingHorizontal: 6,
        marginHorizontal: 3,
      }}
    >
      <Skeleton
        circle
        style={{
          width: 56,
          height: 56,
        }}
      />
      <Skeleton
        style={{
          height: 15,
          width: 60,
        }}
      />
    </View>
  );
}
