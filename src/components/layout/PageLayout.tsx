import { ReactNode } from "react";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import { Navbar } from "./Navbar";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {children}
      </div>
      <FloatingActionButton />
    </div>
  );
}