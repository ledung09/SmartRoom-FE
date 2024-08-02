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
import {
  ChevronDown,
  Coins,
  Minus,
  Plus,
  Wallet,
  X,
} from "lucide-react-native";
import Button from "@/components/ui/button";
import { TouchableOpacity } from "react-native";
import { COLOR } from "@/constants/colors";
import { Shadow } from "react-native-shadow-2";
import Separator from "@/components/ui/separator";
import { Image } from "expo-image";
import { blurhash } from "@/constants/image";

export default function CheckoutModal() {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 32,
      }}
    >
      <ScrollView
        style={{
          flex: 1,
          paddingHorizontal: 16,
        }}
      >
        <TouchableOpacity activeOpacity={1}>
          <ItemDetailSection />
          <Separator />
          <QuantitySection />
        </TouchableOpacity>
      </ScrollView>

      <Button
        title={"Proceed to Checkout"}
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
      />
    </View>
  );
}

function ItemDetailSection() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        marginBottom: 16,
        paddingRight: 42,
      }}
    >
      <Image
        source="https://m.media-amazon.com/images/I/81mlWpZkDFL._AC_UF894,1000_QL80_.jpg"
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={500}
        style={{
          height: 80,
          width: 80,
          borderRadius: 8,
        }}
      />
      <View
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Text
          numberOfLines={1}
          style={{
            fontWeight: "600",
            fontSize: 13.5,
          }}
        >
          Chiếc ghế siêu dài và to Chiếc ghế siêu dài và to
        </Text>
        
        <Text
          style={{
            fontWeight: "600",
            fontSize: 18,
            color: COLOR.PRIMARY,
            marginTop: 4,
          }}
        >
          100,000
          <Text
            style={{
              fontSize: 16,
            }}
          >
            ₫
          </Text>
        </Text>
      </View>
    </View>
  );
}

function QuantitySection() {
  const [count, setCount] = React.useState(1);
  return (
    <View
      style={{
        marginTop: 12,
        marginBottom: 16,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            // fontWeight: "600",
            fontSize: 14.5,
          }}
        >
          Quantity
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 18,
            alignItems: "center",
          }}
        >
          <Button
            disabled={count === 1}
            onPress={() => {
              setCount(count - 1);
            }}
            type="outline"
            buttonStyle={{
              borderRadius: 12,
              paddingHorizontal: 7,
              paddingVertical: 7,
            }}
            containerStyle={{
              borderRadius: 12,
              marginLeft: 2,
            }}
            titleStyle={{
              color: COLOR.PRIMARY,
            }}
            icon={<Minus color={COLOR.PRIMARY} size={18} strokeWidth={2.5} />}
          />
          <Text
            style={{
              fontWeight: "600",
              fontSize: 14.5,
            }}
          >
            {count}
          </Text>
          <Button
            onPress={() => {
              setCount(count + 1);
            }}
            buttonStyle={{
              borderRadius: 12,
              paddingHorizontal: 7,
              paddingVertical: 7,
            }}
            containerStyle={{
              borderRadius: 12,
              marginRight: 2,
            }}
            icon={<Plus color={"white"} size={18} strokeWidth={2.5} />}
          />
        </View>
      </View>
    </View>
  );
}
