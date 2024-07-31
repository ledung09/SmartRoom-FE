import React, { useState } from "react";
import { Button, Dialog, CheckBox, ListItem, Avatar } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";
import { COLOR } from "@/constants/colors";

interface DialogComponentProps {
  control: [
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  ];
  title: string;
  confirm: () => void;
  children: React.ReactNode;
  activeButtonText: string[];
}

const Dialogs: React.FunctionComponent<DialogComponentProps> = ({
  control,
  title,
  confirm,
  children,
  activeButtonText,
}) => {
  const [isOpen, setIsOpen] = control;

  const handleSetIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Dialog
      isVisible={isOpen}
      onBackdropPress={handleSetIsOpen}
      overlayStyle={{
        borderRadius: 10,
        paddingTop: 16,
        paddingBottom: 12,
        paddingLeft: 20,
        paddingRight: 10,
      }}
      backdropStyle={{
        backgroundColor: "black",
        opacity: 0.5,
      }}
    >
      <Dialog.Title
        title={title}
        titleStyle={{
          fontSize: 16,
          fontWeight: "900",
        }}
      />
      <View
        style={{
          marginRight: 12,
          marginBottom: 2,
        }}
      >
        {children}
      </View>

      <Dialog.Actions>
        <Button
          title={activeButtonText[1]}
          onPress={() => {
            confirm();
          }}
          type="clear"
          titleStyle={{
            color: COLOR.PRIMARY,
            fontWeight: "700",
            fontSize: 13.5,
          }}
          buttonStyle={{
            marginLeft: 8,
            marginRight: 5,
            borderRadius: 12,
          }}
        />
        <Button
          title={activeButtonText[0]}
          onPress={() => {
            setTimeout(() => handleSetIsOpen(), 100);
          }}
          type="clear"
          titleStyle={{
            color: "red",
            fontWeight: "700",
            fontSize: 13.5,
          }}
          buttonStyle={{
            borderRadius: 12,
          }}
        />
      </Dialog.Actions>
    </Dialog>
  );
};

export default Dialogs;
