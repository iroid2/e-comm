"use client"

import { BookOpen, Calendar, DollarSign, Users } from 'lucide-react'
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const features = [
  {
    tabTitle: "Students",
    title: "Student Management",
    description: "Efficiently manage student profiles, academic records, and personal information.",
    icon: Users,
    image:'/images/thumb.jpg',
    subFeatures: [
      "Create and update student profiles",
      "Store academic history and grades",
      "Maintain student health and contact details",
      "Manage enrollment and attendance records",
    ],
  },
  {
    tabTitle: "Attendance",
    title: "Attendance Tracking",
    description: "Automate and monitor student attendance, with absence tracking and reporting.",
    icon: Calendar,
    image:'/images/thumb.jpg',
    subFeatures: [
      "Real-time attendance monitoring",
      "Automated absence notifications",
      "Generate attendance reports",
      "Track tardiness and early departures",
    ],
  },
  {
    tabTitle: "Scheduling",
    title: "Class Scheduling",
    description: "Easily organize and manage class timetables and room assignments.",
    icon: BookOpen,
    image:'/images/placeholder.jpg',
    subFeatures: [
      "Create and manage class schedules",
      "Allocate rooms and resources",
      "Automated schedule conflict detection",
      "Support for rotating and block schedules",
    ],
  },
  {
    tabTitle: "Fees",
    title: "Fee Management",
    description: "Track fee payments, send reminders, and generate invoices for parents.",
    icon: DollarSign,
    image:'/images/thumb.jpg',
    subFeatures: [
      "Generate and manage invoices",
      "Automated fee reminders",
      "Online payment integration",
      "Track outstanding payments",
    ],
  },
]

export default function TabbedFeatures() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Tabs defaultValue="Students" className="space-y-8">
        <TabsList className="inline-flex h-auto w-full justify-start gap-4 rounded-none border-b bg-transparent p-0">
          {features.map((feature) => (
            <TabsTrigger
              key={feature.tabTitle}
              value={feature.tabTitle}
              className="inline-flex items-center gap-2 border-b-2 border-transparent bg-transparent px-4 pb-4 pt-2 text-muted-foreground hover:text-primary data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary"
            >
              <feature.icon className="h-5 w-5" />
              {feature.tabTitle}
            </TabsTrigger>
          ))}
        </TabsList>
        {features.map((feature) => (
          <TabsContent key={feature.tabTitle} value={feature.tabTitle} className="space-y-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tight">{feature.title}</h2>
                  <p className="text-lg text-muted-foreground">{feature.description}</p>
                </div>
                <Card>
                  <CardContent className="p-6">
                    <ul className="grid gap-4">
                      {feature.subFeatures.map((subFeature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                            <feature.icon className="h-4 w-4 text-primary" />
                          </div>
                          <span>{subFeature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                {/* <Image
                  src={feature.image}
                  alt={feature.title}
                  className="object-cover"
                  width={100}
                          height={100}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                /> */}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}