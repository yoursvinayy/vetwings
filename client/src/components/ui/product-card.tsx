import { Product } from "@/lib/data";
import { Link } from "wouter";
import { Star, ShoppingCart, Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative bg-white rounded-lg p-3 hover:shadow-xl hover:shadow-pink-100/50 transition-all duration-300 border border-transparent hover:border-pink-100"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-md mb-4 bg-secondary/20">
        <Link href={`/product/${product.id}`} className="block w-full h-full">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
          {product.discount && (
            <Badge className="bg-destructive text-destructive-foreground hover:bg-destructive font-medium">
              -{product.discount}%
            </Badge>
          )}
          {product.isNew && (
            <Badge className="bg-primary text-primary-foreground hover:bg-primary font-medium">
              NEW
            </Badge>
          )}
        </div>

        {/* Hover Actions */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 z-10">
          <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full bg-white/90 backdrop-blur shadow-sm hover:bg-primary hover:text-white">
            <Heart size={16} />
          </Button>
          <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full bg-white/90 backdrop-blur shadow-sm hover:bg-primary hover:text-white">
            <Eye size={16} />
          </Button>
        </div>

        {/* Add to Cart - Slide Up */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
          <Button className="w-full rounded-full bg-white/90 backdrop-blur-md text-foreground hover:bg-primary hover:text-white shadow-md border-0" size="sm">
            <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
          </Button>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-1">
        <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{product.brand}</div>
        <Link href={`/product/${product.id}`} className="block text-base font-serif font-medium text-foreground line-clamp-1 hover:text-primary transition-colors">
            {product.name}
        </Link>
        
        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={12} 
                fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-200"}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-1">
          <span className="font-semibold text-lg text-primary">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through decoration-muted-foreground/50">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>

        {/* Stock Bar */}
        {product.stock > 0 && product.stock < 10 && (
          <div className="mt-2">
            <div className="text-[10px] text-orange-500 font-medium mb-1">Only {product.stock} left!</div>
            <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-orange-400 rounded-full" style={{ width: `${(product.stock / 20) * 100}%` }}></div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
