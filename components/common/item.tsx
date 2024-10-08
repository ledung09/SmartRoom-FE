import { View, Text, Pressable } from "react-native";
import React from "react";
import { COLOR } from "@/constants/colors";
import { Image } from "expo-image";
import { blurhash } from "@/constants/image";
import { Shadow } from "react-native-shadow-2";
import Button from "../ui/button";
import { useNavigation } from "@react-navigation/native";
import { Heart } from "lucide-react-native";
import { ProductShortDetail } from "@/types/product";
import PriceUtil from "@/util/price-util";

export default function ShopItem({ detail }: { detail: ProductShortDetail }) {
  const { navigate } = useNavigation();
  const [heart, setHeart] = React.useState(false);

  return (
    <Pressable
      style={{
        flex: 0.5,
        borderRadius: 6,
        backgroundColor: "white",
        marginHorizontal: 5,
      }}
    >
      <Shadow
        style={[
          {
            borderRadius: 6,
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
            borderRadius: 6,
            backgroundColor: "white",
            paddingVertical: 0,
            paddingHorizontal: 0,
          }}
          containerStyle={{
            borderRadius: 6,
            position: "relative",
          }}
          onPress={() => {
            // @ts-ignore
            navigate("productDetail", { id: detail._id });
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
                source={detail.image}
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={500}
                style={{
                  height: 160,
                  width: "100%",
                  borderTopRightRadius: 6,
                  borderTopLeftRadius: 6,
                }}
              />
              <View
                style={{
                  paddingVertical: 8,
                  paddingHorizontal: 10,
                }}
              >
                <Text
                  numberOfLines={2}
                  style={{
                    fontSize: 12.5,

                    // textAlign: "justify",
                  }}
                >
                  {detail.name}
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
                    {PriceUtil.priceCommaSeperation(detail.price)}
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
                    | {PriceUtil.soldNumberReduce(detail.sold)} sold
                    {detail.sold > 1 && "s"}
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
                  fill={!heart ? "transparent" : COLOR.PRIMARY}
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
