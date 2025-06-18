"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-sweetlime-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, rotate: 0, opacity: 0 }}
          animate={{ scale: 1, rotate: 360, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-40 h-40 mb-8"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Outer Mandala */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1.5 }}
            >
              <circle cx="100" cy="100" r="80" fill="none" stroke="#F4C430" strokeWidth="2" />
              {Array.from({ length: 16 }).map((_, i) => (
                <motion.path
                  key={`petal-${i}`}
                  d={`M 100 20 Q ${100 + 30 * Math.cos((i * Math.PI) / 8)} ${
                    100 + 30 * Math.sin((i * Math.PI) / 8)
                  } 100 ${100 + 80}`}
                  fill="none"
                  stroke="#B71C1C"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.3 + i * 0.05, duration: 1 }}
                />
              ))}
            </motion.g>

            {/* Middle Mandala */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
            >
              <circle cx="100" cy="100" r="50" fill="none" stroke="#2E7D32" strokeWidth="2" />
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.path
                  key={`inner-petal-${i}`}
                  d={`M 100 50 Q ${100 + 20 * Math.cos((i * Math.PI) / 6)} ${
                    100 + 20 * Math.sin((i * Math.PI) / 6)
                  } 100 ${100 + 50}`}
                  fill="none"
                  stroke="#26418F"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.6 + i * 0.05, duration: 1 }}
                />
              ))}
            </motion.g>

            {/* Inner Mandala */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1.5 }}
            >
              <circle cx="100" cy="100" r="30" fill="#FFF3D9" stroke="#A97444" strokeWidth="2" />
              <motion.text
                x="100"
                y="105"
                textAnchor="middle"
                fill="#996515"
                fontFamily="serif"
                fontSize="24"
                fontWeight="bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                आहार
              </motion.text>
            </motion.g>
          </svg>
        </motion.div>
        <motion.h1
          className="text-3xl font-bold text-tandoori-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Aahara
        </motion.h1>
        <motion.p
          className="text-lg text-jaggery-600 mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          Nutrition for Holistic Well-being
        </motion.p>
      </div>
    </motion.div>
  )
}
