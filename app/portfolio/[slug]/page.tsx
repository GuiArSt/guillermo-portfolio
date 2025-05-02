import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params

  // For now, we only have one detailed project page
  if (slug !== "ai-software") {
    // For other slugs, we'll just show a placeholder page
    return (
      <div className="container mx-auto px-4 py-12">
        <Link href="/portfolio" className="flex items-center text-muted-foreground mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Link>

        <h1 className="text-4xl font-bold mb-6 capitalize">{slug.replace(/-/g, " ")}</h1>

        <div className="bg-muted p-12 rounded-xl text-center">
          <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
          <p className="text-muted-foreground mb-6">
            Detailed project information for this category will be available soon.
          </p>
          <Button asChild>
            <Link href="/commission">Commission a Project</Link>
          </Button>
        </div>
      </div>
    )
  }

  // AI Software detailed page with Job Seeker Intelligence project
  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/portfolio" className="flex items-center text-muted-foreground mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Portfolio
      </Link>

      <h1 className="text-4xl font-bold mb-6">AI Software Solutions</h1>
      <p className="text-xl text-muted-foreground mb-12">
        Proprietary & open-source AI tools for businesses and individuals.
      </p>

      <div className="bg-card rounded-xl overflow-hidden shadow-lg border mb-12">
        <div className="relative h-64 w-full">
          <Image
            src="/images/job-seeker-intelligence.png"
            alt="Job Seeker Intelligence"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">Job Seeker Intelligence</h2>
          <p className="text-muted-foreground mb-4">
            An AI-powered tool that helps recruiters match job seekers with the right opportunities.
          </p>
          <div className="space-y-4 mb-6">
            <h3 className="font-semibold">Key Features:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Automated resume parsing and skill extraction</li>
              <li>Intelligent matching algorithm based on skills and experience</li>
              <li>Personalized job recommendations for candidates</li>
              <li>Analytics dashboard for recruitment teams</li>
            </ul>
          </div>
          <div className="flex justify-end">
            <Button asChild>
              <Link href="/commission">Request Similar Solution</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
