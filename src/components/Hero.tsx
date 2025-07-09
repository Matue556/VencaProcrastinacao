
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
      <div className="banner-container bg-black relative overflow-hidden h-auto min-h-[50px] w-full py-6 sm:py-0">
        <div className="absolute inset-0 bg-black w-full">
          <img src="/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png" alt="Quebrando Correntes - Transformação" className={`w-full h-full object-cover opacity-60 ${isMobile ? 'object-center' : 'object-center'}`} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/60"></div>
        </div>
        
        <div className="relative flex items-start justify-center w-full pt-15 sm:pt-0">
          <div className="w-full mx-auto px-3 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[60vh] sm:min-h-full pt-10">
            <motion.div className="w-full max-w-4xl text-center" variants={itemVariants}>
              {/* Título principal - maior tamanho e peso visual */}
              <motion.h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-black text-center mb-3 sm:mb-6 px-4" variants={itemVariants} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}>
                Chega de Adiar a Sua Vida.
              </motion.h1>
              
              {/* Segunda frase - tamanho médio */}
              <motion.h2 className="text-white text-xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-8 px-4 leading-tight" variants={itemVariants} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}>
                Quantas vezes você já prometeu que ia mudar… e nada aconteceu?
              </motion.h2>
              
              {/* Terceira frase (subtítulo) - menor, mas com boa legibilidade */}
              <motion.p className="text-white text-base sm:text-xl md:text-2xl font-medium px-2 sm:px-4 leading-relaxed mb-8 sm:mb-12" variants={itemVariants} style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.9)' }}>
                Descubra o método que já ajudou milhares de pessoas a saírem do ciclo da procrastinação e finalmente criarem uma rotina com foco, disciplina e resultados reais mesmo que já tenham tentado de tudo antes.
              </motion.p>
              
              {/* Botão CTA com destaque */}
              <motion.div className="flex justify-center px-2 sm:px-4" variants={itemVariants}>
                <button 
                  className="w-full sm:w-auto min-h-[60px] px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl hover:shadow-orange-300/20 flex items-center justify-center group text-lg font-bold max-w-xs sm:max-w-md transform hover:scale-105"
                  onClick={scrollToOffer}
                >
                  Iniciar Transformação
                  <Zap className="ml-2 w-4 h-4 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>;
};

export default Hero;
