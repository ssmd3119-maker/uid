"use client"

import { Bell, RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import { UserNav } from "@/components/user-nav"

export function AppHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-2 border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:px-6">
      <SidebarTrigger className="md:hidden" />
      <div className="flex-1" />
      <Button variant="ghost" size="icon" aria-label="Refresh">
        <RefreshCw className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" aria-label="Notifications">
        <Bell className="h-4 w-4" />
      </Button>
      <ThemeToggle />
      <UserNav />
    </header>
  )
}
