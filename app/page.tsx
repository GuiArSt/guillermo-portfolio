import { Download, Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-grid">
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        {/* CV Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8">
          {/* Left Column - Contact & Skills */}
          <div className="space-y-8">
            <section>
              <h2 className="text-lg font-bold uppercase tracking-wider text-muted-foreground mb-4">Contact</h2>
              <div className="space-y-2">
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <a href="mailto:hello@guillermo-stumpf.com" className="hover:text-primary">
                    hello@guillermo-stumpf.com
                  </a>
                </p>
                <p className="flex items-center">
                  <Github className="h-4 w-4 mr-2" />
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    github.com/guillermo
                  </a>
                </p>
                <p className="flex items-center">
                  <Linkedin className="h-4 w-4 mr-2" />
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    linkedin.com/in/guillermo
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold uppercase tracking-wider text-muted-foreground mb-4">Skills</h2>
              <ul className="space-y-1">
                <li>AI Development & Programming</li>
                <li>AI Content Generation</li>
                <li>AI Expertise & Model Integration</li>
                <li>Data Science & BI</li>
                <li>Software & Design Tools</li>
                <li>Deployment & Platforms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold uppercase tracking-wider text-muted-foreground mb-4">Languages</h2>
              <ul className="space-y-1">
                <li><span className="mr-2">🇪🇸</span> Spanish (Native)</li>
                <li><span className="mr-2">🇩🇪</span> German (Fluent / Second language)</li>
                <li><span className="mr-2">🇬🇧</span> English (Fluent / Second language)</li>
                <li><span className="mr-2">🇫🇷</span> French (Intermediate - B1)</li>
                <li><span className="mr-2">🇷🇺</span> Russian (Elementary - A2)</li>
                <li><span className="mr-2">🇵🇹</span> Portuguese (Basic - A1)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold uppercase tracking-wider text-muted-foreground mb-4">Education</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">B.A., International Relations and Management</h3>
                  <p className="text-sm text-muted-foreground">Ostbayerische Technische Hochschule (OTH), Germany · 2016–2023</p>
                </div>
                <div>
                  <h3 className="font-medium">Diploma, Digital Marketing & Media</h3>
                  <p className="text-sm text-muted-foreground">International School of Business (ISB), Ireland · 2018–2019</p>
                </div>
                <div>
                  <h3 className="font-medium">Associate's Degree, Wholesale & Foreign Trade</h3>
                  <p className="text-sm text-muted-foreground">Dual Program w/ Bayer Boliviana Ltda., Bolivia/Germany · 2014–2015</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Experience */}
          <div className="md:col-span-2">
            <section>
              <h2 className="text-lg font-bold uppercase tracking-wider text-muted-foreground mb-6">Experience</h2>

              <div className="space-y-8">
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="text-xl font-bold">AI Solutions Engineer</h3>
                  <p className="text-muted-foreground mb-2">Jobilla · Nov 2024-Present</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Engineered AI image-generation pipeline saving €10k+ annually.</li>
                    <li>Developed Python job-classification tools (99% accuracy).</li>
                    <li>Built market-intelligence tools (web-scraping + AI analysis).</li>
                    <li>Architected AI content-evaluation framework.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-muted pl-4">
                  <h3 className="text-xl font-bold">Gen AI & Content Specialist</h3>
                  <p className="text-muted-foreground mb-2">Jobilla · Aug 2023-Nov 2024</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Implemented AI-first creative workflow (Visuals, Chatbot).</li>
                    <li>Created multilingual content strategies (6 languages).</li>
                    <li>Achieved 90% AI utilization in new campaign content gen.</li>
                    <li>Trained C-suite & teams in AI functionality.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-muted pl-4">
                  <h3 className="text-xl font-bold">AI Consultant</h3>
                  <p className="text-muted-foreground mb-2">Ouroborous Creative Collective (Freelance) · Jan 2020-Present</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Crafted multilingual digital toolkits for international NGO (7+ languages).</li>
                    <li>Delivered end-to-end websites and storytelling copy for diverse clients.</li>
                    <li>Open-sourced a Job Application Intelligence web app.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mt-10">
              <h2 className="text-lg font-bold uppercase tracking-wider text-muted-foreground mb-6">
                Key Achievements
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="border border-muted rounded-md p-4 text-center">
                  <p className="text-2xl font-bold text-primary mb-1">€10,000+</p>
                  <p className="text-sm">annual cost saved (AI pipeline)</p>
                </div>
                <div className="border border-muted rounded-md p-4 text-center">
                  <p className="text-2xl font-bold text-primary mb-1">99%</p>
                  <p className="text-sm">accuracy (AI job classification)</p>
                </div>
                <div className="border border-muted rounded-md p-4 text-center">
                  <p className="text-2xl font-bold text-primary mb-1">90%</p>
                  <p className="text-sm">AI utilisation (content gen)</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Download CV Button */}
        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <a href="/cv-guillermo-stumpf.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download CV as PDF
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
