import { ArrowUp, Sparkles, TrendingUp, Award, Target } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { config } from "@/config/account-config"

export function AchievementsCard() {
  const { progress } = config;

  // Calculate some statistics based on the config data
  const levelCompletion = Math.round(progress.progressPercentage);
  
  const achievements = [
    {
      icon: Sparkles,
      text: `+11,018 EXP Today`,
      bgColor: "bg-blue-500",
    },
    {
      icon: TrendingUp,
      text: `+39K (+39,968 EXP)`,
      bgColor: "bg-green-500",
    },
    {
      icon: Target,
      text: `Level ${progress.currentLevel} → ${progress.nextLevel}`,
      bgColor: "bg-purple-500",
    },
    {
      icon: Award,
      text: `${progress.currentLevel} Levels Completed`,
      bgColor: "bg-indigo-500",
    },
    {
      icon: ArrowUp,
      text: `Total Matches: 579`,
      bgColor: "bg-red-500",
    },
  ]

  return (
    <Card className="transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
      <CardHeader>
        <CardTitle>Achievements</CardTitle>
        <CardDescription>Your gaming milestones</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {achievements.map((ach, index) => (
            <li key={index} className="flex items-center gap-4">
              <div
                className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${ach.bgColor}`}
              >
                <ach.icon className="h-6 w-6 text-white" />
              </div>
              <span className="font-semibold">{ach.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}