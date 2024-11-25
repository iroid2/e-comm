import { TabsContent, TabsTrigger } from '@/components/ui/tabs'
import { UserPlus, Users } from 'lucide-react'
import React from 'react'

export default function BulkStudentForms() {
  return (
    <TabsContent
    value="bulk"
    className="mt-4 rounded-lg border border-gray-200 p-4"
  >
    <h2 className="text-base font-medium text-gray-900 mb-2">
      Bulk Student Admission
    </h2>
    <p className="text-sm text-gray-500">
      Form for admitting multiple students would go here.
    </p>
  </TabsContent>
  )
}
