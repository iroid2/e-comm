"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRight, Heart, Star } from 'lucide-react';
import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    name: "Organic Tomato Vegetable",
    price: 142.00,
    originalPrice: 240.00,
    image: "/placeholder.jpg",
    rating: 5,
    reviews: 3.2,
    tag: "Sale"
  },
  {
    id: 2,
    name: "Strawberry Vanilla",
    price: 142.00,
    originalPrice: 240.00,
    image: "/placeholder.jpg",
    rating: 5,
    reviews: 3.2,
    tag: "Sale"
  },
  {
    id: 3,
    name: "Fresh Organic Bananas",
    price: 142.00,
    originalPrice: 240.00,
    image: "/placeholder.jpg",
    rating: 5,
    reviews: 3.2,
    tag: "Sale"
  },
  {
    id: 4,
    name: "Mixed Citrus Pack",
    price: 142.00,
    originalPrice: 240.00,
    image: "/placeholder.jpg",
    rating: 5,
    reviews: 3.2,
    tag: "Sale"
  },
];

export default function FeaturedProducts() {
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

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <section className="w-full py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <Badge variant="secondary" className="bg-red-100 text-red-700 uppercase text-xs">
              Sale
            </Badge>
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
                <Card className="relative bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="absolute top-6 right-6 z-10">
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        className="rounded-full hover:bg-gray-100"
                      >
                        <Heart className="w-5 h-5 text-gray-500" />
                      </Button>
                    </div>
                    
                    <Link href={`/product/${product.id}`}>
                      <div className="relative h-48 mb-4 group">
                        <Image
                          src={product.image}
                          alt={product.name}
                          // layout="fill"
                          objectFit="contain"
                          width={300}
                          height={300}
                          className="transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      <div className="space-y-3">
                        <h3 className="font-medium text-gray-900 text-center">
                          {product.name}
                        </h3>

                        <div className="flex justify-center items-center gap-1">
                          {renderStars(product.rating)}
                        </div>

                        <div className="flex items-center justify-center gap-2">
                          <span className="text-red-500 font-bold">
                            ${product.price.toFixed(2)}
                          </span>
                          <span className="text-gray-400 line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        </div>

                        <div className="flex justify-center">
                          <Button 
                            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8"
                          >
                            Shop Now
                          </Button>
                        </div>
                      </div>
                    </Link>
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
                index + 1 === current ? "bg-orange-500 w-6" : "bg-gray-300"
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

