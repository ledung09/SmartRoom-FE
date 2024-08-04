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

export default function CategoryCarousel() {
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
    <View>
      <ScrollView
        style={{
          backgroundColor: "red",
          paddingVertical: 10,
          paddingHorizontal: 8,
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) =>
          console.log(event.nativeEvent.contentOffset.x)
        }
      >
        {data.map((item) => (
          <CategoryCarouselItem
            key={item.category_id}
            label={item.category_name}
          />
        ))}
      </ScrollView>
    </View>
  );
}

function CategoryCarouselItem({ label }: { label: string }) {
  const [selected, setSelected] = React.useState(false);
  const { navigate } = useNavigation();

  return (
    <Pressable
      style={{
        marginHorizontal: 4,
        borderRadius: 6,
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderWidth: 1.25,
        borderColor: selected ? COLOR.PRIMARY : COLOR.IN_ACTIVE,
        backgroundColor: selected ? COLOR.NEW_LIGHT_BLUE : "white",
      }}
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
