import { View, Text } from "react-native";
import React from "react";
import { Skeleton as RNESkeleton, SkeletonProps } from "@rneui/themed";

export default function Skeleton(props: SkeletonProps) {
  const { style, animation, ...remainProps } = props;
  return (
    <RNESkeleton
      {...remainProps}
      animation="wave"
      style={[
        style,
        {
          opacity: 0.3,
        },
      ]}
    />
  );
}
