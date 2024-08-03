import { View, Text, Pressable } from "react-native";
import React from "react";
import { COLOR } from "@/constants/colors";
import { Image } from "expo-image";
import { blurhash } from "@/constants/image";
import { Shadow } from "react-native-shadow-2";
import Button from "../ui/button";
import { useNavigation } from "@react-navigation/native";
import { Heart } from "lucide-react-native";

export default function ShopItem() {
  const { navigate } = useNavigation();
  const [heart, setHeart] = React.useState(false);

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
            position: "relative",
          }}
          onPress={() => {
            // @ts-ignore
            navigate("productDetail", { id: "66abda2bdd0d17dc70f099ac" });
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
                    // textAlign: "justify",
                  }}
                >
                  Cái ghế có chiều siêu dài
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    // justifyContent: "space-between",
                    alignItems: "flex-end",
                    marginTop: 6,
                    marginBottom: 3,
                    gap: 4,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "700",
                      color: COLOR.PRIMARY,
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

                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: "700",
                      color: COLOR.IN_ACTIVE,
                      marginBottom: 2,
                      letterSpacing: -0.2,
                    }}
                  >
                    | 500 solds
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              top: 4,
              right: 4,
              backgroundColor: "white",
              // borderBottomLeftRadius: 12,
              borderRadius: 9999,
            }}
          >
            <Button
              type="clear"
              titleStyle={{
                color: "black",
              }}
              containerStyle={{
                borderRadius: 9999,
              }}
              onPress={() => {
                setHeart(!heart);
              }}
              buttonStyle={{
                width: 27,
                height: 27,
              }}
              icon={
                <Heart
                  fill={heart ? "white" : COLOR.PRIMARY}
                  color={COLOR.PRIMARY}
                  size={18}
                  strokeWidth={2.5}
                />
              }
            />
          </View>
        </Button>
      </Shadow>
    </Pressable>
  );
}
