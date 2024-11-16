/**
 * @title Main Content
 * @fileoverview Main content component that handles article viewing, requirements, and evaluation data
 * @path /components/MainContent.tsx
 */

import { InfoBox } from "@/components/InfoBox";
import { HighlightToggle } from "@/components/HighlightToggle";
import { ArticleRenderer } from "@/components/ArticleRenderer";

interface MainContentProps {
    data: any;
    highlightEnabled: boolean;
    onElementClick: (text: string, type: "section" | "sentence", sectionIdx: number, sentenceIdx?: number) => void;
    setHighlightEnabled: (enabled: boolean) => void;
  }
  
  export function MainContent({ data, highlightEnabled, onElementClick, setHighlightEnabled }: MainContentProps) {
    return (
      <div className="container ml-10 p-4">
        <div className="flex gap-8 mt-32">
          <div className="w-[400px] shrink-0">
            <InfoBox />
          </div>
  
          <div className="flex-1">
            <div className="space-y-4">
              <div className="flex justify-end mr-[8em]">
                <HighlightToggle
                  enabled={highlightEnabled}
                  onToggle={() => setHighlightEnabled(!highlightEnabled)}
                />
              </div>
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
    );
  }