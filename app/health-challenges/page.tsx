"use client"

import { useState } from "react"
import { ArrowRight, Calendar, Check, Trophy, Users, Flame, Lock, Gift } from "lucide-react"
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ChartContainer } from "@/components/ui/chart"

// Sample challenges data
const challenges = [
  {
    id: 1,
    title: "Diwali Health Challenge",
    description:
      "Enjoy the festival of lights while maintaining your health goals. Complete healthy meal choices during Diwali week.",
    image: "/placeholder.svg?height=300&width=500",
    startDate: "Nov 10, 2023",
    endDate: "Nov 17, 2023",
    participants: 1245,
    category: "seasonal",
    status: "active",
    progress: 42,
    daysCompleted: 3,
    totalDays: 7,
    pointsEarned: 150,
    tasks: [
      { id: 1, title: "Choose sugar-free sweets", completed: true, points: 50 },
      { id: 2, title: "Prepare one healthy traditional dish", completed: true, points: 50 },
      { id: 3, title: "Limit fried food intake", completed: true, points: 50 },
      { id: 4, title: "Take a 30-minute walk after heavy meals", completed: false, points: 50 },
      { id: 5, title: "Stay hydrated throughout festivities", completed: false, points: 50 },
      { id: 6, title: "Practice portion control", completed: false, points: 50 },
      { id: 7, title: "Share a healthy recipe with family", completed: false, points: 50 },
    ],
    leaderboard: [
      { rank: 1, name: "Priya S.", points: 350, avatar: "/placeholder.svg?height=40&width=40" },
      { rank: 2, name: "Rahul M.", points: 300, avatar: "/placeholder.svg?height=40&width=40" },
      { rank: 3, name: "Anita K.", points: 250, avatar: "/placeholder.svg?height=40&width=40" },
      { rank: 4, name: "Vikram P.", points: 200, avatar: "/placeholder.svg?height=40&width=40" },
      { rank: 5, name: "You", points: 150, avatar: "/placeholder.svg?height=40&width=40", isCurrentUser: true },
    ],
  },
  {
    id: 2,
    title: "21-Day Sugar Detox",
    description:
      "Reduce your sugar intake and discover natural sweetness in whole foods. Track your progress over 21 days.",
    image: "/placeholder.svg?height=300&width=500",
    startDate: "Oct 1, 2023",
    endDate: "Oct 21, 2023",
    participants: 2356,
    category: "nutrition",
    status: "completed",
    progress: 100,
    daysCompleted: 21,
    totalDays: 21,
    pointsEarned: 500,
    tasks: [
      { id: 1, title: "Eliminate added sugar", completed: true, points: 100 },
      { id: 2, title: "Read food labels for hidden sugars", completed: true, points: 75 },
      { id: 3, title: "Try natural sweeteners", completed: true, points: 75 },
      { id: 4, title: "Track daily sugar intake", completed: true, points: 100 },
      { id: 5, title: "Share progress on community board", completed: true, points: 50 },
      { id: 6, title: "Complete sugar-free recipe challenge", completed: true, points: 100 },
    ],
    leaderboard: [
      { rank: 1, name: "Sanjay R.", points: 600, avatar: "/placeholder.svg?height=40&width=40" },
      { rank: 2, name: "You", points: 500, avatar: "/placeholder.svg?height=40&width=40", isCurrentUser: true },
      { rank: 3, name: "Meera T.", points: 475, avatar: "/placeholder.svg?height=40&width=40" },
      { rank: 4, name: "Arjun D.", points: 450, avatar: "/placeholder.svg?height=40&width=40" },
      { rank: 5, name: "Neha G.", points: 425, avatar: "/placeholder.svg?height=40&width=40" },
    ],
  },
  {
    id: 3,
    title: "Monsoon Immunity Boost",
    description: "Strengthen your immune system during monsoon season with specific foods and practices.",
    image: "/placeholder.svg?height=300&width=500",
    startDate: "Jul 15, 2023",
    endDate: "Aug 15, 2023",
    participants: 1876,
    category: "seasonal",
    status: "completed",
    progress: 100,
    daysCompleted: 30,
    totalDays: 30,
    pointsEarned: 450,
    tasks: [
      { id: 1, title: "Include turmeric in daily diet", completed: true, points: 75 },
      { id: 2, title: "Consume vitamin C rich foods", completed: true, points: 75 },
      { id: 3, title: "Drink herbal teas", completed: true, points: 75 },
      { id: 4, title: "Practice proper food hygiene", completed: true, points: 75 },
      { id: 5, title: "Stay physically active indoors", completed: true, points: 75 },
      { id: 6, title: "Maintain hydration", completed: true, points: 75 },
    ],
  },
  {
    id: 4,
    title: "30-Day Millet Challenge",
    description: "Incorporate different types of millets into your daily meals for better health and nutrition.",
    image: "/placeholder.svg?height=300&width=500",
    startDate: "Dec 1, 2023",
    endDate: "Dec 30, 2023",
    participants: 945,
    category: "nutrition",
    status: "upcoming",
    tasks: [
      { id: 1, title: "Try a different millet each week", completed: false, points: 100 },
      { id: 2, title: "Prepare traditional millet recipes", completed: false, points: 75 },
      { id: 3, title: "Create a fusion millet dish", completed: false, points: 100 },
      { id: 4, title: "Share millet recipes with community", completed: false, points: 50 },
      { id: 5, title: "Learn about millet nutrition", completed: false, points: 75 },
      { id: 6, title: "Replace rice/wheat with millets", completed: false, points: 100 },
    ],
  },
  {
    id: 5,
    title: "Diabetes-Friendly Eating",
    description: "Learn and implement diabetes-friendly eating habits over 14 days to help manage blood sugar levels.",
    image: "/placeholder.svg?height=300&width=500",
    startDate: "Nov 20, 2023",
    endDate: "Dec 3, 2023",
    participants: 1532,
    category: "health-condition",
    status: "upcoming",
    tasks: [
      { id: 1, title: "Monitor glycemic index of foods", completed: false, points: 75 },
      { id: 2, title: "Balance carbs throughout the day", completed: false, points: 75 },
      { id: 3, title: "Include protein with each meal", completed: false, points: 75 },
      { id: 4, title: "Track blood sugar responses", completed: false, points: 100 },
      { id: 5, title: "Practice portion control", completed: false, points: 75 },
      { id: 6, title: "Learn about diabetes-friendly spices", completed: false, points: 50 },
    ],
  },
  {
    id: 6,
    title: "Heart-Healthy Habits",
    description: "Develop heart-healthy eating and lifestyle habits over 21 days to support cardiovascular wellness.",
    image: "/placeholder.svg?height=300&width=500",
    startDate: "Jan 1, 2024",
    endDate: "Jan 21, 2024",
    participants: 1245,
    category: "health-condition",
    status: "upcoming",
    tasks: [
      { id: 1, title: "Reduce sodium intake", completed: false, points: 75 },
      { id: 2, title: "Include omega-3 rich foods", completed: false, points: 75 },
      { id: 3, title: "Add heart-healthy spices", completed: false, points: 50 },
      { id: 4, title: "Practice stress management", completed: false, points: 75 },
      { id: 5, title: "Increase physical activity", completed: false, points: 100 },
      { id: 6, title: "Learn about heart-healthy cooking methods", completed: false, points: 75 },
    ],
  },
  {
    id: 9,
    title: "21-Day Hydration Challenge",
    description: "Track your daily water intake and earn points for staying properly hydrated.",
    image: "/placeholder.svg?height=300&width=500",
    startDate: "Nov 25, 2023",
    endDate: "Dec 15, 2023",
    participants: 2145,
    category: "wellness",
    status: "active",
    progress: 33,
    daysCompleted: 7,
    totalDays: 21,
    pointsEarned: 350,
    gamification: {
      level: 3,
      badges: [
        { name: "Early Bird", description: "Completed water intake before 9 AM", earned: true },
        { name: "Consistency King", description: "Met hydration goals 5 days in a row", earned: true },
        { name: "Hydration Hero", description: "Exceeded daily water goal by 500ml", earned: false },
      ],
      dailyStreak: 7,
      totalPoints: 350,
      nextReward: { points: 500, reward: "Exclusive Recipe E-Book" },
    },
    tasks: [
      { id: 1, title: "Drink 8 glasses of water daily", completed: true, points: 50 },
      { id: 2, title: "Track water intake in app", completed: true, points: 50 },
      { id: 3, title: "Replace one sugary drink with water", completed: true, points: 50 },
      { id: 4, title: "Drink herbal tea as hydration alternative", completed: true, points: 50 },
      { id: 5, title: "Consume water-rich fruits and vegetables", completed: true, points: 50 },
      { id: 6, title: "Drink water before each meal", completed: true, points: 50 },
      { id: 7, title: "Maintain hydration during exercise", completed: true, points: 50 },
    ],
    leaderboard: [
      { rank: 1, name: "Rahul M.", points: 450, avatar: "/placeholder.svg?height=40&width=40" },
      { rank: 2, name: "Priya S.", points: 425, avatar: "/placeholder.svg?height=40&width=40" },
      { rank: 3, name: "You", points: 350, avatar: "/placeholder.svg?height=40&width=40", isCurrentUser: true },
      { rank: 4, name: "Vikram P.", points: 325, avatar: "/placeholder.svg?height=40&width=40" },
      { rank: 5, name: "Anita K.", points: 300, avatar: "/placeholder.svg?height=40&width=40" },
    ],
  },
]

