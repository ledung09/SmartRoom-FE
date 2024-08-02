import { View, Text, ActivityIndicator, FlatList } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import Button from "@/components/ui/button";
import { COLOR } from "@/constants/colors";
import { Image } from "expo-image";
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "@/apis/category";
import { blurhash } from "@/constants/image";
import { Skeleton } from "@rneui/themed";

export default function Category() {
  const { isPending, error, data } = useQuery({
    queryKey: ["category"],
    queryFn: getCategory,
  });

  if (isPending)
    return (
      <View
        style={{
          marginVertical: 20,
        }}
      >
        <ActivityIndicator
          size="large"
          color={COLOR.PRIMARY}
          style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
        />
      </View>
    );

  if (error) return <Text>Some error occured</Text>;

  return (
    <ScrollView
      horizontal
      // pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={{
        paddingVertical: 8,
        paddingRight: 4,
        paddingLeft: 4,
      }}
    >
      {data.map((item, index) => (
        <CategoryItem
          label={item.category_name}
          imageUrl={item.picture}
          key={index}
        />
      ))}
    </ScrollView>
  );
}

function CategoryItem({
  label,
  imageUrl,
}: {
  label: string;
  imageUrl: string;
}) {
  return (
    <Button
      titleStyle={{
        color: COLOR.IN_ACTIVE,
      }}
      buttonStyle={{
        backgroundColor: "white",
        paddingHorizontal: 6,
        marginHorizontal: 3,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        borderRadius: 10,
        width: 80,
      }}
      containerStyle={{
        borderRadius: 10,
      }}
    >
      <View
        style={{
          backgroundColor: COLOR.NEW_LIGHT_BLUE,
          height: 56,
          width: 56,
          borderRadius: 9999,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={imageUrl}
          style={{
            height: 40,
            width: 40,
          }}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={500}
        />
      </View>
      <Text
        numberOfLines={1}
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: 12,
        }}
      >
        {label}
      </Text>
    </Button>
  );
}
