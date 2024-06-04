import ProductType from "@/contracts/types/productType";
import UserType from "@/contracts/types/userType";

const productsSource: ProductType[] = [
  {
    id: 0,
    title: "Iphone",
    category: 0,
    price: 1000,
    stock: 10,
    color: "#fff",
    size: 0,
    description: "this is a product of USA",
  },
  {
    id: 1,
    title: "Iphone 1",
    category: 1,
    price: 1001,
    stock: 11,
    color: "#fffeee",
    size: 1,
    description: "this is a product of USA 1",
  },
  {
    id: 2,
    title: "Iphone 2",
    category: 2,
    price: 1002,
    stock: 12,
    color: "#fffbbb",
    size: 2,
    description: "this is a product of USA 2",
  },
];

export default productsSource;
