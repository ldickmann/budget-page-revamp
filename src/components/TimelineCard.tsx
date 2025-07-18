import { Calendar, Clock, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

export function TimelineCard() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div id="timeline" className="my-16">
      <div 
        ref={ref}
        className={cn(
          "scroll-reveal",
          isVisible && "revealed"
        )}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="section-icon">
            <Calendar />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Estimativa de Prazo de Entrega
          </h2>
        </div>
        
        <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
          Com base em uma dedicação de <strong className="refined-text">2 a 3 horas por dia</strong> (de segunda a sexta-feira) ao projeto, 
          estimamos o seguinte prazo para a conclusão e entrega do seu website:
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="gradient-card p-8 border-success/20 refined-border hover:scale-105 transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center pulse-glow">
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-success">Cenário Otimista</h3>
                <p className="text-muted-foreground">3 horas por dia</p>
              </div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-4xl font-bold text-success">
                <AnimatedCounter end={2} suffix=" meses" />
                <span className="text-2xl"> e </span>
                <AnimatedCounter end={1} suffix=" semana" />
              </div>
              <p className="text-sm text-muted-foreground">
                Aproximadamente <AnimatedCounter end={9} suffix=" semanas" />
              </p>
            </div>
          </Card>

          <Card className="gradient-card p-8 border-primary/20 refined-border hover:scale-105 transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center pulse-glow">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold refined-text">Cenário Realista</h3>
                <p className="text-muted-foreground">2 horas por dia</p>
              </div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-4xl font-bold refined-text">
                <AnimatedCounter end={3} suffix=" meses" />
                <span className="text-2xl"> e </span>
                <AnimatedCounter end={2} suffix=" semanas" />
              </div>
              <p className="text-sm text-muted-foreground">
                Aproximadamente <AnimatedCounter end={14} suffix=" semanas" />
              </p>
            </div>
          </Card>
        </div>

        <div className="mt-8 p-6 bg-muted/30 rounded-xl refined-border">
          <p className="text-muted-foreground text-center leading-relaxed">
            <strong className="refined-text">Observação:</strong> Este prazo já inclui o tempo para testes, revisões e o período inicial de suporte pós-lançamento.
            O cronograma pode ser ajustado conforme a agilidade nas aprovações e fornecimento de conteúdo.
          </p>
        </div>
      </div>
    </div>
  );
}