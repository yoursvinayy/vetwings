import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/lib/data";
import { Trash2, Minus, Plus, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Cart() {
  // Mock cart items
  const cartItems = [
    { ...PRODUCTS[0], quantity: 1 },
    { ...PRODUCTS[2], quantity: 2 },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 5.00;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="font-serif text-4xl font-medium mb-10 text-center">Your Shopping Bag</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="border border-border rounded-xl overflow-hidden">
              <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-secondary/30 text-sm font-medium text-muted-foreground">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              {cartItems.map((item) => (
                <div key={item.id} className="p-4 border-t border-border first:border-0 hover:bg-secondary/10 transition-colors">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    {/* Product */}
                    <div className="col-span-6 flex gap-4">
                      <div className="w-20 h-24 bg-secondary/20 rounded-md overflow-hidden shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">{item.brand}</div>
                        <h3 className="font-serif font-medium mb-1">{item.name}</h3>
                        <Button variant="link" className="p-0 h-auto text-destructive text-xs hover:no-underline flex items-center gap-1">
                          <Trash2 size={12} /> Remove
                        </Button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="col-span-2 text-center hidden md:block">
                      ${item.price.toFixed(2)}
                    </div>

                    {/* Quantity */}
                    <div className="col-span-2 flex justify-center">
                      <div className="flex items-center border border-border rounded-full h-8">
                        <button className="w-8 h-full flex items-center justify-center hover:bg-secondary/50 rounded-l-full">
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button className="w-8 h-full flex items-center justify-center hover:bg-secondary/50 rounded-r-full">
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="col-span-2 text-right font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="w-full lg:w-96 shrink-0">
            <div className="bg-secondary/20 p-6 rounded-xl border border-pink-100 sticky top-24">
              <h2 className="font-serif text-xl font-medium mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping Estimate</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax Estimate</span>
                  <span>Calculated at checkout</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex gap-2 mb-2">
                  <Input placeholder="Discount code" className="bg-white" />
                  <Button variant="outline">Apply</Button>
                </div>
              </div>

              <Button className="w-full rounded-full h-12 text-base shadow-lg shadow-primary/20" size="lg">
                Checkout <ArrowRight size={16} className="ml-2" />
              </Button>
              
              <div className="mt-4 flex justify-center gap-2 grayscale opacity-50">
                {/* Mock payment icons */}
                <div className="w-8 h-5 bg-white rounded border border-border"></div>
                <div className="w-8 h-5 bg-white rounded border border-border"></div>
                <div className="w-8 h-5 bg-white rounded border border-border"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
