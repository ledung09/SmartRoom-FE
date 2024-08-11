import { View, Text, Pressable } from "react-native";
import React from "react";
import { ArrowUpLeft } from "lucide-react-native";
import { COLOR } from "@/constants/colors";
import Button from "@/components/ui/button";
import Separator from "@/components/ui/separator";
import LocalStorage from "@/util/local-storage";
import { useNavigation } from "@react-navigation/native";
import { navigateSearchResult } from "@/util/navigate";

function splitStringAtFirstOccurrence(str1: string, str2: string): string[] {
  const index = str1.toLowerCase().indexOf(str2.toLowerCase());

  if (index === -1) {
    return [];
  }

  const before = str1.slice(0, index);
  const match = str1.slice(index, index + str2.length);
  const after = str1.slice(index + str2.length);

  return [before, match, after];
}

export default function SearchItem({ value }: { value: [string, string] }) {
  const { navigate } = useNavigation();

  const [label, query] = value;
  const stringParse: string[] = splitStringAtFirstOccurrence(label, query);

  return (
    <View>
      <Button
        onPress={async () => {
          await navigateSearchResult(navigate, label);
        }}
        buttonStyle={{
          paddingHorizontal: 18,
          paddingVertical: 12,
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        titleStyle={{
          color: COLOR.IN_ACTIVE,
        }}
      >
        <Text
          style={{
            fontSize: 13,
            flex: 1,
            marginRight: 8,
          }}
          numberOfLines={1}
        >
          {stringParse.length === 0 ? (
            label
          ) : (
            <>
              {stringParse[0]}
              <Text
                style={{
                  fontWeight: "700",
                  color: COLOR.PRIMARY,
                }}
              >
                {stringParse[1]}
              </Text>
              {stringParse[2]}
            </>
          )}
        </Text>
        <ArrowUpLeft color={COLOR.IN_ACTIVE} size={22} strokeWidth={1.8} />
      </Button>
      <Separator />
    </View>
  );
}
