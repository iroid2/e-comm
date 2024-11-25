'use client'

import * as React from 'react'
import Image from 'next/image'
import { ChevronUp, ChevronDown, BookmarkPlus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = React.useState(0)
  const images = [
    '/placeholder.jpg',
    '/placeholder.jpg',
    '/placeholder.jpg',
    '/placeholder.jpg',
    '/placeholder.jpg',
  ]

  return (
    <div className="container mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8"
              onClick={() => {
                const newIndex = selectedImage - 1
                if (newIndex >= 0) setSelectedImage(newIndex)
              }}
            >
              <ChevronUp className="h-4 w-4" />
            </Button>
            
            {images.map((src, index) => (
              <div
                key={index}
                className={`border-2 rounded-lg overflow-hidden cursor-pointer w-16 h-16 relative ${
                  selectedImage === index ? 'border-primary' : 'border-transparent'
                }`}
                onClick={() => setSelectedImage(index)}
              >
                {/* <Image
                  src={src}
                  alt={`Product thumbnail ${index + 1}`}
                   
                  className="object-cover"
                  width={100}
                  height={100}       
                /> */}
              </div>
            ))}
            
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8"
              onClick={() => {
                const newIndex = selectedImage + 1
                if (newIndex < images.length) setSelectedImage(newIndex)
              }}
            >
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>

          {/* Main Image */}
          <div className="relative flex-1 aspect-square rounded-lg overflow-hidden">
            <Image
              src={images[selectedImage]}
              alt="Product main image"
              
              className="object-cover"
              width={100}
              height={100}
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <div className="text-sm text-muted-foreground mb-2">fresho!</div>
            <h1 className="text-2xl font-semibold mb-4">
              fresho! Apple - Royal Gala Economy, 4 pcs Approx.400 g - 500 g
            </h1>
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-muted-foreground">MRP:</span>
                <span className="text-sm line-through">₹221.92</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-semibold">Price: ₹120</span>
                <span className="text-sm text-muted-foreground">(₹30 / pc)</span>
              </div>
              <div className="text-green-600 text-sm">
                You Save: 46% OFF
              </div>
              <div className="text-sm text-muted-foreground">
                (Inclusive of all taxes)
              </div>
            </div>
          </div>

          <Card className="bg-[#f4faf0] border-none p-4">
            <div className="font-semibold">Har Din Sasta!</div>
          </Card>

          <div className="space-y-4">
            <h3 className="font-semibold">Pack sizes</h3>
            <Card className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-semibold">4 pcs</div>
                  <div className="text-sm text-muted-foreground">Approx.400 g - 500 g</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">₹120</div>
                  <div className="text-sm">
                    <span className="text-muted-foreground line-through mr-2">₹221.92</span>
                    <span className="text-green-600">46% OFF</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex gap-4">
            <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white">
              Add to basket
            </Button>
            <Button variant="outline" className="flex gap-2">
              <BookmarkPlus className="h-4 w-4" />
              Save for later
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

