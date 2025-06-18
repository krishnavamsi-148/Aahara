"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

type Region = {
  id: string
  name: string
  description: string
  image: string
  specialties: string[]
}

const regions: Region[] = [
  {
    id: "south-indian",
    name: "South Indian",
    description: "Rich in rice, lentils, and coconut, with an emphasis on fermented foods like dosa and idli.",
    image: "/placeholder.svg?height=200&width=300",
    specialties: ["Dosa", "Idli", "Sambar", "Rasam", "Coconut Chutney", "Appam"],
  },
  {
    id: "north-indian",
    name: "North Indian",
    description: "Features wheat-based breads, rich curries, and dairy products like paneer and ghee.",
    image: "/placeholder.svg?height=200&width=300",
    specialties: ["Roti", "Naan", "Butter Chicken", "Paneer Dishes", "Chole Bhature", "Dal Makhani"],
  },
  {
    id: "bengali",
    name: "Bengali",
    description: "Known for fish, rice, and mustard oil, with a perfect balance of sweet and spicy flavors.",
    image: "/placeholder.svg?height=200&width=300",
    specialties: ["Machher Jhol", "Mishti Doi", "Shorshe Ilish", "Rasgulla", "Cholar Dal", "Luchi"],
  },
  {
    id: "gujarati",
    name: "Gujarati",
    description: "Vegetarian cuisine with a unique sweet, salty, and spicy flavor profile.",
    image: "/placeholder.svg?height=200&width=300",
    specialties: ["Dhokla", "Thepla", "Khandvi", "Undhiyu", "Fafda", "Jalebi"],
  },
  {
    id: "punjabi",
    name: "Punjabi",
    description: "Hearty and rich food with abundant use of butter, ghee, and cream.",
    image: "/placeholder.svg?height=200&width=300",
    specialties: ["Sarson Da Saag", "Makki Di Roti", "Butter Chicken", "Amritsari Kulcha", "Lassi", "Pinni"],
  },
  {
    id: "maharashtrian",
    name: "Maharashtrian",
    description: "Features a variety of mild to spicy dishes with distinct use of kokum and groundnuts.",
    image: "/placeholder.svg?height=200&width=300",
    specialties: ["Vada Pav", "Puran Poli", "Misal Pav", "Pav Bhaji", "Modak", "Thalipeeth"],
  },
]

export function CulturalMealPreferences() {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [preferences, setPreferences] = useState<string[]>([])

  const togglePreference = (specialty: string) => {
    if (preferences.includes(specialty)) {
      setPreferences(preferences.filter((p) => p !== specialty))
    } else {
      setPreferences([...preferences, specialty])
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Cultural Meal Preferences</h2>
        <p className="text-gray-600 mb-6">
          Select your preferred regional cuisine to get personalized meal recommendations based on your cultural
          preferences.
        </p>

        {/* Region Selector */}
        <div className="relative mb-8">
          <button
            type="button"
            className="w-full flex items-center justify-between bg-white border border-gray-300 rounded-lg p-3 text-left focus:outline-none focus:ring-2 focus:ring-orange-500"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>{selectedRegion ? selectedRegion.name : "Select a regional cuisine"}</span>
            <ChevronDown
              className={`h-5 w-5 text-gray-400 transition-transform ${isDropdownOpen ? "transform rotate-180" : ""}`}
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
              {regions.map((region) => (
                <button
                  key={region.id}
                  type="button"
                  className="w-full text-left px-4 py-2 hover:bg-orange-50 focus:outline-none focus:bg-orange-50"
                  onClick={() => {
                    setSelectedRegion(region)
                    setIsDropdownOpen(false)
                  }}
                >
                  {region.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Selected Region Details */}
        {selectedRegion && (
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 relative h-48 md:h-auto">
                <Image
                  src={selectedRegion.image || "/placeholder.svg"}
                  alt={selectedRegion.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{selectedRegion.name} Cuisine</h3>
                <p className="text-gray-600 mb-4">{selectedRegion.description}</p>

                <h4 className="font-medium text-gray-800 mb-2">Popular Specialties:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedRegion.specialties.map((specialty) => (
                    <div key={specialty} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`specialty-${specialty}`}
                        checked={preferences.includes(specialty)}
                        onChange={() => togglePreference(specialty)}
                        className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`specialty-${specialty}`} className="ml-2 text-sm text-gray-700">
                        {specialty}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Save Preferences Button */}
        <button
          type="button"
          className="w-full py-2 px-4 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          disabled={!selectedRegion || preferences.length === 0}
          onClick={() => {
            // Here you would typically save the preferences to your backend
            alert(`Preferences saved: ${preferences.join(", ")}`)
          }}
        >
          Save Preferences
        </button>

        {/* Recommendation Preview */}
        {selectedRegion && preferences.length > 0 && (
          <div className="mt-8 p-4 bg-orange-50 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Based on your preferences</h3>
            <p className="text-gray-600 mb-4">
              We'll customize your meal plans with {selectedRegion.name} cuisine, focusing on {preferences.join(", ")}.
            </p>
            <a href="/meal-plans" className="text-orange-600 hover:text-orange-700 font-medium">
              View your personalized meal plan →
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
