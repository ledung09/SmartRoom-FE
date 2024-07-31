import Button from "@/components/ui/button";
import Separator from "@/components/ui/separator";
import { COLOR } from "@/constants/colors";
import { History } from "lucide-react-native";
import { Pressable, Text } from "react-native";
import { View } from "react-native";

export default function RecentSearch() {
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
        Recent search
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <RecentSearchItem />
        <Separator />
        <RecentSearchItem />
        <Separator />
        <RecentSearchItem />
        <Separator />
        <RecentSearchItem />
      </View>
    </View>
  );
}

function RecentSearchItem() {
  return (
    <Button
      buttonStyle={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 11,
        backgroundColor: "white",
        paddingHorizontal: 2,
        paddingVertical: 10,
      }}
      titleStyle={{
        color: COLOR.IN_ACTIVE,
      }}
    >
      <History color={COLOR.IN_ACTIVE} size={21} strokeWidth={1.8} />
      <Text
        style={{
          fontSize: 13,
          marginBottom: 0.5,
        }}
      >
        Smart chair
      </Text>
    </Button>
  );
}
