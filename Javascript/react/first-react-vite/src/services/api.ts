import axios from "axios";

const instance = axios.create({
  baseURL: `https://fakestoreapi.com/`,
});

export default {
  getAllProducts: () =>
    instance({
      method: "GET",
      url: "products",
    }),
  getAllCategories: () =>
    instance({
      method: "GET",
      url: "products/categories",
    }),
  getSpecificCategory: (category: string) =>
    instance({
      method: "GET",
      url: `products/category/${category}`,
    }),
};
