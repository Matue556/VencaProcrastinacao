
import { ArrowRight, Download, MessageSquare, Zap, Users } from "lucide-react";
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

  const handlePurchase = () => {
    window.open('https://go.disruptybr.com.br/xleccchllq', '_blank');
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
              {/* Título principal - novo título */}
              <motion.h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-black text-center mb-3 sm:mb-6 px-4" variants={itemVariants} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}>
                🧠Acabe com a frustração de terminar o dia se sentindo um inútil.
              </motion.h1>
              
              {/* Segunda frase - mantida igual */}
              <motion.h2 className="text-white text-xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-8 px-4 leading-tight" variants={itemVariants} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}>
                Se procrastinar já virou rotina, conheça este método silencioso que irá mudar isso em poucos dias.
              </motion.h2>
              
              {/* Terceira frase (subtítulo) - mantida igual */}
              <motion.p className="text-white text-base sm:text-xl md:text-2xl font-medium px-2 sm:px-4 leading-relaxed mb-8 sm:mb-12" variants={itemVariants} style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.9)' }}>
                E se você pudesse ter foco mesmo nos dias ruins começando hoje?
              </motion.p>
              
              {/* Botão CTA */}
              <motion.div 
                className="w-full max-w-4xl mx-auto mb-8 sm:mb-12 px-2 sm:px-4" 
                variants={itemVariants}
              >
                <Button
                  onClick={scrollToOffer}
                 className="w-full py-4 sm:py-6 md:py-8 text-base sm:text-lg md:text-xl bg-gradient-to-r from-blue-900 to-black hover:from-blue-800 hover:to-gray-900 text-white rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 font-bold relative overflow-hidden group min-h-[60px] sm:min-h-[80px] border-2 border-blue-700 transform hover:scale-105"

                >
                  <span className="relative z-10 flex items-center justify-center">
                    🚀 Começar agora
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
                <p className="text-sm sm:text-2x1 text-white/90 mt-4 font-medium">
                  Clique e começe sua transformação ainda hoje.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>;
};

export default Hero;
