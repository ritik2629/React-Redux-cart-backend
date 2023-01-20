import React from "react";
import { ProductList } from "../components/productList/ProductList";
import { useGetAllProductQuery } from "../redux/features/product/productApi";

export const Home = () => {
  const { data, isError, isLoading } = useGetAllProductQuery();
  return <ProductList data={data} isError={isError} isLoading={isLoading} />;
};
