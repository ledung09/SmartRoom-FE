import { useNavigation } from "@react-navigation/native";
import LocalStorage from "./local-storage";

export async function navigateSearchResult(
  navigate: (props: any[]) => void,
  searchString: string
) {
  // @ts-ignore
  navigate("productSearchResult", {
    filter: {
      userQuery: searchString,
    },
  });
  await LocalStorage.addLocalStorage("recentSearch", searchString);
}
