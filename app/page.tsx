import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { FridgeRecipeFinder } from "@/components/fridge-recipe-finder"
import { MoodMealRecommender } from "@/components/mood-meal-recommender"
import { FestivalMealPlanner } from "@/components/festival-meal-planner"
import { HealthMonitor } from "@/components/health-monitor"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Calendar, Utensils, MessageSquare, Activity, Camera, Check, Sparkles, Brain, Leaf } from "lucide-react"

// Import components
import { MealImpactScore } from "@/components/meal-impact-score"
import { NutritionalGapsAlert } from "@/components/nutritional-gaps-alert"
import { AIFoodRecognition } from "@/components/ai-food-recognition"
import { RealTimeNutrientTracker } from "@/components/real-time-nutrient-tracker"
import { GamifiedHealthChallenges } from "@/components/gamified-health-challenges"

// Import new components
import { FestivalSpecificMenus } from "@/components/festival-specific-menus"
import { LocalSuperfoodsExplorer } from "@/components/local-superfoods-explorer"
import { VirtualKitchenTour } from "@/components/virtual-kitchen-tour"
import { HealthAwareMealEngine } from "@/components/health-aware-meal-engine"
import { ConditionBasedMealModes } from "@/components/condition-based-meal-modes"
import { AIPoweredFeatures } from "@/components/ai-powered-features"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AIPoweredFeatures />
      <AIFoodRecognition />
      <RealTimeNutrientTracker />
      <FeaturesSection />

      {/* AI-Powered Features Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AI-Powered
              </span>{" "}
              Health Features
            </h2>
            <p className="text-lg text-muted-foreground">
              Our advanced AI technology personalizes your nutrition journey based on your unique health profile
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden border-blue-100">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 text-white">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold">Health-Aware Meal Recommendations</h3>
                </div>
                <p className="opacity-90">
                  Our AI analyzes your blood sugar, blood pressure, cholesterol, and other health metrics to recommend
                  meals that adapt to your changing health needs.
                </p>
              </div>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Real-time Health Adaptation</h4>
                      <p className="text-sm text-muted-foreground">Meals adjust based on your current readings</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Smart Ingredient Swaps</h4>
                      <p className="text-sm text-muted-foreground">Automatically suggests safer alternatives</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Predictive Health Insights</h4>
                      <p className="text-sm text-muted-foreground">
                        Warns about potential health impacts before they occur
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 p-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Explore Health-Aware Recommendations</Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden border-purple-100">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <Brain className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold">Personalized Food Sensitivity Analysis</h3>
                </div>
                <p className="opacity-90">
                  Our AI learns your body's unique responses to different foods, identifying patterns and potential
                  sensitivities that affect your wellbeing.
                </p>
              </div>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Symptom Tracking</h4>
                      <p className="text-sm text-muted-foreground">Log reactions to build your sensitivity profile</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Pattern Recognition</h4>
                      <p className="text-sm text-muted-foreground">
                        AI identifies connections between foods and symptoms
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-2 flex-shrink-0 text-xs">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Automatic Meal Adjustments</h4>
                      <p className="text-sm text-muted-foreground">Recommendations evolve to avoid trigger foods</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 p-4">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Start Sensitivity Analysis</Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden border-green-100">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 text-white">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
                    <Camera className="h-4 w-4" />
                  </div>
                  <h3 className="font-bold">AI Food Recognition</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Snap a photo of any meal to instantly get nutritional analysis and health compatibility assessment.
                </p>
                <Button variant="outline" className="w-full border-green-200 text-green-700">
                  Try Food Recognition
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-amber-100">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-4 text-white">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
                    <Activity className="h-4 w-4" />
                  </div>
                  <h3 className="font-bold">Health Parameter Prediction</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-4">
                  AI predicts potential health changes based on your eating patterns and suggests preventive measures.
                </p>
                <Button variant="outline" className="w-full border-amber-200 text-amber-700">
                  View Health Predictions
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-red-100">
              <div className="bg-gradient-to-r from-red-500 to-rose-500 p-4 text-white">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
                    <Leaf className="h-4 w-4" />
                  </div>
                  <h3 className="font-bold">Virtual Kitchen Tour</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Experience AR demonstrations of traditional Indian cooking methods and techniques.
                </p>
                <Button variant="outline" className="w-full border-red-200 text-red-700">
                  Start Virtual Tour
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Festival-Specific Healthy Menus Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <FestivalSpecificMenus />
        </div>
      </section>

      {/* Local Superfoods Explorer Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-emerald-50 to-green-50">
        <div className="container mx-auto px-4">
          <LocalSuperfoodsExplorer />
        </div>
      </section>

      {/* Virtual Indian Kitchen Tour Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <VirtualKitchenTour />
        </div>
      </section>

      {/* Health-Aware Meal Recommendation Engine Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <HealthAwareMealEngine />
        </div>
      </section>

      {/* Condition-Based Meal Modes Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ConditionBasedMealModes />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              AI-Powered{" "}
              <span className="bg-gradient-to-r from-saffron-600 to-spice-600 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our innovative AI-powered tools designed to enhance your nutrition and health journey.
            </p>
          </div>

          <Tabs defaultValue="fridge" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="fridge" className="flex items-center gap-2">
                <Utensils className="h-4 w-4" />
                <span>What's in My Fridge?</span>
              </TabsTrigger>
              <TabsTrigger value="mood" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                <span>Mood-Based Meals</span>
              </TabsTrigger>
              <TabsTrigger value="festival" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Festival & Fasting</span>
              </TabsTrigger>
              <TabsTrigger value="health" className="flex items-center gap-2">
                <Activity className="h-4 w-4" />
                <span>Health Monitor</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="fridge">
              <FridgeRecipeFinder />
            </TabsContent>

            <TabsContent value="mood">
              <MoodMealRecommender />
            </TabsContent>

            <TabsContent value="festival">
              <FestivalMealPlanner />
            </TabsContent>

            <TabsContent value="health">
              <HealthMonitor />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-pattern-warli">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Talk to Our{" "}
                <span className="bg-gradient-to-r from-saffron-600 to-spice-600 bg-clip-text text-transparent">
                  AI Nutritionist
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Get personalized nutrition advice, recipe suggestions, and answers to your health questions in multiple
                Indian languages.
              </p>
              <div className="bg-gradient-to-r from-saffron-100 to-amber-100 p-6 rounded-xl border border-saffron-200 mb-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-saffron-500 text-white flex items-center justify-center mr-3 flex-shrink-0">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Ask me anything about nutrition</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      "What are some good breakfast options for diabetics?"
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">"मधुमेह के लिए अच्छे नाश्ते के विकल्प क्या हैं?"</p>
                    <p className="text-sm text-muted-foreground mt-1">"మధుమేహం కోసం మంచి అల్పాహార ఎంపికలు ఏమిటి?"</p>
                    <Button className="mt-4 bg-saffron-500 hover:bg-saffron-600">Chat with AI Nutritionist</Button>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-saffron-100 text-saffron-700 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Multilingual Support</h4>
                    <p className="text-muted-foreground">
                      Get nutrition advice in English, Hindi, Telugu, Tamil, and more.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-saffron-100 text-saffron-700 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Voice Interaction</h4>
                    <p className="text-muted-foreground">Speak to our AI nutritionist for hands-free advice.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-saffron-100 text-saffron-700 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Personalized Recommendations</h4>
                    <p className="text-muted-foreground">Get advice tailored to your health profile and preferences.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Food Image{" "}
                <span className="bg-gradient-to-r from-saffron-600 to-spice-600 bg-clip-text text-transparent">
                  Analysis
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Upload photos of your meals to get instant nutritional analysis and health recommendations.
              </p>
              <div className="bg-gradient-to-r from-emerald-100 to-green-100 p-6 rounded-xl border border-emerald-200 mb-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-emerald-500 text-white flex items-center justify-center mr-3 flex-shrink-0">
                    <Camera className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Analyze your meals with AI</h3>
                    <p className="text-sm text-muted-foreground mt-1">Take a photo of your meal to get:</p>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-emerald-500 mr-2" />
                        Calorie and nutrient estimation
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-emerald-500 mr-2" />
                        Health compatibility assessment
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-emerald-500 mr-2" />
                        Portion size recommendations
                      </li>
                    </ul>
                    <Button className="mt-4 bg-emerald-500 hover:bg-emerald-600">Analyze Food Image</Button>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Instant Analysis</h4>
                    <p className="text-muted-foreground">
                      Get nutritional information within seconds of uploading your photo.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Healthier Alternatives</h4>
                    <p className="text-muted-foreground">Receive suggestions for healthier versions of your meals.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Meal Logging</h4>
                    <p className="text-muted-foreground">Automatically log your meals for tracking and analysis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">New Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Thali Builder Game</h3>
              <RealTimeNutrientTracker />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Meal Customization</h3>
              <GamifiedHealthChallenges />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Weekly Health Report</h3>
              <MealImpactScore />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Nutritional Gaps Alert</h3>
              <NutritionalGapsAlert />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
