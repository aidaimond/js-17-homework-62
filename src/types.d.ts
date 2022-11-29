export interface Jewelry {
  id: string;
  name: string;
  image: string;
  price: number;
}

export interface BasketItems {
  jewelry: Jewelry;
  amount: number;
}