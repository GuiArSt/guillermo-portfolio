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
                  {/* Updated Bio Paragraph 1 from CV */}
                  As an AI Solutions Engineer at Jobilla, I develop proprietary AI tools and systems that revolutionize the recruitment process. My background combines technical expertise in AI development and programming with creative skills in content generation, copywriting, and design. I focus on building solutions that drive efficiency, reduce costs, and deliver measurable results, such as engineering an image pipeline saving over €10,000 annually and developing job classification tools with 99% accuracy.
                </p>
                <p className="text-lg mb-6 text-paper/90">
                  {/* Updated Bio Paragraph 2 from CV */}
                  With a foundation in International Relations and a multilingual skillset (fluent in Spanish, German, English), I bridge technical complexities with strategic business needs. I'm adept at translating complex AI concepts for diverse teams and have experience leading AI adoption and training initiatives. I thrive on leveraging technology to solve problems and create compelling digital experiences, always aiming to deliver solutions that are both innovative and impactful.
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
            {/* Updated Skills Section from CV.md */}
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
                    <SkillTag name="Text: LLM based content generation (Expert)" />
                  </div>
                </div>
                 {/* AI Expertise & Model Integration */}
                <div className="bg-navy-light p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">AI Expertise & Model Integration</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillTag name="AI-Agnostic Logic Integration" />
                    <SkillTag name="Top AI Platforms (Nebius, OpenAI, Vercel AI SDK)" />
                    <SkillTag name="Structured Output Design" />
                    <SkillTag name="Agentic Tooling Frameworks" />
                    <SkillTag name="MCP Concepts & Custom Tool Integration" />
                    <SkillTag name="Model Exp: OpenAI, Anthropic, Gemini, DeepSeek, Mistral, Sonar" />
                  </div>
                </div>
                 {/* Data Science & BI Tools */}
                <div className="bg-navy-light p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Data Science & BI Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillTag name="SQL Querying (Apprentice)" />
                    <SkillTag name="Data Visualization & Metabase (Professional)" />
                    <SkillTag name="Datascience Insights (Apprentice)" />
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
                {/* Removed old hardcoded skills */}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
