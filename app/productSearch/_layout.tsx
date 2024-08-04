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
import { debounce } from "@/util/debounce";
import { searchProductAutocomplete } from "@/apis/es";
import LocalStorage from "@/util/local-storage";
import { useQuery } from "@tanstack/react-query";

export default function ProductSearch() {
  const [query, setQuery] = React.useState("");
  const [debounceQuery, setDebounceQuery] = React.useState("");
  const navigation = useNavigation();

  const { data } = useQuery({
    queryKey: ["autocomplete", debounceQuery],
    queryFn: () => searchProductAutocomplete(debounceQuery),
  });

  const debouncedFetchResults = React.useCallback(
    debounce((searchQuery) => setDebounceQuery(searchQuery), 400),
    []
  );

  React.useEffect(() => {
    if (query) {
      debouncedFetchResults(query);
    }
  }, [query]);

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
          }}
        >
          <InputCustom
            initFocus
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
        </View>
      </View>
      <ScrollView
        style={{
          backgroundColor: "white",
        }}
        keyboardShouldPersistTaps="handled"
      >
        {query ? (
          <>
            {data &&
              data.map((item, index) => (
                <SearchItem value={[item, query]} key={index} />
              ))}
          </>
        ) : (
          <>
            <PopularKeyword />
            <RecentSearch />
          </>
        )}
      </ScrollView>
    </View>
  );
}
