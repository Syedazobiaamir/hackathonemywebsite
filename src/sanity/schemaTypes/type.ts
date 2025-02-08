

type  Product = {
  category: string;
  id: string;
  price: number;
  description: string;
  stockLevel: number;
  imagePath: string;
  discountPercentage: number;
  isFeaturedProduct: number;
  name: string;
  image: string;  // ✅ Changed 'any' to 'string'
  _id: string;
  sizes: string[];
}
