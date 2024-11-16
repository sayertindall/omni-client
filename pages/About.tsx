import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Code, FileSearch, GitBranch, LineChart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header 
        onShowRequirements={() => {}}
        showRequirements={false}
        onBackToArticle={() => {}}
        setSidePanelOpen={() => {}}
      />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            About Omnipedia
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A sophisticated document analysis and compliance evaluation tool helping researchers and professionals analyze text against predefined requirements.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <FileSearch className="w-8 h-8 text-primary" />
              <CardTitle>Interactive Text Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Real-time text highlighting based on compliance scores</li>
                <li>• Section and sentence-level analysis</li>
                <li>• Interactive elements for detailed evaluation viewing</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <GitBranch className="w-8 h-8 text-primary" />
              <CardTitle>Requirements Management</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Hierarchical view of compliance requirements</li>
                <li>• Advanced filtering and search capabilities</li>
                <li>• Categorized requirements system</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <LineChart className="w-8 h-8 text-primary" />
              <CardTitle>Smart Evaluation</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Automated scoring system</li>
                <li>• Color-coded compliance indicators</li>
                <li>• Detailed evidence and reference tracking</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Code className="w-8 h-8 text-primary" />
              <CardTitle>Technical Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Next.js 14</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">shadcn/ui</Badge>
                <Badge variant="secondary">React Hooks</Badge>
                <Badge variant="secondary">SWR</Badge>
                <Badge variant="secondary">TypeScript</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Demo Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Try Omnipedia Today</h2>
          <p className="text-muted-foreground mb-8">
            Experience the power of intelligent document analysis and compliance evaluation.
          </p>
          <a 
            href="https://omnipedia-client.pages.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            <BookOpen className="w-5 h-5" />
            Launch Demo
          </a>
        </div>
      </main>
    </div>
  );
}
