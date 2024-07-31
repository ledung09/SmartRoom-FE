import React from "react";
import { ScrollView, View } from "react-native";
import { Text } from "react-native";
import NumberStatisticCard from "./components/card";
import { User } from "lucide-react-native";
import {
  STATISTIC_NUMBER_ITEM,
  STATISTIC_NUMBER_ITEM_CONTENT,
} from "./components/number-data";

export default function Statistics() {
  return (
    <ScrollView
      style={{
        paddingHorizontal: 16,
        paddingVertical: 18,
        backgroundColor: "white",
      }}
    >
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 12,
            marginBottom: 12,
          }}
        >
          <NumberStatisticCard
            item={
              STATISTIC_NUMBER_ITEM_CONTENT[STATISTIC_NUMBER_ITEM.MEMBER_SUM]
            }
          />
          <NumberStatisticCard
            item={
              STATISTIC_NUMBER_ITEM_CONTENT[
                STATISTIC_NUMBER_ITEM.ACTIVE_DAY_SUM
              ]
            }
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 12,
            marginBottom: 12,
          }}
        >
          <NumberStatisticCard
            item={
              STATISTIC_NUMBER_ITEM_CONTENT[
                STATISTIC_NUMBER_ITEM.MONEY_MEMBER_SUM
              ]
            }
          />
          <NumberStatisticCard
            item={
              STATISTIC_NUMBER_ITEM_CONTENT[
                STATISTIC_NUMBER_ITEM.MONEY_ACTIVITY_SUM
              ]
            }
          />
        </View>
        <NumberStatisticCard
          item={
            STATISTIC_NUMBER_ITEM_CONTENT[
              STATISTIC_NUMBER_ITEM.MONEY_DIFFERENCE
            ]
          }
          span
        />
      </View>
    </ScrollView>
  );
}
