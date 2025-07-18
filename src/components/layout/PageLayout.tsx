import { ReactNode } from "react";
import { FloatingActionButton } from "@/components/ui/floating-action-button";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen relative">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {children}
      </div>
      <FloatingActionButton />
    </div>
  );
}