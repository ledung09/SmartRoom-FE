import { COLOR } from "@/constants/colors";
import React from "react";
import { Text } from "react-native";
import { Animated, View, TouchableOpacity } from "react-native";

export default function CustomMemberTabBar({
  state,
  descriptors,
  navigation,
  position,
}) {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          borderBottomWidth: 0.5,
          borderBottomColor: COLOR.IN_ACTIVE,
          paddingHorizontal: 4,
        },
      ]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
        });

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              paddingVertical: 8.5,
              paddingHorizontal: 20,
              borderBottomColor: isFocused ? COLOR.PRIMARY : "transparent",
              borderBottomWidth: 1.6,
              marginBottom: -0.5,
            }}
          >
            <Text
              style={{
                fontSize: 12.5,
                fontWeight: 600,
                color: isFocused ? COLOR.PRIMARY : COLOR.IN_ACTIVE,
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
