import { Calendar, Clock, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

export function TimelineCard() {
  return (
    <div className="my-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="section-icon">
          <Calendar />
        </div>
        <h2 className="text-3xl font-bold text-foreground">
          Estimativa de Prazo de Entrega
        </h2>
      </div>
      
      <p className="text-muted-foreground mb-8 text-lg">
        Com base em uma dedicação de <strong>2 a 3 horas por dia</strong> (de segunda a sexta-feira) ao projeto, 
        estimamos o seguinte prazo para a conclusão e entrega do seu website:
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="gradient-card p-6 border-success/20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-success" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-success">Cenário Otimista</h3>
              <p className="text-muted-foreground">3 horas por dia</p>
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-2">
              2 meses e 1 semana
            </div>
            <p className="text-sm text-muted-foreground">
              Aproximadamente 9 semanas
            </p>
          </div>
        </Card>

        <Card className="gradient-card p-6 border-primary/20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary">Cenário Realista</h3>
              <p className="text-muted-foreground">2 horas por dia</p>
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              3 meses e 2 semanas
            </div>
            <p className="text-sm text-muted-foreground">
              Aproximadamente 14 semanas
            </p>
          </div>
        </Card>
      </div>

      <div className="mt-6 p-4 bg-muted/50 rounded-lg">
        <p className="text-sm text-muted-foreground text-center">
          <strong>Observação:</strong> Este prazo já inclui o tempo para testes, revisões e o período inicial de suporte pós-lançamento.
        </p>
      </div>
    </div>
  );
}