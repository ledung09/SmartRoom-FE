import { Category } from "@/types/category";
import axios from "axios";

export async function getCategory(): Promise<Category[]> {
  return axios
    .get("https://smartroom-5guys.vercel.app/category")
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return []; // Return an empty array in case of an error
    });
}
