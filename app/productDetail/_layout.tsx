import { View, Text, Dimensions } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Image } from "expo-image";
import { blurhash } from "@/constants/image";
import { COLOR } from "@/constants/colors";
import { ArrowLeft, Heart, MapPin, Star } from "lucide-react-native";
import Button from "@/components/ui/button";
import { useNavigation } from "@react-navigation/native";
import ProductDetailFooter from "./components/footer/footer";
import Separator from "@/components/ui/separator";
import { Shadow } from "react-native-shadow-2";
import ProductDetailTab from "./components/tab";
import ImageCarousel from "./components/image/image-carousel";
import ProductTryout from "./components/camera/camera";

export default function ProductDetail({ route }) {
  const [heart, setHeart] = React.useState(false);
  const navigation = useNavigation();
  return (
    <>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            position: "relative",
          }}
        >
          <ImageCarousel />
          <Button
            onPress={() => {
              navigation.goBack();
            }}
            type="clear"
            titleStyle={{
              color: "black",
            }}
            containerStyle={{
              borderRadius: 9999,
              position: "absolute",
              top: 12,
              left: 10,
            }}
            buttonStyle={{
              width: 38,
              height: 38,
            }}
          >
            <View
              style={{
                backgroundColor: "black",
                opacity: 0.4,
                borderRadius: 9999,
                position: "absolute",
                width: 40,
                height: 40,
              }}
            />
            <ArrowLeft color={"white"} size={24} strokeWidth={2.5} />
          </Button>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            paddingHorizontal: 16,
            paddingVertical: 12,
            gap: 8,
            marginBottom: 6,
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
              Chiếc ghế siêu dài
            </Text>

            <Text
              style={{
                fontWeight: "800",
                fontSize: 24,
                color: COLOR.PRIMARY,
                letterSpacing: 0.5,
                marginBottom: 10,
              }}
            >
              100,000
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
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 3,
                  paddingLeft: 8,
                  paddingRight: 10,
                  borderRadius: 20,
                  gap: 4,
                  backgroundColor: COLOR.PRIMARY,
                }}
              >
                <Star size={15} fill={COLOR.GOLD} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 11,
                    fontWeight: "600",
                  }}
                >
                  4.8
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 11.5,
                }}
              >
                (500 reviews){" "}
                <Text
                  style={{
                    color: COLOR.IN_ACTIVE,
                  }}
                >
                  {" "}
                  |{" "}
                </Text>{" "}
                <Text
                  style={{
                    fontWeight: "600",
                  }}
                >
                  500 solds
                </Text>
              </Text>
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
        <Separator />
        <View
          style={{
            marginTop: 10,
            paddingHorizontal: 14,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 12,
          }}
        >
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 9999,
              borderWidth: 1,
              borderColor: COLOR.LIGHT_SLATE,
            }}
          >
            <Image
              style={{
                margin: "auto",
                height: 47.5,
                width: 47.5,
                borderRadius: 9999,
              }}
              source={
                "https://upload.wikimedia.org/wikipedia/commons/d/de/HCMUT_official_logo.png"
              }
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={500}
            />
          </View>
          <View
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 4,
              marginRight: 6,
            }}
          >
            <Text
              numberOfLines={1}
              style={{
                fontSize: 13,
              }}
            >
              Đại học Bách Khoa
            </Text>
            <View
              style={{
                display: "flex",
                alignContent: "center",
                flexDirection: "row",
                gap: 2,
              }}
            >
              <MapPin color={COLOR.IN_ACTIVE} size={17} strokeWidth={1.4} />
              <Text
                numberOfLines={1}
                style={{
                  color: COLOR.SLATE,
                  fontSize: 11.5,
                }}
              >
                Ho Chi Minh City
              </Text>
            </View>
          </View>
          <View
            style={{
              marginLeft: "auto",
            }}
          >
            <Button
              type="outline"
              onPress={() => {}}
              title={"View shop"}
              titleStyle={{
                fontWeight: "700",
                color: COLOR.PRIMARY,
                fontSize: 12,
                marginHorizontal: 1.5,
              }}
              buttonStyle={{
                borderRadius: 8,
                paddingVertical: 8,
              }}
              containerStyle={{
                borderRadius: 8,
              }}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            paddingHorizontal: 14,
            marginBottom: 10,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Text
            style={{
              fontSize: 12,
            }}
          >
            <Text
              style={{
                color: COLOR.PRIMARY,
                fontWeight: "600",
              }}
            >
              20
            </Text>
            <Text> products</Text>
          </Text>
          <Text
            style={{
              fontSize: 12,
            }}
          >
            <Text
              style={{
                color: COLOR.PRIMARY,
                fontWeight: "600",
              }}
            >
              4.5
            </Text>
            <Text> rating</Text>
          </Text>
        </View>
        <Separator />
        <ProductDetailTab />
      </ScrollView>
      <Text>{route.params.id}</Text>
      <ProductDetailFooter />
    </>
  );
}
