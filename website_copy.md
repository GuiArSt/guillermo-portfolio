# Website Content & Structure Summary

## Global Elements

### Metadata (from layout.tsx)
*   **Title:** Guillermo A. Stumpf | AI Solutions Engineer
*   **Description:** AI Software, Copywriting, Graphic Design, and Web Design services by Guillermo A. Stumpf

### Navbar (from components/navbar.tsx)
*   **Brand/Logo:** Guillermo A. Stumpf (Links to /)
*   **Navigation Links:**
    *   Portfolio (Links to /portfolio)
    *   Publications (Links to /publications)
    *   About Me (Links to /about)
*   **Actions:**
    *   Theme Toggle (Light/Dark Mode)
    *   Commission Me Button (Links to /commission)

### Footer (from components/footer.tsx)
*   **Copyright:** © [Current Year] Guillermo A. Stumpf. All rights reserved.
*   **Contact:** hello@guillermo-stumpf.com
*   **Social Links:**
    *   GitHub
    *   LinkedIn
    *   Instagram
    *   Mastodon

---

## Pages

### Home Page (Root: /) (from app/page.tsx)
*Layout: Two-column grid, resembling a CV.*

*   **Left Column:**
    *   **Contact:**
        *   Email: hello@guillermo-stumpf.com
        *   GitHub: github.com/guillermo
        *   LinkedIn: linkedin.com/in/guillermo
    *   **Skills:**
        *   AI Software Development
        *   Prompt Engineering
        *   Content Strategy
        *   Copywriting
        *   Web Design
        *   Data Analysis
        *   UI/UX Design
    *   **Languages:**
        *   Spanish (Native)
        *   English (Fluent)
        *   German (Fluent)
        *   French (Intermediate)
        *   Russian (Intermediate)
        *   Portuguese (Basic)
    *   **Education:**
        *   M.A. in Digital Media, University of Technology, 2020
        *   B.A. in Communications, State University, 2018
*   **Right Column:**
    *   **Experience:**
        *   **AI Solutions Engineer @ Jobilla (Nov 2024-Present):** Developed AI tools for recruitment (35% accuracy increase, 60% screening time reduction), implemented dashboards, led team for recommendation engine.
        *   **Gen AI & Content Specialist @ Freelance (2023-2024):** Created AI content for 15+ clients, developed custom GPTs, trained teams, increased client output 3x.
        *   **AI Consultant @ Tech Solutions Inc. (2022-2023):** Advised on AI strategies, conducted workshops, developed ROI models, created training materials.
    *   **Key Achievements:**
        *   €10,000+ cost saved per client
        *   99% accuracy in AI solutions
        *   90% AI utilisation rate
*   **Action:**
    *   Download CV as PDF Button (Links to /cv-guillermo-stumpf.pdf)

### About Me Page (/about) (from app/about/page.tsx)
*   **Heading:** About Me
*   **Bio Section:**
    *   Profile Picture (Missing: /images/profile-photo.jpg)
    *   Paragraph 1: Describes role as AI Solutions Engineer at Jobilla, expertise in AI software, copywriting, graphic/web design. Focus on solving complex problems and digital experiences.
    *   Paragraph 2: Highlights multilingual background, interdisciplinary approach, bridging technical/creative domains, passion for ethical AI enhancing human potential.
    *   Action: Download CV Button
*   **Career Timeline Section:** (Uses a <Timeline /> component - content not directly in this file)
*   **Skills Section:** (Displays skills grouped by category using <SkillTag /> component)
    *   **Programming:** Python, JavaScript, TypeScript, React, Next.js, Node.js, HTML/CSS
    *   **AI Tools:** GPT-4, Claude, Midjourney, DALL-E, Stable Diffusion, Hugging Face, LangChain
    *   **Data & BI:** SQL, Power BI, Tableau, Excel, Data Analysis, Data Visualization
    *   **Design:** Figma, Adobe Photoshop, Adobe Illustrator, UI/UX, Responsive Design
    *   **Deployment:** Vercel, Netlify, GitHub, CI/CD, Docker, AWS

### Portfolio Page (/portfolio) (from app/portfolio/page.tsx)
*   **Heading:** The Portfolio
*   **Intro Text:** Curated collection of works (AI development, content creation, design), representing unique solutions.
*   **Services/Areas of Expertise:** (Grid layout, each linking to a sub-page like /portfolio/slug)
    *   **AI Software Solutions:** Proprietary & open-source AI tools. (Image: /images/hero-ai.png)
    *   **Copywriting:** Digital, corporate, scientific copy. (Image: /images/hero-copy.png)
    *   **Graphic Design:** Infographics, recruiting ads, illustrations. (Image: /images/hero-design.png)
    *   **Web Design:** Portfolios, e-stores, artist sites. (Image: /images/hero-web.png)
*   **Publications Preview:** (Uses a <ReaderPreview /> component - content not directly in this file)
    *   **Heading:** From the Archives
    *   **Action:** Browse All Publications Button (Links to /publications)

### Publications Page (/publications) (from app/publications/page.tsx)
*   **Heading:** The Archives
*   **Intro Text:** Open gallery of creative works, thoughts, experiments on technology, creativity, human experience.
*   **Features:**
    *   Search Bar
    *   Filter Pills: All, Poems, Short Stories, Illustrations, Games, Tarot Cards, Journal
    *   Image Showcase: /images/publications-hero.png
*   **Publications Grid:** (Displays items based on filter, clicking opens a reader modal)
    *   **The Digital Horizon:** (Poem) Reflections on AI and humanity. (Image: /images/pub-digital-horizon.png)
    *   **Midnight Code:** (Short Story) A developer's tale. (Image: /images/pub-midnight-code.png)
    *   **Neural Pathways:** (Illustrations) Parallels between human/artificial neural nets. (Image: /images/pub-neural-pathways.png)
    *   **The Algorithm's Whisper:** (Game) Interactive fiction about conscious AI. (Image: /images/pub-algorithm-whisper.png)
    *   **The Programmer:** (Tarot Card) Card VIII from Digital Arcana series. (Image: /images/pub-programmer-tarot.png)
    *   **On Building Digital Gardens:** (Journal) Thoughts on non-linear knowledge management. (Image: /images/pub-digital-gardens.png)
*   **Reader Modal:** (Displays title and content paragraphs for the selected publication)

### Commission Me Page (/commission) (from app/commission/page.tsx)
*   **Heading:** Commission Me
*   **Subheading:** Let's build something remarkable together.
*   **Contact Form:**
    *   Name (Input)
    *   Email (Input)
    *   Service (Select: AI Software, Copywriting, Graphic Design, Web Design)
    *   Project Title (Input)
    *   Message (Textarea)
    *   Send Message (Button)
*   **Success Message:** (Displays after submission) "Message Sent! Thank you for reaching out..."
*   **Alternative Contact:**
    *   Email: hello@guillermo-stumpf.com
    *   Social Links: GitHub, LinkedIn, Instagram, Mastodon (Icons)

---

*Note: Content from reusable components like `<Timeline />` and `<ReaderPreview />` is not detailed here as their internal structure wasn't read.*
*Note: Some images are referenced (e.g., /images/profile-photo.jpg, service images, publication images) but their content is not described.* 