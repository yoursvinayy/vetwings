import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-secondary/30 pt-16 pb-8 border-t border-pink-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="font-serif text-2xl font-bold tracking-tight block">
              Vet Wings<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Discover the best premium beauty and cosmetic products. We believe in enhancing your natural glow with clean, effective ingredients.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white hover:bg-primary hover:text-white transition-colors">
                <Instagram size={16} />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white hover:bg-primary hover:text-white transition-colors">
                <Facebook size={16} />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white hover:bg-primary hover:text-white transition-colors">
                <Twitter size={16} />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white hover:bg-primary hover:text-white transition-colors">
                <Youtube size={16} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors">Shop All</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Beauty Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/admin" className="text-sm text-muted-foreground hover:text-primary transition-colors">Admin Panel</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Customer Care</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Store Policy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Payment Methods</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Track Order</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2024 Vet Wings. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-xs text-muted-foreground hover:text-primary cursor-pointer">Privacy Policy</span>
            <span className="text-xs text-muted-foreground hover:text-primary cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
