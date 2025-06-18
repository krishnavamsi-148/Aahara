import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-pattern-madhubani border-t">
      <div className="h-1 w-full bg-gradient-to-r from-saffron-500 via-spice-500 to-turmeric-500"></div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-saffron-500 to-spice-500 text-white font-bold text-xl">
                A
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-neem-500 rounded-full flex items-center justify-center text-[10px]">
                  +
                </span>
              </div>
              <span className="font-bold text-xl">Aahara</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Personalized nutrition for holistic well-being, combining traditional Indian wisdom with modern
              nutritional science.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-saffron-100 text-saffron-700 hover:bg-saffron-200 hover:text-saffron-800"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-saffron-100 text-saffron-700 hover:bg-saffron-200 hover:text-saffron-800"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-saffron-100 text-saffron-700 hover:bg-saffron-200 hover:text-saffron-800"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-saffron-100 text-saffron-700 hover:bg-saffron-200 hover:text-saffron-800"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/meal-plans" className="text-muted-foreground hover:text-saffron-600 transition-colors">
                  Meal Plans
                </Link>
              </li>
              <li>
                <Link href="/recipes" className="text-muted-foreground hover:text-saffron-600 transition-colors">
                  Recipes
                </Link>
              </li>
              <li>
                <Link href="/food-delivery" className="text-muted-foreground hover:text-saffron-600 transition-colors">
                  Food Delivery
                </Link>
              </li>
              <li>
                <Link
                  href="/health-challenges"
                  className="text-muted-foreground hover:text-saffron-600 transition-colors"
                >
                  Health Challenges
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-saffron-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-saffron-600 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Health Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/resources/diabetes"
                  className="text-muted-foreground hover:text-saffron-600 transition-colors"
                >
                  Diabetes Management
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/heart-health"
                  className="text-muted-foreground hover:text-saffron-600 transition-colors"
                >
                  Heart Health
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/weight-management"
                  className="text-muted-foreground hover:text-saffron-600 transition-colors"
                >
                  Weight Management
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/ayurveda"
                  className="text-muted-foreground hover:text-saffron-600 transition-colors"
                >
                  Ayurvedic Nutrition
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-saffron-600 transition-colors">
                  Health Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-saffron-600 transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-saffron-600 mr-2 mt-0.5" />
                <span className="text-muted-foreground">
                  Kalasalingam academy of research and education, Madurai, Tamil Nadu, 626126
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-saffron-600 mr-2" />
                <span className="text-muted-foreground">+91 7207326505</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-saffron-600 mr-2" />
                <span className="text-muted-foreground">aahara@gmail.com</span>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-medium mb-2">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <Input placeholder="Your email" className="bg-white" />
                <Button className="bg-saffron-500 hover:bg-saffron-600">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Aahara Health. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-saffron-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-saffron-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-sm text-muted-foreground hover:text-saffron-600 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
