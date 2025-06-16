
import { useEffect, useRef, useState } from 'react';
import { CheckCircle, Target, Brain, Rocket, ArrowRight, Zap } from "lucide-react";
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from "@/components/ui/button";

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const applications = [
    {
      icon: <Target className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Estudos & Vestibular",
      description: "Transforme a forma como você estuda, elimina distrações e foca por horas com leveza.",
      image: "https://i.imgur.com/XbCJDPc.jpeg"
    },
    {
      icon: <Brain className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Negócios & Projetos",
      description: "Execute ideias que estavam travadas, supere a autossabotagem e crie consistência.",
      image: "https://i.imgur.com/6NXUYEl.jpeg"
    },
    {
      icon: <Rocket className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Vida Pessoal",
      description: "Volte a ter domínio do seu tempo e pare de adiar aquilo que importa.",
      image: "https://i.imgur.com/kDlJ9wi.jpeg"
    }
  ];

  const scrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    const offerSection = document.getElementById('offer');
    if (offerSection) {
      offerSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
          (entry.target as HTMLElement).style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    if (featuresRef.current) {
      const elements = featuresRef.current.querySelectorAll('.feature-item');
      elements.forEach(el => {
        if (!el.classList.contains('animate-slide-in')) {
          (el as HTMLElement).style.opacity = '0';
          observer.observe(el);
        }
      });
    }
    return () => observer.disconnect();
  }, []);

  const mainFeatures = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Rotina com Clareza",
      description: "Crie uma rotina produtiva com métodos práticos e uma estrutura simples que funciona todos os dias."
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Método Testado e Validado",
      description: "Um sistema que combina neurociência, psicologia comportamental e hábitos comprovados para eliminar a procrastinação."
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Funciona para Todos os Perfis",
      description: "Estudantes, profissionais, criadores ou empreendedores — esse guia é feito para qualquer pessoa que busca consistência."
    }
  ];

  const methodSteps = [{
    icon: <CheckCircle className="h-10 w-10 text-orange-600" />,
    title: "Capítulos Curtos",
    description: "Conteúdo direto e aplicável, sem enrolação"
  }, {
    icon: <Brain className="h-10 w-10 text-orange-600" />,
    title: "Ferramentas Práticas",
    description: "Técnicas que você pode usar imediatamente"
  }, {
    icon: <Target className="h-10 w-10 text-orange-600" />,
    title: "Plano de 30 Dias",
    description: "Sistema estruturado para vencer a procrastinação"
  }];

  return <>
      {/* Seção Principal com Cards Transformados */}
      <section className="relative bg-black overflow-hidden py-16 md:py-24 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8" ref={featuresRef}> 
          <div className="text-center mb-16 max-w-3xl mx-auto feature-item">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-full text-sm font-medium">
              🔥 Três Pilares da Transformação
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              O Que Você Vai Dominar
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Descubra os três fundamentos que vão revolucionar sua relação com a produtividade e ação.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mainFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="feature-item group relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/10 overflow-hidden"
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                {/* Traço laranja no topo */}
                <div className="absolute top-0 right-0 w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600"></div>
                
                {/* Glow effect no hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Ícone centralizado */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl group-hover:bg-orange-500/30 transition-all duration-500"></div>
                      <div className="relative bg-white/5 backdrop-blur-sm rounded-full p-4 group-hover:bg-white/10 transition-all duration-300 border border-white/10">
                        <div className="text-orange-500 group-hover:text-orange-400 transition-colors duration-300">
                          {feature.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-50 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Indicador de progresso */}
                  <div className="absolute bottom-6 left-8 right-8">
                    <div className="h-0.5 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="applications" className="relative bg-white overflow-hidden py-10 md:py-[50px] w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8" ref={featuresRef}> 
          <div className="text-center mb-10 max-w-3xl mx-auto feature-item">
            <div className="inline-block mb-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
              Como o Método É Aplicado
            </div>
            <h2 className="text-3xl font-bold mb-4">Aplicações Reais do Quebrando Correntes</h2>
            <p className="text-gray-600 mt-4">
              Descubra como pequenas ações diárias podem gerar grandes mudanças em sua vida pessoal, profissional e mental.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {applications.map((application, index) => (
              <div 
                key={index} 
                className="feature-item rounded-xl overflow-hidden transform transition-all duration-500 relative shadow-lg hover:-translate-y-1 h-[280px]"
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
                onMouseEnter={() => setHoveredFeature(index)} 
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={application.image} 
                    alt={application.title} 
                    className="w-full h-full object-cover transition-all duration-300 grayscale" 
                  />
                  <div className={cn(
                    "absolute inset-0 transition-opacity duration-300",
                    hoveredFeature === index 
                      ? "bg-orange-900/60" 
                      : "bg-black/70"
                  )}></div>
                </div>
                
                <div className="relative z-10 flex flex-col justify-between p-6 h-full">
                  <div>
                    <div className={cn(
                      "inline-block p-3 bg-orange-600/40 backdrop-blur-sm rounded-lg transition-all duration-300 transform mb-4",
                      hoveredFeature === index 
                        ? "hover:scale-110" 
                        : ""
                    )}>
                      <div className={`transform transition-transform duration-300 ${hoveredFeature === index ? 'rotate-12' : ''}`}>
                        {application.icon}
                      </div>
                    </div>
                    <h3 className="text-xl mb-2 font-semibold text-white">
                      {application.title}
                    </h3>
                    <p className="text-sm text-white/90">
                      {application.description}
                    </p>
                  </div>
                  <div className={`h-0.5 bg-white/70 mt-3 transition-all duration-500 ${hoveredFeature === index ? 'w-full' : 'w-0'}`}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button onClick={scrollToOffer} className="inline-flex items-center px-4 sm:px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all group w-full sm:w-auto">
              Iniciar Transformação Agora
              <Zap className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
      
      <section id="method" className="relative bg-black overflow-hidden py-16 md:py-24 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto feature-item">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-full text-sm font-medium">
              Nosso Método
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Do Caos à Ação
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Baseado em ciência e experiências reais, o método do "Quebrando Correntes" guia você em uma jornada 
              de 30 dias com práticas simples, profundas e transformadoras.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {methodSteps.map((step, index) => (
              <div 
                key={index} 
                className="feature-item group relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/10 overflow-hidden"
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                {/* Traço laranja no topo */}
                <div className="absolute top-0 right-0 w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600"></div>
                
                {/* Glow effect no hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Ícone centralizado */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl group-hover:bg-orange-500/30 transition-all duration-500"></div>
                      <div className="relative bg-white/5 backdrop-blur-sm rounded-full p-4 group-hover:bg-white/10 transition-all duration-300 border border-white/10">
                        <div className="text-orange-500 group-hover:text-orange-400 transition-colors duration-300">
                          {step.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-50 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Indicador de progresso */}
                  <div className="absolute bottom-6 left-8 right-8">
                    <div className="h-0.5 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 border border-gray-800 hover:border-orange-500/30 transition-all duration-500 overflow-hidden relative group">
            {/* Traço laranja no topo */}
            <div className="absolute top-0 right-0 w-32 h-1 bg-gradient-to-r from-orange-500 to-orange-600"></div>
            
            {/* Glow effect no hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 max-w-xl mx-auto text-center">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-orange-500/10 rounded-full animate-pulse-slow"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-full p-4 border border-orange-200/20 shadow-md">
                  <Rocket className="h-10 w-10 text-orange-500" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">Transformação Completa</h3>
              <p className="text-xl text-gray-300 leading-relaxed">30 dias para quebrar as correntes da procrastinação</p>
              <div className="flex justify-center mt-6 space-x-2">
                <span className="inline-block w-3 h-3 rounded-full bg-orange-300 animate-pulse"></span>
                <span className="inline-block w-3 h-3 rounded-full bg-orange-500 animate-pulse animation-delay-200"></span>
                <span className="inline-block w-3 h-3 rounded-full bg-orange-700 animate-pulse animation-delay-400"></span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button onClick={scrollToOffer} className="inline-flex items-center px-4 sm:px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all group w-full sm:w-auto justify-center">
              Começar Minha Transformação
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </>;
};

export default Features;
