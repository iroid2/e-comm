import ContactUs from '@/components/front/ContactUs'
import Logo from '@/components/front/Logo'
import SectionHeader from '@/components/front/SectionHeader'
import React from 'react'

export default function page() {
  return (
    <div> 
        <div className="px-10">
        <div className="flex items-center justify-center">
          <Logo/>
        </div>
        <SectionHeader classTitle="text-black" title={'Get in Touch with Us'} heading='All in one Management Tool' description={'Streamline your  entire school operations with out comprehensive suire of inregrated modules designed specifically for modern education instituions'} />
        </div>
        <ContactUs/>
    </div>
  )
}
