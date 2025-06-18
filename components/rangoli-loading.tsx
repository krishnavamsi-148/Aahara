"use client"

import { motion } from "framer-motion"

interface RangoliLoadingProps {
  size?: "sm" | "md" | "lg"
  color?: string
}

export function RangoliLoading({ size = "md", color = "#F4C430" }: RangoliLoadingProps) {
  const getSize = () => {
    switch (size) {
      case "sm":
        return { width: 60, height: 60 }
      case "lg":
        return { width: 120, height: 120 }
      case "md":
      default:
        return { width: 80, height: 80 }
    }
  }

  const dimensions = getSize()

  return (
    <div className="flex items-center justify-center">
      <motion.svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox="0 0 100 100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Outer circle */}
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke={color}
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />

        {/* Kolam pattern - dots */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * Math.PI) / 4
          const x = 50 + 35 * Math.cos(angle)
          const y = 50 + 35 * Math.sin(angle)
          return (
            <motion.circle
              key={`dot-${i}`}
              cx={x}
              cy={y}
              r="3"
              fill={color}
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            />
          )
        })}

        {/* Inner kolam pattern */}
        <motion.path
          d="M 50 20 C 70 30, 70 70, 50 80 C 30 70, 30 30, 50 20"
          fill="none"
          stroke={color}
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />

        <motion.path
          d="M 20 50 C 30 30, 70 30, 80 50 C 70 70, 30 70, 20 50"
          fill="none"
          stroke={color}
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.5 }}
        />

        {/* Center flower */}
        <motion.circle
          cx="50"
          cy="50"
          r="8"
          fill={color}
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0.8, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />

        {/* Petals */}
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i * Math.PI) / 3
          const x1 = 50 + 15 * Math.cos(angle)
          const y1 = 50 + 15 * Math.sin(angle)
          const x2 = 50 + 25 * Math.cos(angle)
          const y2 = 50 + 25 * Math.sin(angle)
          return (
            <motion.line
              key={`petal-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={color}
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: i * 0.1,
              }}
            />
          )
        })}
      </motion.svg>
    </div>
  )
}
