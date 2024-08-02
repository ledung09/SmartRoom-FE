import { View, Text, ScrollView, Dimensions, Pressable } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { blurhash } from "@/constants/image";

import { Camera } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { useCameraPermissions } from "expo-camera";
import Dialogs from "@/components/ui/dialog";
import Button from "@/components/ui/button";
import ImageTryoutModal from "./tryout-modal";
import { useProductDetail } from "../../hooks/useProductDetail";

const windowWidth = Dimensions.get("window").width;
const imageHeight = 320;
const photoButtonWidth = 152;

export default function ImageCarousel() {
  const { data, error, isPending } = useProductDetail();

  const [open, setOpen] = React.useState(false); // modal control
  // const [isDialogOn, setIsDialogOn] = React.useState(true);
  const [permission, requestPermission] = useCameraPermissions();

  // Camera permissions are still loading.
  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    // setIsDialogOn(true);
  }

  if (isPending) return <Text>There is loading</Text>;
  if (error) return <Text>There is err</Text>;

  return (
    <>
      {/* <Dialogs
        control={[isDialogOn, setIsDialogOn]}
        title="Camera Permission"
        confirm={() => {
          requestPermission();
        }}
        activeButtonText={["Deny", "Allow"]}
      >
        <View>
          <Text>
            Allow{" "}
            <Text
              style={{
                fontWeight: "700",
              }}
            >
              Smart Room
            </Text>{" "}
            would like to access the camera
          </Text>
        </View>
      </Dialogs> */}
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) =>
          console.log(event.nativeEvent.contentOffset.x)
        }
      >
        {data?.image.map((item, index) => (
          <ImageCarouselItem setOpen={setOpen} image={item} key={index} />
        ))}
      </ScrollView>
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
  const { navigate } = useNavigation();
  const [permission, requestPermission] = useCameraPermissions();

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
          borderTopRightRadius: 6,
          borderTopLeftRadius: 6,
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
            icon={<Camera color={"white"} size={24} />}
            title="Try it out"
          />
        </>
      )}
    </Pressable>
  );
}
