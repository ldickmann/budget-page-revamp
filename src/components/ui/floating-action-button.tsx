import { useState } from "react";
import { ArrowUp, FileText, Calculator, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { icon: ArrowUp, label: "Topo", action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { icon: FileText, label: "Resumo", action: () => document.getElementById('summary')?.scrollIntoView({ behavior: 'smooth' }) },
    { icon: Calculator, label: "Preços", action: () => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }) },
    { icon: Clock, label: "Timeline", action: () => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' }) },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-3">
      {isOpen && (
        <div className="flex flex-col gap-2">
          {actions.slice(1).map((action, index) => (
            <Button
              key={index}
              size="sm"
              variant="secondary"
              className={cn(
                "h-10 w-10 rounded-full shadow-lg transition-all duration-300",
                "hover:scale-110 bg-card border border-primary/20",
                "transform opacity-0 translate-y-2 animate-in fade-in slide-in-from-bottom-2"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => {
                action.action();
                setIsOpen(false);
              }}
            >
              <action.icon size={16} />
            </Button>
          ))}
        </div>
      )}
      
      <Button
        size="sm"
        className={cn(
          "h-12 w-12 rounded-full shadow-lg transition-all duration-300",
          "hover:scale-110 pulse-glow",
          isOpen && "rotate-45"
        )}
        onClick={() => {
          if (isOpen) {
            setIsOpen(false);
          } else {
            actions[0].action();
            setIsOpen(true);
          }
        }}
      >
        <ArrowUp size={20} />
      </Button>
    </div>
  );
}