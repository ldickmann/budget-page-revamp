import { Rocket, Target, User, Code } from "lucide-react";

export function BudgetHeader() {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="section-icon">
          <Rocket />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold neon-text">
          Proposta de Orçamento
        </h1>
        <div className="section-icon">
          <Target />
        </div>
      </div>
      
      <div className="flex items-center justify-center gap-2 mb-6">
        <User className="text-primary" size={24} />
        <h2 className="text-xl md:text-2xl font-semibold neon-text">
          Lucas Dickmann - Web Developer
        </h2>
        <Code className="text-primary" size={24} />
      </div>
      
      <h3 className="text-lg md:text-xl text-muted-foreground mb-6">
        Modernização do Seu Website
      </h3>
      
      <div className="pricing-highlight max-w-4xl mx-auto neon-border">
        <p className="text-lg leading-relaxed text-foreground">
          <strong className="neon-text">Prezado Eduardo,</strong>
          <br />
          É com grande entusiasmo que apresento esta proposta detalhada para a modernização e desenvolvimento do seu novo
          website. Nosso principal objetivo é criar uma plataforma{" "}
          <strong className="neon-text">funcional, moderna e visualmente atraente</strong>, que não só
          exiba seus trabalhos com excelência, mas também possibilite a{" "}
          <strong className="neon-text">venda direta das suas fotos online</strong>, tudo isso
          otimizado para o seu investimento e prazo.
        </p>
      </div>
    </div>
  );
}