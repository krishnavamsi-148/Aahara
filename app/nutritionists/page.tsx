"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Calendar, MapPin, Star, Search, Video, MessageSquare, Check } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

// Sample nutritionist data
const nutritionists = [
  {
    id: 1,
    name: "Dr. Anjali Sharma",
    title: "Clinical Nutritionist & Diabetes Specialist",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 124,
    experience: "15+ years",
    location: "HSR Layout, Bangalore",
    distance: "2.5 km",
    specializations: ["Diabetes Management", "Weight Loss", "Sports Nutrition"],
    languages: ["English", "Hindi", "Kannada"],
    education: [
      "Ph.D. in Clinical Nutrition, University of Delhi",
      "M.Sc. in Dietetics, SNDT Women's University",
      "Certified Diabetes Educator (CDE)",
    ],
    about:
      "Dr. Anjali Sharma is a renowned clinical nutritionist with over 15 years of experience in diabetes management and weight loss. She combines modern nutritional science with traditional Indian dietary wisdom to create personalized nutrition plans.",
    consultationFee: 1200,
    nextAvailable: "Today",
    availableSlots: [
      { date: "Today", slots: ["10:00 AM", "2:30 PM", "5:45 PM"] },
      { date: "Tomorrow", slots: ["11:30 AM", "3:00 PM", "6:15 PM"] },
      { date: "Wed, 15 May", slots: ["9:15 AM", "1:45 PM", "4:30 PM"] },
    ],
    featured: true,
  },
  {
    id: 2,
    name: "Priya Desai",
    title: "Ayurvedic Nutritionist & Wellness Coach",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 98,
    experience: "10+ years",
    location: "Indiranagar, Bangalore",
    distance: "4.2 km",
    specializations: ["Ayurvedic Nutrition", "Gut Health", "Women's Health"],
    languages: ["English", "Hindi", "Marathi"],
    education: [
      "B.A.M.S. (Bachelor of Ayurvedic Medicine and Surgery)",
      "Certification in Nutrition and Dietetics",
      "Yoga Instructor Certification",
    ],
    about:
      "Priya specializes in Ayurvedic nutrition and believes in the power of food as medicine. Her approach integrates traditional Ayurvedic principles with modern nutritional science to address the root causes of health issues.",
    consultationFee: 1000,
    nextAvailable: "Tomorrow",
    availableSlots: [
      { date: "Tomorrow", slots: ["10:00 AM", "1:30 PM", "4:45 PM"] },
      { date: "Thu, 16 May", slots: ["11:30 AM", "2:00 PM", "5:15 PM"] },
      { date: "Fri, 17 May", slots: ["9:15 AM", "12:45 PM", "3:30 PM"] },
    ],
    featured: true,
  },
  {
    id: 3,
    name: "Dr. Rajesh Kumar",
    title: "Nutritionist & Metabolic Health Expert",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 87,
    experience: "12+ years",
    location: "Koramangala, Bangalore",
    distance: "3.8 km",
    specializations: ["Metabolic Disorders", "Heart Health", "PCOS Management"],
    languages: ["English", "Hindi", "Tamil"],
    education: [
      "M.D. in Medicine, AIIMS",
      "Fellowship in Metabolic Health, Johns Hopkins",
      "Certified in Medical Nutrition Therapy",
    ],
    about:
      "Dr. Rajesh Kumar specializes in nutritional approaches to metabolic disorders and cardiovascular health. He has helped hundreds of patients reverse metabolic syndrome and improve heart health through dietary interventions.",
    consultationFee: 1500,
    nextAvailable: "Thu, 16 May",
    availableSlots: [
      { date: "Thu, 16 May", slots: ["9:00 AM", "11:30 AM", "4:00 PM"] },
      { date: "Fri, 17 May", slots: ["10:30 AM", "2:00 PM", "5:30 PM"] },
      { date: "Sat, 18 May", slots: ["11:00 AM", "3:30 PM"] },
    ],
  },
  {
    id: 4,
    name: "Meera Joshi",
    title: "Sports Nutritionist & Fitness Coach",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 76,
    experience: "8+ years",
    location: "Whitefield, Bangalore",
    distance: "7.5 km",
    specializations: ["Sports Nutrition", "Performance Enhancement", "Recovery Nutrition"],
    languages: ["English", "Hindi", "Gujarati"],
    education: [
      "M.Sc. in Sports Nutrition, Loughborough University",
      "Certified Strength and Conditioning Specialist (CSCS)",
      "International Society of Sports Nutrition (ISSN) Certified",
    ],
    about:
      "Meera specializes in sports nutrition and has worked with professional athletes and fitness enthusiasts. She focuses on optimizing nutrition for performance, recovery, and overall athletic development.",
    consultationFee: 1300,
    nextAvailable: "Today",
    availableSlots: [
      { date: "Today", slots: ["1:00 PM", "3:30 PM", "6:00 PM"] },
      { date: "Tomorrow", slots: ["11:30 AM", "2:00 PM", "4:30 PM"] },
      { date: "Thu, 16 May", slots: ["10:00 AM", "12:30 PM", "5:00 PM"] },
    ],
  },
  {
    id: 5,
    name: "Dr. Sunita Patel",
    title: "Pediatric Nutritionist & Child Health Specialist",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 112,
    experience: "14+ years",
    location: "Jayanagar, Bangalore",
    distance: "5.2 km",
    specializations: ["Pediatric Nutrition", "Food Allergies", "Growth & Development"],
    languages: ["English", "Hindi", "Gujarati", "Kannada"],
    education: [
      "M.D. in Pediatrics, KEM Hospital",
      "Fellowship in Pediatric Nutrition, Boston Children's Hospital",
      "Certified Lactation Consultant",
    ],
    about:
      "Dr. Sunita specializes in pediatric nutrition and has extensive experience in managing nutritional needs of children from infancy through adolescence. She has a special interest in food allergies and intolerances.",
    consultationFee: 1400,
    nextAvailable: "Tomorrow",
    availableSlots: [
      { date: "Tomorrow", slots: ["9:30 AM", "11:00 AM", "4:30 PM"] },
      { date: "Thu, 16 May", slots: ["10:00 AM", "1:30 PM", "5:00 PM"] },
      { date: "Fri, 17 May", slots: ["9:00 AM", "12:30 PM", "3:00 PM"] },
    ],
  },
]

