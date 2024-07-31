import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import {
  Camera,
  CameraType,
  CameraView,
  useCameraPermissions,
} from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { Button } from "react-native";
import { Image } from "expo-image";

const windowHeight = Dimensions.get("window").height;

export default function ProductTryoutCamera() {
  const [facing, setFacing] = React.useState<CameraType>("back");
  const [image, setImage] = React.useState<string | undefined>(undefined);
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = React.useRef<CameraView>(null);

  async function takePicture() {
    // setFacing((current) => (current === "back" ? "front" : "back"));
    const data = await cameraRef.current?.takePictureAsync();
    const uri = data?.uri;
    setImage(uri);
    if (uri) await MediaLibrary.saveToLibraryAsync(uri);
  }

  return (
    <View
      style={{
        height: windowHeight,
        position: "relative",
      }}
    >
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <CameraView
          style={{
            flex: 1,
          }}
          facing={facing}
          ref={cameraRef}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              backgroundColor: "transparent",
              margin: 64,
            }}
          >
            <View
              style={{
                width: 64,
                height: 64,
                borderRadius: 9999,
                borderColor: "white",
                borderWidth: 4,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "flex-end",
                marginHorizontal: "auto",
              }}
            >
              <TouchableOpacity onPress={takePicture}>
                <View
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 9999,
                    backgroundColor: "white",
                  }}
                ></View>
              </TouchableOpacity>
            </View>
          </View>
        </CameraView>
      </View>
      {image && (
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
