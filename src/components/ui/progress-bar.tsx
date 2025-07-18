import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  percentage: number;
  label?: string;
  className?: string;
  animated?: boolean;
}

export function ProgressBar({ 
  percentage, 
  label, 
  className,
  animated = true 
}: ProgressBarProps) {
  const { ref, isVisible } = useScrollReveal();
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    if (isVisible && animated) {
      const timer = setTimeout(() => {
        setCurrentPercentage(percentage);
      }, 200);
      return () => clearTimeout(timer);
    } else if (!animated) {
      setCurrentPercentage(percentage);
    }
  }, [isVisible, percentage, animated]);

  return (
    <div ref={ref} className={cn("w-full", className)}>
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">{label}</span>
          <span className="text-sm refined-text font-semibold">
            {currentPercentage}%
          </span>
        </div>
      )}
      <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-primary-light transition-all duration-1000 ease-out rounded-full"
          style={{ width: `${currentPercentage}%` }}
        />
      </div>
    </div>
  );
}