import { View, Text } from "react-native";
import React from "react";
import Modal from "@/components/ui/modal";
import Button from "@/components/ui/button";
import { Camera, Images } from "lucide-react-native";
import { COLOR } from "@/constants/colors";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

export default function ImageTryoutModal({
  control,
}: {
  control: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}) {
  const { navigate } = useNavigation();
  const [open, setOpen] = control;
  const [image, setImage] = React.useState<string | undefined>(undefined);

  const handleCancel = () => {
    console.log("CANCELLED");
    setOpen(true);
  };

  const handleImage = async (action: "TAKE" | "PICK") => {
    setOpen(false); // close the modal

    let result;
    const imageBody = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    } as ImagePicker.ImagePickerOptions;

    if (action === "TAKE") {
      result = await ImagePicker.launchCameraAsync(imageBody);
    } else {
      result = await ImagePicker.launchImageLibraryAsync(imageBody);
    }

    if (result.canceled) {
      handleCancel();
      return;
    }

    setImage(result.assets[0].uri);
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    if (result.canceled) {
      handleCancel();
      return;
    }

    setOpen(false); // close the modal
    setImage(result.assets[0].uri);
  };

  React.useEffect(() => {
    if (image) {
      navigate("productTryout", { image: image });
    }
  }, [image]);

  return (
    <Modal control={[open, setOpen]}>
      <View
        style={{
          paddingHorizontal: 16,
          paddingTop: 18,
          paddingBottom: 12,
        }}
      >
        <Text
          style={{
            fontWeight: "900",
            fontSize: 20,
            paddingBottom: 12,
          }}
        >
          Background photo
        </Text>
        <Button
          onPress={() => {
            handleImage("TAKE");
          }}
          buttonStyle={{
            backgroundColor: "white",
            paddingVertical: 11,
            borderRadius: 6,
          }}
          containerStyle={{
            borderRadius: 6,
            marginBottom: 4,
          }}
          titleStyle={{
            color: COLOR.IN_ACTIVE,
          }}
        >
          <View
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: 14,
            }}
          >
            <Camera color="black" size={24} />
            <Text>Take a photo</Text>
          </View>
        </Button>
        <Button
          onPress={() => {
            handleImage("PICK");
          }}
          buttonStyle={{
            backgroundColor: "white",
            paddingVertical: 11,
            borderRadius: 6,
          }}
          containerStyle={{
            borderRadius: 6,
          }}
          titleStyle={{
            color: COLOR.IN_ACTIVE,
          }}
        >
          <View
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: 14,
            }}
          >
            <Images color="black" size={24} />
            <Text>Upload from Photos</Text>
          </View>
        </Button>
      </View>
    </Modal>
  );
}
