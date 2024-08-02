import { View, Text } from "react-native";
import React from "react";
import { COLOR } from "@/constants/colors";
import Button from "@/components/ui/button";
import { Heart } from "lucide-react-native";
import { useProductDetail } from "../../hooks/useProductDetail";

export default function HeaderProductDetail() {
  const { data, error, isPending } = useProductDetail();
  const [heart, setHeart] = React.useState(false);

  if (isPending) return <Text>There is loading</Text>;
  if (error) return <Text>There is err</Text>;

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingVertical: 12,
        gap: 8,
      }}
    >
      <View
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            marginTop: 4,
            marginBottom: 6,
          }}
        >
          {data?.name}
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 18,
            alignItems: "flex-end",
            marginBottom: 6,
          }}
        >
          <Text
            style={{
              fontWeight: "800",
              fontSize: 28,
              color: COLOR.PRIMARY,
              letterSpacing: 0.5,
            }}
          >
            {data?.price}
            <Text
              style={{
                fontSize: 20,
              }}
            >
              ₫
            </Text>
          </Text>
          <View
            style={{
              paddingVertical: 2.5,
              paddingHorizontal: 10,
              borderRadius: 20,
              backgroundColor: COLOR.PRIMARY,
              marginBottom: 7.5,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 10,
                fontWeight: "600",
              }}
            >
              {data?.sold} solds
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Button
          type="clear"
          titleStyle={{
            color: COLOR.IN_ACTIVE,
          }}
          containerStyle={{
            borderRadius: 9999,
          }}
          onPress={() => {
            setHeart(!heart);
          }}
          buttonStyle={{
            width: 36,
            height: 36,
          }}
          icon={
            <Heart
              fill={heart ? COLOR.PRIMARY : "white"}
              color={!heart ? COLOR.IN_ACTIVE : COLOR.PRIMARY}
              size={21}
              strokeWidth={2.3}
            />
          }
        />
      </View>
    </View>
  );
}
