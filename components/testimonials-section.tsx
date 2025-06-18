"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Type 2 Diabetes Patient",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "Aahara has transformed my relationship with food. The diabetes-friendly meal plans have helped me maintain stable blood sugar levels without compromising on taste. The AI recommendations are spot-on!",
    rating: 5,
    location: "Bangalore",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Heart Health Focus",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "After my heart surgery, I was struggling with diet restrictions. Aahara's heart-healthy meal plans have made it easy to follow my doctor's advice while enjoying delicious traditional Indian food.",
    rating: 5,
    location: "Mumbai",
  },
  {
    id: 3,
    name: "Anita Desai",
    role: "Weight Management Journey",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "I've lost 15kg in 6 months with Aahara's weight management plans! The portion-controlled meals are satisfying, and the weekly nutrition analysis helps me stay on track. Highly recommended!",
    rating: 4,
    location: "Delhi",
  },
  {
    id: 4,
    name: "Dr. Suresh Patel",
    role: "Nutritionist",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "As a healthcare professional, I recommend Aahara to my patients. The platform's scientific approach to traditional Indian cuisine is impressive. The AI-powered recommendations are based on solid nutritional principles.",
    rating: 5,
    location: "Chennai",
  },
  {
    id: 5,
    name: "Meera Iyer",
    role: "Busy Professional",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "Aahara's meal delivery service has been a lifesaver for my busy schedule. I get nutritious, home-style meals delivered to my office, and the app makes it easy to track my nutrition goals.",
    rating: 4,
    location: "Hyderabad",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-saffron-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-saffron-100 text-saffron-800 hover:bg-saffron-200 px-3 py-1 text-sm">
            Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transforming Lives Through{" "}
            <span className="bg-gradient-to-r from-saffron-600 to-spice-600 bg-clip-text text-transparent">
              Personalized Nutrition
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from our community about how Aahara has helped them achieve their health goals.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white shadow-md hover:bg-saffron-50"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
          </div>

          <div className="absolute -right-8 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white shadow-md hover:bg-saffron-50"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-saffron-100 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr]">
                  <div className="bg-gradient-to-br from-saffron-500 to-spice-500 p-8 flex flex-col justify-center items-center text-white">
                    <Avatar className="h-24 w-24 border-4 border-white mb-4">
                      <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                      <AvatarFallback className="bg-white text-saffron-700 text-xl">
                        {testimonials[currentIndex].name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-bold text-xl text-center">{testimonials[currentIndex].name}</h3>
                    <p className="text-white/80 text-center">{testimonials[currentIndex].role}</p>
                    <div className="flex items-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonials[currentIndex].rating ? "fill-white text-white" : "text-white/30"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-white/80 text-sm mt-2">{testimonials[currentIndex].location}</p>
                  </div>
                  <div className="p-8 flex flex-col justify-center relative">
                    <Quote className="absolute top-6 left-6 h-12 w-12 text-saffron-100" />
                    <blockquote className="text-lg relative z-10 px-4">
                      "{testimonials[currentIndex].content}"
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full mx-1 ${index === currentIndex ? "bg-saffron-500" : "bg-saffron-200"}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
