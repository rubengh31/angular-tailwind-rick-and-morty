export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  images: string[];
}

export interface NewProduct {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
}

export interface EditProduct {
  title: string;
  price: number;
}
