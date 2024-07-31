import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { MultiSelect } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { COLOR } from "@/constants/colors";
import { ChevronDown, ChevronUp, Users } from "lucide-react-native";

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];

const MemberDropdown = () => {
  const [selected, setSelected] = useState([]);
  const [focused, setFocused] = React.useState(false);

  const handleSelect = () => {
    setFocused(!focused);
  };

  return (
    <View>
      <MultiSelect
        onFocus={() => handleSelect()}
        onBlur={() => handleSelect()}
        activeColor={COLOR.NEW_LIGHT_BLUE}
        itemContainerStyle={{
          // backgroundColor: "red",
          paddingVertical: 10,
          paddingHorizontal: 16,
          borderLeftWidth: 2.5,
          borderLeftColor: "white",
          marginBottom: 0,
        }}
        itemTextStyle={{
          padding: 0,
          margin: 0,
          fontSize: 14,
        }}
        style={{
          height: 40,
          backgroundColor: "transparent",
          borderColor: focused ? COLOR.PRIMARY : COLOR.IN_ACTIVE,
          borderRadius: 10,
          paddingHorizontal: 10,
          paddingVertical: 4,
          borderWidth: 1.5,
        }}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        search
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Chọn người thanh toán"
        searchPlaceholder="Tìm thành viên..."
        value={selected}
        onChange={(item) => {
          setSelected(item);
        }}
        renderLeftIcon={() => (
          <Users style={styles.icon} color={COLOR.IN_ACTIVE} size={21} />
        )}
        renderRightIcon={() => (
          <ChevronDown
            color={focused ? COLOR.PRIMARY : COLOR.IN_ACTIVE}
            size={21}
          />
        )}
        selectedStyle={styles.selectedStyle}
      />
    </View>
  );
};

export default MemberDropdown;

const styles = StyleSheet.create({
  placeholderStyle: {
    fontSize: 14,
  },

  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
    borderRadius: 12,
    paddingHorizontal: 1.5,
    marginHorizontal: 8,
  },
  icon: {
    marginRight: 6,
    marginLeft: -0.5,
  },
  selectedStyle: {
    borderRadius: 18,
    paddingVertical: 5.5,
    paddingLeft: 13,
    fontSize: 10,
  },
  selectedTextStyle: {
    fontSize: 13,
  },
});
