import { View, Text, ScrollView, Dimensions, Pressable } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { blurhash } from "@/constants/image";
import Button from "../../../components/ui/button";
import { Camera } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { useCameraPermissions } from "expo-camera";
import Dialogs from "@/components/ui/dialog";

const windowWidth = Dimensions.get("window").width;
const imageHeight = 320;
const photoButtonWidth = 152;

export default function ImageCarousel() {
  const [isDialogOn, setIsDialogOn] = React.useState(true);
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    // setIsDialogOn(true);
  }

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
        <ImageCarouselItem />
        <ImageCarouselItem />
        <ImageCarouselItem />
      </ScrollView>
    </>
  );
}

function ImageCarouselItem() {
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
        source="https://m.media-amazon.com/images/I/81mlWpZkDFL._AC_UF894,1000_QL80_.jpg"
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
              const permission = await requestPermission();
              if (permission?.granted) {
                // @ts-ignore
                navigate("productTryout");
              }
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
