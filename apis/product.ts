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

export async function setProductHeartedDetail(
  id: string,
  hearted: boolean | undefined
): Promise<void> {
  console.log(hearted);
  console.log(
    await axios
      .patch(`https://smartroom-5guys.vercel.app/product/hearted/${id}`, {
        hearted: !!hearted,
      })
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      })
  );
}
