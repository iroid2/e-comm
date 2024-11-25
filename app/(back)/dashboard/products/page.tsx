import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Search } from 'lucide-react'

const products = [
  {
    id: 1,
    name: "Organic Bananas",
    category: "Fruits",
    price: 0.99,
    stock: 150,
    sales: 50,
  },
  {
    id: 2,
    name: "Whole Milk",
    category: "Dairy",
    price: 3.49,
    stock: 100,
    sales: 30,
  },
  {
    id: 3,
    name: "Whole Wheat Bread",
    category: "Bakery",
    price: 2.99,
    stock: 75,
    sales: 25,
  },
  {
    id: 4,
    name: "Chicken Breast",
    category: "Meat",
    price: 5.99,
    stock: 50,
    sales: 20,
  },
  {
    id: 5,
    name: "Spinach",
    category: "Vegetables",
    price: 1.99,
    stock: 80,
    sales: 15,
  },
]

export default function ProductsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Products</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Product
          </Button>
        </div>
      </div>
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Products</TabsTrigger>
          <TabsTrigger value="low-stock">Low Stock</TabsTrigger>
          <TabsTrigger value="top-selling">Top Selling</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <div className="flex justify-between">
            <div className="relative w-[300px]">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search products" className="pl-8" />
            </div>
            <Button variant="outline">
              Export
            </Button>
          </div>
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Sales</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>${product.price.toFixed(2)}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>{product.sales}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

