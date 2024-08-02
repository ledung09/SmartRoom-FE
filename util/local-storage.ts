import AsyncStorage from "@react-native-async-storage/async-storage";

export default class LocalStorage {
  static MAX_QUERY_SAVE = 8;

  static async addLocalStorage(key: string, value: string) {
    // Retrieve existing data
    const existingData = await AsyncStorage.getItem(key);
    let queries: string[] = existingData ? JSON.parse(existingData).query : [];

    // Remove existing instance of the value if it exists
    queries = queries.filter((item) => item !== value);

    // Add new value to the top
    queries.unshift(value);

    // Trim the array to the maximum allowed size
    if (queries.length > LocalStorage.MAX_QUERY_SAVE) {
      queries = queries.slice(0, LocalStorage.MAX_QUERY_SAVE);
    }

    // Save the updated array back to AsyncStorage
    await AsyncStorage.setItem(key, JSON.stringify({ query: queries }));
  }
}
