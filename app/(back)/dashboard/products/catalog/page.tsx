import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Filter } from 'lucide-react'

const products = [
  {
    id: 1,
    name: "Organic Bananas",
    category: "Fruits",
    price: 0.99,
    image: "/placeholder.jpg",
    stock: 150,
  },
  {
    id: 2,
    name: "Whole Milk",
    category: "Dairy",
    price: 3.49,
    image: "/placeholder.jpg",
    stock: 100,
  },
  {
    id: 3,
    name: "Whole Wheat Bread",
    category: "Bakery",
    price: 2.99,
    image: "/placeholder.jpg",
    stock: 75,
  },
  {
    id: 4,
    name: "Chicken Breast",
    category: "Meat",
    price: 5.99,
    image: "/placeholder.jpg",
    stock: 50,
  },
  {
    id: 5,
    name: "Spinach",
    category: "Vegetables",
    price: 1.99,
    image: "/placeholder.jpg",
    stock: 80,
  },
  {
    id: 6,
    name: "Cheddar Cheese",
    category: "Dairy",
    price: 4.99,
    image: "/placeholder.jpg",
    stock: 60,
  },
]

export default function CatalogPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Product Catalog</h2>
        <div className="flex items-center space-x-2">
          <Button>Add New Product</Button>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="flex flex-1 items-center space-x-2">
          <Input
            placeholder="Search products..."
            className="w-[300px]"
          />
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="fruits">Fruits</SelectItem>
              <SelectItem value="vegetables">Vegetables</SelectItem>
              <SelectItem value="dairy">Dairy</SelectItem>
              <SelectItem value="bakery">Bakery</SelectItem>
              <SelectItem value="meat">Meat</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name-asc">Name (A-Z)</SelectItem>
            <SelectItem value="name-desc">Name (Z-A)</SelectItem>
            <SelectItem value="price-asc">Price (Low to High)</SelectItem>
            <SelectItem value="price-desc">Price (High to Low)</SelectItem>
            <SelectItem value="stock-asc">Stock (Low to High)</SelectItem>
            <SelectItem value="stock-desc">Stock (High to Low)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-t-lg" />
            </CardHeader>
            <CardContent>
              <CardTitle>{product.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{product.category}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                <Badge variant={product.stock > 50 ? "default" : "destructive"}>
                  Stock: {product.stock}
                </Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Edit</Button>
              <Button>View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