// Define the type for a challenge
type Challenge = {
  id: number
  title: string
  description: string
  image: string
  startDate: string
  endDate: string
  participants: number
  category: string
  status: string
  progress?: number
  daysCompleted?: number
  totalDays?: number
  pointsEarned?: number
  tasks?: {
    id: number
    title: string
    completed: boolean
    points: number
  }[]
  leaderboard?: {
    rank: number
    name: string
    points: number
    avatar: string
    isCurrentUser?: boolean
  }[]
  gamification?: {
    level: number
    badges: {
      name: string
      description: string
      earned: boolean
    }[]
    dailyStreak: number
    totalPoints: number
    nextReward: {
      points: number
      reward: string
    }
  }
}

export default function HealthChallengesPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null)
  const [activeTaskTab, setActiveTaskTab] = useState("tasks")
  const [joinedChallenges, setJoinedChallenges] = useState<number[]>([1, 2, 3])
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showNutritionModal, setShowNutritionModal] = useState(false)

  const [nutritionData, setNutritionData] = useState({
    calories: {
      consumed: 1850,
      goal: 2000,
    },
    macros: [
      { name: "Protein", value: 25, color: "#10b981" },
      { name: "Carbs", value: 55, color: "#3b82f6" },
      { name: "Fat", value: 20, color: "#f59e0b" },
    ],
    weeklyProgress: [
      { day: "Mon", calories: 1950, protein: 95, carbs: 220, fat: 45 },
      { day: "Tue", calories: 1850, protein: 100, carbs: 200, fat: 40 },
      { day: "Wed", calories: 2050, protein: 110, carbs: 230, fat: 42 },
      { day: "Thu", calories: 1800, protein: 90, carbs: 210, fat: 38 },
      { day: "Fri", calories: 1900, protein: 105, carbs: 215, fat: 40 },
      { day: "Sat", calories: 2100, protein: 115, carbs: 240, fat: 45 },
      { day: "Sun", calories: 1950, protein: 100, carbs: 220, fat: 42 },
    ],
    nutrients: [
      { name: "Vitamin A", value: 85, goal: 100 },
      { name: "Vitamin C", value: 120, goal: 100 },
      { name: "Calcium", value: 75, goal: 100 },
      { name: "Iron", value: 60, goal: 100 },
      { name: "Fiber", value: 90, goal: 100 },
    ],
  })

  const joinChallenge = (id: number) => {
    if (!joinedChallenges.includes(id)) {
      setJoinedChallenges([...joinedChallenges, id])
      setShowSuccessMessage(true)
      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 3000)
    }
  }

  const completeTask = (challengeId: number, taskId: number) => {
    // In a real app, this would update the task completion status in the backend
    console.log(`Completed task ${taskId} for challenge ${challengeId}`)
  }

  const filteredChallenges = challenges.filter((challenge) => {
    if (activeTab === "all") return true
    if (activeTab === "active" && challenge.status === "active") return true
    if (activeTab === "completed" && challenge.status === "completed") return true
    if (activeTab === "upcoming" && challenge.status === "upcoming") return true
    if (activeTab === "joined" && joinedChallenges.includes(challenge.id)) return true
    return false
  })

  // Find the selected challenge when needed
  const currentChallenge = selectedChallenge ? challenges.find((c) => c.id === selectedChallenge) || null : null

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Health Challenges</h1>
        <p className="mt-2 text-muted-foreground">
          Join our community challenges to stay motivated on your health journey and earn rewards
        </p>
      </div>

      <div className="mb-8 bg-gradient-to-r from-emerald-50 to-blue-50 p-6 rounded-xl border border-emerald-100">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold">Track Your Nutrition Progress</h2>
            <p className="text-muted-foreground">
              Monitor your calorie intake, macronutrients, and overall nutrition to support your health goals.
            </p>
          </div>
          <Button onClick={() => setShowNutritionModal(true)} className="bg-emerald-600 hover:bg-emerald-700">
            View Nutrition Dashboard
          </Button>
        </div>
      </div>

      {showSuccessMessage && (
        <div className="fixed top-20 right-4 z-50 bg-emerald-100 text-emerald-800 p-4 rounded-md shadow-md border border-emerald-200 animate-fade-in">
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5" />
            <span>Successfully joined the challenge!</span>
          </div>
        </div>
      )}

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All Challenges</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="joined">My Challenges</TabsTrigger>
        </TabsList>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChallenges.length === 0 ? (
            <div className="col-span-3 text-center py-12">
              <Trophy className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
              <h3 className="mt-4 text-lg font-semibold">No challenges found</h3>
              <p className="mt-2 text-muted-foreground">Try selecting a different category</p>
            </div>
          ) : (
            filteredChallenges.map((challenge) => (
              <Card
                key={challenge.id}
                className="overflow-hidden border-saffron-100 hover:border-saffron-300 transition-all"
              >
                <div className="relative">
                  <img
                    src={challenge.image || "/placeholder.svg"}
                    alt={challenge.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge
                    className={`absolute top-2 left-2 ${
                      challenge.status === "active"
                        ? "bg-emerald-500"
                        : challenge.status === "upcoming"
                          ? "bg-blue-500"
                          : "bg-gray-500"
                    }`}
                  >
                    {challenge.status === "active"
                      ? "Active"
                      : challenge.status === "upcoming"
                        ? "Upcoming"
                        : "Completed"}
                  </Badge>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{challenge.title}</CardTitle>
                  <CardDescription>{challenge.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4 text-muted-foreground" />
                        <span>
                          {challenge.startDate} - {challenge.endDate}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Users className="mr-1 h-4 w-4 text-muted-foreground" />
                        <span>{challenge.participants} participants</span>
                      </div>
                    </div>

                    {challenge.status === "active" && challenge.progress !== undefined && (
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span className="font-medium">
                            {challenge.daysCompleted || 0}/{challenge.totalDays || 0} days
                          </span>
                        </div>
                        <Progress value={challenge.progress} className="h-2" />
                      </div>
                    )}

                    {challenge.status === "completed" && challenge.pointsEarned !== undefined && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Points Earned:</span>
                        <Badge variant="outline" className="bg-amber-50 text-amber-700">
                          <Trophy className="mr-1 h-3 w-3" />
                          {challenge.pointsEarned} points
                        </Badge>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full">
                    {challenge.status === "upcoming" && !joinedChallenges.includes(challenge.id) ? (
                      <Button
                        className="w-full bg-saffron-500 hover:bg-saffron-600"
                        onClick={() => joinChallenge(challenge.id)}
                      >
                        Join Challenge
                      </Button>
                    ) : (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            className="w-full bg-saffron-500 hover:bg-saffron-600"
                            onClick={() => setSelectedChallenge(challenge.id)}
                          >
                            {challenge.status === "active"
                              ? "View Progress"
                              : challenge.status === "upcoming"
                                ? "View Details"
                                : "View Results"}
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                          {currentChallenge && (
                            <>
                              <DialogHeader>
                                <DialogTitle>{currentChallenge.title}</DialogTitle>
                                <DialogDescription>{currentChallenge.description}</DialogDescription>
                              </DialogHeader>

                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <img
                                    src={currentChallenge.image || "/placeholder.svg"}
                                    alt={currentChallenge.title}
                                    className="w-full h-48 object-cover rounded-md"
                                  />
                                  <div className="mt-4 space-y-3">
                                    <div className="flex justify-between">
                                      <span className="text-muted-foreground">Duration:</span>
                                      <span>
                                        {currentChallenge.startDate} - {currentChallenge.endDate}
                                      </span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-muted-foreground">Participants:</span>
                                      <span>{currentChallenge.participants}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-muted-foreground">Status:</span>
                                      <Badge
                                        className={`${
                                          currentChallenge.status === "active"
                                            ? "bg-emerald-500"
                                            : currentChallenge.status === "upcoming"
                                              ? "bg-blue-500"
                                              : "bg-gray-500"
                                        }`}
                                      >
                                        {currentChallenge.status === "active"
                                          ? "Active"
                                          : currentChallenge.status === "upcoming"
                                            ? "Upcoming"
                                            : "Completed"}
                                      </Badge>
                                    </div>

                                    {currentChallenge.status === "active" &&
                                      currentChallenge.progress !== undefined && (
                                        <div>
                                          <div className="flex justify-between text-sm mb-1">
                                            <span>Progress</span>
                                            <span className="font-medium">
                                              {currentChallenge.daysCompleted || 0}/{currentChallenge.totalDays || 0}{" "}
                                              days
                                            </span>
                                          </div>
                                          <Progress value={currentChallenge.progress} className="h-2" />
                                        </div>
                                      )}

                                    {currentChallenge.status === "completed" &&
                                      currentChallenge.pointsEarned !== undefined && (
                                        <div className="flex items-center justify-between">
                                          <span>Points Earned:</span>
                                          <Badge variant="outline" className="bg-amber-50 text-amber-700">
                                            <Trophy className="mr-1 h-3 w-3" />
                                            {currentChallenge.pointsEarned} points
                                          </Badge>
                                        </div>
                                      )}
                                  </div>
                                </div>

                                <div>
                                  <Tabs value={activeTaskTab} onValueChange={setActiveTaskTab} className="w-full">
                                    <TabsList className="mb-4">
                                      <TabsTrigger value="tasks">Tasks</TabsTrigger>
                                      {currentChallenge.leaderboard && (
                                        <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
                                      )}
                                      {currentChallenge.gamification && (
                                        <TabsTrigger value="gamification">Rewards</TabsTrigger>
                                      )}
                                    </TabsList>

                                    <TabsContent value="tasks">
                                      <div className="space-y-3">
                                        {currentChallenge.tasks &&
                                          currentChallenge.tasks.map((task) => (
                                            <div
                                              key={task.id}
                                              className={`flex items-center justify-between p-3 rounded-md ${
                                                task.completed ? "bg-emerald-50" : "bg-gray-50"
                                              }`}
                                            >
                                              <div className="flex items-center gap-3">
                                                {task.completed ? (
                                                  <div className="h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center">
                                                    <Check className="h-3 w-3 text-white" />
                                                  </div>
                                                ) : (
                                                  <div className="h-5 w-5 rounded-full border border-gray-300"></div>
                                                )}
                                                <span
                                                  className={task.completed ? "line-through text-muted-foreground" : ""}
                                                >
                                                  {task.title}
                                                </span>
                                              </div>
                                              <Badge variant="outline" className="bg-amber-50 text-amber-700">
                                                {task.points} pts
                                              </Badge>
                                            </div>
                                          ))}
                                      </div>
                                    </TabsContent>

                                    {currentChallenge.leaderboard && (
                                      <TabsContent value="leaderboard">
                                        <div className="space-y-3">
                                          {currentChallenge.leaderboard.map((participant) => (
                                            <div
                                              key={participant.rank}
                                              className={`flex items-center justify-between p-3 rounded-md ${
                                                participant.isCurrentUser
                                                  ? "bg-saffron-50 border border-saffron-200"
                                                  : "bg-gray-50"
                                              }`}
                                            >
                                              <div className="flex items-center gap-3">
                                                <div className="h-6 w-6 rounded-full bg-saffron-500 flex items-center justify-center text-white text-xs font-medium">
                                                  {participant.rank}
                                                </div>
                                                <Avatar className="h-8 w-8">
                                                  <AvatarImage src={participant.avatar} alt={participant.name} />
                                                  <AvatarFallback>{participant.name.charAt(0)}</AvatarFallback>
                                                </Avatar>
                                                <span className={participant.isCurrentUser ? "font-medium" : ""}>
                                                  {participant.name}
                                                </span>
                                              </div>
                                              <Badge variant="outline" className="bg-amber-50 text-amber-700">
                                                <Trophy className="mr-1 h-3 w-3" />
                                                {participant.points} pts
                                              </Badge>
                                            </div>
                                          ))}
                                        </div>
                                      </TabsContent>
                                    )}

                                    {currentChallenge.gamification && (
                                      <TabsContent value="gamification">
                                        <div className="space-y-6">
                                          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-4 border border-amber-100">
                                            <div className="flex items-center justify-between">
                                              <div>
                                                <h3 className="font-medium">Current Level</h3>
                                                <div className="flex items-center mt-1">
                                                  <div className="h-8 w-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold mr-2">
                                                    {currentChallenge.gamification.level}
                                                  </div>
                                                  <span className="text-sm text-muted-foreground">
                                                    {500 - currentChallenge.gamification.totalPoints} points to next
                                                    level
                                                  </span>
                                                </div>
                                              </div>
                                              <div className="text-right">
                                                <h3 className="font-medium">Daily Streak</h3>
                                                <div className="flex items-center justify-end mt-1">
                                                  <Flame className="h-5 w-5 text-orange-500 mr-1" />
                                                  <span className="font-bold">
                                                    {currentChallenge.gamification.dailyStreak} days
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="mt-3">
                                              <div className="flex justify-between text-sm mb-1">
                                                <span>Progress to Level {currentChallenge.gamification.level + 1}</span>
                                                <span>{currentChallenge.gamification.totalPoints}/500 points</span>
                                              </div>
                                              <Progress
                                                value={(currentChallenge.gamification.totalPoints / 500) * 100}
                                                className="h-2"
                                              />
                                            </div>
                                          </div>

                                          <div>
                                            <h3 className="font-medium mb-3">Earned Badges</h3>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                              {currentChallenge.gamification.badges.map((badge, index) => (
                                                <div
                                                  key={index}
                                                  className={`p-3 rounded-lg border ${
                                                    badge.earned
                                                      ? "bg-amber-50 border-amber-200"
                                                      : "bg-gray-100 border-gray-200 opacity-60"
                                                  }`}
                                                >
                                                  <div className="flex items-center mb-2">
                                                    {badge.earned ? (
                                                      <div className="h-6 w-6 rounded-full bg-amber-500 text-white flex items-center justify-center mr-2">
                                                        <Check className="h-3 w-3" />
                                                      </div>
                                                    ) : (
                                                      <div className="h-6 w-6 rounded-full bg-gray-300 text-white flex items-center justify-center mr-2">
                                                        <Lock className="h-3 w-3" />
                                                      </div>
                                                    )}
                                                    <span
                                                      className={`font-medium ${badge.earned ? "" : "text-muted-foreground"}`}
                                                    >
                                                      {badge.name}
                                                    </span>
                                                  </div>
                                                  <p className="text-xs text-muted-foreground">{badge.description}</p>
                                                </div>
                                              ))}
                                            </div>
                                          </div>

                                          <div>
                                            <h3 className="font-medium mb-3">Next Reward</h3>
                                            <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
                                              <CardContent className="p-4">
                                                <div className="flex items-center justify-between">
                                                  <div>
                                                    <h4 className="font-medium">
                                                      {currentChallenge.gamification.nextReward.reward}
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground">
                                                      Unlock at {currentChallenge.gamification.nextReward.points} points
                                                    </p>
                                                  </div>
                                                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                                                    <Gift className="h-6 w-6 text-amber-600" />
                                                  </div>
                                                </div>
                                                <div className="mt-3">
                                                  <div className="flex justify-between text-sm mb-1">
                                                    <span>Progress</span>
                                                    <span>
                                                      {currentChallenge.gamification.totalPoints}/
                                                      {currentChallenge.gamification.nextReward.points} points
                                                    </span>
                                                  </div>
                                                  <Progress
                                                    value={
                                                      (currentChallenge.gamification.totalPoints /
                                                        currentChallenge.gamification.nextReward.points) *
                                                      100
                                                    }
                                                    className="h-2"
                                                  />
                                                </div>
                                              </CardContent>
                                            </Card>
                                          </div>
                                        </div>
                                      </TabsContent>
                                    )}
                                  </Tabs>
                                </div>
                              </div>
                            </>
                          )}
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
      </Tabs>

      <div className="mt-12 bg-saffron-50 rounded-xl p-8 border border-saffron-100">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Create Your Own Challenge</h2>
            <p className="text-muted-foreground mb-6">
              Want to start a health challenge with your friends, family, or colleagues? Create a custom challenge and
              invite others to join!
            </p>
            <Button className="bg-saffron-500 hover:bg-saffron-600">
              Create Challenge
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-square max-w-sm mx-auto relative rounded-2xl overflow-hidden border-8 border-white shadow-xl">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Create Challenge"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
              <Trophy className="h-6 w-6 text-saffron-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Nutrition Analysis Modal */}
      <Dialog open={showNutritionModal} onOpenChange={setShowNutritionModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Your Nutrition Dashboard</DialogTitle>
            <DialogDescription>
              Track your nutrition metrics and see how they align with your health goals.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {/* Calorie and Macro Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Daily Calories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center">
                    <div className="relative w-40 h-40 flex items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={[
                              { name: "Consumed", value: nutritionData.calories.consumed },
                              {
                                name: "Remaining",
                                value: Math.max(0, nutritionData.calories.goal - nutritionData.calories.consumed),
                              },
                            ]}
                            cx="50%"
                            cy="50%"
                            innerRadius={40}
                            outerRadius={60}
                            startAngle={90}
                            endAngle={-270}
                            paddingAngle={2}
                            dataKey="value"
                          >
                            <Cell fill="#10b981" />
                            <Cell fill="#e5e7eb" />
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold">{nutritionData.calories.consumed}</span>
                        <span className="text-xs text-muted-foreground">of {nutritionData.calories.goal}</span>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-sm text-muted-foreground">
                        {Math.max(0, nutritionData.calories.goal - nutritionData.calories.consumed)} calories remaining
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Macronutrients</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center">
                    <div className="w-40 h-40">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={nutritionData.macros}
                            cx="50%"
                            cy="50%"
                            outerRadius={60}
                            dataKey="value"
                            label={({ name, value }) => `${name} ${value}%`}
                            labelLine={false}
                          >
                            {nutritionData.macros.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2 w-full">
                      {nutritionData.macros.map((macro, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: macro.color }}></div>
                          <span className="text-xs font-medium">{macro.name}</span>
                          <span className="text-xs text-muted-foreground">{macro.value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Weekly Progress */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Weekly Nutrition Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ChartContainer>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={nutritionData.weeklyProgress}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="calories" stroke="#8884d8" name="Calories" />
                        <Line type="monotone" dataKey="protein" stroke="#10b981" name="Protein (g)" />
                        <Line type="monotone" dataKey="carbs" stroke="#3b82f6" name="Carbs (g)" />
                        <Line type="monotone" dataKey="fat" stroke="#f59e0b" name="Fat (g)" />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>

            {/* Micronutrients */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Micronutrients & Vitamins</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {nutritionData.nutrients.map((nutrient, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{nutrient.name}</span>
                        <span className="font-medium">{nutrient.value}% of daily goal</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            nutrient.value >= nutrient.goal ? "bg-emerald-500" : "bg-amber-500"
                          }`}
                          style={{ width: `${Math.min(100, (nutrient.value / nutrient.goal) * 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Personalized Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Increase iron intake</p>
                      <p className="text-sm text-muted-foreground">
                        Try adding more leafy greens, lentils, and fortified cereals to your diet.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Great job on vitamin C intake</p>
                      <p className="text-sm text-muted-foreground">
                        You're exceeding your daily vitamin C goals. Keep including citrus fruits and bell peppers in
                        your meals.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Consider increasing calcium</p>
                      <p className="text-sm text-muted-foreground">
                        You're at 75% of your daily goal. Try adding more dairy products or calcium-fortified plant
                        milks.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
