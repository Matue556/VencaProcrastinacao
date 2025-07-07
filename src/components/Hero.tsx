
import { ArrowRight, Download, MessageSquare, Zap } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const isMobile = useIsMobile();
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  
  const scrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    const offerSection = document.getElementById('offer');
    if (offerSection) {
      offerSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return <motion.div className="relative w-full" initial="hidden" animate="visible" variants={containerVariants}>
      <div className="banner-container bg-black relative overflow-hidden min-h-[100vh] sm:min-h-[70vh] md:h-[750px] w-full">
        <div className="absolute inset-0 bg-black w-full">
          <img src="/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png" alt="Quebrando Correntes - Transformação" className={`w-full h-full object-cover opacity-60 ${isMobile ? 'object-center' : 'object-center'}`} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/60"></div>
        </div>
        
        {/* Removendo completamente qualquer padding no mobile */}
        <div className="banner-overlay bg-transparent p-0 sm:pt-16 md:pt-24 w-full min-h-[100vh] sm:min-h-auto">
          <div className="w-full mx-auto px-3 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
            <motion.div className="w-full max-w-4xl text-center" variants={itemVariants}>
              {/* Removendo margem superior no mobile */}
              <motion.h1 className="text-white text-base leading-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-8 px-1 sm:px-2 mt-0" variants={itemVariants} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}>
                Destrave seu Potencial com o<br className="block" /> 
                Guia Definitivo Contra a<br className="block" /> 
                Procrastinação
              </motion.h1>
              {/* Reduzindo espaçamento e fonte do subtítulo */}
              <motion.p className="text-white mt-1 sm:mt-8 text-xs sm:text-xl md:text-2xl font-medium px-2 sm:px-4 leading-relaxed" variants={itemVariants} style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.9)' }}>
                O método que está mudando a forma como milhares de pessoas tomam controle da própria vida.
              </motion.p>
              {/* Reduzindo ainda mais o espaçamento da descrição */}
              <motion.p className="text-white mt-1 sm:mt-6 text-xs sm:text-lg md:text-xl px-2 sm:px-4 leading-relaxed" variants={itemVariants} style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.9)' }}>
                Descubra como quebrar os ciclos de autossabotagem e criar uma rotina de ação, foco e disciplina, mesmo que você ache que já tentou de tudo.
              </motion.p>
              {/* Aproximando o botão do conteúdo */}
              <motion.div className="flex justify-center mt-2 sm:mt-10 px-2 sm:px-4" variants={itemVariants}>
                <button 
                  className="w-full sm:w-auto min-h-[40px] sm:min-h-[56px] px-3 sm:px-10 py-2 sm:py-5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl hover:shadow-orange-300/20 flex items-center justify-center group text-xs sm:text-xl font-bold max-w-xs sm:max-w-md"
                  onClick={scrollToOffer}
                >
                  Iniciar Transformação
                  <Zap className="ml-1 w-3 h-3 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>;
};

export default Hero;
