import { View, Text, TouchableOpacity } from "react-native";
import { routeDetailObject } from "@/app/(tabs)/pageRouter";
import { COLOR } from "@/constants/colors";

export default function TabButton({
  route,
  isFocused,
  onPress,
  onLongPress,
  options,
}) {
  const name = route.name;
  const Icon = routeDetailObject[name].icon;
  const color = isFocused ? COLOR.PRIMARY : COLOR.IN_ACTIVE_TAB_BUTTON;

  return (
    <TouchableOpacity
      key={route.key}
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <View
        style={[
          {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: 60,
            borderTopWidth: 2,
            gap: 1,
          },
          {
            borderTopColor: isFocused ? COLOR.PRIMARY : "white",
          },
        ]}
      >
        <Icon size={28} color={color} />
        <Text style={{ fontSize: 9.5, color }}>
          {routeDetailObject[name].label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
