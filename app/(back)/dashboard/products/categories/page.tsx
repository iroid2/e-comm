import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
import { Search, Plus } from 'lucide-react'

const categories = [
  { id: 1, name: "Fruits", productCount: 45, status: "Active" },
  { id: 2, name: "Vegetables", productCount: 62, status: "Active" },
  { id: 3, name: "Dairy", productCount: 28, status: "Active" },
  { id: 4, name: "Bakery", productCount: 35, status: "Active" },
  { id: 5, name: "Meat", productCount: 20, status: "Active" },
  { id: 6, name: "Frozen Foods", productCount: 50, status: "Inactive" },
  { id: 7, name: "Beverages", productCount: 40, status: "Active" },
  { id: 8, name: "Snacks", productCount: 55, status: "Active" },
  { id: 9, name: "Household", productCount: 30, status: "Active" },
  { id: 10, name: "Personal Care", productCount: 25, status: "Inactive" },
]

export default function CategoriesPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Product Categories</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Category
          </Button>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="flex flex-1 items-center space-x-2">
          <Input
            placeholder="Search categories..."
            className="w-[300px]"
          />
          <Button variant="outline" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Categories Overview</CardTitle>
          <CardDescription>Manage and organize your product categories</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Products</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell className="font-medium">{category.name}</TableCell>
                  <TableCell>{category.productCount}</TableCell>
                  <TableCell>
                    <Badge variant={category.status === "Active" ? "default" : "secondary"}>
                      {category.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost">Edit</Button>
                    <Button variant="ghost" className="text-red-500">Delete</Button>
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

