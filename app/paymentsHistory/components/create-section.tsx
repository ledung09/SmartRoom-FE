import Modal from "@/components/ui/modal";
import { COLOR } from "@/constants/colors";
import { useNavigation } from "@react-navigation/native";
import { Button, Text } from "@rneui/themed";
import { Landmark, PiggyBank, Wallet } from "lucide-react-native";
import React from "react";
import { View } from "react-native";
import { Shadow } from "react-native-shadow-2";
import NewPaymentModal from "./modal";

export default function CreateNewSection() {
  const [isOpen, setIsOpen] = React.useState(false);
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
              setIsOpen(true);
            }}
            title={"Tạo thanh toán mới"}
            titleStyle={{
              fontWeight: "700",
              marginRight: 4,
            }}
            buttonStyle={{
              borderRadius: 8,
              paddingVertical: 9,
            }}
          />
        </View>
      </Shadow>
      <Modal control={[isOpen, setIsOpen]} height="75%">
        <NewPaymentModal />
      </Modal>
    </>
  );
}
