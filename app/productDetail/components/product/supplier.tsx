import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { COLOR } from "@/constants/colors";
import Button from "@/components/ui/button";
import { blurhash } from "@/constants/image";
import { useProductDetail } from "../../hooks/useProductDetail";

export default function ProductSupplier() {
  const { data, error, isPending } = useProductDetail();

  if (isPending) return <Text>There is loading</Text>;
  if (error) return <Text>There is err</Text>;

  return (
    <>
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
            source={data?.supplier_image}
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
            gap: 3,
            marginRight: 6,
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              fontSize: 13,
            }}
          >
            {data?.supplier_name}
          </Text>
          <View
            style={{
              display: "flex",
              alignContent: "center",
              flexDirection: "row",
              gap: 2,
            }}
          >
            <Text
              numberOfLines={1}
              style={{
                color: COLOR.SLATE,
                fontSize: 11.5,
              }}
            >
              {data?.supplier_type_goods}
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
            {data?.supplier_product_count}
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
            {data?.supplier_rating}
          </Text>
          <Text> rating</Text>
        </Text>
      </View>
    </>
  );
}
