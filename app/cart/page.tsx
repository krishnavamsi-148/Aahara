"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Minus, Plus, ShoppingCart, Trash2, Clock, MapPin, Truck, AlertCircle } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"

// Sample cart items
const initialCartItems = [
  {
    id: 1,
    name: "Ragi Dosa with Sambar",
    description: "A nutritious South Indian breakfast made with finger millet flour",
    price: 120,
    quantity: 2,
    image: "/placeholder.svg?height=100&width=100",
    healthTags: ["Diabetes-Friendly", "High-Fiber"],
    nutrients: {
      calories: 320,
      protein: 12,
      carbs: 48,
      fat: 6,
    },
  },
  {
    id: 2,
    name: "Palak Paneer with Brown Rice",
    description: "Cottage cheese cubes in a spinach gravy served with brown rice",
    price: 180,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100",
    healthTags: ["Heart-Healthy", "High-Protein"],
    nutrients: {
      calories: 380,
      protein: 18,
      carbs: 45,
      fat: 12,
    },
  },
  {
    id: 3,
    name: "Oats Idli with Coconut Chutney",
    description: "Steamed savory cakes made with oats and traditional spices",
    price: 110,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100",
    healthTags: ["Diabetes-Friendly", "Low-Fat"],
    nutrients: {
      calories: 220,
      protein: 8,
      carbs: 35,
      fat: 4,
    },
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [couponCode, setCouponCode] = useState("")
  const [couponApplied, setCouponApplied] = useState(false)
  const [deliveryOption, setDeliveryOption] = useState("standard")
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isProcessing, setIsProcessing] = useState(false)
  const [showNutrientSummary, setShowNutrientSummary] = useState(false)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === "health10") {
      setCouponApplied(true)
    }
  }

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const discount = couponApplied ? Math.round(subtotal * 0.1) : 0
  const deliveryFee = deliveryOption === "express" ? 60 : 30
  const total = subtotal - discount + deliveryFee

  // Calculate total nutrients
  const totalNutrients = cartItems.reduce(
    (acc, item) => {
      return {
        calories: acc.calories + item.nutrients.calories * item.quantity,
        protein: acc.protein + item.nutrients.protein * item.quantity,
        carbs: acc.carbs + item.nutrients.carbs * item.quantity,
        fat: acc.fat + item.nutrients.fat * item.quantity,
      }
    },
    { calories: 0, protein: 0, carbs: 0, fat: 0 },
  )

  const handleCheckout = () => {
    setIsProcessing(true)
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false)
      // Redirect to success page
      window.location.href = "/checkout/success"
    }, 2000)
  }

  return (
    <div className="container py-12">
      <div className="flex items-center mb-8">
        <h1 className="text-3xl font-bold">Your Cart</h1>
        <Badge className="ml-4 bg-saffron-500">{cartItems.length} Items</Badge>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground opacity-50 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Looks like you haven't added any items to your cart yet.</p>
          <Link href="/food-delivery">
            <Button className="bg-saffron-500 hover:bg-saffron-600">
              Browse Meals
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Cart Items</CardTitle>
                <CardDescription>Review and modify your selected items</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row gap-4 py-4 border-b">
                      <div className="w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {item.healthTags.map((tag) => (
                                <Badge key={tag} variant="outline" className="bg-green-50 text-green-700">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="mt-2 sm:mt-0 text-right">
                            <div className="font-medium">₹{item.price * item.quantity}</div>
                            <div className="text-sm text-muted-foreground">₹{item.price} each</div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center border rounded-md">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-none"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-none"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link href="/food-delivery">Continue Shopping</Link>
                </Button>
                <Button
                  variant="outline"
                  className="text-saffron-600 border-saffron-200"
                  onClick={() => setShowNutrientSummary(!showNutrientSummary)}
                >
                  {showNutrientSummary ? "Hide" : "Show"} Nutrient Summary
                </Button>
              </CardFooter>
            </Card>

            {showNutrientSummary && (
              <Card className="mt-6 border-green-200">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center">
                    <AlertCircle className="mr-2 h-5 w-5 text-green-600" />
                    Nutritional Summary
                  </CardTitle>
                  <CardDescription>Total nutrients from all items in your cart</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-700">{totalNutrients.calories}</div>
                      <div className="text-sm text-muted-foreground">Calories</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-700">{totalNutrients.protein}g</div>
                      <div className="text-sm text-muted-foreground">Protein</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-700">{totalNutrients.carbs}g</div>
                      <div className="text-sm text-muted-foreground">Carbs</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-700">{totalNutrients.fat}g</div>
                      <div className="text-sm text-muted-foreground">Fat</div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-medium mb-2">Daily Value Percentage</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Calories ({totalNutrients.calories})</span>
                          <span>{Math.round((totalNutrients.calories / 2000) * 100)}% of 2000 cal</span>
                        </div>
                        <Progress value={(totalNutrients.calories / 2000) * 100} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Protein ({totalNutrients.protein}g)</span>
                          <span>{Math.round((totalNutrients.protein / 50) * 100)}% of 50g</span>
                        </div>
                        <Progress value={(totalNutrients.protein / 50) * 100} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Carbs ({totalNutrients.carbs}g)</span>
                          <span>{Math.round((totalNutrients.carbs / 300) * 100)}% of 300g</span>
                        </div>
                        <Progress value={(totalNutrients.carbs / 300) * 100} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Fat ({totalNutrients.fat}g)</span>
                          <span>{Math.round((totalNutrients.fat / 65) * 100)}% of 65g</span>
                        </div>
                        <Progress value={(totalNutrients.fat / 65) * 100} className="h-2" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Discount</span>
                      <span className="text-green-600">-₹{discount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Delivery Fee</span>
                      <span>₹{deliveryFee}</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between font-medium text-lg">
                      <span>Total</span>
                      <span>₹{total}</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Coupon Code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="flex-1"
                      />
                      <Button
                        variant="outline"
                        onClick={applyCoupon}
                        disabled={couponApplied}
                        className="border-saffron-200"
                      >
                        Apply
                      </Button>
                    </div>
                    {couponApplied && (
                      <p className="text-sm text-green-600 mt-2">Coupon HEALTH10 applied successfully!</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Delivery Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    defaultValue="standard"
                    value={deliveryOption}
                    onValueChange={setDeliveryOption}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-2 border rounded-lg p-3 cursor-pointer hover:bg-muted/50">
                      <RadioGroupItem value="standard" id="standard" />
                      <Label htmlFor="standard" className="flex-1 cursor-pointer">
                        <div className="font-medium">Standard Delivery</div>
                        <div className="text-sm text-muted-foreground">Delivery within 60-90 minutes</div>
                        <div className="text-sm font-medium">₹30</div>
                      </Label>
                      <Truck className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex items-center space-x-2 border rounded-lg p-3 cursor-pointer hover:bg-muted/50">
                      <RadioGroupItem value="express" id="express" />
                      <Label htmlFor="express" className="flex-1 cursor-pointer">
                        <div className="font-medium">Express Delivery</div>
                        <div className="text-sm text-muted-foreground">Delivery within 30-45 minutes</div>
                        <div className="text-sm font-medium">₹60</div>
                      </Label>
                      <Clock className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </RadioGroup>

                  <div className="mt-4">
                    <Label htmlFor="address" className="mb-2 block">
                      Delivery Address
                    </Label>
                    <div className="flex items-center border rounded-lg p-3 bg-muted/50">
                      <MapPin className="h-5 w-5 text-muted-foreground mr-2 flex-shrink-0" />
                      <div className="text-sm">
                        123 HSR Layout, Sector 3, Bangalore, Karnataka 560102
                        <Button variant="link" className="h-auto p-0 text-xs text-saffron-600">
                          Change
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="card" value={paymentMethod} onValueChange={setPaymentMethod}>
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="card">Card</TabsTrigger>
                      <TabsTrigger value="upi">UPI</TabsTrigger>
                      <TabsTrigger value="cod">COD</TabsTrigger>
                    </TabsList>
                    <TabsContent value="card" className="space-y-4 pt-4">
                      <div className="grid gap-2">
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input id="card-number" placeholder="1234 5678 9012 3456" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" />
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="save-card" />
                        <Label htmlFor="save-card">Save card for future payments</Label>
                      </div>
                    </TabsContent>
                    <TabsContent value="upi" className="space-y-4 pt-4">
                      <div className="grid gap-2">
                        <Label htmlFor="upi-id">UPI ID</Label>
                        <Input id="upi-id" placeholder="name@upi" />
                      </div>
                    </TabsContent>
                    <TabsContent value="cod" className="pt-4">
                      <div className="rounded-lg bg-muted p-4">
                        <div className="flex items-start">
                          <AlertCircle className="mt-0.5 h-5 w-5 text-muted-foreground mr-2" />
                          <div>
                            <p className="font-medium">Cash on Delivery</p>
                            <p className="text-sm text-muted-foreground">
                              Please keep exact change ready for a contactless delivery experience.
                            </p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <Button
                className="w-full bg-saffron-500 hover:bg-saffron-600"
                size="lg"
                onClick={handleCheckout}
                disabled={isProcessing}
              >
                {isProcessing ? "Processing..." : "Place Order"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
