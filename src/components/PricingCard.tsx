import { DollarSign, Clock, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

export function PricingCard() {
  return (
    <div className="my-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="section-icon">
          <DollarSign />
        </div>
        <h2 className="text-3xl font-bold text-foreground">
          Seu Investimento por Hora de Desenvolvimento
        </h2>
      </div>
      
      <Card className="gradient-card p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <p className="text-lg text-muted-foreground mb-2">
              Taxa horária de colaboração como Desenvolvedor Júnior:
            </p>
            <div className="flex items-center gap-2">
              <span className="text-4xl md:text-5xl font-bold text-primary">
                R$ 30,00
              </span>
              <span className="text-xl text-muted-foreground">/ hora</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-primary">
            <Clock className="w-8 h-8" />
            <ArrowRight className="w-6 h-6" />
            <DollarSign className="w-8 h-8" />
          </div>
        </div>
      </Card>
    </div>
  );
}