/**
 * @title About Page 
 * @fileoverview About page component
 * @path /app/about/page.tsx
 */
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileSearch } from "lucide-react";
import { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <div className="min-h-screen bg-background">
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
          {/* Cards remain the same */}
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

          {/* Other cards remain the same... */}
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
};

export default About;