export default function NutritionistsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecialization, setSelectedSpecialization] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [selectedNutritionist, setSelectedNutritionist] = useState<number | null>(null)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [consultationType, setConsultationType] = useState("video")
  const [bookingConfirmed, setBookingConfirmed] = useState(false)

  const filteredNutritionists = nutritionists.filter((nutritionist) => {
    // Filter by specialization
    if (
      selectedSpecialization !== "all" &&
      !nutritionist.specializations.some((spec) => spec.toLowerCase() === selectedSpecialization.toLowerCase())
    ) {
      return false
    }

    // Filter by location
    if (selectedLocation !== "all" && !nutritionist.location.toLowerCase().includes(selectedLocation.toLowerCase())) {
      return false
    }

    // Filter by search term
    if (
      searchTerm &&
      !nutritionist.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !nutritionist.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !nutritionist.specializations.some((spec) => spec.toLowerCase().includes(searchTerm.toLowerCase()))
    ) {
      return false
    }

    return true
  })

  const featuredNutritionists = nutritionists.filter((nutritionist) => nutritionist.featured)
  const currentNutritionist =
    selectedNutritionist !== null ? nutritionists.find((n) => n.id === selectedNutritionist) : null

  const handleBookAppointment = () => {
    // In a real app, this would make an API call to book the appointment
    setBookingConfirmed(true)
    setTimeout(() => {
      setBookingConfirmed(false)
      setSelectedNutritionist(null)
      setSelectedDate(null)
      setSelectedTime(null)
    }, 3000)
  }

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Find a Nutritionist</h1>
        <p className="mt-2 text-muted-foreground">
          Connect with certified nutritionists for personalized guidance on your health journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by name, specialization, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Select value={selectedSpecialization} onValueChange={setSelectedSpecialization}>
            <SelectTrigger>
              <SelectValue placeholder="Specialization" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Specializations</SelectItem>
              <SelectItem value="diabetes management">Diabetes Management</SelectItem>
              <SelectItem value="weight loss">Weight Loss</SelectItem>
              <SelectItem value="ayurvedic nutrition">Ayurvedic Nutrition</SelectItem>
              <SelectItem value="sports nutrition">Sports Nutrition</SelectItem>
              <SelectItem value="heart health">Heart Health</SelectItem>
              <SelectItem value="pediatric nutrition">Pediatric Nutrition</SelectItem>
              <SelectItem value="gut health">Gut Health</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger>
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="hsr layout">HSR Layout</SelectItem>
              <SelectItem value="indiranagar">Indiranagar</SelectItem>
              <SelectItem value="koramangala">Koramangala</SelectItem>
              <SelectItem value="whitefield">Whitefield</SelectItem>
              <SelectItem value="jayanagar">Jayanagar</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {featuredNutritionists.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Nutritionists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredNutritionists.map((nutritionist) => (
              <Card
                key={nutritionist.id}
                className="overflow-hidden border-saffron-100 hover:border-saffron-300 transition-all"
              >
                <div className="grid md:grid-cols-[1fr_2fr] gap-4">
                  <div className="p-4">
                    <div className="aspect-square rounded-full overflow-hidden mb-3">
                      <img
                        src={nutritionist.image || "/placeholder.svg"}
                        alt={nutritionist.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center">
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                        <span className="ml-1 font-medium">{nutritionist.rating}</span>
                        <span className="text-xs text-muted-foreground ml-1">({nutritionist.reviews})</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">{nutritionist.experience} experience</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">{nutritionist.name}</h3>
                    <p className="text-muted-foreground">{nutritionist.title}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {nutritionist.specializations.map((spec, index) => (
                        <Badge key={index} variant="outline" className="bg-saffron-50">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center mt-3 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{nutritionist.location}</span>
                      <span className="mx-2">•</span>
                      <span>{nutritionist.distance}</span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <div className="text-sm">Next Available</div>
                        <div className="font-medium">{nutritionist.nextAvailable}</div>
                      </div>
                      <div>
                        <div className="text-sm">Consultation Fee</div>
                        <div className="font-medium">₹{nutritionist.consultationFee}</div>
                      </div>
                    </div>
                    <Button
                      className="w-full mt-4 bg-saffron-500 hover:bg-saffron-600"
                      onClick={() => setSelectedNutritionist(nutritionist.id)}
                    >
                      Book Appointment
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      <div>
        <h2 className="text-2xl font-bold mb-6">All Nutritionists</h2>
        {filteredNutritionists.length === 0 ? (
          <div className="text-center py-12">
            <Search className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
            <h3 className="mt-4 text-lg font-semibold">No nutritionists found</h3>
            <p className="mt-2 text-muted-foreground">Try adjusting your filters or search term</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNutritionists.map((nutritionist) => (
              <Card
                key={nutritionist.id}
                className="overflow-hidden border-saffron-100 hover:border-saffron-300 transition-all"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img
                        src={nutritionist.image || "/placeholder.svg"}
                        alt={nutritionist.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{nutritionist.name}</CardTitle>
                      <CardDescription>{nutritionist.title}</CardDescription>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                        <span className="ml-1 text-sm font-medium">{nutritionist.rating}</span>
                        <span className="text-xs text-muted-foreground ml-1">({nutritionist.reviews})</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {nutritionist.specializations.slice(0, 2).map((spec, index) => (
                      <Badge key={index} variant="outline" className="bg-saffron-50">
                        {spec}
                      </Badge>
                    ))}
                    {nutritionist.specializations.length > 2 && (
                      <Badge variant="outline" className="bg-saffron-50">
                        +{nutritionist.specializations.length - 2} more
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{nutritionist.location}</span>
                  </div>
                  <div className="flex justify-between mt-3">
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-1 text-saffron-600" />
                      <span className="font-medium">{nutritionist.nextAvailable}</span>
                    </div>
                    <div className="font-medium">₹{nutritionist.consultationFee}</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-saffron-500 hover:bg-saffron-600"
                    onClick={() => setSelectedNutritionist(nutritionist.id)}
                  >
                    Book Appointment
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Appointment Booking Dialog */}
      <Dialog open={selectedNutritionist !== null} onOpenChange={(open) => !open && setSelectedNutritionist(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {currentNutritionist && (
            <>
              <DialogHeader>
                <DialogTitle>Book Appointment with {currentNutritionist.name}</DialogTitle>
                <DialogDescription>Select your preferred date, time, and consultation type</DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
                <div>
                  <div className="aspect-square rounded-lg overflow-hidden mb-4">
                    <img
                      src={currentNutritionist.image || "/placeholder.svg"}
                      alt={currentNutritionist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg">{currentNutritionist.name}</h3>
                  <p className="text-muted-foreground">{currentNutritionist.title}</p>
                  <div className="flex items-center mt-2">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="ml-1 font-medium">{currentNutritionist.rating}</span>
                    <span className="text-sm text-muted-foreground ml-1">({currentNutritionist.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center mt-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{currentNutritionist.location}</span>
                  </div>
                  <Separator className="my-4" />
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium">Specializations</div>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {currentNutritionist.specializations.map((spec, index) => (
                          <Badge key={index} variant="outline" className="bg-saffron-50">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Languages</div>
                      <div className="text-sm text-muted-foreground">{currentNutritionist.languages.join(", ")}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Consultation Fee</div>
                      <div className="text-lg font-bold text-saffron-600">₹{currentNutritionist.consultationFee}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <Tabs defaultValue="video" value={consultationType} onValueChange={setConsultationType}>
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="video" className="flex items-center">
                        <Video className="mr-2 h-4 w-4" />
                        Video Consultation
                      </TabsTrigger>
                      <TabsTrigger value="chat" className="flex items-center">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Chat Consultation
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>

                  <div className="mt-6">
                    <h4 className="font-medium mb-3">Select Date</h4>
                    <div className="grid grid-cols-3 gap-3">
                      {currentNutritionist.availableSlots.map((slot, index) => (
                        <Button
                          key={index}
                          variant={selectedDate === slot.date ? "default" : "outline"}
                          className={selectedDate === slot.date ? "bg-saffron-500 hover:bg-saffron-600" : ""}
                          onClick={() => {
                            setSelectedDate(slot.date)
                            setSelectedTime(null)
                          }}
                        >
                          {slot.date}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {selectedDate && (
                    <div className="mt-6">
                      <h4 className="font-medium mb-3">Select Time</h4>
                      <div className="grid grid-cols-3 gap-3">
                        {currentNutritionist.availableSlots
                          .find((slot) => slot.date === selectedDate)
                          ?.slots.map((time, index) => (
                            <Button
                              key={index}
                              variant={selectedTime === time ? "default" : "outline"}
                              className={selectedTime === time ? "bg-saffron-500 hover:bg-saffron-600" : ""}
                              onClick={() => setSelectedTime(time)}
                            >
                              {time}
                            </Button>
                          ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-6">
                    <h4 className="font-medium mb-3">Consultation Details</h4>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Nutritionist</span>
                            <span className="font-medium">{currentNutritionist.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Date</span>
                            <span className="font-medium">{selectedDate || "Not selected"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Time</span>
                            <span className="font-medium">{selectedTime || "Not selected"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Type</span>
                            <span className="font-medium">
                              {consultationType === "video" ? "Video Consultation" : "Chat Consultation"}
                            </span>
                          </div>
                          <Separator className="my-2" />
                          <div className="flex justify-between font-medium">
                            <span>Total Fee</span>
                            <span>₹{currentNutritionist.consultationFee}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Button
                    className="w-full mt-6 bg-saffron-500 hover:bg-saffron-600"
                    disabled={!selectedDate || !selectedTime}
                    onClick={handleBookAppointment}
                  >
                    Confirm Booking
                  </Button>

                  {bookingConfirmed && (
                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                      <div className="flex items-center">
                        <Check className="h-5 w-5 mr-2" />
                        <div>
                          <p className="font-medium">Appointment Confirmed!</p>
                          <p className="text-sm">
                            Your appointment with {currentNutritionist.name} on {selectedDate} at {selectedTime} has
                            been booked.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
