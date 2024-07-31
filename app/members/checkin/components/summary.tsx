import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Card } from "@rneui/themed";
import {
  LucideIcon,
  SquareCheckBig,
  TrendingDown,
  User,
} from "lucide-react-native";
import { COLOR } from "@/constants/colors";

export default function CheckInStatisticCard({
  date,
  count,
}: {
  date: string;
  count: number;
}) {
  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <Card
        wrapperStyle={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 5,
          paddingHorizontal: 8,
        }}
        containerStyle={{
          borderWidth: 0,
          borderRadius: 10,
          backgroundColor: COLOR.NEW_LIGHT_BLUE,
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
            flexDirection: "column",
            gap: 5,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
            }}
          >
            <SquareCheckBig color={COLOR.PRIMARY} size={18} strokeWidth={2.5} />
            <Text
              style={{
                fontSize: 12,
                fontWeight: 500,
              }}
            >
              {date}
            </Text>
          </View>
          <Text
            style={{
              color: COLOR.PRIMARY,
              fontSize: 26,
              fontWeight: "bold",
              letterSpacing: 0.75,
            }}
          >
            {count}
            <Text
              style={{
                fontSize: 19,
                fontWeight: "bold",
                letterSpacing: 0.75,
              }}
            >
              {" "}
              thành viên
            </Text>
          </Text>
        </View>
        <TrendingDown color="red" size={28} />
      </Card>
    </ScrollView>
  );
}
