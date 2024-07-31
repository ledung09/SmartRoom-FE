import { View, Text, ScrollView } from "react-native";
import React from "react";
import { InputCustom } from "@/components/ui/input";
import { COLOR } from "@/constants/colors";
import AddCheckInRow from "./components/row";
import Separator from "@/components/ui/separator";
import Button from "@/components/ui/button";
import { Shadow } from "react-native-shadow-2";
import { RefreshCw, Save } from "lucide-react-native";
import SaveSection from "./components/save-section";

export default function AddCheckIn() {
  const [search, setSearch] = React.useState("");

  return (
    <>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 10,
          paddingHorizontal: 16,
          backgroundColor: COLOR.PRIMARY,
          gap: 8,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <InputCustom
            placeholder="Tìm kiếm thành viên"
            control={[search, setSearch]}
            customBorder

          />
        </View>
      </View>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            paddingHorizontal: 16,
          }}
        >
          <AddCheckInRow />
          <Separator width={1} opacity={0.3} />
          <AddCheckInRow />
          <Separator width={1} opacity={0.3} />
          <AddCheckInRow />
          <Separator width={1} opacity={0.3} />
          <AddCheckInRow />
          <Separator width={1} opacity={0.3} />
          <AddCheckInRow />
          <Separator width={1} opacity={0.3} />
          <AddCheckInRow />
          <Separator width={1} opacity={0.3} />
          <AddCheckInRow />
          <Separator width={1} opacity={0.3} />
          <AddCheckInRow />
          <Separator width={1} opacity={0.3} />
          <AddCheckInRow />
          <Separator width={1} opacity={0.3} />
          <AddCheckInRow />
          <Separator width={1} opacity={0.3} />
          <AddCheckInRow />
          <Separator width={1} opacity={0.3} />
          <AddCheckInRow />
        </View>
      </ScrollView>
      <SaveSection />
    </>
  );
}
