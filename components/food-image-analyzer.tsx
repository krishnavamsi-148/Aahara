"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, X, Upload, Check, AlertTriangle, Info } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function FoodImageAnalyzer() {
  const [isOpen, setIsOpen] = useState(false)
  const [image, setImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [activeTab, setActiveTab] = useState("nutrition")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const analyzeImage = () => {
    setIsAnalyzing(true)
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false)
      setAnalysisComplete(true)
    }, 3000)
  }

  const resetAnalysis = () => {
    setImage(null)
    setAnalysisComplete(false)
    setActiveTab("nutrition")
  }

  // Sample analysis results
  const nutritionData = {
    calories: 450,
    protein: 15,
    carbs: 60,
    fat: 12,
    fiber: 8,
    ingredients: ["Rice", "Lentils", "Vegetables", "Ghee", "Spices"],
    healthScore: 75,
  }

  const healthCompatibility = {
    diabetes: { score: 65, recommendation: "Reduce portion size by 25%" },
    heart: { score: 80, recommendation: "Good choice, consider reducing ghee" },
    weight: { score: 70, recommendation: "Moderate portion size recommended" },
  }

  const alternatives = [
    {
      name: "Brown Rice Khichdi",
      benefits: "Lower glycemic index, higher fiber",
      calories: 380,
    },
    {
      name: "Quinoa Vegetable Pulao",
      benefits: "Higher protein, lower carbs",
      calories: 320,
    },
    {
      name: "Millet Khichdi",
      benefits: "Rich in minerals, lower calories",
      calories: 350,
    },
  ]

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-44 right-4 rounded-full p-4 shadow-lg bg-spice-500 hover:bg-spice-600 text-white"
        size="icon"
        aria-label="Food Image Analyzer"
      >
        <Camera className="h-6 w-6" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          >
            <Card className="w-full max-w-2xl shadow-xl border-spice-200 overflow-hidden max-h-[90vh] flex flex-col">
              <CardHeader className="bg-gradient-to-r from-spice-500 to-saffron-500 text-white py-3 px-4">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-medium flex items-center">
                    <Camera className="h-5 w-5 mr-2" />
                    Food Image Analyzer
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setIsOpen(false)
                      resetAnalysis()
                    }}
                    className="h-8 w-8 rounded-full text-white hover:bg-white/20"
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0 flex-1 overflow-auto">
                {!image ? (
                  <div
                    className="p-8 flex flex-col items-center justify-center h-full"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                  >
                    <div className="h-20 w-20 rounded-full bg-spice-100 text-spice-500 flex items-center justify-center mb-4">
                      <Camera className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Upload Food Image</h3>
                    <p className="text-center text-muted-foreground mb-6 max-w-md">
                      Take a photo of your meal or upload an existing image to get nutritional analysis and health
                      recommendations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-spice-500 hover:bg-spice-600" onClick={() => fileInputRef.current?.click()}>
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Image
                      </Button>
                      <Button variant="outline" className="border-spice-200">
                        <Camera className="mr-2 h-4 w-4" />
                        Take Photo
                      </Button>
                    </div>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept="image/*"
                      className="hidden"
                    />
                    <div className="mt-8 p-4 border border-dashed border-spice-200 rounded-lg text-center bg-spice-50">
                      <p className="text-sm text-muted-foreground">Drag and drop your image here</p>
                    </div>
                  </div>
                ) : (
                  <div className="p-6">
                    {!analysisComplete ? (
                      <div className="flex flex-col items-center">
                        <div className="relative w-full max-w-md h-64 mb-6 rounded-lg overflow-hidden">
                          <img src={image || "/placeholder.svg"} alt="Food" className="w-full h-full object-cover" />
                          {isAnalyzing && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                              <div className="text-center text-white">
                                <div className="animate-spin h-10 w-10 border-4 border-spice-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                                <p>Analyzing your meal...</p>
                              </div>
                            </div>
                          )}
                        </div>
                        {!isAnalyzing && (
                          <div className="flex gap-4">
                            <Button className="bg-spice-500 hover:bg-spice-600" onClick={analyzeImage}>
                              <Camera className="mr-2 h-4 w-4" />
                              Analyze Meal
                            </Button>
                            <Button variant="outline" className="border-spice-200" onClick={resetAnalysis}>
                              <X className="mr-2 h-4 w-4" />
                              Cancel
                            </Button>
                          </div>
                        )}
                        {isAnalyzing && (
                          <div className="w-full max-w-md mt-4">
                            <Progress value={65} className="h-2" />
                            <p className="text-sm text-center text-muted-foreground mt-2">
                              Identifying ingredients and analyzing nutritional content...
                            </p>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div>
                        <div className="flex flex-col sm:flex-row gap-6 mb-6">
                          <div className="sm:w-1/3">
                            <div className="relative rounded-lg overflow-hidden h-48">
                              <img
                                src={image || "/placeholder.svg"}
                                alt="Analyzed Food"
                                className="w-full h-full object-cover"
                              />
                              <Badge className="absolute top-2 left-2 bg-spice-500">
                                {nutritionData.healthScore}% Health Score
                              </Badge>
                            </div>
                          </div>
                          <div className="sm:w-2/3">
                            <h3 className="text-xl font-medium mb-2">Analysis Results</h3>
                            <p className="text-muted-foreground mb-4">
                              We've identified this meal as a vegetable khichdi with the following nutritional profile:
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                              <div className="bg-spice-50 p-3 rounded-lg text-center">
                                <div className="text-xl font-bold text-spice-700">{nutritionData.calories}</div>
                                <div className="text-xs text-muted-foreground">Calories</div>
                              </div>
                              <div className="bg-spice-50 p-3 rounded-lg text-center">
                                <div className="text-xl font-bold text-spice-700">{nutritionData.protein}g</div>
                                <div className="text-xs text-muted-foreground">Protein</div>
                              </div>
                              <div className="bg-spice-50 p-3 rounded-lg text-center">
                                <div className="text-xl font-bold text-spice-700">{nutritionData.carbs}g</div>
                                <div className="text-xs text-muted-foreground">Carbs</div>
                              </div>
                              <div className="bg-spice-50 p-3 rounded-lg text-center">
                                <div className="text-xl font-bold text-spice-700">{nutritionData.fat}g</div>
                                <div className="text-xs text-muted-foreground">Fat</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <Tabs
                          defaultValue="nutrition"
                          value={activeTab}
                          onValueChange={setActiveTab}
                          className="w-full"
                        >
                          <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
                            <TabsTrigger value="health">Health Compatibility</TabsTrigger>
                            <TabsTrigger value="alternatives">Healthier Alternatives</TabsTrigger>
                          </TabsList>

                          <TabsContent value="nutrition" className="pt-4">
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-medium mb-2">Identified Ingredients:</h4>
                                <div className="flex flex-wrap gap-2">
                                  {nutritionData.ingredients.map((ingredient, index) => (
                                    <Badge key={index} variant="outline" className="bg-spice-50">
                                      {ingredient}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h4 className="font-medium mb-2">Nutritional Highlights:</h4>
                                <ul className="space-y-2">
                                  <li className="flex items-start">
                                    <Check className="h-5 w-5 text-neem-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>Good source of complex carbohydrates from rice</span>
                                  </li>
                                  <li className="flex items-start">
                                    <Check className="h-5 w-5 text-neem-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>Provides plant-based protein from lentils</span>
                                  </li>
                                  <li className="flex items-start">
                                    <Check className="h-5 w-5 text-neem-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>Contains dietary fiber from vegetables and lentils</span>
                                  </li>
                                  <li className="flex items-start">
                                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>Moderate fat content from ghee</span>
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-medium mb-2">Portion Size Recommendation:</h4>
                                <p className="text-muted-foreground">
                                  The ideal portion size for this meal is approximately 1 cup (200g) for an adult with
                                  moderate activity level.
                                </p>
                              </div>
                            </div>
                          </TabsContent>

                          <TabsContent value="health" className="pt-4">
                            <div className="space-y-6">
                              <div>
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="font-medium">Diabetes Compatibility:</h4>
                                  <Badge
                                    className={`${
                                      healthCompatibility.diabetes.score >= 80
                                        ? "bg-neem-100 text-neem-700"
                                        : healthCompatibility.diabetes.score >= 60
                                          ? "bg-amber-100 text-amber-700"
                                          : "bg-red-100 text-red-700"
                                    }`}
                                  >
                                    {healthCompatibility.diabetes.score}%
                                  </Badge>
                                </div>
                                <Progress
                                  value={healthCompatibility.diabetes.score}
                                  className={`h-2 ${
                                    healthCompatibility.diabetes.score >= 80
                                      ? "bg-neem-100"
                                      : healthCompatibility.diabetes.score >= 60
                                        ? "bg-amber-100"
                                        : "bg-red-100"
                                  }`}
                                />
                                <div className="flex items-start mt-2">
                                  <Info className="h-5 w-5 text-spice-500 mr-2 flex-shrink-0 mt-0.5" />
                                  <p className="text-sm text-muted-foreground">
                                    {healthCompatibility.diabetes.recommendation}
                                  </p>
                                </div>
                              </div>

                              <div>
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="font-medium">Heart Health Compatibility:</h4>
                                  <Badge
                                    className={`${
                                      healthCompatibility.heart.score >= 80
                                        ? "bg-neem-100 text-neem-700"
                                        : healthCompatibility.heart.score >= 60
                                          ? "bg-amber-100 text-amber-700"
                                          : "bg-red-100 text-red-700"
                                    }`}
                                  >
                                    {healthCompatibility.heart.score}%
                                  </Badge>
                                </div>
                                <Progress
                                  value={healthCompatibility.heart.score}
                                  className={`h-2 ${
                                    healthCompatibility.heart.score >= 80
                                      ? "bg-neem-100"
                                      : healthCompatibility.heart.score >= 60
                                        ? "bg-amber-100"
                                        : "bg-red-100"
                                  }`}
                                />
                                <div className="flex items-start mt-2">
                                  <Info className="h-5 w-5 text-spice-500 mr-2 flex-shrink-0 mt-0.5" />
                                  <p className="text-sm text-muted-foreground">
                                    {healthCompatibility.heart.recommendation}
                                  </p>
                                </div>
                              </div>

                              <div>
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="font-medium">Weight Management Compatibility:</h4>
                                  <Badge
                                    className={`${
                                      healthCompatibility.weight.score >= 80
                                        ? "bg-neem-100 text-neem-700"
                                        : healthCompatibility.weight.score >= 60
                                          ? "bg-amber-100 text-amber-700"
                                          : "bg-red-100 text-red-700"
                                    }`}
                                  >
                                    {healthCompatibility.weight.score}%
                                  </Badge>
                                </div>
                                <Progress
                                  value={healthCompatibility.weight.score}
                                  className={`h-2 ${
                                    healthCompatibility.weight.score >= 80
                                      ? "bg-neem-100"
                                      : healthCompatibility.weight.score >= 60
                                        ? "bg-amber-100"
                                        : "bg-red-100"
                                  }`}
                                />
                                <div className="flex items-start mt-2">
                                  <Info className="h-5 w-5 text-spice-500 mr-2 flex-shrink-0 mt-0.5" />
                                  <p className="text-sm text-muted-foreground">
                                    {healthCompatibility.weight.recommendation}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </TabsContent>

                          <TabsContent value="alternatives" className="pt-4">
                            <div className="space-y-4">
                              <p className="text-muted-foreground">
                                Here are some healthier alternatives to this meal that you might consider:
                              </p>
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {alternatives.map((alt, index) => (
                                  <Card key={index} className="border-spice-100">
                                    <CardContent className="p-4">
                                      <h4 className="font-medium mb-1">{alt.name}</h4>
                                      <p className="text-sm text-muted-foreground mb-2">{alt.benefits}</p>
                                      <Badge variant="outline" className="bg-spice-50">
                                        {alt.calories} calories
                                      </Badge>
                                    </CardContent>
                                  </Card>
                                ))}
                              </div>
                              <div className="bg-spice-50 p-4 rounded-lg">
                                <h4 className="font-medium mb-2">Preparation Tips:</h4>
                                <ul className="space-y-1 text-sm">
                                  <li className="flex items-start">
                                    <Check className="h-4 w-4 text-spice-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>Use brown rice instead of white rice for higher fiber content</span>
                                  </li>
                                  <li className="flex items-start">
                                    <Check className="h-4 w-4 text-spice-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>Add more vegetables to increase nutrient density</span>
                                  </li>
                                  <li className="flex items-start">
                                    <Check className="h-4 w-4 text-spice-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>Use less ghee or substitute with olive oil</span>
                                  </li>
                                  <li className="flex items-start">
                                    <Check className="h-4 w-4 text-spice-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span>Add a side of yogurt for probiotics and protein</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </TabsContent>
                        </Tabs>

                        <div className="flex justify-between mt-6">
                          <Button variant="outline" className="border-spice-200" onClick={resetAnalysis}>
                            <Camera className="mr-2 h-4 w-4" />
                            Analyze Another Meal
                          </Button>
                          <Button className="bg-spice-500 hover:bg-spice-600">Save to Health Log</Button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
