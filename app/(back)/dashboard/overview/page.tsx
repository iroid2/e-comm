// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Button } from "@/components/ui/button"
// import { ArrowUpRight, DollarSign, Package, ShoppingCart, Truck, Users } from 'lucide-react'
// import {
//   Bar,
//   BarChart,
//   Line,
//   LineChart,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts"

// const revenueData = [
//   { name: "Jan", total: 4000 },
//   { name: "Feb", total: 4500 },
//   { name: "Mar", total: 5000 },
//   { name: "Apr", total: 5500 },
//   { name: "May", total: 6000 },
//   { name: "Jun", total: 6500 },
//   { name: "Jul", total: 7000 },
// ]

// const ordersData = [
//   { name: "Mon", total: 200 },
//   { name: "Tue", total: 250 },
//   { name: "Wed", total: 300 },
//   { name: "Thu", total: 280 },
//   { name: "Fri", total: 350 },
//   { name: "Sat", total: 400 },
//   { name: "Sun", total: 320 },
// ]

// export default function DashboardPage() {
//   return (
//     <div className="flex-1 space-y-4 p-8 pt-6">
//       <div className="flex items-center justify-between space-y-2">
//         <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
//         <div className="flex items-center space-x-2">
//           <Button>Download Report</Button>
//         </div>
//       </div>
//       <Tabs defaultValue="overview" className="space-y-4">
//         <TabsList>
//           <TabsTrigger value="overview">Overview</TabsTrigger>
//           <TabsTrigger value="analytics">Analytics</TabsTrigger>
//         </TabsList>
//         <TabsContent value="overview" className="space-y-4">
//           <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                 <CardTitle className="text-sm font-medium">
//                   Total Revenue
//                 </CardTitle>
//                 <DollarSign className="h-4 w-4 text-muted-foreground" />
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">$45,231.89</div>
//                 <p className="text-xs text-muted-foreground">
//                   +20.1% from last month
//                 </p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                 <CardTitle className="text-sm font-medium">Orders</CardTitle>
//                 <ShoppingCart className="h-4 w-4 text-muted-foreground" />
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">+2350</div>
//                 <p className="text-xs text-muted-foreground">
//                   +10.5% from last month
//                 </p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                 <CardTitle className="text-sm font-medium">
//                   Active Customers
//                 </CardTitle>
//                 <Users className="h-4 w-4 text-muted-foreground" />
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">+12,234</div>
//                 <p className="text-xs text-muted-foreground">
//                   +3.2% from last month
//                 </p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//                 <CardTitle className="text-sm font-medium">
//                   Delivery Success Rate
//                 </CardTitle>
//                 <Truck className="h-4 w-4 text-muted-foreground" />
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">98.5%</div>
//                 <p className="text-xs text-muted-foreground">
//                   +0.5% from last month
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//           <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
//             <Card className="col-span-4">
//               <CardHeader>
//                 <CardTitle>Revenue Overview</CardTitle>
//               </CardHeader>
//               <CardContent className="pl-2">
//                 <ResponsiveContainer width="100%" height={350}>
//                   <BarChart data={revenueData}>
//                     <XAxis
//                       dataKey="name"
//                       stroke="#888888"
//                       fontSize={12}
//                       tickLine={false}
//                       axisLine={false}
//                     />
//                     <YAxis
//                       stroke="#888888"
//                       fontSize={12}
//                       tickLine={false}
//                       axisLine={false}
//                       tickFormatter={(value) => `$${value}`}
//                     />
//                     <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
//                     <Tooltip />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </CardContent>
//             </Card>
//             <Card className="col-span-3">
//               <CardHeader>
//                 <CardTitle>Recent Orders</CardTitle>
//                 <CardDescription>
//                   You made 265 sales this month.
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <ResponsiveContainer width="100%" height={350}>
//                   <LineChart data={ordersData}>
//                     <XAxis
//                       dataKey="name"
//                       stroke="#888888"
//                       fontSize={12}
//                       tickLine={false}
//                       axisLine={false}
//                     />
//                     <YAxis
//                       stroke="#888888"
//                       fontSize={12}
//                       tickLine={false}
//                       axisLine={false}
//                       tickFormatter={(value) => `${value}`}
//                     />
//                     <Line type="monotone" dataKey="total" stroke="#8884d8" />
//                     <Tooltip />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </CardContent>
//             </Card>
//           </div>
//         </TabsContent>
//       </Tabs>
//     </div>
//   )
// }


import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}
