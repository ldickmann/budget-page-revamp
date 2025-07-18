import { BudgetHeader } from "@/components/BudgetHeader";
import { PricingCard } from "@/components/PricingCard";
import { ProjectPhaseTable } from "@/components/ProjectPhaseTable";
import { TimelineCard } from "@/components/TimelineCard";
import { ConditionsCard } from "@/components/ConditionsCard";
import { ImportantConsiderations } from "@/components/ImportantConsiderations";
import { PageLayout } from "@/components/layout/PageLayout";
import { ProgressBar } from "@/components/ui/progress-bar";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const Index = () => {
  const { ref: progressRef, isVisible: progressVisible } = useScrollReveal();

  return (
    <PageLayout>
      <BudgetHeader />
      
      {/* Project Progress Overview */}
      <div 
        ref={progressRef}
        className={cn(
          "scroll-reveal mb-16",
          progressVisible && "revealed"
        )}
      >
        <div className="gradient-card p-6 refined-border">
          <h3 className="text-lg font-semibold refined-text mb-4">
            Progresso Estimado do Projeto
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <ProgressBar percentage={100} label="Planejamento" />
            <ProgressBar percentage={85} label="Desenvolvimento" />
            <ProgressBar percentage={75} label="Testes & Deploy" />
          </div>
        </div>
      </div>
      
      <div className="space-y-20">
        <PricingCard />
        <ProjectPhaseTable />
        <TimelineCard />
        <ConditionsCard />
        <ImportantConsiderations />
      </div>
      
      <footer className="mt-20 pt-8 border-t border-primary/20 text-center refined-border">
        <div className="space-y-2">
          <p className="text-muted-foreground font-medium">
            Copyright © 2025 | Developer <span className="refined-text">Lucas Elias Dickmann</span>
          </p>
          <p className="text-sm text-muted-foreground/70">
            Proposta elaborada com dedicação para Eduardo
          </p>
        </div>
      </footer>
    </PageLayout>
  );
};

export default Index;
