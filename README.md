
# Omnipedia: Automating Article Review with the Manual of Style

Omnipedia is a cutting-edge document analysis and compliance evaluation tool that bridges the gap between language models and structured style guidelines. Designed for researchers, professionals, and contributors to platforms like Wikipedia, Omnipedia leverages advanced AI to automate article reviews, ensuring compliance with predefined standards while promoting efficiency and transparency in content evaluation.

## 🌟 Key Features

### 🔍 Interactive Text Analysis
- Real-time text highlighting based on compliance scores.
- Section and sentence-level analysis.
- Interactive elements for exploring detailed evaluations.

### 📊 Requirements Management
- Automatically generate requirements from any style guide.
- Categorize compliance standards into:
  - Imperative Standards.
  - Best Practices.
  - Flexible Guidelines.
- Advanced filtering, search, and hierarchical organization of requirements.

### 💡 Smart Evaluation
- Automated scoring system with compliance thresholds.
- Color-coded annotations:
  - 🟥 Red: Conflicts with style guidelines.
  - 🟨 Yellow: Neutral or unclear compliance.
  - 🟩 Green: Meets guidelines (edited by a trusted editor).
- Qualitative feedback with actionable recommendations.

### 🎨 User Interface
- Dark/Light mode support
- Responsive design
- Accessible components using shadcn/ui

## Tech Stack
- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: React Hooks & Context
- **Data Fetching**: SWR
- **Deployment**: Vercel
- **Typography**: Geist Font Family

### 🎨 User-Friendly Interface
- Interactive visualization overlays evaluations on articulated text.
- Dark/Light mode for accessibility and comfort.
- Responsive design with shadcn/ui components.

### 🛠️ Implementation Overview
- Parse style guides into structured requirements (`style-guide.json`).
- Evaluate articles against these requirements:
  - Sentence-level evaluations with improvement suggestions.
  - Highlight text based on compliance scores.
- Render annotated articles with a reader-friendly overlay.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sayertindall/omni-client.git
   cd omni-client
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

### Environment Variables
Create a `.env.local` file and add your environment variables:
```env
NEXT_PUBLIC_API_URL=your_api_url
```

---

## 🌐 Live Demo
Experience Omnipedia: [omnipedia-client.pages.dev](https://omnipedia-client.pages.dev/)

---

## 📚 Related Work and Research
Omnipedia builds on decades of research into automated content evaluation and machine learning. It introduces a novel approach by directly leveraging structured style guidelines to drive automated reviews.

### References
- Nathan Teblunthuis, 2021
- Aaron Halfaker and R. Stuart Geiger, 2020
- C. Estelle Smith et al., 2020

---

## 🛠️ Future Directions
- Extend support for additional style guides and languages.
- Integrate directly into content editing platforms.
- Enable context-sensitive evaluations for topic-specific requirements.

---

## Project Structure

```
omni-client/
├── .git/
├── .next/
├── .wrangler/
│   └── state/
│   │   └── v3/
│   │   │   └── workflows/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── api/
│   │   └── data/
│   │   │   └── route.ts
│   ├── context/
│   │   └── AppContext.tsx
│   ├── fonts/
│   │   ├── GeistMonoVF.woff
│   │   └── GeistVF.woff
│   ├── .DS_Store
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── providers.tsx
├── components/
│   ├── ui/
│   │   ├── accordion.tsx
│   │   ├── alert-dialog.tsx
│   │   ├── alert.tsx
│   │   ├── aspect-ratio.tsx
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── breadcrumb.tsx
│   │   ├── button.tsx
│   │   ├── calendar.tsx
│   │   ├── card.tsx
│   │   ├── carousel.tsx
│   │   ├── chart.tsx
│   │   ├── checkbox.tsx
│   │   ├── collapsible.tsx
│   │   ├── command.tsx
│   │   ├── context-menu.tsx
│   │   ├── dialog.tsx
│   │   ├── drawer.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── form.tsx
│   │   ├── hover-card.tsx
│   │   ├── input-otp.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── menubar.tsx
│   │   ├── navigation-menu.tsx
│   │   ├── pagination.tsx
│   │   ├── popover.tsx
│   │   ├── progress.tsx
│   │   ├── radio-group.tsx
│   │   ├── resizable.tsx
│   │   ├── scroll-area.tsx
│   │   ├── select.tsx
│   │   ├── separator.tsx
│   │   ├── sheet.tsx
│   │   ├── sidebar.tsx
│   │   ├── skeleton.tsx
│   │   ├── slider.tsx
│   │   ├── sonner.tsx
│   │   ├── switch.tsx
│   │   ├── table.tsx
│   │   ├── tabs.tsx
│   │   ├── textarea.tsx
│   │   ├── toast.tsx
│   │   ├── toaster.tsx
│   │   ├── toggle-group.tsx
│   │   ├── toggle.tsx
│   │   └── tooltip.tsx
│   ├── ArticleRenderer.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── HeaderWrapper.tsx
│   ├── HighlightToggle.tsx
│   ├── InfoBox.tsx
│   ├── InteractiveElement.tsx
│   ├── MainContent.tsx
│   ├── ModeToggle.tsx
│   ├── ReqsView.tsx
│   ├── RequirementViewer.tsx
│   └── SidePanel.tsx
├── hooks/
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/
├── node_modules/
├── types/
│   └── index.tsx
├── .DS_Store
├── .env
├── .env.example
├── .eslintrc.json
├── .gitignore
├── components.json
├── design.md
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── README.md
├── repopack-output.txt
├── tailwind.config.ts
├── tsconfig.json
└── wrangler.toml

```

## 📜 Acknowledgments
Omnipedia is the result of collaborative efforts by researchers and developers across multiple disciplines. We thank the Wikipedia community for their ongoing contributions to structured style guidelines and knowledge curation.
