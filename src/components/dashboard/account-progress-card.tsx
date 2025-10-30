"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { config } from "@/config/account-config"

export function AccountProgressCard() {
  const { account, progress } = config;
  const progressValue = progress.progressPercentage;

  return (
    <Card className="flex flex-col transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
      <CardHeader>
        <CardTitle>Account Progress</CardTitle>
        <CardDescription>Main Account: {account.nickname}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            Level {progress.currentLevel}
          </span>
          <span className="font-semibold">
            {progressValue.toFixed(2)}%
          </span>
        </div>
        <Progress value={progressValue} className="h-2" />
        <div className="grid grid-cols-2 gap-4 pt-2 text-sm">
          <div className="flex flex-col">
            <span className="text-muted-foreground">Region</span>
            <span className="font-semibold">{account.region}</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-muted-foreground">Played Matches</span>
            <span className="font-semibold">
              579
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground">EXP</span>
            <span className="font-semibold">
              {progress.currentExp.toLocaleString()}
            </span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-muted-foreground">To Next Level</span>
            <span className="font-semibold">
              {progress.expToNextLevel}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}