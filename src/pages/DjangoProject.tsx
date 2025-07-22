import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { ProgressBar } from "@/components/ui/progress-bar";
import { PageLayout } from "@/components/layout/PageLayout";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { 
  Server, 
  Database, 
  Code, 
  Image, 
  Shield, 
  TestTube,
  Layout,
  Upload,
  Search,
  Settings,
  Cloud
} from "lucide-react";

const DjangoProject = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: phasesRef, isVisible: phasesVisible } = useScrollReveal();
  const { ref: summaryRef, isVisible: summaryVisible } = useScrollReveal();

  const phases = [
    {
      id: 1,
      title: "Desenvolvimento do Backend (Django)",
      description: "Configuração do ambiente Django, modelagem do banco de dados para eventos e fotos, desenvolvimento das APIs que permitirão as operações de CRUD, e a lógica para o upload de múltiplas fotos com processamento.",
      icon: Server,
      color: "from-blue-500/20 to-blue-600/20",
      totalHours: "65-93 horas",
      activities: [
        {
          name: "Configuração Inicial do Projeto Django",
          description: "Configurar o projeto, ambiente virtual, dependências e configurações básicas do Django e Django REST Framework.",
          hours: "6-8 horas",
          icon: Settings
        },
        {
          name: "Modelagem de Dados e Migrações",
          description: "Criar os modelos para Evento (título, descrição, data, fotógrafo) e Foto (arquivo, relacionamento com Evento), e aplicar as migrações no banco de dados.",
          hours: "8-10 horas",
          icon: Database
        },
        {
          name: "Desenvolvimento das APIs RESTful (CRUD Básico)",
          description: "Implementar as APIs para listar, criar, detalhar, atualizar e excluir Evento e Foto usando Django REST Framework.",
          hours: "15-20 horas",
          icon: Code
        },
        {
          name: "Lógica de Upload de Múltiplas Imagens",
          description: "Desenvolver a funcionalidade para receber e processar o upload de várias fotos simultaneamente, incluindo a geração de versões otimizadas (ex: miniatura, média).",
          hours: "18-28 horas",
          icon: Upload
        },
        {
          name: "Autenticação e Autorização para Administrador",
          description: "Configurar o sistema de login e permissões básicas para que apenas o Eduardo possa acessar e manipular os dados via painel.",
          hours: "8-12 horas",
          icon: Shield
        },
        {
          name: "Testes Básicos de Backend",
          description: "Realizar testes de sanidade das APIs e da lógica do servidor para garantir que as operações funcionam como esperado.",
          hours: "10-15 horas",
          icon: TestTube
        }
      ]
    },
    {
      id: 2,
      title: "Desenvolvimento do Painel Administrativo (Frontend - React/Integração)",
      description: "Construção das interfaces de usuário no React para o painel administrativo, permitindo que o Eduardo visualize e gerencie eventos e fotos, e a integração dessas telas com as APIs do backend Django.",
      icon: Layout,
      color: "from-green-500/20 to-green-600/20",
      totalHours: "51-78 horas",
      activities: [
        {
          name: "Estrutura e Navegação do Painel",
          description: "Criação do layout básico do painel (menu, cabeçalho) e das rotas internas para as seções de gerenciamento.",
          hours: "6-8 horas",
          icon: Layout
        },
        {
          name: "Gerenciamento de Eventos (CRUD Básico)",
          description: "Desenvolver as telas para listar eventos (tabela simples), um formulário para adicionar/editar eventos e a funcionalidade de exclusão.",
          hours: "10-15 horas",
          icon: Search
        },
        {
          name: "Gerenciamento de Fotos (CRUD com Múltiplos Uploads)",
          description: "Desenvolver as telas para listar fotos, um componente para o upload de múltiplas fotos (seleção de arquivos), formulários para editar os metadados das fotos e a funcionalidade de exclusão.",
          hours: "22-35 horas",
          icon: Image
        },
        {
          name: "Integração com TanStack Query",
          description: "Implementar as chamadas à API Django utilizando TanStack Query para gerenciar o estado da aplicação e as requisições de dados.",
          hours: "8-12 horas",
          icon: Code
        },
        {
          name: "Ajustes de Usabilidade Básica",
          description: "Garantir que a interface do painel seja funcional e clara para o Eduardo, com mensagens de feedback essenciais.",
          hours: "5-8 horas",
          icon: Settings
        }
      ]
    },
    {
      id: 3,
      title: "Configuração de Infraestrutura e Implantação (Serviços Gratuitos - MVP)",
      description: "Configuração e implantação do banco de dados e do backend em plataformas de hospedagem gratuitas para que o sistema possa ser acessado online.",
      icon: Cloud,
      color: "from-purple-500/20 to-purple-600/20",
      totalHours: "10-17 horas",
      activities: [
        {
          name: "Configuração de Banco de Dados",
          description: "Criar e configurar o banco de dados PostgreSQL em um serviço gratuito (ex: Supabase, ElephantSQL).",
          hours: "3-5 horas",
          icon: Database
        },
        {
          name: "Configuração de Hospedagem do Backend",
          description: "Implantação da aplicação Django em uma plataforma gratuita (ex: Render, Heroku) e configuração de variáveis de ambiente.",
          hours: "6-10 horas",
          icon: Server
        },
        {
          name: "Configuração de Hospedagem do Frontend",
          description: "Garantir que o frontend React (já hospedado) se comunique corretamente com o novo backend.",
          hours: "1-2 horas",
          icon: Layout
        }
      ]
    }
  ];

  const totalMinHours = 126;
  const totalMaxHours = 188;
  const hourlyRate = 25;

  return (
    <PageLayout>
      {/* Header */}
      <div 
        ref={headerRef}
        className={cn(
          "scroll-reveal mb-16",
          headerVisible && "revealed"
        )}
      >
        <div className="text-center space-y-6">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            Projeto Django + React
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold refined-text leading-tight">
            Sistema de Gerenciamento
            <span className="block text-primary">de Fotos de Eventos</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Plataforma completa para upload, organização e gerenciamento de fotos de eventos 
            com painel administrativo e APIs RESTful.
          </p>
        </div>
      </div>

      {/* Project Summary */}
      <div 
        ref={summaryRef}
        className={cn(
          "scroll-reveal mb-16",
          summaryVisible && "revealed"
        )}
      >
        <Card className="gradient-card refined-border">
          <CardHeader>
            <CardTitle className="text-2xl refined-text">Resumo do Projeto</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">
                  <AnimatedCounter end={totalMinHours} duration={2000} />
                  -
                  <AnimatedCounter end={totalMaxHours} duration={2000} />
                </div>
                <p className="text-muted-foreground">Horas Estimadas</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">
                  R$ <AnimatedCounter end={totalMinHours * hourlyRate} duration={2000} />
                  -
                  <AnimatedCounter end={totalMaxHours * hourlyRate} duration={2000} />
                </div>
                <p className="text-muted-foreground">Investimento Total</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">3</div>
                <p className="text-muted-foreground">Fases Principais</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Project Progress */}
      <div className="mb-16">
        <Card className="gradient-card refined-border">
          <CardHeader>
            <CardTitle className="text-xl refined-text">Progresso Estimado do Projeto</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <ProgressBar percentage={0} label="Backend (Django)" />
              <ProgressBar percentage={0} label="Frontend (React)" />
              <ProgressBar percentage={0} label="Deploy & Infra" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Phases */}
      <div 
        ref={phasesRef}
        className={cn(
          "scroll-reveal space-y-12",
          phasesVisible && "revealed"
        )}
      >
        <h2 className="text-3xl font-bold text-center refined-text mb-12">
          Fases e Atividades Detalhadas
        </h2>

        {phases.map((phase, index) => (
          <Card key={phase.id} className="gradient-card refined-border overflow-hidden">
            <CardHeader className={`bg-gradient-to-r ${phase.color} relative`}>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <phase.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <Badge variant="secondary">Fase {phase.id}</Badge>
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      {phase.totalHours}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl refined-text">{phase.title}</CardTitle>
                </div>
              </div>
              <p className="text-muted-foreground mt-4">{phase.description}</p>
            </CardHeader>
            
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold refined-text mb-4">Atividades Chave:</h4>
              <div className="space-y-4">
                {phase.activities.map((activity, actIndex) => (
                  <div key={actIndex} className="border border-primary/20 rounded-lg p-4 hover:bg-primary/5 transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <activity.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-semibold refined-text">{activity.name}</h5>
                          <Badge variant="outline" className="ml-2">
                            {activity.hours}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">{activity.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-20 p-8 border-t border-primary/20 text-center">
        <p className="text-muted-foreground font-medium">
          Copyright © 2025 | Developer <span className="refined-text">Lucas Elias Dickmann</span>
        </p>
      </footer>
    </PageLayout>
  );
};

export default DjangoProject;