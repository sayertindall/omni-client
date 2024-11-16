/**
 * @title Main Content
 * @fileoverview Main content component that handles article viewing, requirements, and evaluation data
 * @path /components/MainContent.tsx
 */

import { InfoBox } from "@/components/InfoBox";
import { HighlightToggle } from "@/components/HighlightToggle";
import { ArticleRenderer } from "@/components/ArticleRenderer";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface MainContentProps {
    data: any;
    highlightEnabled: boolean;
    onElementClick: (text: string, type: "section" | "sentence", sectionIdx: number, sentenceIdx?: number) => void;
    setHighlightEnabled: (enabled: boolean) => void;
    onShowRequirements: () => void;
  }
  
  export function MainContent({ data, highlightEnabled, onElementClick, setHighlightEnabled }: MainContentProps) {
    return (
      <div className="container ml-6 p-4">
        <div className="flex gap-6 mt-16">
          <div className="w-[400px] shrink-0">
            <InfoBox />
          </div>
          <div className="flex-1 max-w-[1200px]">
            <div className="space-y-4">
              <div className="flex justify-end mr-2">
                <HighlightToggle
                  enabled={highlightEnabled}
                  onToggle={() => setHighlightEnabled(!highlightEnabled)}
                />
              </div>
              <div className="py-6 pl-6 bg-white dark:bg-gray-900">
                <div className="w-full">
                  <ArticleRenderer
                    articleData={data.article}
                    evaluationData={data.evaluation}
                    onElementClick={onElementClick}
                    highlightEnabled={highlightEnabled}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }