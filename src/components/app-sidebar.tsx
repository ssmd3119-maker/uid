"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Briefcase, Home, LifeBuoy, Settings, Wind, Youtube, MessageCircle, Phone } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/farm-clients", label: "Farm Clients", icon: Briefcase },
  { href: "/settings", label: "Account Settings", icon: Settings },
  { href: "/support", label: "Support", icon: LifeBuoy },
]

export function AppSidebar() {
  const pathname = usePathname()

  const handleLogout = () => {
    // In a real app, you would handle logout logic here
    console.log("Logging out...")
  }

  return (
    <Sidebar>
      <SidebarHeader className="px-4">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="Redefine Farm Home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Wind className="h-6 w-6" />
          </div>
          <h1 className="font-headline text-lg font-semibold tracking-tight">
            Redefine Farm
          </h1>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="px-4">
          {links.map((link) => (
            <SidebarMenuItem key={link.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === link.href}
                tooltip={link.label}
              >
                <Link href={link.href}>
                  <link.icon />
                  <span>{link.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          {/* Support submenu */}
          {pathname === "/support" && (
            <div className="ml-8 mt-2 space-y-1">
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="YouTube">
                  <Link href="https://www.youtube.com/@akchualdev" target="_blank">
                    <Youtube className="h-4 w-4" />
                    <span>YouTube</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Discord">
                  <Link href="https://discord.gg/dummy" target="_blank">
                    <MessageCircle className="h-4 w-4" />
                    <span>Discord</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="WhatsApp">
                  <Link href="https://wa.me/1234567890" target="_blank">
                    <Phone className="h-4 w-4" />
                    <span>WhatsApp</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </div>
          )}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={handleLogout}
              className="w-full justify-center bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700"
              size="lg"
            >
              Logout
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}