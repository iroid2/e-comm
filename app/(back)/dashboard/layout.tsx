import AppSidebar from '@/components/dashboard/sidebar/app-sidebar'
import SidebarHeader from '@/components/dashboard/sidebar/SidebarHeader'
import {  SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import React, { ReactNode } from 'react'

export default function DashboardLayout({children}:{children:ReactNode}) {
  return (
    <SidebarProvider>
       
      <AppSidebar/>
      <SidebarInset>
        <SidebarHeader/>
       {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
