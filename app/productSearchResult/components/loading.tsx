import { View, Text } from "react-native";
import React from "react";
import Skeleton from "@/components/ui/skeleton";

export default function CategoryLoadingSmall() {
  return (
    <Skeleton
      style={{
        borderRadius: 6,
        width: 80,
        height: 31,
      }}
    />
  );
}
