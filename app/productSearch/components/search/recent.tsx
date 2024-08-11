import Button from "@/components/ui/button";
import Separator from "@/components/ui/separator";
import { COLOR } from "@/constants/colors";
import { History, Trash } from "lucide-react-native";
import { Pressable, Text } from "react-native";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import LocalStorage from "@/util/local-storage";
import { useNavigation } from "@react-navigation/native";
import { navigateSearchResult } from "@/util/navigate";

export default function RecentSearch() {
  const [recentSearch, setRecentSearch] = React.useState([]);
  const [rerender, setRerender] = React.useState(false);

  React.useEffect(() => {
    const getStorage = async () => {
      const key = await AsyncStorage.getItem("recentSearch");
      setRecentSearch(!key ? [] : JSON.parse(key)["query"]);
    };
    getStorage();
  }, [rerender]);

  if (recentSearch.length === 0) return <></>;

  return (
    <View
      style={{
        paddingHorizontal: 18,
        paddingVertical: 10,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 3,
        }}
      >
        <Text
          style={{
            fontWeight: 600,
            fontSize: 14.5,
          }}
        >
          Recent search
        </Text>
        <Button
          onPress={async () => {
            await AsyncStorage.removeItem("recentSearch");
            setRecentSearch([]);
          }}
          type="clear"
          title="Delete"
          titleStyle={{
            color: COLOR.SLATE,
            fontSize: 12.5,
            marginLeft: 5,
          }}
          buttonStyle={{
            paddingVertical: 5.5,
            borderRadius: 4,
          }}
          containerStyle={{
            borderRadius: 4,
          }}
          icon={<Trash color={COLOR.SLATE} size={15} strokeWidth={2} />}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {recentSearch.map((item, index) => (
          <RecentSearchItem
            label={item}
            key={index}
            setRerender={setRerender}
          />
        ))}
      </View>
    </View>
  );
}

function RecentSearchItem({
  label,
  setRerender,
}: {
  label: string;
  setRerender: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { navigate } = useNavigation();
  return (
    <View>
      <Button
        onPress={async () => {
          await navigateSearchResult(navigate, label);

          // trigger rerender for recentsearch list
          setRerender((prev) => !prev);
        }}
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
        <History
          color={COLOR.IN_ACTIVE}
          size={21}
          strokeWidth={1.8}
          style={{
            marginLeft: 4,
          }}
        />
        <Text
          numberOfLines={1}
          style={{
            fontSize: 13,
            marginBottom: 0.5,
            flex: 1,
          }}
        >
          {label}
        </Text>
      </Button>
      <Separator />
    </View>
  );
}
