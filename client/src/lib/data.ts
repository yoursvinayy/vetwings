import heroImage from "@assets/generated_images/elegant_pink_beauty_website_hero_banner.png";
import modelImage from "@assets/generated_images/model_with_glowing_skin_for_beauty_site.png";
import lipstickImage from "@assets/generated_images/luxury_red_lipstick_product_shot.png";
import serumImage from "@assets/generated_images/gold_face_serum_bottle_product_shot.png";
import creamImage from "@assets/generated_images/premium_face_cream_jar_product_shot.png";

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  stock: number;
  isNew?: boolean;
  discount?: number;
  description: string;
}

export const CATEGORIES = [
  "Skincare",
  "Makeup",
  "Hair Care",
  "Fragrance",
  "Bath & Body",
  "Tools & Brushes"
];

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Velvet Matte Lipstick - Ruby Red",
    brand: "Lumière",
    price: 24.00,
    originalPrice: 30.00,
    rating: 4.8,
    reviews: 124,
    image: lipstickImage,
    category: "Makeup",
    stock: 15,
    discount: 20,
    description: "A rich, velvety matte lipstick that delivers intense color payoff with a single swipe. Enriched with Vitamin E for hydration."
  },
  {
    id: "2",
    name: "24K Gold Radiance Serum",
    brand: "Aurum",
    price: 85.00,
    rating: 4.9,
    reviews: 89,
    image: serumImage,
    category: "Skincare",
    stock: 5,
    isNew: true,
    description: "Infused with real 24K gold flakes, this serum brightens, tightens, and hydrates for a youthful glow."
  },
  {
    id: "3",
    name: "Hydra-Boost Night Cream",
    brand: "Lumière",
    price: 45.00,
    originalPrice: 55.00,
    rating: 4.7,
    reviews: 210,
    image: creamImage,
    category: "Skincare",
    stock: 20,
    discount: 18,
    description: "Wake up to plump, hydrated skin with our best-selling night cream. Features hyaluronic acid and ceramides."
  },
  {
    id: "4",
    name: "Rose Petal Toner",
    brand: "Flora",
    price: 22.00,
    rating: 4.5,
    reviews: 56,
    image: serumImage, // Reusing for mock
    category: "Skincare",
    stock: 30,
    description: "Calm and balance your skin with natural rose water and witch hazel. Alcohol-free formula."
  },
  {
    id: "5",
    name: "Silk Foundation - Porcelain",
    brand: "Lumière",
    price: 38.00,
    rating: 4.6,
    reviews: 145,
    image: lipstickImage, // Reusing for mock
    category: "Makeup",
    stock: 8,
    description: "Medium to full coverage foundation with a natural satin finish. Long-wearing and breathable."
  },
  {
    id: "6",
    name: "Diamond Glow Highlighter",
    brand: "Aurum",
    price: 32.00,
    rating: 4.9,
    reviews: 300,
    image: creamImage, // Reusing for mock
    category: "Makeup",
    stock: 0,
    description: "Get that blinding glow with our ultra-fine milled highlighter powder."
  }
];

export const ASSETS = {
  hero: heroImage,
  model: modelImage,
};
