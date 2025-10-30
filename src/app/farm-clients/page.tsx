"use client"

import { useState } from "react"
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
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export default function FarmClientsPage() {
  const { toast } = useToast()
  const [isDialogOpen, setIsDialogOpen] = useState(true)
  const [accessToken, setAccessToken] = useState("")

  const handleSaveToken = () => {
    if (!accessToken) {
      toast({
        title: "Error",
        description: "Please enter an access token.",
        variant: "destructive",
      })
      return
    }

    // In a real app, you would save this token to your backend or local storage
    console.log("Access token saved:", accessToken)
    toast({
      title: "Access Token Saved",
      description: "Your access token has been successfully saved.",
    })
    
    setIsDialogOpen(false)
  }

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
              <h1 className="text-3xl font-bold">Farm Clients</h1>
              <p className="text-muted-foreground">
                Manage your farming clients and access tokens
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Farm Clients Dashboard</CardTitle>
                <CardDescription>
                  Configure access tokens to connect with your farming clients
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center py-12">
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline">Configure Access Token</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Access Token</DialogTitle>
                        <DialogDescription>
                          Enter your access token to connect with farming clients
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex items-center space-x-2">
                        <div className="grid flex-1 gap-2">
                          <Label htmlFor="access-token" className="sr-only">
                            Access Token
                          </Label>
                          <Input
                            id="access-token"
                            type="password"
                            value={accessToken}
                            onChange={(e) => setAccessToken(e.target.value)}
                            placeholder="Enter your access token"
                          />
                        </div>
                      </div>
                      <div className="flex justify-end space-x-2">
                        <Button
                          type="button"
                          variant="secondary"
                          onClick={() => setIsDialogOpen(false)}
                        >
                          Cancel
                        </Button>
                        <Button type="button" onClick={handleSaveToken}>
                          Save Token
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}