"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Check, Clock, Package, Truck, Home } from "lucide-react"

interface DeliveryStep {
  id: string
  title: string
  description: string
  time: string
  completed: boolean
  icon: React.ReactNode
}

export function DeliveryTracker() {
  const [currentStep, setCurrentStep] = useState(1)
  const [scooterPosition, setScooterPosition] = useState(0)

  const deliverySteps: DeliveryStep[] = [
    {
      id: "order-confirmed",
      title: "Order Confirmed",
      description: "Your order has been received",
      time: "10:30 AM",
      completed: true,
      icon: <Check className="h-5 w-5" />,
    },
    {
      id: "preparation",
      title: "Preparation",
      description: "Your meal is being freshly prepared",
      time: "10:45 AM",
      completed: currentStep >= 2,
      icon: <Clock className="h-5 w-5" />,
    },
    {
      id: "out-for-delivery",
      title: "Out for Delivery",
      description: "Your order is on the way",
      time: "11:15 AM",
      completed: currentStep >= 3,
      icon: <Truck className="h-5 w-5" />,
    },
    {
      id: "delivered",
      title: "Delivered",
      description: "Enjoy your meal!",
      time: "11:45 AM",
      completed: currentStep >= 4,
      icon: <Home className="h-5 w-5" />,
    },
  ]

  // Simulate delivery progress
  useEffect(() => {
    if (currentStep < 4) {
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [currentStep])

  // Update scooter position based on current step
  useEffect(() => {
    setScooterPosition((currentStep - 1) * 33.3)
  }, [currentStep])

  return (
    <div className="bg-texture-mud-wall bg-sweetlime-50 rounded-xl p-6 border border-jaggery-300">
      <h2 className="text-xl font-bold text-jaggery-600 mb-6">Track Your Order</h2>

      <div className="relative mb-12">
        {/* Street path */}
        <div className="h-2 bg-jaggery-200 rounded-full relative">
          {/* Milestone markers */}
          {deliverySteps.map((step, index) => (
            <div
              key={step.id}
              className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center ${
                step.completed
                  ? "bg-haldi-500 text-jaggery-900"
                  : "bg-jaggery-100 text-jaggery-400 border border-jaggery-300"
              }`}
              style={{ left: `${index * 33.3}%` }}
            >
              {step.completed ? <Check className="h-3 w-3" /> : index + 1}
            </div>
          ))}

          {/* Animated scooter */}
          <motion.div
            className="absolute top-0 -translate-y-full"
            animate={{ left: `${scooterPosition}%` }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          >
            <div className="relative -mt-8">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.5 17.5C5.88071 17.5 7 16.3807 7 15C7 13.6193 5.88071 12.5 4.5 12.5C3.11929 12.5 2 13.6193 2 15C2 16.3807 3.11929 17.5 4.5 17.5Z"
                  fill="#B71C1C"
                  stroke="#B71C1C"
                />
                <path
                  d="M19.5 17.5C20.8807 17.5 22 16.3807 22 15C22 13.6193 20.8807 12.5 19.5 12.5C18.1193 12.5 17 13.6193 17 15C17 16.3807 18.1193 17.5 19.5 17.5Z"
                  fill="#B71C1C"
                  stroke="#B71C1C"
                />
                <path
                  d="M12 7H14L16 12H12M3 15L7 15M17 15L21 15M12 17H14M4.5 15C4.5 15.2761 4.27614 15.5 4 15.5C3.72386 15.5 3.5 15.2761 3.5 15C3.5 14.7239 3.72386 14.5 4 14.5C4.27614 14.5 4.5 14.7239 4.5 15ZM19.5 15C19.5 15.2761 19.2761 15.5 19 15.5C18.7239 15.5 18.5 15.2761 18.5 15C18.5 14.7239 18.7239 14.5 19 14.5C19.2761 14.5 19.5 14.7239 19.5 15Z"
                  stroke="#B71C1C"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.5 9.5H16.5L18 12H14.5V9.5Z"
                  fill="#F4C430"
                  stroke="#B71C1C"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <motion.div
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-1 bg-jaggery-300 rounded-full opacity-50"
                animate={{ scaleX: [1, 1.2, 1] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.5 }}
              ></motion.div>
            </div>
          </motion.div>
        </div>

        {/* Indian street elements */}
        <div className="absolute top-4 left-[10%]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2L14.5 9H19.5L15.5 13.5L17 20L12 16.5L7 20L8.5 13.5L4.5 9H9.5L12 2Z"
              fill="#F4C430"
              stroke="#996515"
            />
          </svg>
        </div>
        <div className="absolute top-6 left-[40%]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#2E7D32" stroke="#166534" />
            <path
              d="M12 6C12 6 14 9 14 12C14 15 12 18 12 18C12 18 10 15 10 12C10 9 12 6 12 6Z"
              fill="#166534"
              stroke="#166534"
            />
            <path
              d="M6 12C6 12 9 10 12 10C15 10 18 12 18 12C18 12 15 14 12 14C9 14 6 12 6 12Z"
              fill="#166534"
              stroke="#166534"
            />
          </svg>
        </div>
        <div className="absolute top-2 left-[70%]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 21H21M4 18H20M5 15H19M6 12H18M7 9H17M8 6H16M9 3H15"
              stroke="#A97444"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="space-y-4">
        {deliverySteps.map((step) => (
          <div
            key={step.id}
            className={`p-4 rounded-lg border ${
              step.completed ? "bg-white border-haldi-200" : "bg-gray-50 border-gray-200"
            }`}
          >
            <div className="flex items-start">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                  step.completed ? "bg-haldi-100 text-haldi-700" : "bg-gray-100 text-gray-400"
                }`}
              >
                {step.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className={`font-medium ${step.completed ? "text-jaggery-800" : "text-gray-500"}`}>
                    {step.title}
                  </h3>
                  <span className={`text-sm ${step.completed ? "text-jaggery-600" : "text-gray-400"}`}>
                    {step.time}
                  </span>
                </div>
                <p className={`text-sm ${step.completed ? "text-jaggery-600" : "text-gray-400"}`}>{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {currentStep === 4 && (
        <motion.div
          className="mt-6 p-4 bg-haldi-50 border border-haldi-200 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-haldi-100 text-haldi-700 flex items-center justify-center mr-4 flex-shrink-0">
              <Package className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium text-jaggery-800">Your meal has arrived!</h3>
              <p className="text-sm text-jaggery-600">
                Your order was delivered in a banana leaf package. Enjoy your healthy meal!
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
