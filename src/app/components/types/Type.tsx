export interface DbBook {
  id: string;
  title: string;
  author: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  description: string;
  review: string;
  tags: string[];
  pages: number;
  publisher: string;
  yearOfPublishing: number;
}