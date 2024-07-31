import { View, Text, Pressable } from "react-native";
import React from "react";
import { COLOR } from "@/constants/colors";
import { Image } from "expo-image";
import { blurhash } from "@/constants/image";
import { Shadow } from "react-native-shadow-2";
import Button from "../ui/button";
import { useNavigation } from "@react-navigation/native";
import { Star } from "lucide-react-native";

export default function ShopItem() {
  const { navigate } = useNavigation();
  return (
    <Pressable
      style={{
        flex: 1,
        borderRadius: 8,
        backgroundColor: "white",
      }}
    >
      <Shadow
        style={[
          {
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            paddingHorizontal: 0,
            paddingVertical: 0,
          },
          {
            elevation: 2,
            shadowColor: "#000",
            shadowOpacity: 0.6,
            shadowRadius: 20,
            shadowOffset: {
              width: 0,
              height: 24,
            },
          },
        ]}
        distance={3}
        startColor={COLOR.LIGHT_SHADOW}
      >
        <Button
          titleStyle={{
            color: COLOR.IN_ACTIVE,
          }}
          buttonStyle={{
            flex: 1,
            borderRadius: 8,
            backgroundColor: "white",
            paddingVertical: 0,
            paddingHorizontal: 0,
          }}
          containerStyle={{
            borderRadius: 8,
          }}
          onPress={() => {
            // @ts-ignore
            navigate("productDetail", { id: 1 });
          }}
        >
          <View
            style={{
              width: "100%",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Image
                source="https://m.media-amazon.com/images/I/81mlWpZkDFL._AC_UF894,1000_QL80_.jpg"
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={500}
                style={{
                  height: 160,
                  width: "100%",
                  borderTopRightRadius: 8,
                  borderTopLeftRadius: 8,
                }}
              />
              <View
                style={{
                  paddingVertical: 8,
                  paddingHorizontal: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 12.5,
                  }}
                >
                  Cái ghế có chiều siêu dài
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: COLOR.PRIMARY,
                    marginVertical: 6,
                  }}
                >
                  100,000
                  <Text
                    style={{
                      fontSize: 13,
                    }}
                  >
                    ₫
                  </Text>
                </Text>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <Star size={17} fill={COLOR.GOLD} />
                  <Text
                    style={{
                      fontSize: 11,
                      color: COLOR.IN_ACTIVE,
                    }}
                  >
                    4.9 (500)
                  </Text>
                </View>
              </View>
            </View>
            {/* </Shadow> */}
          </View>
        </Button>
      </Shadow>
    </Pressable>
  );
}
