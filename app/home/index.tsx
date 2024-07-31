import Input, { InputCustom } from "@/components/ui/input";
import {
  StyleSheet,
  Platform,
  Text,
  ScrollView,
  View,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { blurhash } from "@/constants/image";
import ProductSearch from "./components/search";
import image from "@/assets/images/index";
import { COLOR } from "@/constants/colors";
import Button from "@/components/ui/button";
import { Bell, X } from "lucide-react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Category from "./components/category";
import SpecialSection from "./components/special";

export default function Home() {
  const [search, setSearch] = React.useState("");
  const { navigate } = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 10,
          paddingHorizontal: 16,
          backgroundColor: COLOR.PRIMARY,
          gap: 8,
        }}
      >
        <View
          style={{
            flex: 1,
            position: "relative",
          }}
        >
          <InputCustom
            placeholder="Search..."
            control={[search, setSearch]}
            customBorder
          />
          <Pressable
            style={{
              position: "absolute",
              height: 40,
              left: 0,
              right: 0,
              top: 0,
            }}
            onPress={() => {
              // @ts-ignore
              navigate("productSearch");
            }}
          />
        </View>
      </View>
      <ScrollView
        style={{
          backgroundColor: "white",
        }}
      >
        <Category />
        <SpecialSection />
      </ScrollView>
    </View>
  );
}
