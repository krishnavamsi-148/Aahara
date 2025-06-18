"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ChakraInfo {
  name: string
  color: string
  description: string
  foods: string[]
  unlocked: boolean
}

export function TempleOfWellness() {
  const [activeTab, setActiveTab] = useState("chakras")

  const chakras: ChakraInfo[] = [
    {
      name: "Root (Muladhara)",
      color: "#B71C1C",
      description: "Grounding and stability",
      foods: ["Root vegetables", "Protein-rich foods", "Red fruits"],
      unlocked: true,
    },
    {
      name: "Sacral (Svadhisthana)",
      color: "#FF5722",
      description: "Creativity and emotion",
      foods: ["Sweet fruits", "Nuts", "Orange vegetables"],
      unlocked: true,
    },
    {
      name: "Solar Plexus (Manipura)",
      color: "#F4C430",
      description: "Personal power and confidence",
      foods: ["Whole grains", "Yellow fruits", "Spices"],
      unlocked: true,
    },
    {
      name: "Heart (Anahata)",
      color: "#2E7D32",
      description: "Love and compassion",
      foods: ["Leafy greens", "Green tea", "Broccoli"],
      unlocked: false,
    },
    {
      name: "Throat (Vishuddha)",
      color: "#26418F",
      description: "Communication and expression",
      foods: ["Fruits", "Herbal teas", "Sea vegetables"],
      unlocked: false,
    },
    {
      name: "Third Eye (Ajna)",
      color: "#673AB7",
      description: "Intuition and wisdom",
      foods: ["Purple fruits", "Cacao", "Ginger"],
      unlocked: false,
    },
    {
      name: "Crown (Sahasrara)",
      color: "#9C27B0",
      description: "Spiritual connection",
      foods: ["Pure water", "Fasting", "Detoxifying foods"],
      unlocked: false,
    },
  ]

  const mantras = [
    {
      text: "Aham Brahmasmi",
      translation: "I am the universe",
      benefit: "Promotes mindful eating and connection with food",
    },
    {
      text: "Om Shanti Shanti Shanti",
      translation: "Peace of mind, body, and speech",
      benefit: "Calms the digestive system before meals",
    },
    {
      text: "Annam Brahma",
      translation: "Food is divine",
      benefit: "Encourages gratitude for nourishment",
    },
  ]

  const ayurvedicTips = [
    {
      title: "Eat according to your dosha",
      description:
        "Vata types should favor warm, cooked foods. Pitta types should choose cooling foods. Kapha types should opt for light, dry foods.",
    },
    {
      title: "Follow proper food combining",
      description:
        "Avoid mixing incompatible foods like milk with fish, fruit with yogurt, or honey heated to high temperatures.",
    },
    {
      title: "Practice mindful eating",
      description:
        "Eat in a calm environment, chew thoroughly, and focus on the taste, texture, and aroma of your food.",
    },
  ]

  return (
    <div className="bg-pattern-madhubani bg-sweetlime-50 rounded-xl p-6 border border-jaggery-300">
      <h2 className="text-2xl font-bold text-jaggery-600 mb-6 text-center">Temple of Wellness</h2>

      <Tabs defaultValue="chakras" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="chakras">Chakras & Nutrition</TabsTrigger>
          <TabsTrigger value="mantras">Mindful Eating Mantras</TabsTrigger>
          <TabsTrigger value="ayurveda">Ayurvedic Wisdom</TabsTrigger>
        </TabsList>

        <TabsContent value="chakras">
          <div className="flex flex-col items-center mb-6">
            <svg width="200" height="400" viewBox="0 0 100 300" className="mb-4">
              {/* Stylized temple outline */}
              <path
                d="M10,300 L10,100 L50,20 L90,100 L90,300 Z"
                fill="none"
                stroke="#996515"
                strokeWidth="1"
                strokeDasharray="5,5"
              />

              {/* Chakra circles from bottom to top */}
              {chakras.map((chakra, index) => {
                const yPosition = 270 - index * 40
                return (
                  <g key={chakra.name}>
                    <motion.circle
                      cx="50"
                      cy={yPosition}
                      r="15"
                      fill={chakra.unlocked ? chakra.color : "#e5e5e5"}
                      opacity={chakra.unlocked ? 1 : 0.5}
                      stroke={chakra.unlocked ? "#996515" : "#d4d4d4"}
                      strokeWidth="2"
                      whileHover={{ scale: 1.1 }}
                      animate={chakra.unlocked ? { scale: [1, 1.05, 1] } : {}}
                      transition={chakra.unlocked ? { repeat: Number.POSITIVE_INFINITY, duration: 3 } : {}}
                    />
                    <text
                      x="50"
                      y={yPosition + 35}
                      textAnchor="middle"
                      fill={chakra.unlocked ? "#996515" : "#a3a3a3"}
                      fontSize="8"
                      fontWeight={chakra.unlocked ? "bold" : "normal"}
                    >
                      {chakra.name.split(" ")[0]}
                    </text>
                  </g>
                )
              })}
            </svg>

            <p className="text-center text-sm text-muted-foreground mb-4">
              Unlock all chakras by improving your nutrition and wellness journey
            </p>
          </div>

          <div className="space-y-4">
            {chakras
              .filter((chakra) => chakra.unlocked)
              .map((chakra) => (
                <motion.div
                  key={chakra.name}
                  className="p-4 bg-white rounded-lg border border-jaggery-200 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                      style={{ backgroundColor: chakra.color }}
                    >
                      <span className="text-white font-bold">{chakra.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-jaggery-800">{chakra.name}</h3>
                      <p className="text-sm text-jaggery-600 mb-2">{chakra.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {chakra.foods.map((food) => (
                          <span key={food} className="text-xs px-2 py-1 bg-sweetlime-50 text-jaggery-700 rounded-full">
                            {food}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

            {chakras.some((chakra) => !chakra.unlocked) && (
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-center">
                <p className="text-muted-foreground mb-2">Continue your wellness journey to unlock more chakras</p>
                <Button className="bg-haldi-500 hover:bg-haldi-600 text-jaggery-900">View Wellness Program</Button>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="mantras">
          <div className="space-y-6">
            {mantras.map((mantra, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg border border-jaggery-200 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center text-center mb-4">
                  <h3 className="text-xl font-bold text-indigo-900 mb-2">{mantra.text}</h3>
                  <p className="text-sm text-jaggery-600 italic">"{mantra.translation}"</p>
                </div>
                <div className="bg-sweetlime-50 p-4 rounded-lg">
                  <h4 className="font-medium text-jaggery-800 mb-2">Benefit for Mindful Eating:</h4>
                  <p className="text-sm text-jaggery-600">{mantra.benefit}</p>
                </div>
                <div className="mt-4 text-center">
                  <Button variant="outline" className="border-jaggery-300">
                    <svg
                      className="h-4 w-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.828-2.828"
                      />
                    </svg>
                    Listen to Chant
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="ayurveda">
          <div className="bg-pattern-kolam bg-white p-6 rounded-lg border border-jaggery-200 shadow-sm mb-6">
            <h3 className="text-lg font-bold text-jaggery-800 mb-4 text-center">Ayurvedic Food Wisdom</h3>
            <div className="space-y-6">
              {ayurvedicTips.map((tip, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-sweetlime-50 rounded-lg border border-jaggery-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <h4 className="font-medium text-jaggery-800 mb-2">{tip.title}</h4>
                  <p className="text-sm text-jaggery-600">{tip.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-jaggery-200 shadow-sm">
            <h3 className="text-lg font-bold text-jaggery-800 mb-4 text-center">Find Your Dosha Type</h3>
            <p className="text-center text-sm text-muted-foreground mb-4">
              Discover your unique mind-body constitution to personalize your nutrition
            </p>
            <div className="flex justify-center">
              <Button className="bg-haldi-500 hover:bg-haldi-600 text-jaggery-900">Take Dosha Quiz</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
