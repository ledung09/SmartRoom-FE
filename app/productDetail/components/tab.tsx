import { View, Text, ScrollView, Dimensions } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { blurhash } from "@/constants/image";
import { COLOR } from "@/constants/colors";
import Separator from "@/components/ui/separator";

const windowWidth = Dimensions.get("window").width;
const imageHeight = 320;

export default function ProductDetailTab() {
  const [page, setPage] = React.useState(0);
  const scrollViewRef = React.useRef<ScrollView>(null);

  const toPage = (x: number) => {
    setPage(x);
    scrollViewRef.current?.scrollTo({ x: windowWidth * x, animated: true });
  };

  return (
    <View
      style={{
        marginVertical: 8,
        marginTop: 16,
      }}
    >
      <View
        style={{
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 24,
            marginBottom: 10,
          }}
        >
          <Text
            onPress={() => toPage(0)}
            style={{
              fontWeight: "600",
              paddingBottom: 3,
              borderBottomColor: page === 0 ? COLOR.PRIMARY : "white",
              borderBottomWidth: 1.75,
              color: page === 0 ? COLOR.PRIMARY : "black",
            }}
          >
            Description
          </Text>
          <Text
            onPress={() => toPage(1)}
            style={{
              fontWeight: "600",
              paddingBottom: 3,
              borderBottomColor: page === 1 ? COLOR.PRIMARY : "white",
              borderBottomWidth: 1.75,
              color: page === 1 ? COLOR.PRIMARY : "black",
            }}
          >
            Reviews{" "}
            <Text
              style={{
                fontSize: 12.5,
              }}
            >
              (5)
            </Text>
          </Text>
        </View>
      </View>
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const offsetX = event.nativeEvent.contentOffset.x;
          setPage(Math.round(offsetX / windowWidth));
        }}
      >
        <View
          style={{
            width: windowWidth,
            paddingHorizontal: 16,
          }}
        >
          <Text
            style={{
              fontSize: 12.5,
              color: COLOR.DARK_SLATE,
              textAlign: "justify",
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ea
            blanditiis ducimus nam, facilis id. Laudantium, libero? Quae,
            nesciunt consequuntur facilis est saepe atque, asperiores veritatis
            autem dolor aspernatur laboriosam? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Facere ea blanditiis ducimus nam,
            facilis id. Laudantium, libero? Quae, nesciunt consequuntur facilis
            est saepe atque, asperiores veritatis autem dolor aspernatur
            laboriosam?
          </Text>
        </View>
        <Image
          source="https://m.media-amazon.com/images/I/81mlWpZkDFL._AC_UF894,1000_QL80_.jpg"
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={500}
          style={{
            height: imageHeight,
            width: windowWidth,
            borderTopRightRadius: 6,
            borderTopLeftRadius: 6,
          }}
        />
        <Image
          source="https://m.media-amazon.com/images/I/81mlWpZkDFL._AC_UF894,1000_QL80_.jpg"
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={500}
          style={{
            height: imageHeight,
            width: windowWidth,
            borderTopRightRadius: 6,
            borderTopLeftRadius: 6,
          }}
        />
      </ScrollView>
    </View>
  );
}
