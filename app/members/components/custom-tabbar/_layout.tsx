import * as React from "react";
import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CustomMemberTabBar from "../custom-tabbar/custom-tabbar";
import AllMemberTab from "../../all";
import CheckInMemberTab from "../../checkin";

const Tab = createMaterialTopTabNavigator();

export default function MemberTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <CustomMemberTabBar {...props} />}>
      <Tab.Screen name="Tất cả" component={AllMemberTab} />
      <Tab.Screen name="Điểm danh" component={CheckInMemberTab} />
    </Tab.Navigator>
  );
}
