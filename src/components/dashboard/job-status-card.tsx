"use client"

import { BarChart, Timer, Play, Pause, Trash2, Zap, Clock } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { config } from "@/config/account-config"

export function JobStatusCard() {
  const { progress } = config;
  const isRunning = true;
  const xpPerMinute = Math.round(progress.currentExp / 84); // Assuming 1h 24m = 84 minutes

  return (
    <Card className="flex flex-col transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
      <CardHeader>
        <CardTitle>Job Status</CardTitle>
        <CardDescription>Current automation job details</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
            </span>
            <span className="font-semibold">Running</span>
          </div>
          <span className="text-sm text-muted-foreground">Since: 1h 24m</span>
        </div>
        
        {/* Token Expiry */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Timer className="h-4 w-4" />
            <span>Token Expiry</span>
          </div>
          <span className="font-semibold">5h</span>
        </div>
        
        {/* XP per minute */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Zap className="h-4 w-4" />
            <span>XP/Minute</span>
          </div>
          <span className="font-semibold">{xpPerMinute.toLocaleString()}</span>
        </div>
        
        {/* Session Duration */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Session Duration</span>
          </div>
          <span className="font-semibold">1h 24m</span>
        </div>
        
        {/* Played Matches */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <BarChart className="h-4 w-4" />
            <span>Played Matches</span>
          </div>
          <span className="font-semibold">579</span>
        </div>
        
        {/* Total XP Gained */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <BarChart className="h-4 w-4" />
            <span>Total XP Gained</span>
          </div>
          <span className="font-semibold">{progress.currentExp.toLocaleString()}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" size="icon">
          {isRunning ? <Pause /> : <Play />}
          <span className="sr-only">{isRunning ? "Pause" : "Play"}</span>
        </Button>
        <Button variant="destructive" size="icon">
          <Trash2 />
          <span className="sr-only">Delete</span>
        </Button>
      </CardFooter>
    </Card>
  )
}