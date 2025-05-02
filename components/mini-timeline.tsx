"use client"

import { motion } from "framer-motion"

export default function MiniTimeline() {
  const timelineEvents = [
    { year: 2025, label: "Portfolio Launch" },
    { year: 2024, label: "AI Solutions Engineer at Jobilla" },
    { year: 2022, label: "AI Consultant" },
    { year: 2020, label: "M.A. in Digital Media" },
    { year: 2018, label: "B.A. in Communications" },
  ]

  return (
    <div className="relative py-8">
      {/* Line */}
      <div className="absolute left-0 right-0 h-0.5 top-1/2 transform -translate-y-1/2 bg-navy-dark" />

      {/* Events */}
      <div className="relative flex justify-between">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="w-4 h-4 rounded-full bg-gold mb-2" />
            <div className="text-sm font-medium text-paper">{event.year}</div>
            <div className="text-xs text-paper/80 text-center max-w-[100px]">{event.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
