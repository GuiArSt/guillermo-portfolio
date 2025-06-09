# Website Content & Structure Summary (Updated with Real CV Data)

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
        *   AI Development & Programming
        *   AI Content Generation
        *   AI Model Integration
        *   Data Science & BI
        *   Software & Design Tools
        *   Deployment & Platforms
        *   Collaboration & Communication
    *   **Languages:**
        *   Spanish (Native)
        *   German (Fluent / Second language)
        *   English (Fluent / Second language)
        *   French (Intermediate - B1)
        *   Russian (Elementary - A2)
        *   Portuguese (Basic - A1)
    *   **Education:**
        *   B.A., International Relations and Management, Ostbayerische Technische Hochschule (OTH), Germany · 2016–2023
        *   Diploma, Digital Marketing & Media, International School of Business (ISB), Ireland · 2018–2019
        *   Associate's Degree, Wholesale & Foreign Trade, Dual Program w/ Bayer Boliviana Ltda., Bolivia/Germany · 2014–2015
*   **Right Column:**
    *   **Experience:**
        *   **AI Solutions Engineer @ Jobilla DACH (Nov 2024-Present):** Eliminated €10,000+ annual costs through AI image-generation pipeline. Developed Python job-classification tools (99% accuracy). Built market-intelligence tools. Architected content-evaluation framework.
        *   **Gen AI & Content Specialist @ Jobilla DACH (Aug 2023-Nov 2024):** Reshaped creative pipeline with AI-first workflow. Created multilingual content strategies (6 languages). Achieved 90% AI utilization. Trained C-suite and teams.
        *   **AI Consultant @ Ouroborous Creative Collective (Jan 2020-Present):** Built multilingual digital toolkits for international NGO (7+ languages). Open-sourced Job Application Intelligence web app. Delivered end-to-end websites.
        *   **Service Manager @ Guacamole GmbH (Jul 2017-Apr 2023):** Managed restaurant operations. Led website relaunch with copywriting and visuals.
        *   **Graphic Designer @ AMZ-Marketing.de (Feb 2022-Sep 2022):** Designed conversion-focused infographics for Amazon products.
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
    *   Paragraph 1: AI Solutions Engineer at Jobilla DACH, engineered cutting-edge AI systems with measurable business impact. €10,000+ cost savings, 99% accuracy tools, systematic content-quality assessment framework.
    *   Paragraph 2: Foundation in International Relations and Management from OTH Germany, multilingual fluency. Led AI adoption initiatives, trained C-suite executives, transformed workflows to 90% AI utilization.
    *   Action: Download CV Button
*   **Career Timeline Section:** (Uses a <Timeline /> component with real career data)
*   **Skills Section:** (Displays detailed skills with proficiency levels)
    *   **AI Development & Programming:** Python, Next.js, Laravel, TypeScript, HTML/CSS (Apprentice levels)
    *   **AI Content Generation:** Midjourney/Magnific/Imagen 3 (Expert), Video/Music/Avatar tools (Apprentice), LLM Content Generation (Expert)
    *   **AI Expertise & Model Integration:** AI-Agnostic Logic, Top AI Platforms, Structured Output Design, MCP Integration
    *   **Data Science & BI:** SQL Querying, Data Visualization & Metabase, Data Science Insights
    *   **Software & Design Tools:** Canva, Cursor, Adobe Photoshop, Visual Studio Code, Microsoft Office Suite
    *   **Deployment & Platforms:** Vercel, Fly (Docker-based), GitHub Static Pages
    *   **Collaboration Tools:** Slack/Zoom/Google Meet, Trello/Asana, Meta Business Suite

### Portfolio Page (/portfolio) (from app/portfolio/page.tsx)
*   **Heading:** The Portfolio
*   **Intro Text:** Curated collection of works (AI development, content creation, design), representing unique solutions.
*   **Services/Areas of Expertise:** (Grid layout, each linking to a sub-page like /portfolio/slug)
    *   **AI Software Solutions:** Proprietary & open-source AI tools. (Image: /images/hero-ai.png)
    *   **Copywriting:** Digital, corporate, scientific copy. (Image: /images/hero-copy.png)
    *   **Graphic Design:** Infographics, recruiting ads, illustrations. (Image: /images/hero-design.png)
    *   **Web Design:** Portfolios, e-stores, artist sites. (Image: /images/hero-web.png)
