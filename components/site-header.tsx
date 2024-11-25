"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Apple, Carrot, LogIn, Menu, Search, ShoppingBasket, User } from 'lucide-react'

const categories = [
  "All Categories",
  "Fruits & Vegetables",
  "Meat & Seafood",
  "Dairy & Eggs",
  "Bakery",
  "Pantry",
  "Frozen Foods",
  "Beverages",
  "Snacks",
  "Household",
]

const navItems = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Deals", href: "/deals" },
  { name: "Recipes", href: "/recipes" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // This would typically be managed by your auth system
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    // Implement your logout logic here
    setIsLoggedIn(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        document.body.classList.add('is-scrolled');
        setIsScrolled(true);
      } else {
        document.body.classList.remove('is-scrolled');
        setIsScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
   <div className="">
     <header className="fixed top-0 left-0 right-0 z-50">
      <div className={`bg-gradient-to-r from-green-50 to-green-100 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <Apple className="h-8 w-8 text-green-600" />
                <Carrot className="h-8 w-8 text-orange-500 -ml-2" />
                <span className="ml-2 text-2xl font-bold text-gray-900">FreshMart</span>
              </Link>
            </div>

            <div className="hidden md:block flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search for fresh groceries..."
                  className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-green-500" />
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <nav className="flex space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              {isLoggedIn ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Orders</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button onClick={handleLogin} variant="outline" className="flex items-center space-x-2">
                  <LogIn className="h-5 w-5" />
                  <span>Login</span>
                </Button>
              )}
              <Button variant="outline" size="icon" className="relative rounded-full">
                <ShoppingBasket className="h-5 w-5" />
                <Badge variant="destructive" className="absolute -top-2 -right-2">3</Badge>
                <span className="sr-only">Shopping cart</span>
              </Button>
            </div>

            <div className="flex md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="ml-2">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>FreshMart Menu</SheetTitle>
                  </SheetHeader>
                  <nav className="mt-6">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition duration-150 ease-in-out"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                    {isLoggedIn ? (
                      <Button
                        onClick={handleLogout}
                        variant="outline"
                        className="w-full mt-4 flex items-center justify-center space-x-2"
                      >
                        <LogIn className="h-5 w-5" />
                        <span>Logout</span>
                      </Button>
                    ) : (
                      <Button
                        onClick={handleLogin}
                        variant="outline"
                        className="w-full mt-4 flex items-center justify-center space-x-2"
                      >
                        <LogIn className="h-5 w-5" />
                        <span>Login</span>
                      </Button>
                    )}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        <div className={`bg-green-600 transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-12">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="link" className="text-white hover:text-green-100">
                    Browse Categories
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {categories.map((category) => (
                    <DropdownMenuItem key={category}>{category}</DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <div className="hidden md:block text-sm font-medium text-white">
                🚚 Free delivery on orders over $50! 🥕 Fresh produce guaranteed!
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className="h-[calc(4rem+3rem)]" />
   </div>
  )
}

