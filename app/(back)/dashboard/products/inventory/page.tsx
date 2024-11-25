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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, AlertTriangle } from 'lucide-react'

const inventory = [
  { id: 1, name: "Organic Bananas", category: "Fruits", stock: 150, minStock: 50, maxStock: 200, status: "In Stock" },
  { id: 2, name: "Whole Milk", category: "Dairy", stock: 100, minStock: 30, maxStock: 150, status: "In Stock" },
  { id: 3, name: "Whole Wheat Bread", category: "Bakery", stock: 75, minStock: 20, maxStock: 100, status: "In Stock" },
  { id: 4, name: "Chicken Breast", category: "Meat", stock: 50, minStock: 20, maxStock: 80, status: "Low Stock" },
  { id: 5, name: "Spinach", category: "Vegetables", stock: 80, minStock: 30, maxStock: 120, status: "In Stock" },
  { id: 6, name: "Cheddar Cheese", category: "Dairy", stock: 60, minStock: 25, maxStock: 100, status: "In Stock" },
  { id: 7, name: "Apples", category: "Fruits", stock: 200, minStock: 50, maxStock: 250, status: "Overstocked" },
  { id: 8, name: "Tomatoes", category: "Vegetables", stock: 10, minStock: 30, maxStock: 100, status: "Out of Stock" },
  { id: 9, name: "Greek Yogurt", category: "Dairy", stock: 40, minStock: 20, maxStock: 80, status: "In Stock" },
  { id: 10, name: "Ground Beef", category: "Meat", stock: 25, minStock: 15, maxStock: 50, status: "Low Stock" },
]

export default function InventoryPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Inventory Management</h2>
        <div className="flex items-center space-x-2">
          <Button>Update Stock</Button>
          <Button variant="outline">Generate Report</Button>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="flex flex-1 items-center space-x-2">
          <Input
            placeholder="Search inventory..."
            className="w-[300px]"
          />
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Filter by category" />
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
            <SelectItem value="stock-asc">Stock (Low to High)</SelectItem>
            <SelectItem value="stock-desc">Stock (High to Low)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Current Inventory</CardTitle>
          <CardDescription>Manage your product stock levels and inventory status</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Current Stock</TableHead>
                <TableHead>Min Stock</TableHead>
                <TableHead>Max Stock</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.stock}</TableCell>
                  <TableCell>{item.minStock}</TableCell>
                  <TableCell>{item.maxStock}</TableCell>
                  <TableCell>
                    <Badge 
//                       variant={
//                         item.status === "In Stock" ? "default" : 
//                         item.status === "Low Stock" ? "warning" :
//                         item.
// status === "Out of Stock" ? "destructive" :
//                         "secondary"
//                       }
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost">Adjust Stock</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

