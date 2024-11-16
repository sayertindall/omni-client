# Omnipedia

## Overview
Omnipedia is a sophisticated document analysis and compliance evaluation tool that helps researchers and compliance professionals analyze text against predefined requirements and standards.

## Key Features

### 🔍 Interactive Text Analysis
- Real-time text highlighting based on compliance scores
- Section and sentence-level analysis
- Interactive elements for detailed evaluation viewing

### 📊 Requirements Management
- Hierarchical view of compliance requirements
- Categorization by:
  - Imperative Standards
  - Best Practices
  - Flexible Guidelines
- Advanced filtering and search capabilities

🌐 **Live Demo**: [omnipedia-client.pages.dev](https://omnipedia-client.pages.dev/)

### 💡 Smart Evaluation
- Automated scoring system
- Color-coded compliance indicators
- Detailed evidence and reference tracking

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

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/omni-client.git
cd omni-client
```

2. Install dependencies
```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install

# Or using yarn
yarn install
```

3. Start the development server
```bash
# Using pnpm
pnpm dev

# Or using npm
npm run dev

# Or using yarn
yarn dev
```

4. Open your browser
Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

### Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=your_api_url
```

### Build for Production

To create a production build:
```bash
# Using pnpm
pnpm build

# Or using npm
npm run build

# Or using yarn
yarn build
```

## Project Structure

```
omni-client/
├── .git/
├── app/
│   ├── api/
│   │   └── data/
│   │   │   └── route.ts
│   ├── fonts/
│   │   ├── GeistMonoVF.woff
│   │   └── GeistVF.woff
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
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
│   ├── HighlightToggle.tsx
│   ├── InfoBox.tsx
│   ├── InteractiveElement.tsx
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
├── .eslintrc.json
├── .gitignore
├── components.json
├── design.md
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
### Deploy on Vercel

The easiest way to deploy your Omnipedia client is to use Vercel:

1. Push your code to a GitHub repository
2. Import your project into Vercel
3. Add necessary environment variables
4. Deploy

For more details on deployment, check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

