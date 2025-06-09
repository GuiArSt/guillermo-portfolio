# Content-to-Code Mapping (Final Truth Analysis)

This document maps the content across three sources: `website_copy.md` (placeholder), actual code implementation, and `CV.md` (source of truth).

## 📋 Analysis Legend
- 🟢 **Accurate:** Matches CV truth
- 🟡 **Partial:** Some accuracy, needs updates
- 🔴 **Incorrect:** Doesn't match CV truth
- 📝 **Missing:** Not implemented

---

## Global Elements

### 🔹 Metadata (Layout)
**Content Location:** `website_copy.md` - Global Elements → Metadata  
**Code Implementation:** `app/layout.tsx` lines 11-15
**Status:** 🟢 **Accurate**
```typescript
export const metadata: Metadata = {
  title: "Guillermo A. Stumpf | AI Solutions Engineer",
  description: "AI Software, Copywriting, Graphic Design, and Web Design services by Guillermo A. Stumpf",
  generator: 'v0.dev'
}
```

### 🔹 Navbar
**Content Location:** `website_copy.md` - Global Elements → Navbar  
**Code Implementation:** `components/navbar.tsx`
- **Brand/Logo:** Lines 32-34 (`Guillermo A. Stumpf`)
- **Navigation Links:** Lines 10-14 (routes array: Portfolio, Publications, About Me)
- **Theme Toggle:** Line 41 (`<ThemeToggle />`)
- **Commission Button:** Lines 42-50

### 🔹 Footer
**Content Location:** `website_copy.md` - Global Elements → Footer  
**Code Implementation:** `components/footer.tsx`
- **Copyright:** Lines 8-12 (dynamic year)
- **Contact:** Line 15 (`hello@guillermo-stumpf.com`)
- **Social Links:** Lines 17-45 (GitHub, LinkedIn, Instagram, Mastodon)

---

## Page Implementations

### 🏠 Home Page (/)
**Content Location:** `website_copy.md` - Pages → Home Page  
**Code Implementation:** `app/page.tsx`

#### Left Column Content:
- **Contact Section:** Lines 11-30
  - Email: Line 16-20 (`hello@guillermo-stumpf.com`)
  - GitHub: Lines 21-25 (`github.com/guillermo`)
  - LinkedIn: Lines 26-32 (`linkedin.com/in/guillermo`)

- **Skills Section:** Lines 34-44
  - **Note:** Content diverges from copy - code has more technical skill categories

- **Languages Section:** Lines 46-55
  - All languages with flags and proficiency levels

- **Education Section:** Lines 57-72
  - **Note:** Education content significantly differs from copy
  - Real data: B.A. International Relations (OTH Germany), Digital Marketing Diploma (ISB Ireland), Associate's Degree (Dual Program Bolivia/Germany)

#### Right Column Content:
- **Experience Section:** Lines 76-115
  - **AI Solutions Engineer @ Jobilla:** Lines 79-86
  - **Gen AI & Content Specialist @ Jobilla:** Lines 88-95  
  - **AI Consultant @ Ouroborous Creative:** Lines 97-104
  - **Note:** Job descriptions differ significantly from copy

- **Key Achievements:** Lines 117-135
  - €10,000+ cost saved, 99% accuracy, 90% AI utilization

- **Download CV Button:** Lines 140-146

### 📖 About Page (/about)
**Content Location:** `website_copy.md` - Pages → About Me Page  
**Code Implementation:** `app/about/page.tsx`

- **Heading:** Line 30 ("About Me")
- **Profile Image:** Lines 35-37 (`/images/profile-photo.jpg`)
- **Bio Paragraphs:** Lines 39-49 (updated content from CV, differs from copy)
- **Download CV Button:** Lines 50-55
- **Timeline Component:** Line 62 (`<Timeline />`)
- **Skills Section:** Lines 67-154 (extensive technical skills breakdown)

### 🎯 Portfolio Page (/portfolio)
**Content Location:** `website_copy.md` - Pages → Portfolio Page  
**Code Implementation:** `app/portfolio/page.tsx`

**Note:** Need to examine this file for complete mapping

### 📚 Publications Page (/publications)
**Content Location:** `website_copy.md` - Pages → Publications Page  
**Code Implementation:** `app/publications/page.tsx`

- **Heading:** Line visible in structure ("The Archives")
- **Filter Categories:** Line 25 (categories array)
- **Publications Data:** Lines 27-130+ (extensive publications array)
- **Reader Modal:** Implemented in same file

### 📧 Commission Page (/commission)
**Content Location:** `website_copy.md` - Pages → Commission Me Page  
**Code Implementation:** `app/commission/page.tsx`

**Note:** Need to examine this file for complete mapping

---

## Component Implementations

