import { AlertTriangle, Edit3, RefreshCw, XCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

export function ConditionsCard() {
  return (
    <div className="my-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="section-icon bg-warning/10 text-warning">
          <AlertTriangle />
        </div>
        <h2 className="text-3xl font-bold text-foreground">
          Condições de Escopo e Alterações
        </h2>
      </div>
      
      <p className="text-muted-foreground mb-8 text-lg">
        Para garantir a agilidade e a previsibilidade do projeto, é fundamental que o escopo seja bem definido desde o
        início. Qualquer alteração pode impactar o cronograma e o custo.
      </p>

      <div className="space-y-6">
        <Card className="gradient-card p-6 border-warning/20">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center flex-shrink-0 mt-1">
              <Edit3 className="w-5 h-5 text-warning" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3 text-warning">
                Funcionalidades Adicionais
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  Este orçamento cobre as funcionalidades essenciais para o <strong>Produto Mínimo Viável (MVP)</strong>.
                </p>
                <p>
                  Serão permitidas até <strong className="text-success">2 (duas) alterações pontuais</strong> em 
                  funcionalidades existentes sem custo adicional, desde que cada uma não exceda 4 horas de trabalho.
                </p>
                <p>
                  A partir da <strong className="text-warning">terceira alteração</strong>, ou se a alteração for de 
                  médio/alto impacto, será cobrado <strong className="text-primary">R$ 37,00 por hora</strong> adicional.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="gradient-card p-6 border-primary/20">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
              <RefreshCw className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Alterações de Design (UX/UI) Pós-Aprovação
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  O design da interface será apresentado e deverá ser <strong>aprovado</strong> antes da fase de desenvolvimento.
                </p>
                <p>
                  Após a aprovação, serão permitidas até <strong className="text-success">2 (duas) alterações pontuais</strong> 
                  no design sem custo adicional, desde que cada uma não exceda 4 horas de trabalho.
                </p>
                <p>
                  A partir da <strong className="text-warning">terceira alteração</strong>, será cobrado 
                  <strong className="text-primary"> R$ 37,00 por hora</strong> adicional.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="gradient-card p-6 border-destructive/20">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-1">
              <XCircle className="w-5 h-5 text-destructive" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3 text-destructive">
                Alteração de Escopo Drástica
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  Se houver um desejo de <strong>mudar fundamentalmente as funcionalidades, o público-alvo ou a proposta
                  central</strong> do site após a aprovação inicial:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>O contrato atual será <strong className="text-destructive">encerrado</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Um <strong className="text-destructive">novo contrato</strong> e um <strong className="text-destructive">novo orçamento</strong> serão elaborados</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}