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
                <li>AI Model Integration</li>
                <li>Data Science & BI</li>
                <li>Software & Design Tools</li>
                <li>Deployment & Platforms</li>
                <li>Collaboration & Communication</li>
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
                  <p className="text-muted-foreground mb-2">Jobilla DACH · Nov 2024-Present</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Eliminated <strong>€10,000+</strong> annual Shutterstock costs by engineering AI image-generation pipeline integrating Midjourney and Magnific upscaler.</li>
                    <li>Developed Python job-classification tools using Gemini API with <strong>99% accuracy</strong>, cutting processing from hours to minutes.</li>
                    <li>Built market-intelligence tools combining BeautifulSoup web-scraping with AI analysis for real-time competitor insights.</li>
                    <li>Architected content-evaluation framework with AI-driven subjective taxonomy — first systematic approach to content-quality assessment for social recruiting.</li>
                    <li>Implemented Laravel prototype enabling AI logic to securely write to database.</li>
                    <li>Co-led A/B Portfolio experimentation framework, validating AI-generated content via curated KPIs.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-muted pl-4">
                  <h3 className="text-xl font-bold">Gen AI & Content Specialist</h3>
                  <p className="text-muted-foreground mb-2">Jobilla DACH · Aug 2023-Nov 2024</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Reshaped creative pipeline with <strong>AI-first workflow</strong>: Flux/Midjourney/Imagen 3 → Upscalers → Canva → Meta Ads.</li>
                    <li>Created multilingual content strategies across <strong>6 languages</strong> (Spanish, English, German, Dutch, Russian, Latvian).</li>
                    <li>Achieved <strong>90% AI utilization</strong> in new campaign content generation, transforming company-wide creation processes.</li>
                    <li>Trained C-suite and teams in AI functionality, from code development to generative AI applications.</li>
                    <li>Served as strategic lead for high-stakes clients, bridging creative challenges with system design.</li>
                    <li>Built and mentored current creative team through extensive collaboration and dedication.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-muted pl-4">
                  <h3 className="text-xl font-bold">AI Consultant</h3>
                  <p className="text-muted-foreground mb-2">Ouroborous Creative Collective (Freelance) · Jan 2020-Present</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Crafted multilingual digital toolkits for international NGO — narrative design & visual identity deployed in <strong>7+ languages</strong> across three continents.</li>
                    <li>Open-sourced <strong>Job Application Intelligence</strong> web app (Python + Node.js) parsing CVs and generating tailored reports.</li>
                    <li>Delivered end-to-end websites (WordPress/React) for clothing stores, musicians, and digital portfolios with UX wireframes and SEO copy.</li>
                    <li>Prototyped low-cost AI-assisted web-development pipeline for small businesses and creators.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-muted pl-4">
                  <h3 className="text-xl font-bold">Service Manager</h3>
                  <p className="text-muted-foreground mb-2">Guacamole GmbH · Jul 2017-Apr 2023 (Part-time during studies)</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Managed daily service across kitchen, bar, and floor operations under high-pressure conditions.</li>
                    <li>Led restaurant's website relaunch with copywriting, visuals, and customer-journey improvements.</li>
                    <li>Trained and supervised staff while fostering positive team communication culture.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-muted pl-4">
                  <h3 className="text-xl font-bold">Graphic Designer</h3>
                  <p className="text-muted-foreground mb-2">AMZ-Marketing.de Amazon Agency · Feb 2022-Sep 2022</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Designed conversion-focused infographics for diverse B2B and B2C product portfolio on Amazon.</li>
                    <li>Produced daily graphics in Canva and Adobe Photoshop meeting tight launch schedules.</li>
                    <li>Collaborated with account managers ensuring cohesive branding across A+ content.</li>
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
