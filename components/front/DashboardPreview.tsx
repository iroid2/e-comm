import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
 
export function CardWithForm() {
  return (
    <Card className="w-full border-none">
      <div className="mx-auto max-w-6xl">
       
        <Image src={'/images/dashboard.png'} alt="dashboard image" className="w-full" width={2016} height={1210}/>
      
      
      </div>
    </Card>
  )
}
