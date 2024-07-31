import { Keyboard, View } from "react-native";
import TabThumb from "./tabThumb";
import TabButton from "./tabButton";
import {
  routeDetailObject,
  routeMain,
  routeMainIndex,
} from "@/app/(tabs)/pageRouter";
import * as Haptics from "expo-haptics";
import React from "react";
import { Shadow } from "react-native-shadow-2";
import { COLOR } from "@/constants/colors";

export default function CustomMainTabBar({ state, descriptors, navigation }) {
  return (
    <Shadow
      style={{
        position: "relative",
        width: "100%",
      }}
      startColor={COLOR.SHADOW}
      distance={state.index === routeMainIndex ? 0 : 5} // payments route
    >
      <View
        style={[
          {
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
            height: 60,
            paddingHorizontal: 10,
            borderTopWidth: 0,
            justifyContent: "space-around",
          },
        ]}
      >
        {state.routes
          .sort(
            (a, b) =>
              routeDetailObject[a.name].id - routeDetailObject[b.name].id
          )
          .map((route, index) => {
            const isFocused = state.index === index;
            const { options } = descriptors[route.key];

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
              }
            };

            const onLongPress = () => {
              const event = navigation.emit({
                type: "tabLongPress",
                target: route.key,
              });
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
              }
            };

            return route.name === routeMain ? (
              <TabThumb
                key={route.key}
                route={route}
                isFocused={isFocused}
                onPress={onPress}
                onLongPress={onLongPress}
                options={options}
              />
            ) : (
              <TabButton
                key={route.key}
                route={route}
                isFocused={isFocused}
                onPress={onPress}
                onLongPress={onLongPress}
                options={options}
              />
            );
          })}
      </View>
    </Shadow>
  );
}
