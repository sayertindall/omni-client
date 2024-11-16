"use client";

/**
 * @title Header
 * @fileoverview Component that displays the header with navigation and theme toggle.
 * @path /components/Header.tsx
 */

import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { BookOpen, GithubIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

// Add this interface at the top of your Header component file
interface HeaderProps {
  onShowRequirements: () => void;
  showRequirements: boolean;
  onBackToArticle: () => void;
  setSidePanelOpen: (open: boolean) => void;
  onHomeClick: () => void;
  selectedArticle?: string;
  setSelectedArticle: (value: string) => void;
  selectedSource?: "wikipedia" | "wikicrow";
  setSelectedSource: (value: "wikipedia" | "wikicrow") => void;
}

export function Header({ 
  onShowRequirements, 
  showRequirements, 
  onBackToArticle,
  setSidePanelOpen,
  onHomeClick,
  selectedArticle = "ABCC11",
  setSelectedArticle,
  selectedSource = "wikipedia",
  setSelectedSource
}: HeaderProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const handleRequirementsClick = () => {
    onShowRequirements();
    setSidePanelOpen(false);
  };

  const handleArticleChange = (value: string) => {
    console.log('Article selection changed to:', value);
    setSelectedArticle(value);
  };

  const handleSourceChange = (value: "wikipedia" | "wikicrow") => {
    console.log('Source selection changed to:', value);
    setSelectedSource(value);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        {/* Logo Section with Link and Dropdowns */}
        <div className="flex items-center space-x-8">
          <Link 
            href="/" 
            className="flex items-center space-x-2 hover:opacity-80"
            onClick={onHomeClick}
          >
            <BookOpen className="h-6 w-6 text-primary" aria-hidden="true" />
            <span className="text-lg font-bold text-primary">Omnipedia</span>
          </Link>

          {/* Only show dropdowns on home page */}
          {isHomePage && (
            <>
              <Select
                value={selectedArticle || "ABCC11"}
                onValueChange={handleArticleChange}
              >
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="ABCC11" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ABCC11">ABCC11</SelectItem>
                  <SelectItem value="APRT">APRT</SelectItem>
                  <SelectItem value="B3GAT1">B3GAT1</SelectItem>
                  <SelectItem value="GRIA2">GRIA2</SelectItem>
                  <SelectItem value="NEW_GENE">NEW_GENE</SelectItem>
                </SelectContent>
              </Select>
              
              <Select
                value={selectedSource}
                onValueChange={handleSourceChange}
              >
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Select source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wikipedia">Wikipedia</SelectItem>
                  <SelectItem value="wikicrow">WikiCrow</SelectItem>
                </SelectContent>
              </Select>
            </>
          )}
        </div>

        {/* Navigation and Actions */}
        <div className="flex items-center space-x-4">
          <nav className="flex items-center space-x-4">
            {!isHomePage ? (
              <Link href="/">
                <Button variant="ghost">
                  Back to Article
                </Button>
              </Link>
            ) : showRequirements ? (
              <Button variant="ghost" onClick={onBackToArticle}>
                Back to Article
              </Button>
            ) : (
              <Button variant="ghost" onClick={handleRequirementsClick}>
                View Requirements
              </Button>
            )}
            <Link href="/about" passHref legacyBehavior>
              <Button variant="ghost" asChild>
                <a aria-label="Learn About Omnipedia">About</a>
              </Button>
            </Link>
          </nav>

          {/* GitHub Link */}
          <a
            href="https://github.com/sayertindall/omni-client"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source code on GitHub"
          >
            <Button variant="ghost" size="icon">
              <GithubIcon className="h-5 w-5" />
            </Button>
          </a>

          {/* Theme Toggle */}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
