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
      company: "Jobilla DACH",
      period: "Nov 2024-Present",
      description:
        "Engineered AI image-generation pipeline saving €10k+ annually. Developed Python job-classification tools (99% accuracy). Built market-intelligence tools combining web-scraping with AI analysis. Architected content-evaluation framework with AI-driven subjective taxonomy.",
      image: "/images/timeline-jobilla-ai.png",
    },
    {
      year: 2023,
      title: "Gen AI & Content Specialist",
      company: "Jobilla DACH",
      period: "Aug 2023-Nov 2024",
      description:
        "Reshaped creative pipeline with AI-first workflow (Flux/Midjourney/Imagen 3). Created multilingual content strategies (6 languages). Achieved 90% AI utilization in new campaigns. Trained C-suite and teams in AI functionality.",
      image: "/images/timeline-jobilla-content.png",
    },
    {
      year: 2022,
      title: "Graphic Designer",
      company: "AMZ-Marketing.de",
      period: "Feb 2022-Sep 2022",
      description: "Designed conversion-focused infographics for B2B and B2C Amazon products. Produced graphics daily in Canva and Adobe Photoshop, meeting tight launch schedules while ensuring Amazon compliance.",
      image: "/images/timeline-amz.png",
    },
    {
      year: 2020,
      title: "AI Consultant & Service Manager",
      company: "Ouroborous Creative & Guacamole GmbH",
      period: "2020-Present & 2017-2023",
      description:
        "Built multilingual digital toolkits for international NGO (7+ languages). Open-sourced Job Application Intelligence web app. Managed restaurant operations while developing websites and brand presence.",
      image: "/images/timeline-consultant.png",
    },
    {
      year: 2020,
      title: "International HR Working Student",
      company: "Maschinenfabrik Reinhausen GmbH",
      period: "Feb 2020-Apr 2021",
      description: "Managed employee information for international subsidiaries. Researched visa requirements and working conditions across multiple countries. Supported COVID-19 safety implementation.",
      image: "/images/timeline-reinhausen.png",
    },
    {
      year: 2018,
      title: "Junior Business Developer",
      company: "eDreams ODIGEO",
      period: "Mar 2018-Aug 2018",
      description: "Utilized Salesforce for hotel lead management. Led geolocation project improving database accuracy across EMEA & APAC. Supported CRM processes and cross-regional market research.",
      image: "/images/timeline-edreams.png",
    },
    {
      year: 2016,
      title: "Bachelor's Studies Begin",
      company: "OTH Regensburg",
      period: "2016-2023",
      description:
        "B.A. International Relations and Management. Researched Big Data impact on German SMEs and early AI applications for corporate consultancy. Active in international student programs.",
      image: "/images/timeline-oth.png",
    },
    {
      year: 2014,
      title: "International Trade Apprentice",
      company: "Bayer Boliviana Ltda.",
      period: "Jan 2014-Nov 2015",
      description: "Administered customer data in SAP ERP for agrochemical products. Handled import documentation and regulatory compliance. Rotated through Marketing, Controlling, and Sales Support.",
      image: "/images/timeline-bayer.png",
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
