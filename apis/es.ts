import { DEFAULT_PAGINATION } from "@/constants/pagination";
import { ProductSearchFilter, ProductShortDetail } from "@/types/product";
import axios from "axios";

export async function searchProductAutocomplete(
  query: string
): Promise<string[]> {
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

export async function searchProduct(
  filter: ProductSearchFilter,
  defaultProps: {
    queryKey: string[];
    pageParam: number;
  }
): Promise<ProductShortDetail[]> {
  // console.log("props", props);
  // if (!query) return [];

  let url = `https://smartroom-5guys.vercel.app/search?offset=${
    (defaultProps.pageParam - 1) * DEFAULT_PAGINATION.LIMIT
  }&limit=${DEFAULT_PAGINATION.LIMIT}`;

  if (filter.query) url = url.concat(`&query=${filter.query}`);
  // if (priceSort) url.concat(`&priceSort=${priceSort}`);
  // if (soldSort) url.concat(`&soldSort=${soldSort}`);
  // if (categoryId) url.concat(`&categoryId=${categoryId}`);

  console.log(url);

  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}
