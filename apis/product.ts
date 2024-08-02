import { ProductDetail } from "@/types/product";
import axios from "axios";

export async function getProductDetail(id: string): Promise<ProductDetail> {
  return axios
    .get(`https://smartroom-5guys.vercel.app/product/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}
