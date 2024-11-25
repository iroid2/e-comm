import React from 'react'
import SmallTitle from './SmallTitle'

export default function SectionHeader({title,heading,classTitle,classdescription, description}:{title:string,classdescription?:string,heading:string,classTitle?:string, description:string}) {
  return (
    <div className="text-center mb-7 space-y-4">
       {title &&  <SmallTitle title={title} className='text-black '/>}
          <h2 className={`text-4xl md:text-5xl font-bold tracking-tight ${classdescription}`}>
            {heading}
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl  mx-auto ${classTitle}`}>
            {description}
          </p>
        </div> 
  )
}
