import { useRoute, Link } from "wouter";
import { PRODUCTS } from "@/lib/data";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, Minus, Plus, Heart, Share2, Truck, RefreshCw, ShieldCheck } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProductCard } from "@/components/ui/product-card";

export default function ProductDetail() {
  const [match, params] = useRoute("/product/:id");
  const [quantity, setQuantity] = useState(1);
  
  // Find product or default to first if mock id fails
  const product = PRODUCTS.find(p => p.id === params?.id) || PRODUCTS[0];
  
  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/shop">Shop</Link>
          <span>/</span>
          <Link href={`/shop?category=${product.category}`}>{product.category}</Link>
          <span>/</span>
          <span className="text-foreground font-medium truncate max-w-[200px]">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Product Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-secondary/20 border border-border">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className={`aspect-square rounded-lg overflow-hidden cursor-pointer border-2 ${i === 0 ? 'border-primary' : 'border-transparent hover:border-primary/50'}`}>
                  <img src={product.image} alt="Thumbnail" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-2">
              <Badge variant="outline" className="rounded-full px-3 py-0.5 text-xs font-normal border-primary/30 text-primary uppercase tracking-wider">
                {product.brand}
              </Badge>
            </div>
            
            <h1 className="font-serif text-3xl md:text-4xl font-medium mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground underline decoration-muted-foreground/50 underline-offset-4 cursor-pointer">
                {product.reviews} Reviews
              </span>
            </div>

            <div className="flex items-end gap-4 mb-8">
              <span className="text-3xl font-medium text-primary">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through decoration-muted-foreground/50 mb-1">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              {product.discount && (
                <Badge className="bg-destructive mb-1.5 ml-auto md:ml-0">
                  Save {product.discount}%
                </Badge>
              )}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              {product.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center border border-border rounded-full">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-secondary/50 rounded-l-full transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-10 text-center font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-secondary/50 rounded-r-full transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
              
              <Button size="lg" className="flex-1 rounded-full h-12 text-base shadow-lg shadow-primary/20">
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </Button>
              
              <Button variant="outline" size="icon" className="h-12 w-12 rounded-full border-border hover:border-primary hover:text-primary">
                <Heart size={20} />
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-border mb-8">
              <div className="text-center">
                <div className="mx-auto w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center text-primary mb-2">
                  <Truck size={20} />
                </div>
                <div className="text-xs font-bold">Free Shipping</div>
              </div>
              <div className="text-center">
                <div className="mx-auto w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center text-primary mb-2">
                  <ShieldCheck size={20} />
                </div>
                <div className="text-xs font-bold">Authentic</div>
              </div>
              <div className="text-center">
                <div className="mx-auto w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center text-primary mb-2">
                  <RefreshCw size={20} />
                </div>
                <div className="text-xs font-bold">Returns</div>
              </div>
            </div>

            {/* Accordions */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-serif text-lg">Description</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Experience luxury with every application. Our formula is designed to provide long-lasting results without compromising on comfort. Enriched with natural ingredients that nourish your skin while enhancing your beauty.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-serif text-lg">Ingredients</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed font-mono text-xs">
                  Aqua, Glycerin, Caprylic/Capric Triglyceride, Cetearyl Alcohol, Dimethicone, Phenoxyethanol, Ethylhexylglycerin, Tocopherol (Vitamin E), Parfum.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-serif text-lg">How to Use</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Apply a small amount to clean, dry skin. Massage gently until fully absorbed. Use morning and night for best results.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related Products */}
        <section>
          <h2 className="font-serif text-3xl font-medium mb-8 text-center">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.length > 0 ? (
              relatedProducts.map((p) => <ProductCard key={p.id} product={p} />)
            ) : (
              PRODUCTS.slice(0, 4).map((p) => <ProductCard key={`rel-${p.id}`} product={p} />)
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
