import { PRODUCTS, CATEGORIES } from "@/lib/data";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductCard } from "@/components/ui/product-card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Shop() {
  const [priceRange, setPriceRange] = useState([0, 100]);
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      {/* Page Header */}
      <div className="bg-secondary/30 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">Shop All Products</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Explore our comprehensive collection of premium beauty products designed to enhance your natural radiance.
          </p>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 shrink-0 space-y-8">
            <div>
              <h3 className="font-serif font-bold text-lg mb-4">Categories</h3>
              <div className="space-y-2">
                {CATEGORIES.map((cat) => (
                  <div key={cat} className="flex items-center space-x-2">
                    <Checkbox id={`cat-${cat}`} />
                    <Label htmlFor={`cat-${cat}`} className="text-sm font-normal cursor-pointer hover:text-primary">{cat}</Label>
                  </div>
                ))}
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="font-serif font-bold text-lg mb-4">Price Range</h3>
              <Slider 
                defaultValue={[0, 100]} 
                max={200} 
                step={1} 
                value={priceRange}
                onValueChange={setPriceRange}
                className="mb-4"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

            <Separator />
            
            <div>
              <h3 className="font-serif font-bold text-lg mb-4">Brands</h3>
              <div className="space-y-2">
                {["Lumière", "Aurum", "Flora", "Velvet", "Pure"].map((brand) => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox id={`brand-${brand}`} />
                    <Label htmlFor={`brand-${brand}`} className="text-sm font-normal cursor-pointer hover:text-primary">{brand}</Label>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-muted-foreground">Showing {PRODUCTS.length} results</p>
              
              <div className="flex gap-4">
                {/* Mobile Filter Trigger */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="lg:hidden">
                      <SlidersHorizontal className="w-4 h-4 mr-2" /> Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px]">
                    <div className="py-6 space-y-8">
                      <h2 className="font-serif text-2xl font-bold">Filters</h2>
                      {/* Duplicate Filters for Mobile */}
                      <div>
                        <h3 className="font-bold mb-4">Categories</h3>
                        <div className="space-y-2">
                          {CATEGORIES.map((cat) => (
                            <div key={`m-${cat}`} className="flex items-center space-x-2">
                              <Checkbox id={`m-cat-${cat}`} />
                              <Label htmlFor={`m-cat-${cat}`}>{cat}</Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      Sort by: Featured <ChevronDown className="w-4 h-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Featured</DropdownMenuItem>
                    <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
                    <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
                    <DropdownMenuItem>Newest Arrivals</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
              {/* Duplicate products to fill grid for demo */}
              {PRODUCTS.slice(0, 3).map((product) => (
                <ProductCard key={`dup-${product.id}`} product={{...product, id: `dup-${product.id}`}} />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-12 flex justify-center gap-2">
              <Button variant="outline" size="icon" disabled>&lt;</Button>
              <Button variant="default" size="icon">1</Button>
              <Button variant="outline" size="icon">2</Button>
              <Button variant="outline" size="icon">3</Button>
              <Button variant="outline" size="icon">&gt;</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
