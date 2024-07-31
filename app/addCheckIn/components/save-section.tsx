import { COLOR } from "@/constants/colors";
import { Button, Text } from "@rneui/themed";
import { Save } from "lucide-react-native";
import React from "react";
import { View } from "react-native";
import { Shadow } from "react-native-shadow-2";
import Dialogs from "./dialog";

export default function SaveSection() {
  const [isDialogOn, setIsDialogOn] = React.useState(false);

  return (
    <>
      <Shadow
        style={[
          {
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
            gap: 12,
            paddingHorizontal: 16,
            paddingVertical: 12,
          },
          {
            elevation: 24,
            shadowColor: "#000",
            shadowOpacity: 0.6,
            shadowRadius: 20,
            shadowOffset: {
              width: 0,
              height: 24,
            },
          },
        ]}
        distance={6}
        startColor={COLOR.LIGHT_SHADOW}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Button
            onPress={() => {
              setIsDialogOn(true);
            }}
            title={"Lưu thay đổi"}
            titleStyle={{
              fontWeight: "700",
              marginRight: 4,
            }}
            buttonStyle={{
              borderRadius: 8,
              paddingVertical: 9,
            }}
            icon={
              <Save
                style={{
                  marginRight: 8,
                }}
                color={"white"}
                size={16}
                strokeWidth={2.2}
              />
            }
          />
        </View>
      </Shadow>
      <Dialogs
        control={[isDialogOn, setIsDialogOn]}
        title="Lưu thay đổi"
        confirm={() => {
          console.log(123);
        }}
      >
        <Text style={{ textAlign: "justify" }}>
          Bạn có muốn lưu các thay đổi này không?
        </Text>
      </Dialogs>
    </>
  );
}
