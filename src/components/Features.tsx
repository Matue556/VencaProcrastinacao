
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
      image: "/lovable-uploads/48e540e5-6a25-44e4-b3f7-80f3bfc2777a.png"
    },
    {
      icon: <Brain className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Negócios & Projetos",
      description: "Execute ideias que estavam travadas, supere a autossabotagem e crie consistência.",
      image: "/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png"
    },
    {
      icon: <Rocket className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Vida Pessoal",
      description: "Volte a ter domínio do seu tempo e pare de adiar aquilo que importa.",
      image: "/lovable-uploads/cf8966e3-de0d-445f-9fbd-ee6c48daa7ff.png"
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

  const realApplications = [{
    image: "/lovable-uploads/843446fe-638e-4efb-b885-ed3cd505325a.png",
    title: "Foco nos Estudos",
    description: "Métodos práticos para manter concentração e eliminar distrações durante o aprendizado."
  }, {
    image: "/lovable-uploads/5463c9c5-0946-4280-a14b-17636ff69a98.png",
    title: "Produtividade no Trabalho",
    description: "Estratégias para aumentar sua eficiência e entregar resultados consistentes."
  }, {
    image: "/lovable-uploads/c5f8ee24-9815-4ebe-b65d-6f3d449feb8b.png",
    title: "Transformação Pessoal",
    description: "Como desenvolver disciplina e criar hábitos que geram mudanças reais na sua vida."
  }];

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

          <div className="mt-16 mb-8 feature-item">
            <div className="text-center mb-8">
              <div className="inline-block mb-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                Aplicações Práticas
              </div>
              <h3 className="text-2xl font-bold">Como Funciona na Prática</h3>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                Veja como o método é aplicado em diferentes áreas da vida para gerar resultados reais.
                <span className="block text-sm mt-1 text-orange-500">Deslize para ver mais exemplos →</span>
              </p>
            </div>
            
            <div className="rounded-xl overflow-hidden bg-white p-4 feature-item">
              <Carousel className="w-full max-w-7xl mx-auto">
                <CarouselContent className="flex">
                  {realApplications.map((study, index) => <CarouselItem key={index} className="md:basis-1/3 flex-shrink-0">
                      <Card className="border border-gray-100 shadow-md">
                        <CardContent className="p-0">
                          <div className="w-full h-full">
                            <img src={study.image} alt={study.title} className="w-full h-auto object-contain" />
                          </div>
                          <div className="p-4">
                            <h4 className="font-semibold text-lg">{study.title}</h4>
                            <p className="text-sm text-gray-600 mt-2">{study.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>)}
                </CarouselContent>
                <div className="flex justify-center mt-6 gap-2">
                  <CarouselPrevious className="relative static left-auto translate-y-0 hover:bg-gray-100" />
                  <CarouselNext className="relative static right-auto translate-y-0 hover:bg-gray-100" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button onClick={scrollToOffer} className="inline-flex items-center px-4 sm:px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all group w-full sm:w-auto">
            Iniciar Transformação Agora
            <Zap className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </section>
      
      <section id="method" className="bg-gray-50 py-10 md:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
              Nosso Método
            </div>
            <h2 className="text-3xl font-bold mb-4">Do Caos à Ação</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Baseado em ciência e experiências reais, o método do "Quebrando Correntes" guia você em uma jornada 
              de 30 dias com práticas simples, profundas e transformadoras.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 mb-10 transition-all duration-300 hover:shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {methodSteps.map((step, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-orange-50 rounded-full p-4 mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 via-white to-orange-50 rounded-lg p-8 max-w-xl mx-auto text-center shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-orange-500/10 rounded-full animate-pulse-slow"></div>
                <div className="relative bg-white rounded-full p-4 border border-orange-200 shadow-md">
                  <Rocket className="h-10 w-10 text-orange-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Transformação Completa</h3>
              <p className="text-gray-700">30 dias para quebrar as correntes da procrastinação</p>
              <div className="flex justify-center mt-4 space-x-2">
                <span className="inline-block w-3 h-3 rounded-full bg-orange-300 animate-pulse"></span>
                <span className="inline-block w-3 h-3 rounded-full bg-orange-500 animate-pulse animation-delay-200"></span>
                <span className="inline-block w-3 h-3 rounded-full bg-orange-700 animate-pulse animation-delay-400"></span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
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
