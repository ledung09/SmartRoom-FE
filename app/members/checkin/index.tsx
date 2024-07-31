import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import CheckInStatisticCard from "./components/summary";
import { COLOR } from "@/constants/colors";
import Button from "@/components/ui/button";
import { Plus } from "lucide-react-native";
import CheckInRow from "./components/row";
import Separator from "@/components/ui/separator";
import { Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";

export default function CheckInMemberTab() {
  const { navigate } = useNavigation();
  return (
    <ScrollView
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 16,
      }}
    >
      <View
        style={{
          marginTop: 14,
        }}
      >
        <CheckInStatisticCard date="Thứ 7 ngày 10 thang 10" count={10} />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
          marginTop: 26,
          marginBottom: 4,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            marginBottom: 3,
          }}
        >
          <Text
            style={{
              fontWeight: "900",
              fontSize: 15.5,
            }}
          >
            Danh sách điểm danh
          </Text>
          <Text
            style={{
              fontSize: 11,
              color: COLOR.SLATE,
            }}
          >
            Lần gần nhất: 10:20
          </Text>
        </View>
        <View
          style={{
            marginVertical: "auto",
          }}
        >
          <Button
            onPress={() => {
              // @ts-ignore
              navigate("addCheckIn");
            }}
            title={"Điểm danh"}
            buttonStyle={{
              borderRadius: 8,
              paddingRight: 9,
              paddingLeft: 6,
              paddingVertical: 7.5,
              margin: 0,
            }}
            titleStyle={{
              fontSize: 11.5,
              fontWeight: "800",
            }}
            icon={
              <Plus
                color="white"
                size={16}
                style={{
                  marginRight: 4,
                }}
              />
            }
          />
        </View>
      </View>
      <View>
        <CheckInRow />
        <Separator width={1} opacity={0.3} />
        <CheckInRow />
        <Separator width={1} opacity={0.3} />
        <CheckInRow />
        <Separator width={1} opacity={0.3} />
        <CheckInRow />
        <Separator width={1} opacity={0.3} />
        <CheckInRow />
        <Separator width={1} opacity={0.3} />
        <CheckInRow />
        <Separator width={1} opacity={0.3} />
        <CheckInRow />
      </View>
    </ScrollView>
  );
}
