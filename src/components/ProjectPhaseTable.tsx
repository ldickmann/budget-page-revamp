import { useState } from "react";
import { ChevronDown, ChevronRight, Eye, EyeOff } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Phase {
  id: number;
  title: string;
  activities: string[];
  hours: number;
  cost: number;
  icon: string;
}

const phases: Phase[] = [
  {
    id: 1,
    title: "Entendimento e Análise",
    icon: "🔍",
    activities: [
      "Acesso e utilização da ferramenta de busca de sites antigos",
      "Análise profunda do código HTML, CSS, JavaScript existente via DevTools",
      "Levantamento detalhado de requisitos funcionais e não funcionais",
      "Documentação inicial do escopo e funcionalidades herdadas/novas"
    ],
    hours: 6,
    cost: 180
  },
  {
    id: 2,
    title: "Planejamento e Design (UX/UI)",
    icon: "🎨",
    activities: [
      "Estudo da jornada do usuário atual e proposta de fluxos otimizados",
      "Criação de Wireframes (esqueletos de baixa fidelidade) das principais telas",
      "Definição de paleta de cores, tipografia e iconografia moderna",
      "Criação de Mockups (protótipos visuais de alta fidelidade) das interfaces",
      "Sessões de feedback e refinamento do design com o cliente"
    ],
    hours: 24,
    cost: 720
  },
  {
    id: 3,
    title: "Desenvolvimento Front-end (React/Vue.js)",
    icon: "⚛️",
    activities: [
      "Configuração do ambiente de desenvolvimento e inicialização do projeto",
      "Criação da estrutura de pastas e componentes atômicos/reutilizáveis",
      "Desenvolvimento e codificação de todas as páginas essenciais do site",
      "Implementação da galeria de imagens otimizada para performance",
      "Integração das interações básicas (formulários de contato, navegação)"
    ],
    hours: 53,
    cost: 1590
  },
  {
    id: 4,
    title: "Integração de API de Pagamento",
    icon: "💳",
    activities: [
      "Pesquisa aprofundada das APIs de pagamento disponíveis no Brasil",
      "Configuração da conta de desenvolvedor na API escolhida",
      "Desenvolvimento da lógica de frontend para carrinho de compras e checkout",
      "Implementação da integração via SDKs ou APIs RESTful",
      "Desenvolvimento de um back-end simples se necessário para processar transações"
    ],
    hours: 34,
    cost: 1020
  },
  {
    id: 5,
    title: "Testes e Otimização",
    icon: "🧪",
    activities: [
      "Execução de testes de funcionalidade em múltiplos navegadores e dispositivos",
      "Testes de usabilidade e acessibilidade básica",
      "Otimização de performance: compressão de imagens, minificação de código",
      "Configuração de metatags, títulos e descrições para SEO Básico",
      "Testes de segurança básicos (ex: injeção SQL, XSS)"
    ],
    hours: 16,
    cost: 480
  },
  {
    id: 6,
    title: "Implantação e Suporte Inicial",
    icon: "🚀",
    activities: [
      "Configuração do ambiente de hospedagem",
      "Configuração de domínio e certificado SSL (HTTPS)",
      "Realização do processo de deploy em ambiente de produção",
      "Monitoramento inicial pós-lançamento",
      "Suporte para correção de bugs críticos por 1 mês após o lançamento"
    ],
    hours: 16,
    cost: 480
  }
];

export function ProjectPhaseTable() {
  const [expandedPhases, setExpandedPhases] = useState<number[]>([]);
  const [showDetails, setShowDetails] = useState(true);

  const togglePhase = (phaseId: number) => {
    setExpandedPhases(prev => 
      prev.includes(phaseId) 
        ? prev.filter(id => id !== phaseId)
        : [...prev, phaseId]
    );
  };

  const totalHours = phases.reduce((sum, phase) => sum + phase.hours, 0);
  const totalCost = phases.reduce((sum, phase) => sum + phase.cost, 0);

  return (
    <div className="my-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-foreground">
          Detalhamento por Fase do Projeto
        </h2>
        <Button 
          variant="outline" 
          onClick={() => setShowDetails(!showDetails)}
          className="gap-2"
        >
          {showDetails ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          {showDetails ? "Ocultar" : "Mostrar"} Detalhes
        </Button>
      </div>
      
      <p className="text-muted-foreground mb-8 text-lg">
        Abaixo, você encontrará uma quebra clara das horas e custos para cada etapa do desenvolvimento. 
        Seu site será construído com tecnologias modernas e robustas como <strong>React</strong> ou <strong>Vue.js</strong>, 
        garantindo performance e escalabilidade.
      </p>

      <div className="space-y-4">
        {phases.map((phase) => (
          <Card key={phase.id} className="phase-card">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => togglePhase(phase.id)}
            >
              <div className="flex items-center gap-4 flex-1">
                <span className="text-3xl">{phase.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full text-sm">
                      Fase {phase.id}
                    </span>
                    <h3 className="text-xl font-semibold">{phase.title}</h3>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <span>{phase.hours} horas</span>
                    <span className="font-semibold text-primary">
                      R$ {phase.cost.toLocaleString('pt-BR')}
                    </span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                {expandedPhases.includes(phase.id) ? 
                  <ChevronDown className="w-4 h-4" /> : 
                  <ChevronRight className="w-4 h-4" />
                }
              </Button>
            </div>
            
            {expandedPhases.includes(phase.id) && showDetails && (
              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="font-semibold mb-3 text-primary">Atividades Principais:</h4>
                <ul className="space-y-2">
                  {phase.activities.map((activity, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Card>
        ))}
        
        {/* Total Summary */}
        <Card className="gradient-card p-6 border-primary/20">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-primary">
              TOTAL GERAL DO INVESTIMENTO
            </h3>
            <div className="text-right">
              <div className="text-lg text-muted-foreground">
                {totalHours} horas totais
              </div>
              <div className="text-3xl font-bold text-primary">
                R$ {totalCost.toLocaleString('pt-BR')}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}