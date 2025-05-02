"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ReaderPreview() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = 3

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <div className="bg-navy-dark rounded-md overflow-hidden shadow-xl">
      <div className="bg-navy-lighter px-6 py-4 flex justify-between items-center border-b border-navy">
        <h3 className="font-bold">The Digital Horizon: Reflections on AI and Humanity</h3>
        <div className="text-sm text-paper/70">Essay • 10 min read</div>
      </div>

      <div className="p-8 md:p-12">
        {currentPage === 1 && (
          <div className="space-y-6">
            <p className="text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-gold first-letter:mr-2 first-letter:float-left">
              The relationship between artificial intelligence and human creativity stands at a fascinating crossroads.
              As we venture further into this digital frontier, we find ourselves both architects and explorers of a
              landscape that continuously transforms beneath our feet.
            </p>
            <p className="leading-relaxed">
              The machines we've created now generate art, compose music, and write prose with increasing
              sophistication. They analyze patterns from human creations and produce works that can, at times, be
              indistinguishable from those made by human hands. This technological marvel raises profound questions
              about the nature of creativity itself.
            </p>
            <p className="leading-relaxed">
              Is creativity merely the recombination of existing ideas in novel ways? If so, AI excels at this through
              its ability to process vast datasets and identify patterns invisible to the human eye. Or is there
              something more—an ineffable spark of consciousness, of lived experience, that infuses human creation with
              meaning beyond pattern recognition?
            </p>
          </div>
        )}

        {currentPage === 2 && (
          <div className="space-y-6">
            <p className="leading-relaxed">
              Perhaps the most interesting development is not how AI might replace human creativity, but how it extends
              it. The collaborative potential between human and machine intelligence offers unprecedented possibilities.
              Artists now use AI as a tool, a collaborator, and sometimes as a mirror reflecting our own creative
              processes back to us in surprising ways.
            </p>
            <p className="leading-relaxed">
              Consider the composer who uses AI to explore musical variations they might never have conceived, or the
              writer who employs machine learning to help craft narratives that branch in unexpected directions. These
              collaborations don't diminish human creativity—they amplify it, pushing us to explore new territories of
              expression.
            </p>
            <blockquote className="border-l-4 border-gold pl-4 italic my-8 text-paper/80">
              "The true potential of AI lies not in its ability to replace human creativity, but in its capacity to
              become a new medium through which human imagination can express itself."
            </blockquote>
            <p className="leading-relaxed">
              This symbiotic relationship suggests a future where the boundaries between human and machine creativity
              become increasingly fluid. Rather than fearing this evolution, we might embrace it as an expansion of our
              creative capabilities.
            </p>
          </div>
        )}

        {currentPage === 3 && (
          <div className="space-y-6">
            <p className="leading-relaxed">
              Yet challenges remain. As AI-generated content becomes more prevalent, questions of authenticity,
              ownership, and meaning take on new dimensions. Who owns the rights to an artwork created through human-AI
              collaboration? How do we attribute value to creative works when the labor involved transforms so
              dramatically?
            </p>
            <p className="leading-relaxed">
              More philosophically, we might ask whether something essential is lost when creative expression becomes
              increasingly mediated by algorithms. Does the knowledge that a poem was written by AI change how we
              experience it? Does it matter if the emotional response it evokes in us remains genuine?
            </p>
            <p className="leading-relaxed">
              As we navigate this digital horizon, perhaps the most important insight is that technology has always
              shaped human creativity, from the invention of writing to photography to digital design tools. AI
              represents not a break from this tradition but its continuation—albeit at an unprecedented pace and scale.
            </p>
            <p className="leading-relaxed">
              The future of creativity lies neither in human nor machine alone, but in the unexplored territory between
              them—a collaborative space where our humanity isn't replaced but reimagined, expanded, and perhaps even
              more deeply understood.
            </p>
          </div>
        )}
      </div>

      <div className="bg-navy-lighter px-6 py-4 flex justify-between items-center border-t border-navy">
        <Button
          variant="ghost"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="text-paper/70 hover:text-paper hover:bg-navy-dark disabled:opacity-50"
        >
          <ChevronLeft className="h-4 w-4 mr-2" /> Previous
        </Button>

        <div className="text-sm text-paper/70">
          Page {currentPage} of {totalPages}
        </div>

        <Button
          variant="ghost"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="text-paper/70 hover:text-paper hover:bg-navy-dark disabled:opacity-50"
        >
          Next <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}
