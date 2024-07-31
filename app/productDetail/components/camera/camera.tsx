import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  BackHandler,
} from "react-native";
import React from "react";
import { Camera, CameraType, CameraView } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

import { Image } from "expo-image";
import { Button } from "@rneui/themed";
import {
  ArrowLeft,
  Flashlight,
  Images,
  ImageUp,
  SwitchCamera,
  X,
} from "lucide-react-native";
import { useNavigation } from "expo-router";
import CameraExit from "./camera-exit";
import CameraTorch from "./camera-torch";
import CameraFace from "./camera-face";
import ImagePickerTryout from "../image/image-picker";
import * as ImagePicker from "expo-image-picker";

const windowHeight = Dimensions.get("window").height;

export default function ProductTryoutCamera({
  image,
}: {
  image: string | undefined;
}) {
  // React.useEffect(() => {
  //   const backAction = () => {
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backAction
  //   );

  //   return () => backHandler.remove();
  // }, []);

  // const [torch, setTorch] = React.useState(false);
  // const [facing, setFacing] = React.useState<CameraType>("back");
  // const [zoom, setZoom] = React.useState(0);

  // const [editorVisible, setEditorVisible] = React.useState(false);

  // const cameraRef = React.useRef<CameraView>(null);

  // async function takePicture() {
  //   // setFacing((current) => (current === "back" ? "front" : "back"));

  //   const data = await cameraRef.current?.takePictureAsync({
  //     quality: 1,
  //   });
  //   const uri = data?.uri;
  //   setImage(uri);
  //   if (uri) await MediaLibrary.saveToLibraryAsync(uri);
  // }

  return (
    <View
      style={{
        height: windowHeight,
      }}
    >
      {image ? (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <Image
            source={image}
            style={{
              flex: 1,
            }}
          />
        </View>
      ) : (
        <>
          <Text>123</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },

  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },

  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
