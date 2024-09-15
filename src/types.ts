export interface Product {
  id: number;
  category: {
    id: number;
    name: string;
  };
  color: {
    id: number;
    name: string;
  };
  gender: {
    id: number;
    name: string;
  };
  size: 'L' | 'XL' | 'S' | 'M';
  price: number;
  photoName: string;
}
