import {
  Image,
  StyleSheet,
  Platform,
  ScrollView,
  Text,
  KeyboardAvoidingView,
} from "react-native";

import Input, { InputCustom } from "../../components/ui/input";
import Button from "../../components/ui/button";
import { View } from "react-native";
import { COLOR } from "@/constants/colors";
import { UserPlus } from "lucide-react-native";
import MemberTabs from "./components/custom-tabbar/_layout";
import React from "react";

export default function Members() {
  const [search, setSearch] = React.useState("");

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
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
        <Button
          title="Hủy"
          titleStyle={{
            fontSize: 14,
          }}
        />
      </View>
      <MemberTabs />
    </View>
  );
}
