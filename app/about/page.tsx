/**
 * @title About Page 
 * @fileoverview About page component
 * @path /app/about/page.tsx
 */
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileSearch } from "lucide-react";
import { NextPage } from 'next';

const pageContent = {
  hero: {
    title: "About Omnipedia",
    description: "A sophisticated document analysis and compliance evaluation tool helping researchers and professionals analyze text against predefined requirements."
  },
  features: [
    {
      title: "Interactive Text Analysis",
      icon: FileSearch,
      items: [
        "Real-time text highlighting based on compliance scores",
        "Section and sentence-level analysis",
        "Interactive elements for detailed evaluation viewing",
        "Custom annotation capabilities",
        "Export analysis results in multiple formats"
      ]
    },
    {
      title: "Smart Document Management",
      icon: BookOpen,
      items: [
        "Intelligent document categorization",
        "Version history and change tracking",
        "Collaborative review capabilities",
        "Advanced search and filtering",
        "Secure document storage and sharing"
      ]
    }
  ],
  demo: {
    title: "Try Omnipedia Today",
    description: "Experience the power of intelligent document analysis and compliance evaluation.",
    buttonText: "Launch Demo",
    buttonUrl: "https://omnipedia-client.pages.dev"
  }
};

const About: NextPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            {pageContent.hero.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {pageContent.hero.description}
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 mx-12">
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
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{pageContent.demo.title}</h2>
          <p className="text-muted-foreground mb-8">
            {pageContent.demo.description}
          </p>
          <a 
            href={pageContent.demo.buttonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            <BookOpen className="w-5 h-5" />
            {pageContent.demo.buttonText}
          </a>
        </div>
      </main>
    </div>
  );
};

export default About;