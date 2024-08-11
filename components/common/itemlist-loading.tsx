import { View, Text } from "react-native";
import React from "react";
import Skeleton from "../ui/skeleton";

export default function ProductListLoading() {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "white",
        paddingHorizontal: 8,
      }}
    >
      <ProductListLoadingItem />
      <ProductListLoadingItem />
    </View>
  );
}

function ProductListLoadingItem() {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 6,
        paddingVertical: 6,
      }}
    >
      <Skeleton height={160} />
      <View
        style={{
          paddingVertical: 8,
        }}
      >
        <Skeleton height={20} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            // justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: 6,
            marginBottom: 3,
            gap: 4,
          }}
        >
          <Skeleton
            height={26}
            style={{
              width: "70%",
            }}
          />
        </View>
      </View>
    </View>
  );
}
