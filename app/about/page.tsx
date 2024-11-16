/**
 * @title About Page 
 * @fileoverview About page component
 * @path /app/about/page.tsx
 */
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileSearch, Layers, Paintbrush, Box, Database, Microscope, Cpu, Rocket } from "lucide-react";
import { NextPage } from 'next';

const pageContent = {
  hero: {
    title: "About Omnipedia",
    description: "Omnipedia is a cutting-edge document analysis and compliance evaluation tool that bridges the gap between language models and structured style guidelines. Designed for researchers, professionals, and contributors to platforms like Wikipedia, Omnipedia leverages advanced AI to automate article reviews, ensuring compliance with predefined standards while promoting efficiency and transparency in content evaluation."
  },
  features: [
    {
      title: "Interactive Text Analysis",
      icon: FileSearch,
      items: [
        "Real-time text highlighting based on compliance scores",
        "Section and sentence-level analysis",
        "Interactive elements for detailed evaluation viewing",
        "Color-coded annotations for compliance status",
        "Qualitative feedback with actionable recommendations"
      ]
    },
    {
      title: "Requirements Management",
      icon: BookOpen,
      items: [
        "Automatic generation of requirements from style guides",
        "Categorization into Imperative Standards, Best Practices, and Guidelines",
        "Advanced filtering and hierarchical organization",
        "Automated scoring system with compliance thresholds",
        "Comprehensive evaluation feedback"
      ]
    }
  ],
  technology: {
    title: "Built with Modern Technology",
    stack: [
      { name: "Next.js 14", icon: Layers, description: "Framework" },
      { name: "Tailwind", icon: Paintbrush, description: "Styling" },
      { name: "SWR", icon: Database, description: "Data Fetching" },
      { name: "shadcn/ui", icon: Box, description: "Components" },
      { name: "React Context", icon: FileSearch, description: "State" },
      { name: "Vercel", icon: Rocket, description: "Deployment" }
    ]
  },
  research: {
    title: "Research-Backed Approach",
    description: "Omnipedia builds on decades of research into automated content evaluation and machine learning, introducing a novel approach by directly leveraging structured style guidelines to drive automated reviews.",
    references: [
      "Nathan Teblunthuis, 2021",
      "Aaron Halfaker and R. Stuart Geiger, 2020",
      "C. Estelle Smith et al., 2020"
    ]
  },
  demo: {
    title: "Experience Omnipedia Today",
    description: "Transform your document analysis workflow with AI-powered insights. Evaluate content against structured guidelines in real-time. Get instant feedback on compliance and style requirements. Join a new era of automated review.",
    buttonText: "Launch Demo",
    buttonUrl: "https://omnipedia-client.pages.dev"
  }
};

const About: NextPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* About Section */}
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-6">
                {pageContent.hero.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {pageContent.hero.description}
              </p>
            </div>

            {/* Research Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Microscope className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">{pageContent.research.title}</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-4">
                {pageContent.research.description}
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {pageContent.research.references.map((ref, index) => (
                  <div 
                    key={index} 
                    className="bg-muted hover:bg-accent/20 transition-colors duration-200 rounded-lg p-3 shadow-sm border w-full h-full bg-muted"
                  >
                    <p className="font-medium text-xs text-muted-foreground truncate">{ref}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">{pageContent.technology.title}</h2>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {pageContent.technology.stack.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <div 
                      key={index} 
                      className="bg-card hover:bg-accent/20 transition-colors duration-200 rounded-lg p-4 flex flex-col items-center text-center space-y-2"
                    >
                      <Icon className="w-6 h-6 text-primary" />
                      <p className="font-medium text-sm">{tech.name}</p>
                      <p className="text-xs text-muted-foreground">{tech.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Features Cards */}
            <div className="space-y-8">
              {pageContent.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <Icon className="w-8 h-8 text-primary" />
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {feature.items.map((item, itemIndex) => (
                          <li key={itemIndex}>• {item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Demo Section */}
            <div className="bg-accent/20 rounded-lg p-4 space-y-3 mt-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Rocket className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Experience Omnipedia Today</h2>
                </div>
                <a 
                  href={pageContent.demo.buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <BookOpen className="w-4 h-4" />
                  {pageContent.demo.buttonText}
                </a>
              </div>
              <p className="text-base text-muted-foreground">
                {pageContent.demo.description}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;