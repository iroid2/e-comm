import * as React from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { UserPlus, Users } from 'lucide-react'
import SinglestudentForms from "./studentForms"
import BulkStudentForms from "./Bulk-studentForms"

export default function Admission() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <Tabs defaultValue="single" className="w-full">
        <TabsList className="grid w-full grid-cols-2 h-[50px] p-1 bg-gray-50 rounded-lg">
          <TabsTrigger
            value="single"
            className="data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-md flex items-center justify-center gap-2 text-sm font-medium"
          >
            <UserPlus className="h-4 w-4" />
            Single Admission
          </TabsTrigger>
          <TabsTrigger
            value="bulk"
            className="data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-md flex items-center justify-center gap-2 text-sm font-medium"
          >
            <Users className="h-4 w-4" />
            Bulk Admission
          </TabsTrigger>
        </TabsList>
      <SinglestudentForms/>
       <BulkStudentForms/>
      </Tabs>
    </div>
  )
}