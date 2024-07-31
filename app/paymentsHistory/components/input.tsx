import { View, Text, TextInput } from "react-native";
import React from "react";
import { InputCustom } from "@/components/ui/input";
import { Coins } from "lucide-react-native";

const insertAt = (str: string, index: number, value: string): string => {
  return str.slice(0, index) + value + str.slice(index);
};

function formatString(input: string): string {
  if (input.length === 0 || input === "đ") return "";
  // Remove all non-numeric characters
  const numericString = input.replace(/\D/g, "");

  // Split the numeric string into thousands
  const parts = numericString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Append 'đ' at the end
  return `${parts}đ`;
}

export default function MoneyInput() {
  const maxDigit = 11;
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    const format = formatString(value);
    setValue(
      format.length <= maxDigit
        ? format
        : formatString(value.slice(0, maxDigit))
    );
  }, [value]);

  return (
    <InputCustom
      // contextMenuHidden={true}
      customLeftIcon={Coins}
      keyboardType="numeric"
      control={[value, setValue]}
      placeholder="0đ"
      minimalInput="đ"
      cursorPos={5}
      selection={{
        start: value.length - 1,
        end: value.length - 1,
      }}
      // onSelectionChange={(event) => setSelection(event.nativeEvent.selection)}
    />
  );
}
