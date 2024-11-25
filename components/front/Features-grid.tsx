import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import SmallTitle from "./SmallTitle"
import SectionHeader from "./SectionHeader"
import { Users, Calendar, Clipboard, BookOpen, DollarSign, FileText, MessageSquare } from 'lucide-react';

const featureSection=[
  {
    title: "Student Management",
    description: "Efficiently manage student profiles, academic records, and personal information.",
    icon: Users,
    image:'/images/thumb.jpg'
  },
  {
    title: "Attendance Tracking",
    description: "Automate and monitor student attendance, with absence tracking and reporting.",
    icon: Calendar,
    image:'/images/thumb.jpg'
  },
  {
    title: "Teacher Management",
    description: "Manage teacher profiles, schedules, and classroom assignments in one place.",
    icon: Clipboard,
    image:'/images/thumb.jpg'
  },
  {
    title: "Class Scheduling",
    description: "Easily organize and manage class timetables and room assignments.",
    icon: BookOpen,
    image:'/images/thumb.jpg'
  },
  {
    title: "Fee Management",
    description: "Track fee payments, send reminders, and generate invoices for parents.",
    icon: DollarSign,
    image:'/images/thumb.jpg'
  },
  {
    title: "Exam Management",
    description: "Organize exams, manage grades, and track student performance.",
    icon: FileText,
    image:'/images/thumb.jpg'
  },
  {
    title: "Parent Communication",
    description: "Enable parents to monitor their child’s progress and communicate with teachers.",
    icon: MessageSquare,
    image:'/images/thumb.jpg'
  }
]
 


export default function GridFeatures() {
  return (
    <section className="py-20 px-4">
        
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <SectionHeader title={'Top Features'} heading={'Revolutionize the way you edit videos.'} description={'Lucis automates complex editing tasks, allowing you to focus on creativity while it handles cuts, transitions, and enhancements with AI precision.'} />

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* AI Video Editing Card */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">{featureSection[0].title}</CardTitle>
              <p className="text-muted-foreground">
                {featureSection[0].description}
              </p>
            </CardHeader>
            <CardContent>
            {/* <Image
                     src={featureSection[0].image}
                  width={600}
                  height={400}
                  alt="AI Video Editing Interface"
                  className="w-full object-cover aspect-video"
                /> */}
            </CardContent>
          </Card>

          {/* AI Video Generation Card */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">{featureSection[1].title}</CardTitle>
              <p className="text-muted-foreground">
                {featureSection[1].description}
              </p>
            </CardHeader>
            <CardContent>
            <Image
                     src={featureSection[0].image}
                  width={600}
                  height={400}
                  alt="AI Video Editing Interface"
                  className="w-full object-cover aspect-video"
                />
            </CardContent>
          </Card>
          <div className="">
            
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {/* AI Video Editing Card */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">{featureSection[0].title}</CardTitle>
              <p className="text-muted-foreground">
                {featureSection[0].description}
              </p>
            </CardHeader>
            <CardContent>
            <Image
                     src={featureSection[0].image}
                  width={600}
                  height={400}
                  alt="AI Video Editing Interface"
                  className="w-full object-cover aspect-video"
                />
            </CardContent>
          </Card>

          {/* AI Video Generation Card */}
          <div className="">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">{featureSection[1].title}</CardTitle>
              <p className="text-muted-foreground">
                {featureSection[1].description}
              </p>
            </CardHeader>
            <CardContent>
            <Image
                     src={featureSection[2].image}
                  width={600}
                  height={400}
                  alt="AI Video Editing Interface"
                  className="w-full object-cover aspect-video"
                />
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">{featureSection[4].title}</CardTitle>
              <p className="text-muted-foreground">
                {featureSection[4].description}
              </p>
            </CardHeader>
            <CardContent>
            <Image
                     src={featureSection[4].image}
                  width={600}
                  height={400}
                  alt="AI Video Editing Interface"
                  className="w-full object-cover aspect-video"
                />
            </CardContent>
          </Card>
          </div>
          
          <div className="">
            
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {/* AI Video Editing Card */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">{featureSection[5].title}</CardTitle>
              <p className="text-muted-foreground">
                {featureSection[5].description}
              </p>
            </CardHeader>
            <CardContent>
            <Image
                     src={featureSection[5].image}
                  width={600}
                  height={400}
                  alt="AI Video Editing Interface"
                  className="w-full object-cover aspect-video"
                />
            </CardContent>
          </Card>

          {/* AI Video Generation Card */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">{featureSection[6].title}</CardTitle>
              <p className="text-muted-foreground">
                {featureSection[1].description}
              </p>
            </CardHeader>
            <CardContent>
            <Image
                     src={featureSection[6].image}
                  width={600}
                  height={400}
                  alt="AI Video Editing Interface"
                  className="w-full object-cover aspect-video"
                />
            </CardContent>
          </Card>
          <div className="">
            
          </div>
        </div>
      </div>
    </section>
  )
}