"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertCircle, Clock, MapPin } from "lucide-react"

export function EmergencyMealService() {
  const [condition, setCondition] = useState<string>("diabetes")
  const [isOrdering, setIsOrdering] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handleOrder = () => {
    setIsOrdering(true)
    // Simulate API call
    setTimeout(() => {
      setIsOrdering(false)
      setOrderPlaced(true)
    }, 1500)
  }

  return (
    <div className="space-y-4">
      {!orderPlaced ? (
        <>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
            <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-red-800">Emergency Meal Service</h4>
              <p className="text-sm text-red-700 mt-1">
                Quick, health-based emergency food delivery for urgent dietary needs.
              </p>
            </div>
          </div>

          <Card>
            <CardContent className="p-4 space-y-4">
              <div>
                <h3 className="font-medium mb-2">Select Health Condition</h3>
                <RadioGroup defaultValue="diabetes" onValueChange={setCondition}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="diabetes" id="diabetes" />
                    <Label htmlFor="diabetes">Diabetes (Low Sugar)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="hypertension" id="hypertension" />
                    <Label htmlFor="hypertension">Hypertension (Low Sodium)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="hypoglycemia" id="hypoglycemia" />
                    <Label htmlFor="hypoglycemia">Hypoglycemia (Quick Energy)</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <h3 className="font-medium mb-2">Delivery Time</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="justify-start">
                    <Clock className="mr-2 h-4 w-4" />
                    30 min
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Clock className="mr-2 h-4 w-4" />
                    60 min
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Delivery Location</h3>
                <Button variant="outline" className="w-full justify-start">
                  <MapPin className="mr-2 h-4 w-4" />
                  Current Location
                </Button>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Special Instructions</h3>
                <div className="flex items-start space-x-2">
                  <Checkbox id="instructions" />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="instructions">Include blood sugar testing kit</Label>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox id="instructions-2" />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="instructions-2">Include medication reminder</Label>
                  </div>
                </div>
              </div>

              <Button
                className="w-full bg-red-600 hover:bg-red-700 text-white"
                onClick={handleOrder}
                disabled={isOrdering}
              >
                {isOrdering ? "Processing..." : "Place Emergency Order"}
              </Button>
            </CardContent>
          </Card>
        </>
      ) : (
        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Emergency Order Placed!</h3>
            <p className="text-muted-foreground mb-4">
              Your{" "}
              {condition === "diabetes"
                ? "diabetic-friendly"
                : condition === "hypertension"
                  ? "low-sodium"
                  : "quick energy"}{" "}
              meal is being prepared and will arrive within 30 minutes.
            </p>
            <div className="bg-muted p-3 rounded-lg mb-4 flex items-center justify-center space-x-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">Estimated arrival: 2:45 PM</span>
            </div>
            <Button variant="outline" className="w-full" onClick={() => setOrderPlaced(false)}>
              Track Order
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
