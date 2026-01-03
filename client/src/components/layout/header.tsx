import { Link } from "wouter";
import { Search, ShoppingBag, User, Heart, Menu, X, ChevronDown, MapPin, Globe, HelpCircle, Facebook, Instagram, Twitter } from "lucide-react";
import { useState } from "react";
import { CATEGORIES } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="w-full bg-white z-50 sticky top-0 shadow-sm border-b border-pink-50/50">
      {/* Top Bar */}
      <div className="bg-secondary px-4 py-2 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-xs font-medium text-secondary-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><MapPin size={12} /> Store Locator</span>
            <span className="flex items-center gap-1"><Globe size={12} /> EN | USD</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary transition-colors"><Facebook size={12} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Instagram size={12} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Twitter size={12} /></a>
            <span className="w-px h-3 bg-secondary-foreground/20"></span>
            <span className="flex items-center gap-1"><HelpCircle size={12} /> Help Center</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between gap-4">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-6">
                <div className="font-serif text-2xl font-bold text-primary">Lumière</div>
                <nav className="flex flex-col gap-4">
                  <Link href="/" className="text-lg font-medium hover:text-primary">Home</Link>
                  <Link href="/shop" className="text-lg font-medium hover:text-primary">Shop All</Link>
                  {CATEGORIES.map((cat) => (
                    <Link key={cat} href={`/shop?category=${cat}`} className="text-lg text-muted-foreground hover:text-primary pl-4 border-l-2 border-transparent hover:border-primary transition-all">
                      {cat}
                    </Link>
                  ))}
                  <Link href="/about" className="text-lg font-medium hover:text-primary">About Us</Link>
                  <Link href="/blog" className="text-lg font-medium hover:text-primary">Blog</Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Lumière<span className="text-primary">.</span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
            <input 
              type="text" 
              placeholder="Search for products, brands..." 
              className="w-full bg-secondary/30 border-none rounded-full py-2.5 pl-5 pr-12 focus:ring-1 focus:ring-primary/50 text-sm font-medium placeholder:text-muted-foreground/70"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors cursor-pointer">
              <Search size={16} />
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-1 md:gap-4">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Search className="h-5 w-5" />
            </Button>
            
            <Link href="/wishlist">
              <Button variant="ghost" size="icon" className="hidden md:inline-flex text-muted-foreground hover:text-primary cursor-pointer">
                <Heart className="h-5 w-5" />
              </Button>
            </Link>
            
            <Link href="/login">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary cursor-pointer">
                <User className="h-5 w-5" />
              </Button>
            </Link>

            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-primary cursor-pointer">
                <ShoppingBag className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-primary text-[10px] hover:bg-primary">2</Badge>
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Search - Expandable */}
        {isSearchOpen && (
          <div className="mt-4 md:hidden relative animate-in slide-in-from-top-2">
             <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-secondary/30 border-none rounded-full py-2 pl-4 pr-10 focus:ring-1 focus:ring-primary/50 text-sm"
              autoFocus
            />
             <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        )}
      </div>

      {/* Navigation Bar - Desktop */}
      <div className="hidden md:block border-t border-border/40">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center gap-8 py-3">
            <Link href="/shop" className="text-sm font-semibold uppercase tracking-wide hover:text-primary transition-colors">
              Shop All
            </Link>
            {CATEGORIES.slice(0, 6).map((cat) => (
               <Link key={cat} href={`/shop?category=${cat}`} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {cat}
              </Link>
            ))}
            <Link href="/flash-sale" className="text-sm font-bold text-destructive hover:text-destructive/80 transition-colors flex items-center gap-1">
                Flash Sale
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
