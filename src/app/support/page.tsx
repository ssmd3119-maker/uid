"use client"

import { AppHeader } from "@/components/app-header"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function SupportPage() {
  return (
    <SidebarProvider
      defaultOpen={true}
      style={{ "--sidebar-width": "280px" } as React.CSSProperties}
    >
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-4xl space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Support</h1>
              <p className="text-muted-foreground">
                Get help through our various support channels
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Support Channels</CardTitle>
                <CardDescription>
                  Choose a platform to get help with Redefine Farm
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Please select a support channel from the sidebar:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>YouTube - Video tutorials and guides</li>
                  <li>Discord - Community support and real-time chat</li>
                  <li>WhatsApp - Direct messaging support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}