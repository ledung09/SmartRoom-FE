import axios from "axios";

export async function searchProduct(query: string): Promise<string[]> {
  if (!query) return [];

  return axios
    .get(
      `https://smartroom-5guys.vercel.app/search/autocomplete?query=${query}`
    )
    .then((response) => response.data)
    .catch((error) => {
      return []; // Return an empty array in case of an error
    });
}
