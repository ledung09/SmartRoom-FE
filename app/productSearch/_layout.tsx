import Input, { InputCustom } from "@/components/ui/input";
import { StyleSheet, Platform, Text, ScrollView, View } from "react-native";
import { Image } from "expo-image";
import { blurhash } from "@/constants/image";
import image from "@/assets/images/index";
import { COLOR } from "@/constants/colors";
import Button from "@/components/ui/button";
import { ArrowLeft, Bell, ChevronLeft, X } from "lucide-react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import SearchItem from "./components/search-item";
import Separator from "@/components/ui/separator";
import PopularKeyword from "./components/search/keyword";
import RecentSearch from "./components/search/recent";

export default function ProductSearch() {
  const [search, setSearch] = React.useState("");
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 10,
          paddingLeft: 10,
          paddingRight: 16,
          backgroundColor: COLOR.PRIMARY,
          gap: 8,
        }}
      >
        <Button
          type="clear"
          containerStyle={{
            borderRadius: 9999,
          }}
          onPress={() => {
            navigation.goBack();
          }}
          buttonStyle={{
            width: 34,
            height: 34,
          }}
          icon={
            <ArrowLeft
              color={"white"}
              style={{
                marginRight: 1.5,
              }}
              size={24}
              strokeWidth={2.3}
            />
          }
        />
        <View
          style={{
            flex: 1,
          }}
        >
          <InputCustom
            initFocus
            hideLeftIcon
            style={{
              marginLeft: 2,
            }}
            placeholder="Find you needed..."
            control={[search, setSearch]}
            customBorder
            onFocus={() => {
              console.log(1);
            }}
          />
        </View>
      </View>
      <ScrollView
        style={{
          backgroundColor: "white",
        }}
        keyboardShouldPersistTaps="handled"
      >
        <SearchItem />
        <Separator />
        <SearchItem />
        <Separator />
        <SearchItem />
        <Separator />
        <SearchItem />
        <Separator />

        <PopularKeyword />
        <RecentSearch />
      </ScrollView>
    </View>
  );
}
