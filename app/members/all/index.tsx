import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { COLOR } from "@/constants/colors";
import AllMemberRow from "./components/row";
import Separator from "@/components/ui/separator";

export default function AllMemberTab() {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 16,
      }}
    >
      <View
        style={{
          paddingVertical: 2,
        }}
      >
        <AllMemberRow />
        <Separator width={1} opacity={0.3} />
        <AllMemberRow />
        <Separator width={1} opacity={0.3} />
        <AllMemberRow />
        <Separator width={1} opacity={0.3} />
        <AllMemberRow />
        <Separator width={1} opacity={0.3} />
        <AllMemberRow />
        <Separator width={1} opacity={0.3} />
        <AllMemberRow />
        <Separator width={1} opacity={0.3} />
        <AllMemberRow />
        <Separator width={1} opacity={0.3} />
        <AllMemberRow />
        <Separator width={1} opacity={0.3} />
        <AllMemberRow />
        <Separator width={1} opacity={0.3} />
        <AllMemberRow />
      </View>
    </ScrollView>
  );
}
