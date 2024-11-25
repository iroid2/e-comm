"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { Apple, Carrot, Grape, Leaf, ShoppingBasket, Sparkles } from 'lucide-react'

interface Category {
  id: number
  name: string
  icon: React.ElementType
  items: number
  color: string
  activeColor: string
}

const categories: Category[] = [
  {
    id: 1,
    name: "Vegetables",
    icon: Carrot,
    items: 43,
    color: "bg-green-100",
    activeColor: "bg-green-500",
  },
  {
    id: 2,
    name: "Fruits & Berries",
    icon: Apple,
    items: 51,
    color: "bg-red-100",
    activeColor: "bg-red-500",
  },
  {
    id: 3,
    name: "Fresh Foods",
    icon: Leaf,
    items: 34,
    color: "bg-orange-100",
    activeColor: "bg-orange-500",
  },
  {
    id: 4,
    name: "Meat",
    icon: ShoppingBasket,
    items: 28,
    color: "bg-yellow-100",
    activeColor: "bg-yellow-500",
  },
  {
    id: 5,
    name: "Fresh Fruits",
    icon: Grape,
    items: 65,
    color: "bg-pink-100",
    activeColor: "bg-pink-500",
  },
  {
    id: 6,
    name: "Cleaning Essential",
    icon: Sparkles,
    items: 16,
    color: "bg-blue-100",
    activeColor: "bg-blue-500",
  },
]

export default function CategorySection() {
  const [activeCategory, setActiveCategory] = useState<number>(3)

  return (
    <div className="w-full px-4 py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Browse All Categories</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Shop from our wide selection of fresh and quality products
        </p>
      </div>
      <ScrollArea className="w-full whitespace-nowrap pb-4">
        <div className="flex w-full space-x-6 px-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              isActive={category.id === activeCategory}
              onClick={() => setActiveCategory(category.id)}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="mt-4" />
      </ScrollArea>
    </div>
  )
}

interface CategoryCardProps {
  category: Category
  isActive: boolean
  onClick: () => void
}

function CategoryCard({ category, isActive, onClick }: CategoryCardProps) {
  const Icon = category.icon

  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center w-full h-48 rounded-3xl transition-all duration-300 shadow-lg",
        isActive
          ? `${category.activeColor} text-white`
          : `${category.color} text-gray-800 hover:shadow-xl`
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: isActive ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <Icon className={cn("w-12 h-12 mb-4", isActive ? "text-white" : "text-gray-700")} />
      </motion.div>
      <span className={cn("text-lg font-semibold mb-1", isActive ? "text-white" : "text-gray-800")}>
        {category.name}
      </span>
      <span
        className={cn(
          "text-sm",
          isActive ? "text-white/90" : "text-gray-600"
        )}
      >
        {category.items} items
      </span>
    </motion.button>
  )
}

