export interface ProductDetail {
  _id: string;
  description: string;
  image: string[];
  name: string;
  price: number;
  sold: number;
  supplier_id: number;
  supplier_name: string;
  supplier_type_goods: string;
  supplier_image: string;
  supplier_product_count: number;
  supplier_rating: number;
  hearted: boolean;
}

export interface ProductShortDetail {
  _id: string;
  image: string[];
  name: string;
  price: number;
  sold: number;
}

export interface ProductSearchFilter {
  offset: number;
  limit?: number;
  query?: string;
  categoryId?: number;
  priceSort?: number;
  soldSort?: number;
}
