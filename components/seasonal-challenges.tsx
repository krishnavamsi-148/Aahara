"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, Trophy, Users } from "lucide-react"

interface Challenge {
  id: string
  title: string
  description: string
  duration: string
  participants: number
  progress: number
  badges: string[]
  isJoined: boolean
}

const initialChallenges: Challenge[] = [
  {
    id: "summer-hydration",
    title: "Summer Hydration Quest",
    description: "Stay hydrated with seasonal fruits and cooling drinks during the hot summer months.",
    duration: "June 1 - June 30",
    participants: 1245,
    progress: 0,
    badges: ["Summer Special", "Beginner Friendly"],
    isJoined: false,
  },
  {
    id: "monsoon-immunity",
    title: "Monsoon Immunity Boost",
    description: "Build immunity with seasonal herbs and spices to stay healthy during the rainy season.",
    duration: "July 15 - August 15",
    participants: 876,
    progress: 0,
    badges: ["Monsoon Special", "Immunity"],
    isJoined: false,
  },
  {
    id: "navratri-detox",
    title: "Navratri Sugar Detox",
    description: "Reduce sugar intake and focus on traditional Navratri foods for a healthy celebration.",
    duration: "Oct 7 - Oct 15",
    participants: 2134,
    progress: 0,
    badges: ["Festival Special", "Detox"],
    isJoined: false,
  },
]

export function SeasonalChallenges() {
  const [challenges, setChallenges] = useState<Challenge[]>(initialChallenges)

  const joinChallenge = (id: string) => {
    setChallenges(
      challenges.map((challenge) => (challenge.id === id ? { ...challenge, isJoined: true, progress: 5 } : challenge)),
    )
  }

  return (
    <div className="space-y-4">
      {challenges.map((challenge) => (
        <Card key={challenge.id} className={challenge.isJoined ? "border-saffron-200" : ""}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">{challenge.title}</CardTitle>
              <div className="flex items-center text-sm text-muted-foreground">
                <Users className="h-4 w-4 mr-1" />
                <span>{challenge.participants}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {challenge.badges.map((badge) => (
                <Badge key={badge} variant="secondary" className="bg-saffron-100 text-saffron-800 hover:bg-saffron-200">
                  {badge}
                </Badge>
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">{challenge.description}</p>
            <div className="flex items-center text-sm text-muted-foreground mb-3">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{challenge.duration}</span>
            </div>

            {challenge.isJoined && (
              <div className="mt-2">
                <div className="flex justify-between items-center mb-1 text-sm">
                  <span>Your progress</span>
                  <span>{challenge.progress}%</span>
                </div>
                <Progress value={challenge.progress} className="h-2" />
              </div>
            )}
          </CardContent>
          <CardFooter>
            {challenge.isJoined ? (
              <Button variant="outline" className="w-full">
                <Trophy className="h-4 w-4 mr-2 text-saffron-500" />
                Continue Challenge
              </Button>
            ) : (
              <Button
                className="w-full bg-saffron-500 hover:bg-saffron-600"
                onClick={() => joinChallenge(challenge.id)}
              >
                Join Challenge
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
