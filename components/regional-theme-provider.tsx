"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Region = "andhra" | "tamil" | "kerala" | "bengal" | "gujarat" | "punjab" | "default"

interface RegionalThemeContextType {
  region: Region
  setRegion: (region: Region) => void
  themeClass: string
  regionName: string
  localDishes: string[]
}

const RegionalThemeContext = createContext<RegionalThemeContextType>({
  region: "default",
  setRegion: () => {},
  themeClass: "",
  regionName: "",
  localDishes: [],
})

export const useRegionalTheme = () => useContext(RegionalThemeContext)

interface RegionalThemeProviderProps {
  children: ReactNode
  defaultRegion?: Region
}

export function RegionalThemeProvider({ children, defaultRegion = "default" }: RegionalThemeProviderProps) {
  const [region, setRegion] = useState<Region>(defaultRegion)

  const getThemeClass = (region: Region): string => {
    switch (region) {
      case "andhra":
        return "bg-pattern-kalamkari"
      case "tamil":
        return "bg-pattern-kolam"
      case "kerala":
        return "bg-texture-banana-leaf"
      case "bengal":
        return "bg-texture-mud-wall"
      case "gujarat":
        return "bg-pattern-phulkari"
      case "punjab":
        return "bg-gradient-pongal"
      default:
        return "bg-sweetlime-50"
    }
  }

  const getRegionName = (region: Region): string => {
    switch (region) {
      case "andhra":
        return "Andhra Pradesh"
      case "tamil":
        return "Tamil Nadu"
      case "kerala":
        return "Kerala"
      case "bengal":
        return "Bengal"
      case "gujarat":
        return "Gujarat"
      case "punjab":
        return "Punjab"
      default:
        return "All India"
    }
  }

  const getLocalDishes = (region: Region): string[] => {
    switch (region) {
      case "andhra":
        return ["Pulihora", "Gutti Vankaya", "Pesarattu", "Gongura Pachadi"]
      case "tamil":
        return ["Rasam", "Pongal", "Idli", "Dosa", "Sambar"]
      case "kerala":
        return ["Aviyal", "Appam", "Puttu", "Kadala Curry", "Malabar Biryani"]
      case "bengal":
        return ["Shorshe Ilish", "Mishti Doi", "Cholar Dal", "Aloo Posto"]
      case "gujarat":
        return ["Thepla", "Dhokla", "Khandvi", "Undhiyu", "Fafda"]
      case "punjab":
        return ["Rajma", "Makki di Roti", "Sarson da Saag", "Chole Bhature"]
      default:
        return ["Khichdi", "Dal", "Roti", "Sabzi", "Chawal"]
    }
  }

  return (
    <RegionalThemeContext.Provider
      value={{
        region,
        setRegion,
        themeClass: getThemeClass(region),
        regionName: getRegionName(region),
        localDishes: getLocalDishes(region),
      }}
    >
      {children}
    </RegionalThemeContext.Provider>
  )
}
