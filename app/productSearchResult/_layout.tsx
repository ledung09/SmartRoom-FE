import Input, { InputCustom } from "@/components/ui/input";
import {
  StyleSheet,
  Platform,
  Text,
  ScrollView,
  View,
  Pressable,
  FlatList,
} from "react-native";

import { COLOR } from "@/constants/colors";
import Button from "@/components/ui/button";
import { ArrowLeft, Bell, ChevronLeft, Filter, X } from "lucide-react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { searchProduct, searchProductAutocomplete } from "@/apis/es";
import LocalStorage from "@/util/local-storage";
import ShopItem from "@/components/common/item";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { ProductSearchFilter, ProductShortDetail } from "@/types/product";
import ProductSearchFilterModal from "./components/modal";
import CategoryCarousel from "./components/carousel";
import Skeleton from "@/components/ui/skeleton";
import ProductListLoading from "@/components/common/itemlist-loading";

export default function ProductSearchResult({ route }) {
  const { userQuery } = route.params.filter;

  const queryClient = useQueryClient();
  const navigation = useNavigation();

  const [query, setQuery] = React.useState(userQuery);
  const [open, setOpen] = React.useState(false);
  const [filter, setFilter] = React.useState<ProductSearchFilter>({
    offset: 0,
    query,
  });

  const { data, fetchNextPage, hasNextPage, isLoading, isFetching } =
    useInfiniteQuery({
      queryKey: ["productSearchList"],
      queryFn: (defaultProps) => searchProduct(filter, defaultProps),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPage) => {
        if (lastPage.length === 0) return undefined;
        return allPage.length + 1;
      },
    });

  const dataArr = data?.pages.map((page) => page).flat();

  // const temp = data?.pages.map((page) => page).flat();

  // const dataArr = temp ? temp.concat(temp).concat(temp) : undefined;

  const onEndReach = () => {
    if (hasNextPage && !isLoading) {
      fetchNextPage();
    }
  };

  return (
    <>
      {/* <Button
        title={"reset me"}
        onPress={async () => {
          await queryClient.resetQueries({
            queryKey: ["productSearchList"],
            exact: true,
          });
        }}
      ></Button> */}
      {/* <Text>{JSON.stringify(dataArr)}</Text> */}
      <View style={{ flex: 1, backgroundColor: "white" }}>
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
              selection={{
                start: 0,
                end: 0,
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
                // navigation.navigate("productSearch");
                navigation.goBack();
              }}
            />
          </View>
          <Button
            title={"0"}
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

        {isFetching ? (
          <ProductListLoading />
        ) : (
          <FlatList
            onEndReached={onEndReach}
            onEndReachedThreshold={0.5}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => <ShopItem detail={item} />}
            data={dataArr}
            style={{
              backgroundColor: "white",
              flex: 1,
              marginBottom: 8,
            }}
            numColumns={2}
            columnWrapperStyle={{ marginHorizontal: 10, paddingVertical: 6 }}
          />
        )}
      </View>
      <ProductSearchFilterModal control={[open, setOpen]} />
    </>
  );
}
