import { View, Text } from "react-native";
import React from "react";
import { Card } from "@rneui/themed";
import { LucideIcon, User } from "lucide-react-native";
import { COLOR } from "@/constants/colors";
import { STATISTIC_NUMBER_ITEM_CONTENT_ITEM_TYPE } from "./number-data";

export default function NumberStatisticCard({
  item,
  span = false,
}: {
  item: STATISTIC_NUMBER_ITEM_CONTENT_ITEM_TYPE;
  span?: boolean;
}) {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Card
        wrapperStyle={{
          display: "flex",
          flexDirection: span ? "row" : "column",
          alignItems: span ? "center" : undefined,
          justifyContent: span ? "space-between" : undefined,
          gap: 3,
        }}
        containerStyle={{
          borderWidth: 0,
          borderRadius: 10,
          backgroundColor: item.bgColor,
          paddingVertical: 12,
          paddingHorizontal: 14,
          marginHorizontal: 0,
          marginVertical: 0,
          shadowColor: "white",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: span ? undefined : "center",
            gap: 8,
          }}
        >
          <item.icon color={item.color} size={18} strokeWidth={2.5} />
          <Text
            style={{
              fontSize: 11.5,
              fontWeight: 300,
            }}
          >
            {item.title}
          </Text>
        </View>
        <Text
          style={{
            color: item.color,
            fontSize: 19.5,
            fontWeight: "900",
            letterSpacing: 0.75,
          }}
        >
          1,000,000đ
        </Text>
      </Card>
    </View>
  );
}
