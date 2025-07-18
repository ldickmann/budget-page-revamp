import { BudgetHeader } from "@/components/BudgetHeader";
import { PricingCard } from "@/components/PricingCard";
import { ProjectPhaseTable } from "@/components/ProjectPhaseTable";
import { TimelineCard } from "@/components/TimelineCard";
import { ConditionsCard } from "@/components/ConditionsCard";
import { ImportantConsiderations } from "@/components/ImportantConsiderations";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <BudgetHeader />
        
        <div className="space-y-16">
          <PricingCard />
          <ProjectPhaseTable />
          <TimelineCard />
          <ConditionsCard />
          <ImportantConsiderations />
        </div>
        
        <footer className="mt-16 pt-8 border-t border-primary/20 text-center">
          <p className="text-muted-foreground">
            Proposta elaborada com <span className="neon-text">💚</span> para Eduardo • <span className="neon-text">Lucas Dickmann - Web Developer</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
