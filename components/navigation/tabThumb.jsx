import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { COLOR } from "@/constants/colors";
import { Shadow } from "react-native-shadow-2";
import { QrCode, Scan } from "lucide-react-native";
import {
  Keyframe,
  Easing,
  withDecay,
  withDelay,
} from "react-native-reanimated";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from "react-native-reanimated";

export default function TabThumb({
  route,
  isFocused,
  onPress,
  onLongPress,
  options,
}) {
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(0.8);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
      opacity: opacity.value,
    };
  });

  React.useEffect(() => {
    translateY.value = withRepeat(
      withSequence(
        withTiming(0, { duration: 600 }),
        withTiming(19, { duration: 600 }),
        withTiming(0, { duration: 600 }),
        withDelay(600, withTiming(0, { duration: 0 }))
      ),
      -1,
      false
    );
  }, [translateY]);

  React.useEffect(() => {
    opacity.value = withRepeat(
      withSequence(
        withTiming(0.8, { duration: 1800 }),
        withTiming(0, { duration: 100 }),
        withDelay(400, withTiming(0.8, { duration: 100 }))
      ),
      -1,
      false
    );
  }, [opacity]);

  return (
    <Shadow
      key={route.key}
      style={[
        {
          position: "relative",
          bottom: 17,
          width: 66,
          height: 66,
          backgroundColor: "white",
          borderRadius: 9999,
        },
        // shadow style
        {
          elevation: 8,
          shadowColor: "#000",
          shadowOpacity: 0.6,
          shadowRadius: 10,
          shadowOffset: {
            width: 0,
            height: -8,
          },
        },
      ]}
    >
      <View
        style={{
          width: 90,
          height: 60,
          backgroundColor: "white",
          top: 17,
          left: "50%",
          marginLeft: -45,
        }}
      ></View>
      <View
        style={{
          position: "absolute",
          top: 6.5,
          left: "50%",
          marginLeft: -30,
        }}
      >
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityState={isFocused ? { selected: true } : {}}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarTestID}
          onPress={onPress}
          onLongPress={onLongPress}
        >
          <View
            style={{ flexDirection: "column", alignItems: "center", gap: 2 }}
          >
            <View
              style={{
                width: 46,
                height: 46,
                borderRadius: 9999,
                backgroundColor: COLOR.PRIMARY,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  position: "relative",
                  width: 33,
                  height: 33,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Animated.View
                  style={[
                    {
                      position: "absolute",
                      top: 6,
                      left: 6.25,
                      right: 6.25,
                      height: 1.5,
                      backgroundColor: "white",
                      borderRadius: 18,
                    },
                    animatedStyle,
                  ]}
                />
                <Scan
                  size={33}
                  color="white"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }}
                  strokeWidth={1.5}
                />
                <QrCode
                  size={20}
                  color="white"
                  strokeWidth={2.5}
                  style={{ marginLeft: 0.2 }}
                />
              </View>
            </View>
            <Text
              style={{
                color: COLOR.PRIMARY,
                fontSize: 10.5,
                fontWeight: "900",
              }}
            >
              Thanh toán
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Shadow>
  );
}
