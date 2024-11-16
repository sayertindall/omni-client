import { BookOpen } from "lucide-react";

export function LoadingScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="space-y-4 text-center">
        {/* Logo and Name */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          <BookOpen className="h-10 w-10 text-primary animate-pulse" />
          <span className="text-2xl font-bold text-primary">Omnipedia</span>
        </div>
        
        {/* Loading indicator */}
        <div className="space-y-3">
          <div className="flex justify-center">
            <div className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:-0.15s] mx-2"></div>
            <div className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce"></div>
          </div>
          <p className="text-sm text-muted-foreground">Loading...</p>
        </div>
      </div>
    </div>
  );
} 