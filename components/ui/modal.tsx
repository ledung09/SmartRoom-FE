import {
  View,
  Text,
  Pressable,
  DimensionValue,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { default as RNEModal } from "react-native-modal";
import GestureRecognizer from "react-native-swipe-gestures";
import { X } from "lucide-react-native";
import { COLOR } from "@/constants/colors";
import Button from "@/components/ui/button";

export default function Modal({
  control: [isOpen, setIsOpen],
  children,
  height,
}: {
  control: [
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  ];
  children: React.ReactNode;
  height?: DimensionValue;
}) {
  const closeModal = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  return isOpen ? (
    <RNEModal
      statusBarTranslucent={true}
      avoidKeyboard
      animationInTiming={200}
      isVisible={isOpen}
      onSwipeComplete={closeModal}
      onBackdropPress={closeModal}
      backdropTransitionOutTiming={0}
      style={{
        position: "relative",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 0,
      }}
    >
      <View
        style={{
          height,
          backgroundColor: "white",
          bottom: 0,
          left: 0,
          right: 0,
          position: "absolute",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
      >
        <Pressable
          style={{
            position: "absolute",
            top: 6,
            right: 6,
            paddingTop: 6,
            paddingRight: 6,
            zIndex: 9999,
          }}
          onPress={closeModal}
        >
          <Button
            onPress={closeModal}
            type="clear"
            titleStyle={{
              color: COLOR.IN_ACTIVE,
            }}
            buttonStyle={{
              width: 36,
              height: 36,
            }}
            containerStyle={{
              borderRadius: 9999,
            }}
            icon={<X color={COLOR.IN_ACTIVE} strokeWidth={2.5} size={28} />}
          />
        </Pressable>
        {children}
      </View>
    </RNEModal>
  ) : (
    <></>
  );
}
