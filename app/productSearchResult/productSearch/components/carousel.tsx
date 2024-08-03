import { View, Text, ScrollView, Dimensions, Pressable } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { blurhash } from "@/constants/image";

import { Camera } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import Dialogs from "@/components/ui/dialog";
import Button from "@/components/ui/button";
import { COLOR } from "@/constants/colors";

export default function CategoryCarousel() {
  const [open, setOpen] = React.useState(false); // modal control

  return (
    <ScrollView
      style={{
        paddingVertical: 10,
        paddingHorizontal: 8,
      }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      onMomentumScrollEnd={(event) =>
        console.log(event.nativeEvent.contentOffset.x)
      }
    >
      <CategoryCarouselItem />
      <CategoryCarouselItem />
      <CategoryCarouselItem />
      <CategoryCarouselItem />
      <CategoryCarouselItem />
      <CategoryCarouselItem />
    </ScrollView>
  );
}

function CategoryCarouselItem() {
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
        Bathroom
      </Text>
    </Pressable>
  );
}
