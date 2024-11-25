import SiteFooter from '@/components/front/Footer'
import SiteHeader from '@/components/site-header'
import React, { ReactNode } from 'react'

export default function FrontLayout({children}:{children:ReactNode}) {
  return (
    <div>
      <SiteHeader/>
      {children}
      <SiteFooter/>
      </div>
  )
}
