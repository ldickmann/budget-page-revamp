import { Rocket, Target, DollarSign } from "lucide-react";

export function BudgetHeader() {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="section-icon">
          <Rocket />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
          Proposta de Orçamento
        </h1>
        <div className="section-icon">
          <Target />
        </div>
      </div>
      
      <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
        Modernização do Seu Website
      </h2>
      
      <div className="pricing-highlight max-w-4xl mx-auto">
        <p className="text-lg leading-relaxed">
          <strong className="text-primary-dark">Prezado Eduardo,</strong>
          <br />
          É com grande entusiasmo que apresento esta proposta detalhada para a modernização e desenvolvimento do seu novo
          website. Nosso principal objetivo é criar uma plataforma{" "}
          <strong className="text-primary-dark">funcional, moderna e visualmente atraente</strong>, que não só
          exiba seus trabalhos com excelência, mas também possibilite a{" "}
          <strong className="text-primary-dark">venda direta das suas fotos online</strong>, tudo isso
          otimizado para o seu investimento e prazo.
        </p>
      </div>
    </div>
  );
}