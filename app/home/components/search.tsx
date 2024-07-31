import { InputCustom } from "@/components/ui/input";
import React from "react";
import { ScrollView } from "react-native";

export default function ProductSearch() {
  const [input, setInput] = React.useState("");
  return (
    <InputCustom control={[input, setInput]} placeholder="Find you needed..." />
  );
}
