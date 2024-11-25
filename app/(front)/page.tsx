import CategorySection from '@/components/front/CategorySection'
import FeaturedProducts from '@/components/front/components_featured-products'
import { CardWithForm } from '@/components/front/DashboardPreview'
import GridFeatures from '@/components/front/Features-grid'
import HeroSection from '@/components/front/HeroSection'
import LogoCloud from '@/components/front/LogoCloud'
import PricingV2 from '@/components/front/Pricing'
import TabbedFeatures from '@/components/front/taabbedFeatures'
import TopSelling from '@/components/front/TopSellingSection'
import React from 'react'

export default function page() {
  return (
    <div className=''>

      <HeroSection/>
      <CategorySection/>
      <TopSelling/>
      <FeaturedProducts/>
    </div>
  )
}
