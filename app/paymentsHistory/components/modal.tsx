import {
  View,
  Text,
  Pressable,
  Keyboard,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import React from "react";
import Input, { InputCustom } from "@/components/ui/input";
import { CheckBox, ListItem } from "@rneui/themed";
import { DatetimePicker } from "./datetime-picker";
import { ChevronDown, Coins, Wallet, X } from "lucide-react-native";
import MoneyInput from "./input";
import Button from "@/components/ui/button";
import { TouchableOpacity } from "react-native";
import { COLOR } from "@/constants/colors";
import { Shadow } from "react-native-shadow-2";
import MemberDropdown from "./dropdown";

export default function NewPaymentModal() {
  const [isKeyboardVisible, setKeyboardVisible] = React.useState(false);

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text
        style={{
          fontWeight: "900",
          fontSize: 21,
          paddingBottom: 16,
          paddingTop: 18,
          paddingHorizontal: 16,
        }}
      >
        Thanh toán mới
      </Text>

      <ScrollView
        style={{
          flex: 1,
          paddingHorizontal: 16,
        }}
        // onScroll={(event: NativeSyntheticEvent<NativeScrollEvent>) => {
        //   console.log(event.nativeEvent.contentOffset.y);
        // }}
        // scrollEventThrottle={1}
      >
        <TouchableOpacity activeOpacity={1}>
          <PaymentSector />
          <PaymentDay />
          <PaymentMaker />
          <PaymentAmount />
        </TouchableOpacity>
      </ScrollView>
      {!isKeyboardVisible && (
        <Button
          title={"Tạo thanh toán"}
          titleStyle={{
            fontWeight: "700",
            marginRight: 4,
          }}
          containerStyle={{
            marginTop: "auto",
            bottom: 0,
            paddingVertical: 12,
            paddingHorizontal: 16,
          }}
          buttonStyle={{
            borderRadius: 8,
            paddingVertical: 9,
          }}
          icon={
            <Wallet
              style={{
                marginRight: 9,
              }}
              color={"white"}
              size={16}
              strokeWidth={2.2}
            />
          }
        />
      )}
    </View>
  );
}

const sector = [
  {
    index: 0,
    iconStr: "🏸",
    label: "Sinh hoạt",
  },
  {
    index: 1,
    iconStr: "🏆",
    label: "Phí giải",
  },
  {
    index: 2,
    iconStr: "💸",
    label: "Chi tiêu",
  },
];

function PaymentSector() {
  const [selectedIndex, setIndex] = React.useState(0);
  return (
    <View
      style={{
        marginBottom: 18,
      }}
    >
      <Text
        style={{
          // fontWeight: "600",
          fontSize: 14.5,
          marginBottom: 10,
        }}
      >
        Mục thanh toán
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 14,
        }}
      >
        {sector.map((item) => (
          <Pressable
            onPress={() => setIndex(item.index)}
            key={item.index}
            style={{
              backgroundColor:
                selectedIndex === item.index ? COLOR.NEW_LIGHT_BLUE : "white",
              borderRadius: 12,
              paddingVertical: 12,
              // height: 80,
              // width: 80,
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1.5,
              borderColor:
                selectedIndex === item.index ? COLOR.PRIMARY : COLOR.IN_ACTIVE,
            }}
          >
            <Text
              style={{
                fontSize: 18,
              }}
            >
              {item.iconStr}
            </Text>
            <Text
              style={{
                marginTop: 4.5,
                fontSize: 13,
              }}
            >
              {item.label}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

function PaymentDay() {
  return (
    <View
      style={{
        marginBottom: 18,
      }}
    >
      <Text
        style={{
          // fontWeight: "600",
          fontSize: 14.5,
          marginBottom: 10,
        }}
      >
        Ngày thanh toán
      </Text>
      <DatetimePicker />
    </View>
  );
}

function PaymentMaker() {
  return (
    <View
      style={{
        marginBottom: 18,
      }}
    >
      <Text
        style={{
          // fontWeight: "600",
          fontSize: 14.5,
          marginBottom: 10,
        }}
      >
        Người thanh toán
      </Text>
      <MemberDropdown />
    </View>
  );
}

function PaymentAmount() {
  return (
    <View
      style={{
        marginBottom: 18,
      }}
    >
      <Text
        style={{
          // fontWeight: "600",
          fontSize: 14.5,
          marginBottom: 10,
        }}
      >
        Số tiền thanh toán
      </Text>
      <MoneyInput />
    </View>
  );
}
