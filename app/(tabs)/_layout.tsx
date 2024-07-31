import CustomMainTabBar from "@/components/navigation/tabBar";
import { COLOR } from "@/constants/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Payments from "../payments";
import Statistics from "../statistics";
import Settings from "./settings";
import Index from "../home";
import Members from "../members";
import { routeDetailsArray } from "./pageRouter";
// import MemberInfoBottomSheet from "../memberInfoModal/_layout";
import { View } from "react-native";
import Constants from "expo-constants";

const Tab = createBottomTabNavigator();

const renderComponent: { [key: string]: () => React.JSX.Element } = {
  ["index"]: Index,
  ["members"]: Members,
  ["payments"]: Payments,
  ["statistics"]: Statistics,
  ["settings"]: Settings,
};

export default function TabLayout() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Tab.Navigator
        tabBar={(props) => <CustomMainTabBar {...props} />}
        screenOptions={{
          headerStyle: {
            borderTopWidth: 0,
            backgroundColor: COLOR.PRIMARY,
            height: Constants.statusBarHeight + 0.5,
          },
          headerShadowVisible: false,
          headerTitleStyle: {
            display: "none",
          },
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            backgroundColor: "white",
          },
        }}
      >
        {routeDetailsArray.map((item) => (
          <Tab.Screen
            key={item.id}
            name={item.name}
            options={{ title: item.label }}
            component={renderComponent[item.name]}
          />
        ))}
      </Tab.Navigator>

      {/* <MemberInfoBottomSheet /> */}
    </View>
  );
}
