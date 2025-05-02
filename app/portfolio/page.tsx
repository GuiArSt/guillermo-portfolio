import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import ReaderPreview from "@/components/reader-preview"

export default function Portfolio() {
  const services = [
    {
      title: "AI Software Solutions",
      image: "/images/hero-ai.png",
      excerpt: "Proprietary & open-source AI tools.",
      slug: "ai-software",
    },
    {
      title: "Copywriting",
      image: "/images/hero-copy.png",
      excerpt: "Digital, corporate, scientific copy.",
      slug: "copywriting",
    },
    {
      title: "Graphic Design",
      image: "/images/hero-design.png",
      excerpt: "Infographics, recruiting ads, illustrations.",
      slug: "graphic-design",
    },
    {
      title: "Web Design",
      image: "/images/hero-web.png",
      excerpt: "Portfolios, e-stores, artist sites.",
      slug: "web-design",
    },
  ]

  return (
    <div className="min-h-screen bg-navy text-paper font-mono bg-mystical-geometric">
      {/* Header Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">The Portfolio</h1>
          <div className="h-0.5 w-24 bg-gold mb-8"></div>
          <p className="text-lg md:text-xl text-paper/80 mb-12 leading-relaxed">
            A curated collection of works spanning AI development, content creation, and design. Each piece represents a
            unique solution to a complex problem.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="bg-navy-light py-16 bg-mystical-geometric-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-0.5 w-8 bg-gold"></div>
              <span className="text-gold uppercase text-sm tracking-widest">Services</span>
            </div>
            <h2 className="text-3xl font-bold mb-12">Areas of Expertise</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={`/portfolio/${service.slug}`}
                  className="group block bg-navy-light p-6 rounded-md transition-all duration-300 hover:bg-navy-lighter"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-paper/70 mb-4">{service.excerpt}</p>
                      <span className="text-gold flex items-center text-sm">
                        Explore <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Reader Preview */}
      <div className="bg-navy-light py-16 bg-mystical-geometric-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-0.5 w-8 bg-crimson"></div>
              <span className="text-crimson uppercase text-sm tracking-widest">Publications</span>
            </div>
            <h2 className="text-3xl font-bold mb-8">From the Archives</h2>

            <ReaderPreview />

            <div className="text-center mt-12">
              <Button asChild variant="outline" className="border-paper/30 text-paper hover:bg-navy-lighter">
                <Link href="/publications">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Browse All Publications
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
