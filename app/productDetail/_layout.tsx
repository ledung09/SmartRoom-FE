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
import ProductDescription from "./components/tab";
import ImageCarousel from "./components/image/image-carousel";
import ProductTryout from "./components/camera/camera";
import { ProductDetailProvider } from "./hooks/useProductDetail";
import HeaderProductDetail from "./components/product/header";
import ProductSupplier from "./components/product/supplier";

export default function ProductDetail({ route }) {
  const productId = route.params.id;
  const navigation = useNavigation();

  return (
    <ProductDetailProvider id={productId}>
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
        <HeaderProductDetail />
        <ProductSupplier />
        <ProductDescription />
      </ScrollView>
      <ProductDetailFooter />
    </ProductDetailProvider>
  );
}
