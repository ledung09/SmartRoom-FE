import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import Button from "@/components/ui/button";
import { COLOR } from "@/constants/colors";

export default function Category() {
  return (
    <ScrollView
      horizontal
      // pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={{
        paddingVertical: 8,
      }}
    >
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
    </ScrollView>
  );
}

function CategoryItem() {
  return (
    <Button
      titleStyle={{
        color: COLOR.IN_ACTIVE,
      }}
      buttonStyle={{
        backgroundColor: "white",
        paddingHorizontal: 10,
        marginHorizontal: 4,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        borderRadius: 20,
      }}
    >
      <View
        style={{
          backgroundColor: COLOR.NEW_LIGHT_BLUE,
          height: 50,
          width: 50,
          borderRadius: 9999,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 22,
          }}
        >
          🪑
        </Text>
      </View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 12.5,
        }}
      >
        Chairs
      </Text>
    </Button>
  );
}
