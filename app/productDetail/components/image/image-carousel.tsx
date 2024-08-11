import { View, Text, ScrollView, Dimensions, Pressable } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { blurhash } from "@/constants/image";

import { Camera, WandSparkles } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { useCameraPermissions } from "expo-camera";
import Dialogs from "@/components/ui/dialog";
import Button from "@/components/ui/button";
import ImageTryoutModal from "./tryout-modal";
import { useProductDetail } from "../../hooks/useProductDetail";
import Skeleton from "@/components/ui/skeleton";

const windowWidth = Dimensions.get("window").width;
const imageHeight = 320;
const photoButtonWidth = 152;

export default function ImageCarousel() {
  const { data, error, isPending } = useProductDetail();

  const [open, setOpen] = React.useState(false); // modal control

  if (error) return <Text>There is err</Text>;

  return (
    <>
      {isPending ? (
        <Skeleton
          style={{
            height: imageHeight,
            width: "100%",
          }}
        />
      ) : (
        <View>
          <ScrollView
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(event) =>
              console.log(event.nativeEvent.contentOffset.x)
            }
          >
            {data!.image.map((item, index) => (
              <ImageCarouselItem setOpen={setOpen} image={item} key={index} />
            ))}
          </ScrollView>
        </View>
      )}
      <ImageTryoutModal control={[open, setOpen]} />
    </>
  );
}

function ImageCarouselItem({
  image,
  setOpen,
}: {
  image: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [backdrop, setBackdrop] = React.useState(false);

  return (
    <Pressable
      style={{
        position: "relative",
      }}
      onPress={() => setBackdrop(true)}
    >
      <Image
        source={image}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={500}
        style={{
          height: imageHeight,
          width: windowWidth,
        }}
      />
      {backdrop && (
        <>
          <Pressable
            style={{
              position: "absolute",
              backgroundColor: "black",
              height: imageHeight,
              width: windowWidth,
              opacity: 0.5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => setBackdrop(false)}
          />
          <Button
            onPress={async () => {
              // const permission = await requestPermission();
              // if (permission?.granted) {
              //   // @ts-ignore
              //   navigate("productTryout");
              // }
              setOpen(true);
            }}
            containerStyle={{
              borderRadius: 25,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: [
                { translateY: -20 },
                { translateX: -photoButtonWidth / 2 },
              ],
            }}
            buttonStyle={{
              width: photoButtonWidth,
              paddingHorizontal: 16,
              paddingVertical: 10,
              borderRadius: 25,
            }}
            titleStyle={{
              fontWeight: "700",
              marginRight: 4,
              marginLeft: 10,
              fontSize: 14.5,
            }}
            icon={<WandSparkles color={"white"} size={22} />}
            title="Try it out"
          />
        </>
      )}
    </Pressable>
  );
}
