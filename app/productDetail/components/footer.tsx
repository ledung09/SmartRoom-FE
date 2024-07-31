import Modal from "@/components/ui/modal";
import { COLOR } from "@/constants/colors";
import { Button, Text } from "@rneui/themed";
import { Save, ShoppingCart } from "lucide-react-native";
import React from "react";
import { View } from "react-native";
import { Shadow } from "react-native-shadow-2";
import CheckoutModal from "./checkout-modal";

export default function ProductDetailFooter() {
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
            display: "flex",
            flexDirection: "row",
            gap: 12,
          }}
        >
          <Button
            type="outline"
            onPress={() => {}}
            title={"Add to Cart"}
            titleStyle={{
              fontWeight: "700",
              marginRight: 4,
              color: COLOR.PRIMARY,
            }}
            buttonStyle={{
              borderRadius: 8,
              paddingVertical: 9,
            }}
            containerStyle={{
              borderRadius: 8,
              flex: 1,
            }}
            icon={
              <ShoppingCart
                style={{
                  marginRight: 8,
                }}
                color={COLOR.PRIMARY}
                size={16}
                strokeWidth={2.2}
              />
            }
          />

          <Button
            onPress={() => {
              setIsOpen(true);
            }}
            title={"Checkout"}
            titleStyle={{
              fontWeight: "700",
            }}
            buttonStyle={{
              borderRadius: 8,
              paddingVertical: 9,
            }}
            containerStyle={{
              flex: 1,
            }}
          />
        </View>
      </Shadow>
      <Modal control={[isOpen, setIsOpen]}>
        <CheckoutModal />
      </Modal>
    </>
  );
}
