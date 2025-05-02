"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

// Define interfaces for type safety
interface PublicationContent {
  text: string
  isFirstParagraph?: boolean
}

interface Publication {
  title: string
  subtitle: string
  image: string
  category: string
  content: PublicationContent[]
}

export default function Publications() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [showReader, setShowReader] = useState(false)
  const [selectedPublication, setSelectedPublication] = useState<Publication | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const categories = ["All", "Poems", "Essays", "Reflections", "Spanish", "Portfolio", "Other"]

  const publications: Publication[] = [
    {
      title: "Beacon of Knowledge",
      subtitle: "August 7, 2024",
      image: "/images/pub-placeholder-poem.png",
      category: "Poems",
      content: [
        { text: "Dark was the tower, Bright the light it gave...", isFirstParagraph: true },
        { text: "(Full content needs to be added)" },
      ],
    },
    {
      title: "On Masculinity - Lessons from a Tree in Africa",
      subtitle: "August 7, 2024",
      image: "/images/pub-placeholder-essay.png",
      category: "Essays",
      content: [
        { text: "Adorning the arid southern landscape of the ancient continent, you can find a peculiar tree...", isFirstParagraph: true },
        { text: "(Full content needs to be added)" },
      ],
    },
    {
      title: "Songs of the Cube",
      subtitle: "August 7, 2024",
      image: "/images/pub-placeholder-poem-2.png",
      category: "Poems",
      content: [
        { text: "A extract of another time. Found in the last book of those who were free...", isFirstParagraph: true },
        { text: "(Full content needs to be added)" },
      ],
    },
    {
      title: "A poem for my country",
      subtitle: "August 6, 2024",
      image: "/images/pub-placeholder-spanish.png",
      category: "Spanish",
      content: [
        { text: "Largos son los días que pasé lejos de ti...", isFirstParagraph: true },
        { text: "(Full content needs to be added)" },
      ],
    },
    {
      title: "Friendship, dreams and ramblings",
      subtitle: "June 15, 2021",
      image: "/images/pub-placeholder-reflection.png",
      category: "Reflections",
      content: [
        { text: "The older you get, the harder it is to keep track of the lives of our friends and loved ones...", isFirstParagraph: true },
        { text: "(Full content needs to be added)" },
      ],
    },
    {
      title: "Life, Art, and Perfection",
      subtitle: "May 26, 2021",
      image: "/images/pub-placeholder-reflection-2.png",
      category: "Reflections",
      content: [
        { text: "Days will come when the dark clouds cover the view...", isFirstParagraph: true },
        { text: "(Full content needs to be added)" },
      ],
    },
    {
      title: "Diatribe with myself",
      subtitle: "December 17, 2020",
      image: "/images/pub-placeholder-essay-2.png",
      category: "Essays",
      content: [
        { text: "For once I had a genius idea today...", isFirstParagraph: true },
        { text: "(Full content needs to be added)" },
      ],
    },
    {
      title: "Acerca del aborto",
      subtitle: "December 11, 2020",
      image: "/images/pub-placeholder-spanish-2.png",
      category: "Spanish",
      content: [
        { text: "¡Que sea legal!...", isFirstParagraph: true },
        { text: "(Full content needs to be added)" },
      ],
    },
    {
      title: "About Power",
      subtitle: "December 5, 2020",
      image: "/images/pub-placeholder-essay-3.png",
      category: "Essays",
      content: [
        { text: "What is then truly, the power of the written law?...", isFirstParagraph: true },
        { text: "(Full content needs to be added)" },
      ],
    },
    {
      title: "Reflexiones del fondo de la primera botella",
      subtitle: "November 19, 2020",
      image: "/images/pub-placeholder-spanish-3.png",
      category: "Spanish",
      content: [
        { text: "Un deseo reprimido, o quizas una vocacion no atendida...", isFirstParagraph: true },
        { text: "(Full content needs to be added)" },
      ],
    },
    {
      title: "Bitácora de una Pandemia – I",
      subtitle: "November 19, 2020",
      image: "/images/pub-placeholder-spanish-4.png",
      category: "Spanish",
      content: [
        { text: "22.03.2020 Dia 2 de la cuarentena...", isFirstParagraph: true },
        { text: "(Full content needs to be added)" },
      ],
    },
    {
      title: "Bitácora de una Pandemia – II",
      subtitle: "November 19, 2020",
      image: "/images/pub-placeholder-spanish-5.png",
      category: "Spanish",
      content: [
        { text: "Dudas, preguntas y más pesquisas...", isFirstParagraph: true },
        { text: "(Full content needs to be added)" },
      ],
    },
    {
      title: "Simultanium",
      subtitle: "November 19, 2020",
      image: "/images/pub-placeholder-poem-3.png",
      category: "Poems",
      content: [
        { text: "A broken wing A burnt out smell...", isFirstParagraph: true },
        { text: "(Full content needs to be added)" },
      ],
    },
    {
      title: "Writing Portfolio Overview",
      subtitle: "Various Examples",
      image: "/images/pub-placeholder-portfolio.png",
      category: "Portfolio",
      content: [
        { text: "Academic/Creative, Business/Marketing, Academic/Analytical examples...", isFirstParagraph: true },
        { text: "(Full content needs to be added)" },
      ],
    },
  ]

  // Filter publications based on active category
  const filteredPublications =
    activeCategory === "All" ? publications : publications.filter((pub) => pub.category === activeCategory)

  const openReader = (publication: Publication) => {
    setSelectedPublication(publication)
    setCurrentPage(1)
    setShowReader(true)
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (selectedPublication && currentPage < selectedPublication.content.length) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <div className="min-h-screen bg-navy text-paper font-mono bg-mystical-organic">
      {/* Hero Section with Text, Image and Filters */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">The Archives</h1>
          <div className="h-0.5 w-24 bg-crimson mb-8"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <p className="text-lg md:text-xl text-paper/80 mb-8 leading-relaxed">
                An open gallery of creative works, thoughts, and experiments across various formats and themes. Each
                piece represents a unique perspective on technology, creativity, and the human experience.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-md mb-8">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-paper/50" />
                <Input
                  placeholder="Search publications..."
                  className="pl-10 bg-navy-dark border-navy-lighter text-paper placeholder:text-paper/30 focus:border-crimson/50 focus:ring-crimson/30"
                />
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category
                        ? "bg-crimson text-paper"
                        : "bg-navy-dark hover:bg-navy-lighter text-paper/70"
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative h-64 lg:h-auto rounded-xl overflow-hidden">
              <Image
                src="/images/publications-hero.png"
                alt="Publications showcase"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Publications Grid */}
      <div className="bg-navy-light py-16 bg-mystical-organic-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <div className="h-0.5 w-8 bg-gold"></div>
              <span className="text-gold uppercase text-sm tracking-widest">Collection</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPublications.map((pub, index) => (
                <div key={index} className="group cursor-pointer" onClick={() => openReader(pub)}>
                  <div className="relative aspect-square overflow-hidden rounded-xl mb-4 shadow-sm group-hover:shadow-md transition-all duration-300">
                    <Image
                      src={pub.image || "/placeholder.svg"}
                      alt={pub.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      {pub.subtitle && (
                        <p className="text-paper text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          {pub.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-navy rounded-full text-xs text-paper/70 mb-2">
                      {pub.category}
                    </span>
                    <h3 className="text-xl font-semibold group-hover:text-crimson transition-colors">{pub.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Reader Modal */}
      {showReader && selectedPublication && (
        <div className="fixed inset-0 bg-navy-dark/90 flex items-center justify-center z-50 p-4">
          <div className="max-w-4xl w-full max-h-[90vh] overflow-auto bg-navy-light rounded-lg shadow-2xl">
            <div className="bg-navy-lighter px-6 py-4 flex justify-between items-center border-b border-navy">
              <h3 className="font-bold">{selectedPublication.title}</h3>
              <button
                onClick={() => setShowReader(false)}
                className="text-paper/70 hover:text-paper p-1 rounded-full hover:bg-navy-dark"
              >
                ✕
              </button>
            </div>

            <div className="p-8 md:p-12">
              {selectedPublication.content && selectedPublication.content[currentPage - 1] && (
                <div className="space-y-6">
                  {selectedPublication.content[currentPage - 1].isFirstParagraph ? (
                    <p className="text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-crimson first-letter:mr-2 first-letter:float-left">
                      {selectedPublication.content[currentPage - 1].text}
                    </p>
                  ) : (
                    <p className="leading-relaxed">{selectedPublication.content[currentPage - 1].text}</p>
                  )}
                </div>
              )}
            </div>

            <div className="bg-navy-lighter px-6 py-4 flex justify-between items-center border-t border-navy">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="text-paper/70 hover:text-paper hover:bg-navy-dark disabled:opacity-50 px-4 py-2 rounded-md flex items-center"
              >
                <ChevronLeft className="h-4 w-4 mr-2" /> Previous
              </button>

              <div className="text-sm text-paper/70">
                Page {currentPage} of {selectedPublication.content ? selectedPublication.content.length : 1}
              </div>

              <button
                onClick={handleNextPage}
                disabled={!selectedPublication.content || currentPage === selectedPublication.content.length}
                className="text-paper/70 hover:text-paper hover:bg-navy-dark disabled:opacity-50 px-4 py-2 rounded-md flex items-center"
              >
                Next <ChevronRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
