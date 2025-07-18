import { Info, AlertCircle, DollarSign, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

export function ImportantConsiderations() {
  const considerations = [
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Custos Não Inclusos",
      description: "Este orçamento não inclui custos de hospedagem do site, registro de domínio ou as taxas cobradas pela plataforma de pagamento por cada transação. Estes são de responsabilidade do cliente.",
      type: "warning" as const
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Hospedagem e Domínio",
      description: "Custos estimados: Hospedagem R$ 15-50/mês, Domínio R$ 40-80/ano. Recomendamos serviços como Vercel (gratuito para projetos pequenos) ou Hostinger.",
      type: "info" as const
    },
    {
      icon: <AlertCircle className="w-5 h-5" />,
      title: "Prazos Estimativos",
      description: "Os prazos são estimativas e podem variar ligeiramente devido a possíveis imprevistos técnicos ou agilidade na sua resposta para aprovações e fornecimento de conteúdo.",
      type: "info" as const
    }
  ];

  const getCardStyles = (type: 'warning' | 'info') => {
    if (type === 'warning') {
      return "border-warning/20 bg-warning/5";
    }
    return "border-primary/20";
  };

  const getIconStyles = (type: 'warning' | 'info') => {
    if (type === 'warning') {
      return "bg-warning/10 text-warning";
    }
    return "bg-primary/10 text-primary";
  };

  return (
    <div className="my-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="section-icon">
          <Info />
        </div>
        <h2 className="text-3xl font-bold text-foreground">
          Considerações Importantes
        </h2>
      </div>

      <div className="space-y-6">
        {considerations.map((item, index) => (
          <Card key={index} className={`gradient-card p-6 ${getCardStyles(item.type)}`}>
            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${getIconStyles(item.type)}`}>
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-xl border border-primary/10">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-primary mb-2">
            💼 Pronto para Começar?
          </h3>
          <p className="text-muted-foreground">
            Entre em contato para discutirmos os detalhes e darmos início ao seu projeto!
          </p>
        </div>
      </div>
    </div>
  );
}