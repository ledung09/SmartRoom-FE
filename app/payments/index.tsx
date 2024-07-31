import { View, Text } from "react-native";
import React from "react";
import { COLOR } from "@/constants/colors";
import { Image } from "expo-image";
import Button from "@/components/ui/button";
import { blurhash } from "@/constants/image";
import Input from "@/components/ui/input";
import { paymentDetail } from "@/config/paymentDetail";

import { useNavigation } from "@react-navigation/native";

export default function Payments() {
  const { navigate } = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLOR.PRIMARY,
        paddingVertical: 14,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          marginHorizontal: 20,
          borderRadius: 20,
          paddingVertical: 10,
        }}
      >
        <View
          style={{
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "300",
              fontSize: 20,
              marginBottom: 8,
              textAlign: "center",
            }}
          >
            {paymentDetail.name}
          </Text>
          <View
            style={{
              position: "relative",
              height: 210,
            }}
          >
            <Image
              style={{
                position: "absolute",
                top: 0,
                height: 210,
                width: 210,
                borderRadius: 5,
                left: "50%",
                marginLeft: -105,
              }}
              source={paymentDetail.qr}
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={500}
            />
          </View>
        </View>
        <View
          style={{
            position: "relative",
            height: 14,
            marginVertical: 4,
          }}
        >
          <View
            style={{
              width: 14,
              height: 14,
              backgroundColor: COLOR.PRIMARY,
              borderRadius: 9999,
              position: "absolute",
              top: 0,
              left: -7,
            }}
          />
          <View
            style={{
              position: "absolute",
              left: 7,
              right: 7,
              height: 7,
              borderColor: COLOR.SLATE,
              borderTopWidth: 1.6,
              borderStyle: "dashed",
              top: 5.8,
            }}
          />
          <View
            style={{
              width: 14,
              height: 14,
              backgroundColor: COLOR.PRIMARY,
              borderRadius: 9999,
              position: "absolute",
              top: 0,
              right: -7,
            }}
          />
        </View>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 14,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <View
            style={{
              position: "relative",
              height: 58,
              marginBottom: 20,
            }}
          >
            <Input
              style={{
                position: "absolute",
                top: 10,
                left: 0,
                right: 0,
              }}
              inputStyle={{
                fontWeight: "600",
                paddingTop: 11,
                paddingBottom: 7,
                paddingHorizontal: 14,
              }}
              value="Họ và tên - Chuyển tiền cầu..."
              caretHidden
            />
            <Text
              style={{
                position: "absolute",
                top: 0,
                left: 14,
                backgroundColor: "white",
                paddingHorizontal: 2,
                fontSize: 12,
              }}
            >
              Nội dung chuyển khoản
            </Text>
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "transparent",
              }}
            />
          </View>
          <Button
            onPress={() => {
              // @ts-ignore
              navigate("paymentsHistory");
            }}
            title="Thanh toán ngay"
            titleStyle={{
              fontWeight: "700",
            }}
            buttonStyle={{
              paddingVertical: 10,
            }}
          />
        </View>
      </View>
    </View>
  );
}
