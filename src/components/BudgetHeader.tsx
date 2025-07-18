import { Rocket, Target, User, Code, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

export function BudgetHeader() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: introRef, isVisible: introVisible } = useScrollReveal();

  return (
    <div className="text-center mb-16">
      <div 
        ref={headerRef}
        className={cn(
          "scroll-reveal",
          headerVisible && "revealed"
        )}
      >
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="section-icon floating-animation">
            <Rocket />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold refined-text">
            Proposta de Orçamento
          </h1>
          <div className="section-icon floating-animation" style={{ animationDelay: '1s' }}>
            <Target />
          </div>
        </div>
      </div>
      
      <div 
        ref={introRef}
        className={cn(
          "scroll-reveal",
          introVisible && "revealed"
        )}
        style={{ transitionDelay: '200ms' }}
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <User className="text-primary" size={24} />
          <h2 className="text-xl md:text-2xl font-semibold refined-text flex items-center gap-2">
            Lucas Elias Dickmann - Web Developer
            <Sparkles className="text-primary animate-pulse" size={20} />
          </h2>
          <Code className="text-primary" size={24} />
        </div>
        
        <h3 className="text-lg md:text-xl text-muted-foreground mb-8">
          Modernização Profissional do Seu Website
        </h3>
        
        <div className="pricing-highlight max-w-5xl mx-auto refined-border">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm uppercase tracking-wider text-primary font-semibold">
              Proposta Personalizada
            </span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
          
          <p className="text-lg leading-relaxed text-foreground">
            <strong className="refined-text">Prezado Eduardo,</strong>
            <br />
            É com grande entusiasmo que apresento esta proposta detalhada para a modernização e desenvolvimento do seu novo
            website. Nosso principal objetivo é criar uma plataforma{" "}
            <strong className="refined-text">funcional, moderna e visualmente atraente</strong>, que não só
            exiba seus trabalhos com excelência, mas também possibilite a{" "}
            <strong className="refined-text">venda direta das suas fotos online</strong>, tudo isso
            otimizado para o seu investimento e prazo.
          </p>
        </div>
      </div>
    </div>
  );
}