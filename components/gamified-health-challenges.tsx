"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Trophy, Users, Star, Gift, Clock, Award, Sparkles, Flame, Check, Lock } from "lucide-react"

interface Challenge {
  id: string
  title: string
  description: string
  duration: string
  endDate: string
  participants: number
  progress: number
  badges: string[]
  isJoined: boolean
  rewards: string[]
  streakDays: number
  level: number
  tasks: {
    id: string
    title: string
    completed: boolean
    points: number
  }[]
}

export function GamifiedHealthChallenges() {
  const [activeTab, setActiveTab] = useState("seasonal")

  const [challenges, setChallenges] = useState<Challenge[]>([
    {
      id: "navratri-sugar-detox",
      title: "Navratri Sugar Detox Challenge",
      description: "Reduce sugar intake and focus on traditional Navratri foods for a healthy celebration.",
      duration: "9 Days",
      endDate: "October 15, 2023",
      participants: 2134,
      progress: 33,
      badges: ["Festival Special", "Detox", "Community Favorite"],
      isJoined: true,
      rewards: ["Sugar-Free Recipe Book", "15% Off on Next Order", "Exclusive Webinar Access"],
      streakDays: 3,
      level: 2,
      tasks: [
        { id: "t1", title: "Avoid processed sugar for the day", completed: true, points: 50 },
        { id: "t2", title: "Try a traditional Navratri recipe", completed: true, points: 30 },
        { id: "t3", title: "Drink 8 glasses of water", completed: true, points: 20 },
        { id: "t4", title: "Share your progress on social media", completed: false, points: 40 },
        { id: "t5", title: "Complete a 15-minute yoga session", completed: false, points: 30 },
      ],
    },
    {
      id: "winter-immunity",
      title: "Winter Immunity Boost",
      description: "Strengthen your immunity with seasonal foods and herbs during the winter months.",
      duration: "30 Days",
      endDate: "December 31, 2023",
      participants: 1567,
      progress: 0,
      badges: ["Winter Special", "Immunity", "Beginner Friendly"],
      isJoined: false,
      rewards: ["Immunity Booster Kit", "Health Consultation", "Achievement Badge"],
      streakDays: 0,
      level: 0,
      tasks: [
        { id: "t1", title: "Include one immunity-boosting food daily", completed: false, points: 40 },
        { id: "t2", title: "Drink herbal tea", completed: false, points: 20 },
        { id: "t3", title: "Get 15 minutes of sunlight", completed: false, points: 30 },
        { id: "t4", title: "Practice deep breathing exercises", completed: false, points: 25 },
        { id: "t5", title: "Track your sleep quality", completed: false, points: 35 },
      ],
    },
    {
      id: "diwali-fitness",
      title: "Diwali Fitness Challenge",
      description: "Stay active and mindful of your diet during the festival of lights.",
      duration: "21 Days",
      endDate: "November 15, 2023",
      participants: 1876,
      progress: 0,
      badges: ["Festival Special", "Fitness", "Moderate"],
      isJoined: false,
      rewards: ["Fitness Tracker Discount", "Healthy Diwali Cookbook", "Premium App Access"],
      streakDays: 0,
      level: 0,
      tasks: [
        { id: "t1", title: "30-minute workout", completed: false, points: 50 },
        { id: "t2", title: "Choose healthier sweet options", completed: false, points: 40 },
        { id: "t3", title: "Practice portion control", completed: false, points: 30 },
        { id: "t4", title: "Take a post-meal walk", completed: false, points: 25 },
        { id: "t5", title: "Meditate for 10 minutes", completed: false, points: 35 },
      ],
    },
  ])

  const joinChallenge = (id: string) => {
    setChallenges(
      challenges.map((challenge) =>
        challenge.id === id ? { ...challenge, isJoined: true, progress: 5, streakDays: 1, level: 1 } : challenge,
      ),
    )
  }

  const completeTask = (challengeId: string, taskId: string) => {
    setChallenges(
      challenges.map((challenge) => {
        if (challenge.id === challengeId) {
          const updatedTasks = challenge.tasks.map((task) => (task.id === taskId ? { ...task, completed: true } : task))

          const completedTasks = updatedTasks.filter((task) => task.completed).length
          const totalTasks = updatedTasks.length
          const newProgress = Math.round((completedTasks / totalTasks) * 100)

          return {
            ...challenge,
            tasks: updatedTasks,
            progress: newProgress,
          }
        }
        return challenge
      }),
    )
  }

  const activeChallenge = challenges.find((challenge) => challenge.isJoined)

  return (
    <div className="space-y-6">
      <Tabs defaultValue="seasonal" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="seasonal">Seasonal</TabsTrigger>
          <TabsTrigger value="active">
            Active
            <Badge className="ml-1 bg-green-500 text-white h-5 w-5 p-0 flex items-center justify-center rounded-full">
              {challenges.filter((c) => c.isJoined).length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="rewards">Rewards</TabsTrigger>
        </TabsList>

        <TabsContent value="seasonal" className="mt-4 space-y-4">
          {challenges.map((challenge) => (
            <Card key={challenge.id} className={challenge.isJoined ? "border-saffron-200" : ""}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg flex items-center">
                    {challenge.title}
                    {challenge.isJoined && <Badge className="ml-2 bg-green-100 text-green-800">Active</Badge>}
                  </CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{challenge.participants}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {challenge.badges.map((badge) => (
                    <Badge
                      key={badge}
                      variant="secondary"
                      className="bg-saffron-100 text-saffron-800 hover:bg-saffron-200"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{challenge.description}</p>
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>
                    {challenge.duration} • Ends {challenge.endDate}
                  </span>
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
                  <Button variant="outline" className="w-full" onClick={() => setActiveTab("active")}>
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
        </TabsContent>

        <TabsContent value="active" className="mt-4">
          {activeChallenge ? (
            <div className="space-y-6">
              <Card className="border-saffron-200">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{activeChallenge.title}</CardTitle>
                    <Badge className="bg-green-100 text-green-800">
                      Day {activeChallenge.streakDays} of {activeChallenge.duration.split(" ")[0]}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-saffron-100 text-saffron-700 flex items-center justify-center mr-3">
                        <Flame className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">{activeChallenge.streakDays} Day Streak</p>
                        <p className="text-sm text-muted-foreground">Keep it going!</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">Level {activeChallenge.level}</p>
                      <p className="text-sm text-muted-foreground">{150 * activeChallenge.level} Points</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1 text-sm">
                      <span>Challenge Progress</span>
                      <span>{activeChallenge.progress}%</span>
                    </div>
                    <Progress value={activeChallenge.progress} className="h-2" />
                  </div>

                  <h4 className="font-medium mb-3">Today's Tasks</h4>
                  <div className="space-y-3">
                    {activeChallenge.tasks.map((task) => (
                      <div
                        key={task.id}
                        className={`p-3 rounded-lg border flex items-start justify-between ${
                          task.completed
                            ? "bg-green-50 border-green-200"
                            : "bg-white border-gray-200 hover:border-saffron-200"
                        }`}
                      >
                        <div className="flex items-start">
                          <div
                            className={`h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${
                              task.completed ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"
                            }`}
                          >
                            {task.completed ? <Check className="h-4 w-4" /> : null}
                          </div>
                          <span className={task.completed ? "line-through text-muted-foreground" : ""}>
                            {task.title}
                          </span>
                        </div>
                        {!task.completed ? (
                          <Button
                            size="sm"
                            className="bg-saffron-500 hover:bg-saffron-600"
                            onClick={() => completeTask(activeChallenge.id, task.id)}
                          >
                            +{task.points} pts
                          </Button>
                        ) : (
                          <Badge variant="outline" className="bg-green-50 text-green-700">
                            +{task.points} pts
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Award className="h-5 w-5 mr-2 text-saffron-500" />
                    Challenge Rewards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activeChallenge.rewards.map((reward, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border flex items-center justify-between ${
                          index === 0 && activeChallenge.progress >= 30
                            ? "bg-saffron-50 border-saffron-200"
                            : "bg-gray-50 border-gray-200"
                        }`}
                      >
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-saffron-100 text-saffron-700 flex items-center justify-center mr-3">
                            <Gift className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium">{reward}</p>
                            <p className="text-sm text-muted-foreground">
                              {index === 0
                                ? "Unlocked at 30% completion"
                                : index === 1
                                  ? "Unlocks at 60% completion"
                                  : "Unlocks at 100% completion"}
                            </p>
                          </div>
                        </div>
                        {index === 0 && activeChallenge.progress >= 30 ? (
                          <Button size="sm" className="bg-saffron-500 hover:bg-saffron-600">
                            Claim
                          </Button>
                        ) : (
                          <Badge variant="outline" className="bg-gray-100">
                            <Lock className="h-3 w-3 mr-1" />
                            Locked
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="text-center py-12">
              <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No Active Challenges</h3>
              <p className="text-muted-foreground mb-6">
                Join a seasonal challenge to improve your health and earn rewards.
              </p>
              <Button className="bg-saffron-500 hover:bg-saffron-600" onClick={() => setActiveTab("seasonal")}>
                Browse Challenges
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="rewards" className="mt-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Star className="h-5 w-5 mr-2 text-saffron-500" />
                Your Rewards & Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                <div className="flex flex-col items-center p-4 border rounded-lg bg-saffron-50 border-saffron-200">
                  <Trophy className="h-8 w-8 text-saffron-500 mb-2" />
                  <span className="text-sm font-medium">3 Challenges</span>
                  <span className="text-xs text-muted-foreground">Completed</span>
                </div>
                <div className="flex flex-col items-center p-4 border rounded-lg bg-saffron-50 border-saffron-200">
                  <Flame className="h-8 w-8 text-saffron-500 mb-2" />
                  <span className="text-sm font-medium">21 Days</span>
                  <span className="text-xs text-muted-foreground">Longest Streak</span>
                </div>
                <div className="flex flex-col items-center p-4 border rounded-lg bg-saffron-50 border-saffron-200">
                  <Sparkles className="h-8 w-8 text-saffron-500 mb-2" />
                  <span className="text-sm font-medium">1,250 Points</span>
                  <span className="text-xs text-muted-foreground">Total Earned</span>
                </div>
              </div>

              <h4 className="font-medium mb-3">Your Badges</h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mb-6">
                {[
                  { name: "Early Bird", icon: <Clock className="h-6 w-6" />, unlocked: true },
                  { name: "Sugar Detox", icon: <Award className="h-6 w-6" />, unlocked: true },
                  { name: "Streak Master", icon: <Flame className="h-6 w-6" />, unlocked: false },
                  { name: "Community Star", icon: <Users className="h-6 w-6" />, unlocked: false },
                ].map((badge, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center p-3 rounded-lg border ${
                      badge.unlocked ? "bg-saffron-50 border-saffron-200" : "bg-gray-50 border-gray-200 opacity-60"
                    }`}
                  >
                    <div
                      className={`h-12 w-12 rounded-full flex items-center justify-center mb-2 ${
                        badge.unlocked ? "bg-saffron-100 text-saffron-700" : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {badge.icon}
                    </div>
                    <span className="text-xs font-medium text-center">{badge.name}</span>
                  </div>
                ))}
              </div>

              <h4 className="font-medium mb-3">Available Rewards</h4>
              <div className="space-y-3">
                <div className="flex items-center p-3 border rounded-lg bg-saffron-50 border-saffron-200">
                  <div className="h-10 w-10 rounded-full bg-saffron-100 text-saffron-700 flex items-center justify-center mr-3 flex-shrink-0">
                    <Gift className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">15% Off Your Next Order</h4>
                    <p className="text-xs text-muted-foreground">Valid until November 30, 2023</p>
                  </div>
                  <Button size="sm" className="bg-saffron-500 hover:bg-saffron-600">
                    Redeem
                  </Button>
                </div>
                <div className="flex items-center p-3 border rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center mr-3 flex-shrink-0">
                    <Gift className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">Free Health Consultation</h4>
                    <p className="text-xs text-muted-foreground">Unlock at 2,000 points</p>
                  </div>
                  <Badge variant="outline">750 more points</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
