export interface Itype {
  id: number;
  title: string;
  description: string;
  price: number;
  countInStock: number;
  rating: number;
  image: string;
}

declare module "aos" {
  export function init(): void;
}
