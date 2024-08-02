import { getProductDetail } from "@/apis/product";
import { ProductDetail } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import * as React from "react";

const productDetailContext = React.createContext<{
  data: ProductDetail | undefined;
  error: Error | null;
  isPending: boolean;
}>({
  data: undefined,
  error: null,
  isPending: false,
});

export function useProductDetail() {
  const useProductDetail = React.useContext(productDetailContext);
  if (!useProductDetail) {
    throw new Error("Context must be used within a ContextProvider");
  }
  return useProductDetail;
}

export function ProductDetailProvider({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  const { isPending, error, data } = useQuery({
    queryKey: ["productDetail", id],
    queryFn: () => getProductDetail(id),
    enabled: !!id,
  });

  const value = { data, error, isPending };

  return (
    <productDetailContext.Provider value={value}>
      {children}
    </productDetailContext.Provider>
  );
}
