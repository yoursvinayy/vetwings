import { PRODUCTS } from "@/lib/data";
import { Link } from "wouter";
import { LayoutDashboard, Package, ShoppingCart, Users, Settings, Plus, Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Admin() {
  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card hidden md:flex flex-col">
        <div className="p-6">
          <Link href="/" className="font-serif text-2xl font-bold tracking-tight block">
              Lumière<span className="text-primary">.</span>
          </Link>
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          <Button variant="secondary" className="w-full justify-start">
            <LayoutDashboard className="w-4 h-4 mr-2" /> Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start text-muted-foreground">
            <Package className="w-4 h-4 mr-2" /> Products
          </Button>
          <Button variant="ghost" className="w-full justify-start text-muted-foreground">
            <ShoppingCart className="w-4 h-4 mr-2" /> Orders
          </Button>
          <Button variant="ghost" className="w-full justify-start text-muted-foreground">
            <Users className="w-4 h-4 mr-2" /> Customers
          </Button>
          <Button variant="ghost" className="w-full justify-start text-muted-foreground">
            <Settings className="w-4 h-4 mr-2" /> Settings
          </Button>
        </nav>

        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-sm font-medium">Admin User</div>
              <div className="text-xs text-muted-foreground">admin@lumiere.com</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
          <h1 className="text-lg font-semibold">Dashboard Overview</h1>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-9 w-64 rounded-full bg-secondary/50" />
            </div>
            <Button size="icon" variant="ghost">
              <Bell className="h-5 w-5" />
            </Button>
          </div>
        </header>

        <main className="flex-1 p-8 overflow-y-auto">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <div className="text-sm text-muted-foreground mb-2">Total Revenue</div>
              <div className="text-2xl font-bold">$45,231.89</div>
              <div className="text-xs text-emerald-500 mt-1 flex items-center">+20.1% from last month</div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <div className="text-sm text-muted-foreground mb-2">Orders</div>
              <div className="text-2xl font-bold">+2350</div>
              <div className="text-xs text-emerald-500 mt-1 flex items-center">+180.1% from last month</div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <div className="text-sm text-muted-foreground mb-2">Sales</div>
              <div className="text-2xl font-bold">+12,234</div>
              <div className="text-xs text-emerald-500 mt-1 flex items-center">+19% from last month</div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <div className="text-sm text-muted-foreground mb-2">Active Now</div>
              <div className="text-2xl font-bold">+573</div>
              <div className="text-xs text-emerald-500 mt-1 flex items-center">+201 since last hour</div>
            </div>
          </div>

          {/* Products Table */}
          <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h2 className="font-medium text-lg">Recent Products</h2>
              <Button size="sm" className="gap-2">
                <Plus size={16} /> Add Product
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead className="text-right">Stock</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {PRODUCTS.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-secondary/20 overflow-hidden">
                          <img src={product.image} alt="" className="w-full h-full object-cover" />
                        </div>
                        {product.name}
                      </div>
                    </TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>
                      {product.stock > 0 ? (
                        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">Active</Badge>
                      ) : (
                        <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Out of Stock</Badge>
                      )}
                    </TableCell>
                    <TableCell>${product.price.toFixed(2)}</TableCell>
                    <TableCell className="text-right">{product.stock}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">...</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </div>
  );
}
