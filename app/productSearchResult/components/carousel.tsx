import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { Image } from "expo-image";
import { blurhash } from "@/constants/image";

import { Camera } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import Dialogs from "@/components/ui/dialog";
import Button from "@/components/ui/button";
import { COLOR } from "@/constants/colors";
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "@/apis/category";
import CategoryLoadingSmall from "./loading";

export default function CategoryCarousel() {
  const { isPending, error, data } = useQuery({
    queryKey: ["category"],
    queryFn: getCategory,
  });

  if (error) return <Text>Some error occured</Text>;

  return isPending ? (
    <View
      style={{
        paddingVertical: 12,
        backgroundColor: "white",
        flexDirection: "row",
        gap: 12,
        paddingHorizontal: 10,
      }}
    >
      <CategoryLoadingSmall />
      <CategoryLoadingSmall />
      <CategoryLoadingSmall />
      <CategoryLoadingSmall />
    </View>
  ) : (
    <View>
      <ScrollView
        style={{
          backgroundColor: "white",
          paddingVertical: 11,
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        // onMomentumScrollEnd={(event) =>
        //   console.log(event.nativeEvent.contentOffset.x)
        // }
      >
        {data.map((item, index, array) => (
          <CategoryCarouselItem
            key={item.category_id}
            label={item.category_name}
            index={{
              index,
              len: array.length,
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
}

function CategoryCarouselItem({
  label,
  index,
}: {
  label: string;
  index: {
    index: number;
    len: number;
  };
}) {
  const [selected, setSelected] = React.useState(false);
  const { navigate } = useNavigation();

  return (
    <Pressable
      style={[
        {
          marginHorizontal: 4,
          borderRadius: 6,
          paddingVertical: 5,
          paddingHorizontal: 12,
          borderWidth: 1.25,
          borderColor: selected ? COLOR.PRIMARY : COLOR.IN_ACTIVE,
          backgroundColor: selected ? COLOR.NEW_LIGHT_BLUE : "white",
        },
        {
          marginLeft: index.index === 0 ? 8 : 4,
          marginRight: index.index === index.len - 1 ? 8 : 4,
        },
      ]}
      onPress={() => setSelected(!selected)}
    >
      <Text
        style={{
          fontSize: 13,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}