*   **Publications Preview:** (Uses a <ReaderPreview /> component)
    *   **Heading:** From the Archives
    *   **Action:** Browse All Publications Button (Links to /publications)

### Publications Page (/publications) (from app/publications/page.tsx)
*   **Heading:** The Archives
*   **Intro Text:** Open gallery of creative works, thoughts, experiments on technology, creativity, human experience.
*   **Features:**
    *   Search Bar
    *   Filter Pills: All, Poems, Essays, Reflections, Spanish, Portfolio, Other
    *   Image Showcase: /images/publications-hero.png
*   **Publications Grid:** (Real publications with content)
    *   **Beacon of Knowledge:** (Poem) Dark was the tower, Bright the light it gave...
    *   **On Masculinity - Lessons from a Tree in Africa:** (Essay) Adorning the arid southern landscape...
    *   **Songs of the Cube:** (Poem) A extract of another time...
    *   **A poem for my country:** (Spanish) Largos son los días que pasé lejos de ti...
    *   **Friendship, dreams and ramblings:** (Reflection) The older you get, the harder it is to keep track...
    *   **Writing Portfolio Overview:** (Portfolio) Academic/Creative, Business/Marketing examples...
*   **Reader Modal:** (Displays title and content paragraphs for selected publication)

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

## Component Implementations

### Timeline Component (components/timeline.tsx)
**Real Career Timeline:**
*   **2024:** AI Solutions Engineer @ Jobilla DACH (Nov 2024-Present)
*   **2023:** Gen AI & Content Specialist @ Jobilla DACH (Aug 2023-Nov 2024)
*   **2022:** Graphic Designer @ AMZ-Marketing.de (Feb 2022-Sep 2022)
*   **2020:** AI Consultant @ Ouroborous Creative & Service Manager @ Guacamole GmbH (2020-Present & 2017-2023)
*   **2020:** International HR Working Student @ Maschinenfabrik Reinhausen GmbH (Feb 2020-Apr 2021)
*   **2018:** Junior Business Developer @ eDreams ODIGEO (Mar 2018-Aug 2018)
*   **2016:** Bachelor's Studies Begin @ OTH Regensburg (2016-2023)
*   **2014:** International Trade Apprentice @ Bayer Boliviana Ltda. (Jan 2014-Nov 2015)

### Skills & Content
*All skills now accurately reflect CV content with proper proficiency levels and real tool names.*

---

## Images Referenced

### 🖼️ Image Assets Needed:
**Profile & Timeline:**
- `/images/profile-photo.jpg` (About page)
- `/images/timeline-jobilla-ai.png`, `/images/timeline-jobilla-content.png`
- `/images/timeline-amz.png`, `/images/timeline-consultant.png`
- `/images/timeline-reinhausen.png`, `/images/timeline-edreams.png`
- `/images/timeline-oth.png`, `/images/timeline-bayer.png`

**Portfolio/Services:**
- `/images/hero-ai.png`, `/images/hero-copy.png`, `/images/hero-design.png`, `/images/hero-web.png`

**Publications:**
- `/images/publications-hero.png`
- Various publication thumbnails (`/images/pub-*.png`)

---

## Summary of Changes Made

### ✅ **Updated Content:**
1. **Timeline Component:** Replaced all fictional companies and degrees with real career history
2. **Job Descriptions:** Enhanced with specific achievements, metrics, and technical details from CV
3. **Education:** Updated with real degrees from OTH Germany, ISB Ireland, and Bolivia/Germany program
4. **Skills:** Aligned with detailed CV skills including proficiency levels and specific tools
5. **Bio Content:** Updated with real achievements and career progression

### ✅ **Preserved Accurate Content:**
1. **Contact Information:** Email and social links remain correct
2. **Navigation Structure:** All page routes and components working correctly
3. **Key Metrics:** €10k+ savings, 99% accuracy, 90% AI utilization preserved
4. **Languages:** All language proficiencies accurately match CV

**Status:** 🟢 **Fully Aligned** - Website content now accurately reflects real CV data across all components. 