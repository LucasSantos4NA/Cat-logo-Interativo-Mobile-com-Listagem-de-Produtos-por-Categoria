import axios from "axios";

export const resquetApi = async (iswoman: boolean) => {
  const categories = iswoman
    ? ["womens-bags", "womens-dresses", "womens-shoes"]
    : ["mens-shirts", "mens-shoes", "mens-watches"];
  const allclothes = categories.map((categoryR) =>
    axios.get(`https://dummyjson.com/products/category/${categoryR}`)
  );

  const result = await Promise.all(allclothes);

  const allProducts = result.flatMap((res) => res.data.products);

  return { data: { products: allProducts } };
};
