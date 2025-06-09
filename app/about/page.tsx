import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import SkillTag from "@/components/skill-tag"
import Timeline from "@/components/timeline"

export default function About() {
  const skillCategories = [
    {
      name: "Programming",
      skills: ["Python", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "HTML/CSS"],
    },
    {
      name: "AI Tools",
      skills: ["GPT-4", "Claude", "Midjourney", "DALL-E", "Stable Diffusion", "Hugging Face", "LangChain"],
    },
    {
      name: "Data & BI",
      skills: ["SQL", "Power BI", "Tableau", "Excel", "Data Analysis", "Data Visualization"],
    },
    {
      name: "Design",
      skills: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "UI/UX", "Responsive Design"],
    },
    {
      name: "Deployment",
      skills: ["Vercel", "Netlify", "GitHub", "CI/CD", "Docker", "AWS"],
    },
  ]

  return (
    <div className="min-h-screen bg-navy text-paper font-mono">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">About Me</h1>
          <div className="h-0.5 w-24 bg-gold mb-8"></div>

          {/* Bio Section */}
          <section className="mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3 aspect-square relative rounded-xl overflow-hidden">
                <Image src="/images/profile-photo.jpg" alt="Guillermo A. Stumpf" fill className="object-cover" />
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-lg mb-6 text-paper/90">
                  As an AI Solutions Engineer at Jobilla DACH, I've engineered cutting-edge AI systems that deliver measurable business impact. I eliminated over €10,000 in annual costs through an AI image-generation pipeline, developed Python job-classification tools with 99% accuracy, and architected the first systematic content-quality assessment framework for social recruiting. My expertise spans AI development, prompt engineering, data science, and creative workflow optimization across multilingual environments.
                </p>
                <p className="text-lg mb-6 text-paper/90">
                  With a foundation in International Relations and Management from OTH Germany and multilingual fluency (Spanish, German, English), I bridge technical innovation with strategic business impact. I've successfully led AI adoption initiatives, trained C-suite executives, and transformed content creation workflows to achieve 90% AI utilization. My approach combines deep technical knowledge with creative problem-solving, whether building market-intelligence tools, developing multilingual digital toolkits, or open-sourcing applications that help others advance their careers.
                </p>
                <Button asChild className="bg-gold hover:bg-gold/90 text-navy border-none">
                  <a href="/cv-guillermo-stumpf.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Interactive Timeline */}
          <section className="mb-16 bg-navy-light p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Career Timeline</h2>
            <Timeline />
          </section>

          {/* Extended Skills Grid */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Skills</h2>
            <div className="space-y-8">
               {/* AI Development & Programming */}
               <div className="bg-navy-light p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">AI Development & Programming</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillTag name="Python (Apprentice)" />
                    <SkillTag name="Next.js (Apprentice)" />
                    <SkillTag name="Laravel (Apprentice)" />
                    <SkillTag name="TypeScript w/ Node.js (Apprentice)" />
                    <SkillTag name="HTML & CSS (Apprentice)" />
                  </div>
                </div>
                {/* AI Content Generation */}
                <div className="bg-navy-light p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">AI Content Generation</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillTag name="Image: Midjourney, Magnific, Imagen 3 (Expert)" />
                    <SkillTag name="Video: Runway, Kling, Sora (Apprentice)" />
                    <SkillTag name="Music: Suno (Apprentice)" />
                    <SkillTag name="Avatar Creation: HeyGen (Apprentice)" />
                    <SkillTag name="Text: LLM Content Generation (Expert)" />
                  </div>
                </div>
                 {/* AI Expertise & Model Integration */}
                <div className="bg-navy-light p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">AI Expertise & Model Integration</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillTag name="AI-Agnostic Logic Integration" />
                    <SkillTag name="Nebius, OpenAI, Vercel AI SDK" />
                    <SkillTag name="Structured Output Design" />
                    <SkillTag name="Agentic Tooling Frameworks" />
                    <SkillTag name="MCP & Custom Tool Integration" />
                    <SkillTag name="OpenAI, Anthropic, Gemini, DeepSeek, Mistral, Sonar" />
                  </div>
                </div>
                 {/* Data Science & BI Tools */}
                <div className="bg-navy-light p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Data Science & BI Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillTag name="SQL Querying (Apprentice)" />
                    <SkillTag name="Data Visualization & Metabase (Professional)" />
                    <SkillTag name="Data Science Insights (Apprentice)" />
                  </div>
                </div>
                 {/* Software & Design Tools */}
                 <div className="bg-navy-light p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Software & Design Tools</h3>
                  <div className="flex flex-wrap gap-2">
                     <SkillTag name="Canva (Professional)" />
                     <SkillTag name="Cursor (Professional)" />
                     <SkillTag name="Adobe Photoshop (Apprentice)" />
                     <SkillTag name="Visual Studio Code (Professional)" />
                     <SkillTag name="Microsoft Office Suite (Professional)" />
                  </div>
                </div>
                 {/* Deployment & Platforms */}
                <div className="bg-navy-light p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Deployment & Platforms</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillTag name="Vercel" />
                    <SkillTag name="Fly (Docker-based)" />
                    <SkillTag name="GitHub Static Pages" />
                  </div>
                </div>
                 {/* Collaboration Tools */}
                <div className="bg-navy-light p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Collaboration Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillTag name="Slack, Zoom, Google Meet" />
                    <SkillTag name="Trello, Asana" />
                    <SkillTag name="Meta Business Suite" />
                  </div>
                </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
