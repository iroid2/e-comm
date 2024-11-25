"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Plus, ChevronRight } from 'lucide-react';
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Natural Refreshing Mango Juice",
    description: "Goodness of Fiber",
    price: 5.12,
    image: "/placeholder.jpg",
    stock: 126,
    totalStock: 220,
    tag: "Best Seller",
    volume: "450 ml"
  },
  {
    id: 2,
    name: "Natural Refreshing Orange Juice",
    description: "Fresh and Healthy",
    price: 4.23,
    image: "/placeholder.jpg",
    stock: 112,
    totalStock: 250,
    tag: "Best Seller",
    volume: "450 ml"
  },
  {
    id: 3,
    name: "Premium Quality Fresh Produce",
    description: "Pomegranate",
    price: 3.19,
    image: "/placeholder.jpg",
    stock: 96,
    totalStock: 150,
    tag: "Best Deal",
    volume: "450 ml"
  },
  {
    id: 4,
    name: "Passion Fruit Star Hops & Blood Orange",
    description: "Natural Blend",
    price: 2.22,
    image: "/placeholder.jpg",
    stock: 102,
    totalStock: 215,
    tag: "Best Seller",
    volume: "450 ml"
  },
];

export default function TopSelling() {
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="w-full py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold">Top Selling</h2>
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full" />
          </div>
          <Button variant="ghost" className="text-orange-500 font-medium">
            View all <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <Carousel setApi={setApi} className="relative">
          <CarouselContent className="-ml-2 md:-ml-4">
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-2 md:pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <Card className="relative flex-shrink-0 bg-green-50/50 rounded-2xl p-4">
                  <CardContent className="p-0">
                    <div className="absolute top-6 left-6 z-10">
                      <span className="inline-block bg-orange-500 text-white text-xs px-2 py-1 rounded">
                        {product.tag}
                      </span>
                    </div>
                    <div className="relative h-48 mb-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain"
                        width={300}
                          height={300}
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="min-h-[3rem]">
                        <h3 className="font-semibold text-gray-900">{product.name}</h3>
                        <p className="text-sm text-gray-500">{product.description}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                          <span className="text-sm text-gray-500 ml-1">/ {product.volume}</span>
                        </div>
                        <Button size="icon" className="rounded-full bg-green-500 hover:bg-green-600">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Available Stock</span>
                          <span className="text-gray-900 font-medium">{product.stock}/{product.totalStock}</span>
                        </div>
                        <Progress value={(product.stock / product.totalStock) * 100} className="h-2 bg-green-100">
                          <div 
                            className="h-full bg-green-500 transition-all" 
                            style={{ width: `${(product.stock / product.totalStock) * 100}%` }}
                          />
                        </Progress>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 -translate-x-1/2" />
          <CarouselNext className="right-0 translate-x-1/2" />
        </Carousel>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index + 1 === current ? "bg-green-500 w-6" : "bg-gray-300"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

