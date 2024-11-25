import { GraduationCap } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <Link href={"/"} className="flex items-center ">
    <GraduationCap className="h-10 w-10"/>
    <span className="font-extrabold text-3xl">school<span className="      text-pink-700 p-2  ">PRO</span> </span>
    </Link>
  )
}
