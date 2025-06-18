"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Gift, Star, Trophy, Video } from "lucide-react"

export function StreakRewards() {
  const [currentStreak, setCurrentStreak] = useState(12)
  const [longestStreak, setLongestStreak] = useState(21)
  const [showReward, setShowReward] = useState(false)

  const nextMilestone = 15
  const progress = (currentStreak / nextMilestone) * 100

  const claimReward = () => {
    setShowReward(true)
  }

  return (
    <div className="space-y-4">
      {!showReward ? (
        <>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Your Healthy Eating Streak</h3>
                <Badge variant="outline" className="bg-saffron-100 text-saffron-800 border-saffron-200">
                  <Star className="h-3 w-3 mr-1 fill-saffron-500 text-saffron-500" />
                  Level 2
                </Badge>
              </div>

              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-saffron-100 text-saffron-700 flex items-center justify-center mr-3">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">{currentStreak} Days</p>
                    <p className="text-sm text-muted-foreground">Current Streak</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-medium">{longestStreak} Days</p>
                  <p className="text-sm text-muted-foreground">Longest Streak</p>
                </div>
              </div>

              <div className="mt-4 mb-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>Next reward at {nextMilestone} days</span>
                  <span>
                    {currentStreak}/{nextMilestone}
                  </span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              <div className="grid grid-cols-7 gap-1 mt-4">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-8 rounded-md flex items-center justify-center text-xs font-medium ${
                      i < 5 ? "bg-saffron-100 text-saffron-700" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {i < 5 && <Star className="h-3 w-3 fill-saffron-500 text-saffron-500" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-4">Available Rewards</h3>

              <div className="space-y-3">
                <div className="flex items-center p-3 border rounded-lg bg-muted/30">
                  <div className="h-10 w-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center mr-3 flex-shrink-0">
                    <Video className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">Traditional Recipe Video</h4>
                    <p className="text-xs text-muted-foreground">Unlock exclusive cooking tutorial</p>
                  </div>
                  <Button size="sm" className="bg-saffron-500 hover:bg-saffron-600" onClick={claimReward}>
                    Claim
                  </Button>
                </div>

                <div className="flex items-center p-3 border rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mr-3 flex-shrink-0">
                    <Gift className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">10% Discount</h4>
                    <p className="text-xs text-muted-foreground">On your next meal plan subscription</p>
                  </div>
                  <Button size="sm" variant="outline" disabled>
                    Unlock at 15 days
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      ) : (
        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Reward Claimed!</h3>
            <p className="text-muted-foreground mb-6">You've unlocked an exclusive traditional recipe video.</p>
            <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
              <Video className="h-12 w-12 text-muted-foreground" />
            </div>
            <Button className="bg-saffron-500 hover:bg-saffron-600" onClick={() => setShowReward(false)}>
              Watch Video
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
