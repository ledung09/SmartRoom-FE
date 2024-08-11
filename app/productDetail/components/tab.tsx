import { View, Text, ScrollView, Dimensions } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { blurhash } from "@/constants/image";
import { COLOR } from "@/constants/colors";
import Separator from "@/components/ui/separator";
import { useProductDetail } from "../hooks/useProductDetail";
import Skeleton from "@/components/ui/skeleton";

export default function ProductDescription() {
  const { data, error, isPending } = useProductDetail();

  if (error) return <Text>There is err</Text>;

  return isPending ? (
    <View
      style={{
        marginTop: 16,

        paddingHorizontal: 16,
      }}
    >
      <Skeleton height={24} />
    </View>
  ) : (
    <View
      style={{
        marginTop: 16,
      }}
    >
      <View
        style={{
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 24,
            marginBottom: 6,
          }}
        >
          <Text
            style={{
              fontWeight: "600",
            }}
          >
            Description
          </Text>
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: 16,
        }}
      >
        <Text
          style={{
            fontSize: 12.5,
            color: COLOR.DARK_SLATE,
            textAlign: "justify",
            lineHeight: 18,
          }}
        >
          {data?.description}
        </Text>
      </View>
    </View>
  );
}
