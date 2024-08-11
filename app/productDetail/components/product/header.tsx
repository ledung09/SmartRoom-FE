import { View, Text } from "react-native";
import React from "react";
import { COLOR } from "@/constants/colors";
import Button from "@/components/ui/button";
import { Heart } from "lucide-react-native";
import { useProductDetail } from "../../hooks/useProductDetail";
import { debounce } from "@/util/debounce";
import { setProductHeartedDetail } from "@/apis/product";
import PriceUtil from "@/util/price-util";
import Skeleton from "@/components/ui/skeleton";

export default function HeaderProductDetail() {
  const { data, error, isPending, id } = useProductDetail();
  const [hearted, setHearted] = React.useState<boolean | undefined>(undefined);

  // Create a debounced function that accepts the current hearted value
  const debounceHeartedAction = React.useCallback(
    debounce((heartedValue) => setProductHeartedDetail(id, heartedValue)),
    [id]
  );

  React.useEffect(() => {
    if (data?.hearted !== undefined) {
      setHearted(data.hearted);
    }
  }, [data]);

  if (error) return <Text>There is err</Text>;

  return isPending ? (
    <View
      style={{
        flexDirection: "column",
        paddingVertical: 18,
        paddingHorizontal: 16,

        gap: 12,
      }}
    >
      <Skeleton
        height={22}
        style={{
          width: "100%",
        }}
      />
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          alignItems: "flex-end",
        }}
      >
        <Skeleton height={34} width={120} />
        <Skeleton height={26} width={80} />
      </View>
    </View>
  ) : (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingVertical: 12,
        gap: 8,
      }}
    >
      <View
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            marginTop: 4,
            marginBottom: 6,
          }}
        >
          {data!.name}
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 18,
            alignItems: "flex-end",
            marginBottom: 6,
          }}
        >
          <Text
            style={{
              fontWeight: "800",
              fontSize: 28,
              color: COLOR.PRIMARY,
              letterSpacing: 0.5,
            }}
          >
            {PriceUtil.priceCommaSeperation(data!.price)}
            <Text
              style={{
                fontSize: 20,
              }}
            >
              ₫
            </Text>
          </Text>
          <View
            style={{
              paddingVertical: 2.5,
              paddingHorizontal: 10,
              borderRadius: 20,
              backgroundColor: COLOR.PRIMARY,
              marginBottom: 7.5,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 10,
                fontWeight: "600",
              }}
            >
              {PriceUtil.soldNumberReduce(data!.sold)} sold
              {data!.sold > 1 && "s"}
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Button
          type="clear"
          titleStyle={{
            color: COLOR.IN_ACTIVE,
          }}
          containerStyle={{
            borderRadius: 9999,
          }}
          onPress={() => {
            const newHearted = !hearted;
            setHearted(newHearted);
            debounceHeartedAction(newHearted);
          }}
          buttonStyle={{
            width: 36,
            height: 36,
          }}
          icon={
            <Heart
              fill={hearted ? COLOR.PRIMARY : "white"}
              color={!hearted ? COLOR.IN_ACTIVE : COLOR.PRIMARY}
              size={21}
              strokeWidth={2.3}
            />
          }
        />
      </View>
    </View>
  );
}