### 🕒 Timeline Component
**Content Location:** `website_copy.md` - References in About page  
**Code Implementation:** `components/timeline.tsx`

- **Timeline Events Data:** Lines 10-43
  - 2024: AI Solutions Engineer @ Jobilla
  - 2023: Gen AI & Content Specialist @ Freelance  
  - 2022: AI Consultant @ Tech Solutions Inc.
  - 2020: M.A. in Digital Media @ University of Technology
  - 2018: B.A. in Communications @ State University
- **Interactive Timeline UI:** Lines 45-121

### 🏷️ Skill Tag Component
**Content Location:** `website_copy.md` - References in About page skills  
**Code Implementation:** `components/skill-tag.tsx`
- Simple component for displaying skill badges

### 📖 Reader Preview Component
**Content Location:** `website_copy.md` - References in Portfolio page  
**Code Implementation:** `components/reader-preview.tsx`
- **Note:** Need to examine this file for publication preview functionality

---

## Key Discrepancies Between Copy and Code

### ❌ Content Mismatches:

1. **Home Page Experience:**
   - **Copy shows:** Generic roles (Gen AI & Content Specialist @ Freelance, AI Consultant @ Tech Solutions Inc.)
   - **Code shows:** Specific roles at Jobilla and Ouroborous Creative Collective

2. **Education:**
   - **Copy shows:** M.A. in Digital Media (2020), B.A. in Communications (2018)
   - **Code shows:** B.A. International Relations (OTH Germany), Digital Marketing Diploma (ISB Ireland)

3. **Timeline Component:**
   - **Copy references:** Generic companies
   - **Code shows:** Mix of real (Jobilla) and placeholder (University of Technology, State University) data

4. **Skills:**
   - **Copy shows:** High-level skill categories
   - **Code shows:** Detailed technical skills with proficiency levels

### ✅ Content Matches:

1. **Metadata:** Title and description match exactly
2. **Navigation Structure:** All navigation links and structure match
3. **Contact Information:** Email and social links are consistent
4. **Footer:** Copyright and contact information match
5. **Key Achievements:** Numbers and metrics are consistent

---

## Images Referenced

### 🖼️ Missing/Placeholder Images:
All image paths are defined but most images appear to be placeholders:

**Profile & Timeline:**
- `/images/profile-photo.jpg` (About page)
- `/images/timeline-*.png` (Timeline component)

**Portfolio/Services:**
- `/images/hero-ai.png`, `/images/hero-copy.png`, `/images/hero-design.png`, `/images/hero-web.png`

**Publications:**
- `/images/publications-hero.png`
- `/images/pub-*.png` (Various publication thumbnails)

---

## Recommendations for Alignment

### 🔧 **Immediate Code Updates Needed:**

1. **Timeline Component (`components/timeline.tsx`):**
   ```typescript
   // Replace fictional timeline with real CV data
   const timelineEvents = [
     {
       year: 2024,
       title: "AI Solutions Engineer",
       company: "Jobilla",
       period: "Nov 2024-Present",
       description: "Engineered AI image-generation pipeline saving €10k+ annually. Developed Python job-classification tools (99% accuracy). Built market-intelligence tools (web-scraping + AI analysis)."
     },
     // Add remaining real timeline events from CV
   ]
   ```

2. **About Page Skills (`app/about/page.tsx`):**
   - Update skill tags with exact CV content and proficiency levels
   - Add missing tools: Midjourney, Magnific, Imagen 3, Metabase, etc.

3. **Home Page Experience (`app/page.tsx`):**
   - Expand job descriptions to include key CV achievements
   - Add technical details and metrics from CV

### 📝 **Content Updates Needed:**

1. **Update `website_copy.md`** to reflect real CV content
2. **Add missing experience** sections for complete career history
3. **Replace fictional education** with real degrees and institutions
4. **Update timeline** with real career progression

### 🖼️ **Asset Requirements:**
- Profile photo for about page
- Timeline images for each real career milestone  
- Portfolio service images
- Publication thumbnails

---

## Final Accuracy Score

| Section | Status | Action Required |
|---------|--------|----------------|
| Metadata | 🟢 Accurate | None |
| Navigation | 🟢 Accurate | None |
| Contact Info | 🟢 Accurate | None |
| Languages | 🟢 Accurate | None |
| Education | 🟢 Accurate | None |
| Current Role | 🟢 Accurate | Expand descriptions |
| Skills Structure | 🟢 Accurate | Update content |
| Timeline | 🔴 Incorrect | Complete rebuild |
| Career History | 🔴 Incomplete | Add missing roles |
| Bio Content | 🟡 Partial | Add CV achievements |

**Overall Status:** 🟡 **Partially Accurate** - Core structure is solid, content needs comprehensive updates to match CV truth. 