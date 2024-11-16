/**
 * @title Header
 * @fileoverview Component that displays the header with navigation and theme toggle.
 * @path /components/Header.tsx
 */

import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { BookOpen, GithubIcon } from "lucide-react";
import Link from "next/link";

// Add this interface at the top of your Header component file
interface HeaderProps {
  onShowRequirements: () => void;
  showRequirements: boolean;
  onBackToArticle: () => void;
  setSidePanelOpen: (open: boolean) => void;
}

export function Header({ 
  onShowRequirements, 
  showRequirements, 
  onBackToArticle,
  setSidePanelOpen 
}: HeaderProps) {
  const handleRequirementsClick = () => {
    onShowRequirements();
    setSidePanelOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        {/* Logo Section with Link */}
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80">
          <BookOpen className="h-6 w-6 text-primary" aria-hidden="true" />
          <span className="text-lg font-bold text-primary">Omnipedia</span>
        </Link>

        {/* Navigation and Actions */}
        <div className="flex items-center space-x-4">
          <nav className="flex items-center space-x-4">
            {showRequirements ? (
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
