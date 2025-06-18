"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import {
  Search,
  ShoppingCart,
  Menu,
  User,
  Heart,
  LogOut,
  Settings,
  Bell,
  ChevronDown,
  MapPin,
  AlertCircle,
} from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [cartCount, setCartCount] = useState(3)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Meal Plans", href: "/meal-plans" },
    { name: "Recipes", href: "/recipes" },
    { name: "Food Delivery", href: "/food-delivery" },
    { name: "Health Challenges", href: "/health-challenges" },
    { name: "Health Tips", href: "/health-tips" },
    { name: "Video Blogs", href: "/video-blogs" },
    { name: "Thali Builder", href: "/thali-builder" },
    { name: "Weekly Health Report", href: "/weekly-health-report" },
    { name: "Emergency Meal Service", href: "/emergency-meal-service" },
    { name: "Nutritionists", href: "/nutritionists" },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="h-1 w-full bg-gradient-to-r from-saffron-500 via-spice-500 to-turmeric-500"></div>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="/" className="flex items-center gap-2 px-2">
                    <span className="font-bold text-xl">Aahara</span>
                  </Link>
                  <Link href="/meal-plans" className="px-2 py-1 hover:text-saffron-600 transition-colors">
                    Meal Plans
                  </Link>
                  <Link href="/recipes" className="px-2 py-1 hover:text-saffron-600 transition-colors">
                    Recipes
                  </Link>
                  <Link href="/food-delivery" className="px-2 py-1 hover:text-saffron-600 transition-colors">
                    Food Delivery
                  </Link>
                  <Link href="/health-challenges" className="px-2 py-1 hover:text-saffron-600 transition-colors">
                    Health Challenges
                  </Link>
                  <Link href="/thali-builder" className="px-2 py-1 hover:text-saffron-600 transition-colors">
                    Thali Builder
                  </Link>
                  <Link href="/weekly-health-report" className="px-2 py-1 hover:text-saffron-600 transition-colors">
                    Health Report
                  </Link>
                  <Link href="/health-tips" className="px-2 py-1 hover:text-saffron-600 transition-colors">
                    Health Tips
                  </Link>
                  <Link href="/emergency-meal-service" className="px-2 py-1 hover:text-saffron-600 transition-colors">
                    Emergency Meals
                  </Link>
                  <Link href="/nutritionists" className="px-2 py-1 hover:text-saffron-600 transition-colors">
                    Nutritionists
                  </Link>
                  <Link href="/profile" className="px-2 py-1 hover:text-saffron-600 transition-colors">
                    My Profile
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-saffron-500 to-spice-500 text-white font-bold text-xl">
                A
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-neem-500 rounded-full flex items-center justify-center text-[10px]">
                  +
                </span>
              </div>
              <span className="font-bold text-xl hidden sm:inline-block">Aahara</span>
            </Link>

            <div className="hidden md:flex ml-8">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">Meal Plans</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-saffron-500 to-spice-500 p-6 no-underline outline-none focus:shadow-md"
                              href="/meal-plans"
                            >
                              <div className="mt-4 mb-2 text-lg font-medium text-white">Personalized Meal Plans</div>
                              <p className="text-sm leading-tight text-white/90">
                                Customized meal plans based on your health conditions, preferences, and goals.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href="/meal-plans?condition=diabetes"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">Diabetes-Friendly</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Low-GI meals designed for blood sugar management
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href="/meal-plans?condition=heart"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">Heart-Healthy</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Low-sodium, heart-friendly meals with essential nutrients
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href="/meal-plans?condition=weight"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">Weight Management</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Calorie-optimized meals to help achieve weight goals
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">Food & Recipes</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href="/recipes"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">Recipes</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Healthy recipes for all meal types
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href="/food-delivery"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">Food Delivery</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Order healthy meals delivered to your door
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href="/thali-builder"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">Thali Builder</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Create your own balanced thali with real-time nutrition tracking
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href="/emergency-meal-service"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">Emergency Meals</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Quick meals for urgent health needs
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">Health & Wellness</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href="/health-tips"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">Health Tips</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Evidence-based health information and articles
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href="/health-challenges"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">Health Challenges</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Join community health improvement challenges
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href="/weekly-health-report"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">Health Reports</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Track your nutrition and health metrics
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href="/nutritionists"
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">Nutritionists</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Connect with certified nutritionists
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/emergency-meal-service" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <span className="flex items-center">
                          <AlertCircle className="mr-1 h-4 w-4 text-red-500" />
                          Emergency Meals
                        </span>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center mr-2">
              <MapPin className="h-4 w-4 text-muted-foreground mr-1" />
              <span className="text-sm text-muted-foreground">Bangalore</span>
              <ChevronDown className="h-3 w-3 text-muted-foreground ml-1" />
            </div>

            <div className="relative hidden md:flex">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search recipes, meals..."
                className="w-[200px] lg:w-[300px] pl-8 rounded-full bg-muted/30 border-none focus-visible:ring-saffron-500"
              />
            </div>

            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-spice-500 text-[10px] font-medium text-white flex items-center justify-center">
                2
              </span>
            </Button>

            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-spice-500 text-[10px] font-medium text-white flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback className="bg-saffron-100 text-saffron-700">PS</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Heart className="mr-2 h-4 w-4" />
                  <Link href="/favorites">Favorites</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  <Link href="/orders">My Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <Link href="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4">
              <Link href="/cart" className="text-sm font-semibold leading-6 text-gray-900 flex items-center">
                <ShoppingCart className="h-5 w-5 mr-1" />
                Cart
              </Link>
              <Link href="/auth/sign-in" className="text-sm font-semibold leading-6 text-gray-900">
                Sign in
              </Link>
              <Link
                href="/auth/sign-up"
                className="text-sm font-semibold leading-6 bg-orange-600 px-3 py-1 rounded-md text-white hover:bg-orange-700 transition-colors"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
