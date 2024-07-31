import { COLOR } from "@/constants/colors";
import { Pressable, Text } from "react-native";
import { View } from "react-native";

export default function PopularKeyword() {
  return (
    <View
      style={{
        paddingHorizontal: 18,
        paddingVertical: 10,
      }}
    >
      <Text
        style={{
          fontWeight: 600,
          marginBottom: 12,
          fontSize: 14.5,
        }}
      >
        Popular 🔥
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <KeywordItem />
        <KeywordItem />
        <KeywordItem />
        <KeywordItem />
        <KeywordItem />
        <KeywordItem />
        <KeywordItem />
      </View>
    </View>
  );
}

function KeywordItem() {
  return (
    <Pressable
      style={{
        backgroundColor: COLOR.NEW_LIGHT_BLUE,
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 14,
      }}
    >
      <Text
        style={{
          fontSize: 12.5,
        }}
      >
        Smart chair
      </Text>
    </Pressable>
  );
}
