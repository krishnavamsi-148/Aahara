"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MealType {
  breakfast: string
  lunch: string
  dinner: string
  icon: string
}

export function PalmLeafCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [selectedDay, setSelectedDay] = useState<number | null>(new Date().getDate())

  // Sample meal data
  const mealData: Record<string, MealType> = {
    "2023-11-1": {
      breakfast: "Ragi Dosa",
      lunch: "Vegetable Pulao",
      dinner: "Palak Paneer",
      icon: "🥘",
    },
    "2023-11-12": {
      breakfast: "Oats Idli",
      lunch: "Quinoa Salad",
      dinner: "Millet Soup",
      icon: "🍲",
    },
    "2023-11-14": {
      breakfast: "Diwali Special: Sweet Pongal",
      lunch: "Diwali Special: Vegetable Biryani",
      dinner: "Diwali Special: Paneer Tikka",
      icon: "🪔",
    },
  }

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay()
  }

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
    setSelectedDay(null)
  }

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
    setSelectedDay(null)
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const daysInMonth = getDaysInMonth(currentMonth, currentYear)
  const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear)

  const renderCalendarDays = () => {
    const days = []
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-16 md:h-24 p-1 border-r border-b border-jaggery-300 opacity-50"></div>,
      )
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = `${currentYear}-${currentMonth + 1}-${day}`
      const hasMeal = mealData[dateKey]
      const isSelected = selectedDay === day
      const isToday =
        day === new Date().getDate() &&
        currentMonth === new Date().getMonth() &&
        currentYear === new Date().getFullYear()

      days.push(
        <motion.div
          key={day}
          className={`h-16 md:h-24 p-1 border-r border-b border-jaggery-300 relative cursor-pointer overflow-hidden ${
            isSelected ? "bg-sweetlime-100" : ""
          } ${isToday ? "bg-haldi-50" : ""}`}
          whileHover={{ backgroundColor: "rgba(244, 196, 48, 0.1)" }}
          onClick={() => setSelectedDay(day)}
        >
          <div className="flex justify-between items-start">
            <span
              className={`text-sm font-medium ${
                isToday ? "bg-haldi-500 text-white rounded-full w-6 h-6 flex items-center justify-center" : ""
              }`}
            >
              {day}
            </span>
            {hasMeal && (
              <span className="text-lg" role="img" aria-label="meal icon">
                {hasMeal.icon}
              </span>
            )}
          </div>
          {hasMeal && (
            <div className="mt-1 text-xs overflow-hidden">
              <div className="truncate text-curryleaf-700">{hasMeal.breakfast}</div>
            </div>
          )}
          {dateKey === "2023-11-14" && (
            <div className="absolute bottom-0 right-0 left-0 h-1 bg-gradient-to-r from-haldi-500 via-tandoori-700 to-haldi-500"></div>
          )}
        </motion.div>,
      )
    }

    return days
  }

  return (
    <div className="bg-texture-banana-leaf bg-sweetlime-50 rounded-xl p-4 border border-jaggery-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-jaggery-600">Meal Calendar</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={prevMonth} className="border-jaggery-300 h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-jaggery-600 font-medium">
            {monthNames[currentMonth]} {currentYear}
          </span>
          <Button variant="outline" size="icon" onClick={nextMonth} className="border-jaggery-300 h-8 w-8">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 border-l border-t border-jaggery-300 bg-white rounded-lg overflow-hidden">
        {/* Day names */}
        {dayNames.map((day) => (
          <div
            key={day}
            className="p-2 text-center border-r border-b border-jaggery-300 bg-sweetlime-100 font-medium text-jaggery-600"
          >
            {day}
          </div>
        ))}

        {/* Calendar days */}
        {renderCalendarDays()}
      </div>

      {/* Selected day meal details */}
      {selectedDay && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-white rounded-lg border border-jaggery-300"
        >
          <h3 className="font-bold text-jaggery-600 mb-2">
            {monthNames[currentMonth]} {selectedDay}, {currentYear}
          </h3>

          {mealData[`${currentYear}-${currentMonth + 1}-${selectedDay}`] ? (
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-haldi-500 mr-2"></div>
                <span className="font-medium text-sm">Breakfast:</span>
                <span className="ml-2 text-sm">
                  {mealData[`${currentYear}-${currentMonth + 1}-${selectedDay}`].breakfast}
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-curryleaf-500 mr-2"></div>
                <span className="font-medium text-sm">Lunch:</span>
                <span className="ml-2 text-sm">
                  {mealData[`${currentYear}-${currentMonth + 1}-${selectedDay}`].lunch}
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-tandoori-700 mr-2"></div>
                <span className="font-medium text-sm">Dinner:</span>
                <span className="ml-2 text-sm">
                  {mealData[`${currentYear}-${currentMonth + 1}-${selectedDay}`].dinner}
                </span>
              </div>
            </div>
          ) : (
            <div className="text-center py-4">
              <p className="text-muted-foreground">No meals planned for this day</p>
              <Button className="mt-2 bg-haldi-500 hover:bg-haldi-600 text-jaggery-900">Add Meal Plan</Button>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}
