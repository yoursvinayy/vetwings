import { ASSETS, PRODUCTS, CATEGORIES } from "@/lib/data";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Zap, Clock, Truck, ShieldCheck, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const flashSaleProducts = PRODUCTS.filter(p => p.discount);
  const newArrivals = PRODUCTS.filter(p => p.isNew || !p.discount).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] w-full overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={ASSETS.hero} 
              alt="Hero Banner" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent" />
          </div>
          
          <div className="container mx-auto px-4 relative h-full flex items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-xl space-y-6"
            >
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase">New Collection 2024</h2>
              <h1 className="font-serif text-5xl md:text-7xl font-medium leading-tight text-foreground">
                Discover Your <br/>
                <span className="italic text-primary">Inner Glow</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Experience the finest in luxury beauty. Clean ingredients, scientifically proven results, and elegant packaging.
              </p>
              <div className="flex gap-4 pt-4">
                <Link href="/shop">
                  <Button size="lg" className="rounded-full px-8 text-base bg-foreground text-background hover:bg-primary hover:text-white transition-colors cursor-pointer">
                    Shop Now
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="rounded-full px-8 text-base bg-white/50 backdrop-blur-sm hover:bg-white cursor-pointer">
                    Our Story
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Banner */}
        <section className="bg-secondary/30 py-8 border-y border-pink-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center gap-4 text-center md:text-left">
                <div className="p-3 bg-white rounded-full shadow-sm text-primary">
                  <Truck size={24} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-foreground">Free Shipping</h3>
                  <p className="text-sm text-muted-foreground">On all orders over $50</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 text-center md:text-left">
                <div className="p-3 bg-white rounded-full shadow-sm text-primary">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-foreground">Authentic Products</h3>
                  <p className="text-sm text-muted-foreground">100% Genuine Guarantee</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 text-center md:text-left">
                <div className="p-3 bg-white rounded-full shadow-sm text-primary">
                  <RefreshCw size={24} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-foreground">Easy Returns</h3>
                  <p className="text-sm text-muted-foreground">30-day return policy</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <h2 className="font-serif text-3xl md:text-4xl font-medium">Shop by Category</h2>
              <p className="text-muted-foreground">Explore our curated collection of premium beauty essentials.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {CATEGORIES.map((cat, i) => (
                <Link key={cat} href={`/shop?category=${cat}`}>
                  <a className="group block text-center space-y-3 p-4 rounded-xl hover:bg-secondary/30 transition-colors">
                    <div className="aspect-square rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary/20 transition-all mx-auto w-24 md:w-full max-w-[120px]">
                      <img 
                        src={PRODUCTS[i % PRODUCTS.length].image} 
                        alt={cat} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">{cat}</h3>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Flash Sale */}
        <section className="py-20 bg-gradient-to-b from-secondary/50 to-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-10">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-destructive font-bold uppercase tracking-wide text-sm">
                  <Zap size={18} className="fill-current" /> Flash Sale
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-medium">Limited Time Offers</h2>
              </div>
              
              <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-sm border border-pink-100">
                <Clock className="text-primary" size={20} />
                <div className="flex items-center gap-2 text-lg font-mono font-bold text-foreground">
                  <span>05</span><span className="text-muted-foreground">:</span>
                  <span>42</span><span className="text-muted-foreground">:</span>
                  <span>18</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {flashSaleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Link href="/shop?sale=true">
                <Button variant="outline" size="lg" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white cursor-pointer">
                  View All Deals
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Banner Split */}
        <section className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
          <div className="relative h-full min-h-[400px]">
            <img src={ASSETS.model} alt="Lifestyle" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="bg-primary text-white flex flex-col justify-center p-12 md:p-20 space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight">
              Unlock Your <br/>Radiance
            </h2>
            <p className="text-white/80 text-lg max-w-md">
              Our products are designed to enhance, not hide. Embrace your natural beauty with our clean, effective formulas.
            </p>
            <div>
              <Link href="/blog">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8 cursor-pointer">
                  Read Our Blog
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-serif text-3xl md:text-4xl font-medium">New Arrivals</h2>
              <Link href="/shop?sort=new">
                <a className="flex items-center gap-1 text-primary hover:underline font-medium">
                  See All <ArrowRight size={16} />
                </a>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {newArrivals.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 bg-secondary/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          <div className="container mx-auto px-4 text-center max-w-2xl relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Join the Inner Circle</h2>
            <p className="text-muted-foreground mb-8">Subscribe to receive updates, access to exclusive deals, and more.</p>
            
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-6 py-3 rounded-full border border-border bg-white focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Button size="lg" className="rounded-full px-8 cursor-pointer">Subscribe</Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">
              By clicking subscribe, you agree to our Terms & Conditions.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
