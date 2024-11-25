"use client"
import { Home, ShoppingBag, Truck, Users, Book, Calendar, FileText, DollarSign, Bell, Settings, Map, Package } from "lucide-react";
import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRight, ChevronsUpDown, LogOut } from 'lucide-react';
import Logo from "@/components/front/Logo";

export default function AppSidebar() {
  const user = {
    name: "John Doe",
    email: "john@freshmart.com",
    avatar: "/avatars/john-doe.jpg",
  }

  const sidebarLinks = [
    {
      title: "Dashboard",
      url: "/dashboard",    
      icon: Home,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "/dashboard/overview",
        },
      ],
    },
    {
      title: "Products",
      url: "/dashboard/products",
      icon: ShoppingBag,
      items: [
        {
          title: "Catalog",
          url: "/dashboard/products/catalog",
        },
        {
          title: "Categories",
          url: "/dashboard/products/categories",
        },
        {
          title: "Inventory",
          url: "/dashboard/products/inventory",
        },
      ],
    },
    {
      title: "Orders",
      url: "/dashboard/orders",
      icon: Package,
      items: [
        {
          title: "Active Orders",
          url: "/orders/active",
        },
        {
          title: "Order History",
          url: "/dashboard/orders/history",
        },
      ],
    },
    {
      title: "Delivery",
      url: "/dashboard/delivery",
      icon: Truck,
      items: [
        {
          title: "Tracking",
          url: "/dashboard/delivery/tracking",
        },
        {
          title: "Drivers",
          url: "/dashboard/delivery/drivers",
        },
      ],
    },
    {
      title: "Customers",
      url: "/customers",
      icon: Users,
      items: [
        {
          title: "Customer List",
          url: "/customers/list",
        },
        {
          title: "Loyalty Program",
          url: "/dashboard/customers/loyalty",
        },
      ],
    },
    {
      title: "Markets",
      url: "/markets",
      icon: Map,
      items: [
        {
          title: "Market List",
          url: "/dashboard/markets/list",
        },
        {
          title: "Add Market",
          url: "/dashboard/markets/add",
        },
      ],
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: FileText,
      items: [
        {
          title: "Sales Reports",
          url: "/analytics/sales",
        },
        {
          title: "Performance",
          url: "/analytics/performance",
        },
      ],
    },
    {
      title: "Finance",
      url: "/finance",
      icon: DollarSign,
      items: [
        {
          title: "Transactions",
          url: "/finance/transactions",
        },
        {
          title: "Invoices",
          url: "/finance/invoices",
        },
      ],
    },
    {
      title: "Communication",
      url: "/communication",
      icon: Bell,
      items: [
        {
          title: "Notifications",
          url: "/communication/notifications",
        },
        {
          title: "Customer Support",
          url: "/communication/support",
        },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
      items: [
        {
          title: "General",
          url: "/settings/general",
        },
        {
          title: "Security",
          url: "/settings/security",
        },
      ],
    },
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Logo />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {sidebarLinks.map((item) => (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.url}>
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage
                      src={user.avatar}
                      alt={user.name}
                    />
                    <AvatarFallback className="rounded-lg">JD</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">
                      {user.name}
                    </span>
                    <span className="truncate text-xs">
                      {user.email}
                    </span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage
                        src={user.avatar}
                        alt={user.name}
                      />
                      <AvatarFallback className="rounded-lg">
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        {user.name}
                      </span>
                      <span className="truncate text-xs">
                        {user.email}
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Account Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Bell className="mr-2 h-4 w-4" />
                    Notifications
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

