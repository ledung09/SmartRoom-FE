import { View, Text } from "react-native";
import React from "react";
import Modal from "@/components/ui/modal";
import Button from "@/components/ui/button";
import { COLOR } from "@/constants/colors";
import {
  CreditCard,
  Minus,
  MoveDownRight,
  MoveRight,
  MoveUpRight,
  ShoppingBasket,
  Tag,
} from "lucide-react-native";
import { FILTER_STATUS } from "@/constants/enum";

function nextFilterStatus(status: FILTER_STATUS): FILTER_STATUS {
  switch (status) {
    case FILTER_STATUS.NONE:
      return FILTER_STATUS.UP;

    case FILTER_STATUS.UP:
      return FILTER_STATUS.DOWN;

    default:
      return FILTER_STATUS.NONE;
  }
}

export default function ProductSearchFilterModal({
  control,
}: {
  control: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}) {
  const [open, setOpen] = control;
  const [filter, setFilter] = React.useState<{
    price: FILTER_STATUS;
    sold: FILTER_STATUS;
  }>({
    price: FILTER_STATUS.NONE,
    sold: FILTER_STATUS.NONE,
  });

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
          Filter
        </Text>
        <Button
          onPress={() => {
            setFilter((filter) => ({
              ...filter,
              price: nextFilterStatus(filter.price),
            }));
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
            <Tag color="black" size={24} />
            <Text>Price</Text>
          </View>
          {filter.price === FILTER_STATUS.NONE && (
            <Minus color={"black"} size={24} strokeWidth={3} />
          )}
          {filter.price === FILTER_STATUS.UP && (
            <MoveUpRight color={COLOR.SECONDARY} size={24} strokeWidth={2.5} />
          )}
          {filter.price === FILTER_STATUS.DOWN && (
            <MoveDownRight color={"red"} size={24} strokeWidth={2.5} />
          )}
        </Button>
        <Button
          onPress={() => {
            setFilter((filter) => ({
              ...filter,
              sold: nextFilterStatus(filter.sold),
            }));
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
            <ShoppingBasket color="black" size={24} />
            <Text>Sold</Text>
          </View>
          {filter.sold === FILTER_STATUS.NONE && (
            <Minus color={"black"} size={24} strokeWidth={3} />
          )}
          {filter.sold === FILTER_STATUS.UP && (
            <MoveUpRight color={COLOR.SECONDARY} size={24} strokeWidth={2.5} />
          )}
          {filter.sold === FILTER_STATUS.DOWN && (
            <MoveDownRight color={"red"} size={24} strokeWidth={2.5} />
          )}
        </Button>
      </View>
      <Button
        title={"Apply"}
        titleStyle={{
          fontWeight: "700",
          marginRight: 4,
        }}
        containerStyle={{
          marginTop: "auto",
          bottom: 0,
          paddingBottom: 12,
          paddingTop: 4,
          paddingHorizontal: 16,
        }}
        buttonStyle={{
          borderRadius: 8,
          paddingVertical: 9,
        }}
      />
    </Modal>
  );
}
