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
        
        <footer className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            Proposta elaborada com 💙 para Eduardo • Desenvolvedor Júnior
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
