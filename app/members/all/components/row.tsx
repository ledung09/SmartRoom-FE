import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { COLOR } from "@/constants/colors";
import { useNavigation } from "@react-navigation/native";
import { useMemberInfoBottomSheet } from "@/hooks/context/memberInfoContext";
import { ChevronRight } from "lucide-react-native";
import Modal from "../../../../components/ui/modal";

export default function AllMemberRow() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsOpen(true)}
        style={{
          paddingHorizontal: 4,
          paddingVertical: 16,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            paddingHorizontal: 4,
          }}
        >
          <Text
            style={{
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: 0.25,
            }}
          >
            Đinh Lê Dũng
          </Text>
          <Text
            style={{
              color: COLOR.SLATE,
              fontSize: 11,
            }}
          >
            Đã đóng tiền: 19/10/2023
          </Text>
        </View>
        <View>
          <ChevronRight size={28} color={COLOR.IN_ACTIVE} strokeWidth={2} />
        </View>
      </TouchableOpacity>
      <Modal control={[isOpen, setIsOpen]} height={"50%"}>
        <ScrollView
          style={{
            flex: 1,
            paddingHorizontal: 16,
            paddingTop: 18,
          }}
          // onScroll={(event: NativeSyntheticEvent<NativeScrollEvent>) => {
          //   console.log(event.nativeEvent.contentOffset.y);
          // }}
          // scrollEventThrottle={1}
        >
          <Text>1</Text>
        </ScrollView>
      </Modal>
    </>
  );
}

// paddingTop: 18,
// paddingHorizontal: 16,
