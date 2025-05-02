"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function Timeline() {
  const [activeEvent, setActiveEvent] = useState(0)

  const timelineEvents = [
    {
      year: 2024,
      title: "AI Solutions Engineer",
      company: "Jobilla",
      period: "Nov 2024-Present",
      description:
        "Developing proprietary AI tools for recruitment, increasing candidate matching accuracy by 35% and reducing manual screening time by 60%.",
      image: "/images/timeline-jobilla.png",
    },
    {
      year: 2023,
      title: "Gen AI & Content Specialist",
      company: "Freelance",
      period: "2023-2024",
      description:
        "Created AI-powered content for 15+ clients and developed custom GPT solutions for businesses across various industries.",
      image: "/images/timeline-freelance.png",
    },
    {
      year: 2022,
      title: "AI Consultant",
      company: "Tech Solutions Inc.",
      period: "2022-2023",
      description: "Advised on AI implementation strategies and trained teams on effective AI utilization.",
      image: "/images/timeline-consultant.png",
    },
    {
      year: 2020,
      title: "M.A. in Digital Media",
      company: "University of Technology",
      period: "2018-2020",
      description:
        "Specialized in AI applications for digital media. Thesis on 'Generative AI in Creative Industries'.",
      image: "/images/timeline-masters.png",
    },
    {
      year: 2018,
      title: "B.A. in Communications",
      company: "State University",
      period: "2014-2018",
      description: "Graduated with honors. Focus on digital communications and emerging technologies.",
      image: "/images/timeline-bachelors.png",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Timeline Dots */}
      <div className="relative py-4 overflow-x-auto hide-scrollbar">
        <div className="absolute left-0 right-0 h-0.5 top-1/2 transform -translate-y-1/2 bg-navy-dark" />

        <div className="relative flex justify-between min-w-max px-4">
          {timelineEvents.map((event, index) => (
            <button
              key={index}
              className="flex flex-col items-center mx-8 first:ml-0 last:mr-0"
              onClick={() => setActiveEvent(index)}
            >
              <div
                className={`w-6 h-6 rounded-full border-2 transition-colors ${
                  activeEvent === index
                    ? "bg-gold border-gold"
                    : "bg-navy-lighter border-navy-dark hover:border-gold/50"
                }`}
              />
              <div
                className={`mt-2 text-sm font-medium transition-colors ${
                  activeEvent === index ? "text-gold" : "text-paper/70"
                }`}
              >
                {event.year}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Event Details */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeEvent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-navy-dark rounded-xl overflow-hidden shadow-md border border-navy"
        >
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="relative h-48 md:h-full">
              <Image
                src={timelineEvents[activeEvent].image || "/placeholder.svg"}
                alt={timelineEvents[activeEvent].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 md:col-span-2">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-paper">{timelineEvents[activeEvent].title}</h3>
                <span className="text-sm text-paper/70">{timelineEvents[activeEvent].period}</span>
              </div>
              <p className="text-gold mb-4">{timelineEvents[activeEvent].company}</p>
              <p className="text-paper/90 leading-relaxed">{timelineEvents[activeEvent].description}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
