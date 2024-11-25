import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function HeroAdsCard() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-yellow-400 to-orange-500 p-6 rounded-2xl shadow-lg w-full md:w-[300px] lg:w-[350px]">
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-white mb-2">Fresh Fruits</h2>
        <p className="text-xl font-semibold text-white mb-4">20% OFF</p>
        <p className="text-sm text-white mb-6">Enjoy our juicy selection of seasonal fruits at unbeatable prices!</p>
        <Button className="bg-white text-orange-500 hover:bg-orange-100 transition-colors duration-300">
          Shop Now
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32">
        {/* <Image
          src="/placeholder.jpg"
          alt="Fruit Basket"
          width={128}
          height={128}
          className="object-contain"
        /> */}
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -skew-x-12"></div>
    </div>
  )
}

