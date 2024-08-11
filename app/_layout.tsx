import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { COLOR } from "@/constants/colors";
import { ThemeProvider, createTheme } from "@rneui/themed";
import { ButtonStyle } from "@/constants/ui/button";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabLayout from "./(tabs)/_layout";
import AddCheckIn from "./addCheckIn/_layout";
import CustomHeader from "@/components/navigation/header";
import { CheckBoxStyle } from "@/constants/ui/checkbox";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import PaymentsHistory from "./paymentsHistory/_layout";
import { ClickOutsideProvider } from "react-native-click-outside";
import ProductSearch from "./productSearch/_layout";
import ProductDetail from "./productDetail/_layout";
import ProductTryout from "./productTryout/_layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductSearchResult from "./productSearchResult/_layout";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

const theme = createTheme({
  lightColors: {
    primary: COLOR.PRIMARY,
  },
  mode: "light",
  components: {
    Button: ButtonStyle,
    Input: {
      inputStyle: {
        backgroundColor: "white",
        fontSize: 14,
        borderWidth: 1.5,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderColor: COLOR.PRIMARY,
      },
      inputContainerStyle: {
        borderBottomWidth: 0,
        margin: 0,
      },
      containerStyle: { paddingHorizontal: 0, height: 40 },
      selectionColor: COLOR.PRIMARY,
    },
    CheckBox: CheckBoxStyle,
  },
});

const queryClient = new QueryClient();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ClickOutsideProvider>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
              <StatusBar
                style="light"
                backgroundColor={COLOR.PRIMARY}
                animated={true}
              />
              <Stack.Navigator
                screenOptions={{
                  navigationBarColor: "black",
                }}
              >
                <Stack.Group>
                  <Stack.Screen
                    name="(tabs)"
                    options={{ headerShown: false }}
                    component={TabLayout}
                  />
                  <Stack.Screen
                    name="productSearch"
                    options={{
                      animation: "fade_from_bottom",
                      header: () => <CustomHeader />,
                    }}
                    // component={ProductSearch}
                    component={ProductSearch}
                  />
                  <Stack.Screen
                    name="productSearchResult"
                    options={{
                      animation: "fade_from_bottom",
                      header: () => <CustomHeader />,
                    }}
                    component={ProductSearchResult}
                  />
                  <Stack.Screen
                    name="productDetail"
                    options={{
                      animation: "fade_from_bottom",
                      header: () => <CustomHeader />,
                    }}
                    component={ProductDetail}
                  />
                  <Stack.Screen
                    name="productTryout"
                    options={{
                      // headerShown: false,
                      header: () => <CustomHeader />,
                    }}
                    component={ProductTryout}
                  />
                  <Stack.Screen
                    name="addCheckIn"
                    options={{
                      header: () => <CustomHeader title="" goBack />,
                    }}
                    component={AddCheckIn}
                  />
                  <Stack.Screen
                    name="paymentsHistory"
                    options={{
                      header: () => (
                        <CustomHeader title="Lịch sử thanh toán" goBack />
                      ),
                    }}
                    component={PaymentsHistory}
                  />
                </Stack.Group>
              </Stack.Navigator>
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </QueryClientProvider>
      </ThemeProvider>
    </ClickOutsideProvider>
  );
}
