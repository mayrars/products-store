import { Product } from "./product.model";
export interface Cart {
  id:       number;
  userId:   number;
  date:     Date;
  products: ProductData[];
  __v:      number;
}

export interface ProductData {
  productId: number;
  ProductInfo:Product;
  quantity:  number;
}

