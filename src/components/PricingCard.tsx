import { DollarSign, Clock, ArrowRight, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

export function PricingCard() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div id="pricing" className="my-16">
      <div 
        ref={ref}
        className={cn(
          "scroll-reveal",
          isVisible && "revealed"
        )}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="section-icon">
            <DollarSign />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Investimento por Hora de Desenvolvimento
          </h2>
        </div>
        
        <Card className="gradient-card p-8 refined-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp size={16} />
                <span>Taxa horária - Lucas Elias Dickmann (Web Developer)</span>
              </div>
              
              <div className="flex items-baseline gap-3">
                <span className="text-sm text-muted-foreground">R$</span>
                <AnimatedCounter 
                  end={30} 
                  className="text-5xl md:text-6xl" 
                />
                <span className="text-xl text-muted-foreground">,00 / hora</span>
              </div>
              
              <div className="text-sm text-muted-foreground space-y-1">
                <p>✓ Desenvolvimento profissional</p>
                <p>✓ Código limpo e documentado</p>
                <p>✓ Suporte pós-entrega incluído</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-6 text-primary">
              <div className="text-center">
                <Clock className="w-12 h-12 mx-auto mb-2 floating-animation" />
                <span className="text-sm">Tempo</span>
              </div>
              <ArrowRight className="w-8 h-8 animate-pulse" />
              <div className="text-center">
                <DollarSign className="w-12 h-12 mx-auto mb-2 floating-animation" style={{ animationDelay: '1s' }} />
                <span className="text-sm">Valor</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}