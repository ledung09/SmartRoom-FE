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
import image from "@/assets/images/index";
import { COLOR } from "@/constants/colors";
import Button from "@/components/ui/button";
import { ArrowLeft, Bell, ChevronLeft, Filter, X } from "lucide-react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import SearchItem from "./components/search-item";
import Separator from "@/components/ui/separator";
import PopularKeyword from "./components/search/keyword";
import RecentSearch from "./components/search/recent";
import { debounce } from "@/util/debounce";
import { searchProduct } from "@/apis/es";
import LocalStorage from "@/util/local-storage";
import ShopItem from "@/components/common/item";
import CategoryCarousel from "./components/carousel";
import ProductSearchFilterModal from "./components/modal";

export default function ProductSearchResult() {
  const [query, setQuery] = React.useState("Hellu");
  const [result, setResult] = React.useState<string[]>([]);
  const [open, setOpen] = React.useState(false);

  const navigation = useNavigation();

  const fetchResults = async (searchQuery: string) => {
    const result = await searchProduct(searchQuery);
    setResult(result);
  };

  const debouncedFetchResults = React.useCallback(debounce(fetchResults), []);

  React.useEffect(() => {
    if (query) {
      debouncedFetchResults(query);
    } else setResult([]);
  }, [query]);

  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 10,
            paddingLeft: 10,
            paddingRight: 14,
            backgroundColor: COLOR.PRIMARY,
            gap: 6,
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
              position: "relative",
            }}
          >
            <InputCustom
              hideX
              hideLeftIcon
              style={{
                marginLeft: 2,
              }}
              placeholder="Find you needed..."
              control={[query, setQuery]}
              value={query}
              customBorder
              onFocus={() => {}}
              returnKeyType="previous"
              onSubmitEditing={async () => {
                if (query) {
                  await LocalStorage.addLocalStorage("recentSearch", query);
                }
              }}
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
                navigation.navigate("productSearch");
              }}
            />
          </View>
          <Button
            title={"1"}
            titleStyle={{
              fontSize: 9,
              position: "absolute",
              right: 6.5,
              bottom: 0,
            }}
            type="clear"
            containerStyle={{
              borderRadius: 9999,
              marginLeft: 1,
            }}
            onPress={() => {
              setOpen(true);
            }}
            buttonStyle={{
              width: 34,
              height: 34,
            }}
            icon={
              <Filter
                color={"white"}
                style={{
                  marginTop: 1.5,
                  marginRight: 1.5,
                }}
                size={20}
                strokeWidth={2}
              />
            }
          />
        </View>

        <CategoryCarousel />
        <ScrollView
          style={{
            backgroundColor: "white",
          }}
          keyboardShouldPersistTaps="handled"
        >
          <View
            style={{
              paddingHorizontal: 16,
              marginVertical: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 12,
              }}
            >
              <ShopItem />
              <ShopItem />
            </View>
          </View>
        </ScrollView>
      </ScrollView>
      <ProductSearchFilterModal control={[open, setOpen]} />
    </>
  );
}
