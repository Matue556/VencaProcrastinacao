
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
      <div className="banner-container bg-black relative overflow-hidden h-[60vh] sm:h-[70vh] md:h-[750px] w-full">
        <div className="absolute inset-0 bg-black w-full">
          <img src="/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png" alt="Quebrando Correntes - Transformação" className={`w-full h-full object-cover opacity-70 grayscale ${isMobile ? 'object-right' : 'object-center'}`} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-white"></div>
        </div>
        
        <div className="banner-overlay bg-transparent pt-16 sm:pt-20 md:pt-24 w-full">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
            <motion.div className="w-full max-w-4xl text-center" variants={itemVariants}>
              <motion.h1 className="banner-title text-white" variants={itemVariants}>Destrave seu Potencial com o Guia Definitivo contra a Procrastinação</motion.h1>
              <motion.p className="banner-subtitle text-gray-300 mt-4 sm:mt-6" variants={itemVariants}>
                O método que está mudando a forma como milhares de pessoas tomam controle da própria vida.
              </motion.p>
              <motion.p className="text-gray-400 mt-2 sm:mt-4 text-lg" variants={itemVariants}>
                Descubra como quebrar os ciclos de autossabotagem e criar uma rotina de ação, foco e disciplina, mesmo que você ache que já tentou de tudo.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center items-center" variants={itemVariants}>
                <button 
                  className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl hover:shadow-orange-300/20 flex items-center justify-center group text-sm sm:text-base font-medium"
                  onClick={scrollToOffer}
                >
                  Iniciar Transformação
                  <Zap className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                </button>
                
                <button 
                  className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:shadow-gray-300/20 flex items-center justify-center group text-sm sm:text-base font-medium"
                  onClick={scrollToOffer}
                >
                  Começar Agora
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4" variants={containerVariants} initial="hidden" animate="visible" transition={{
        delay: 0.6
      }}>
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 flex items-center justify-center rounded-lg text-orange-600 mb-2 md:mb-3">
              <span className="text-lg font-bold">🎯</span>
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Rotina com Clareza</h3>
            <p className="text-gray-600 text-xs md:text-sm">Crie uma rotina produtiva com métodos práticos e uma estrutura simples que funciona todos os dias.</p>
          </motion.div>
          
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 flex items-center justify-center rounded-lg text-orange-600 mb-2 md:mb-3">
              <span className="text-lg font-bold">🧠</span>
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Método Testado e Validado</h3>
            <p className="text-gray-600 text-xs md:text-sm">Um sistema que combina neurociência, psicologia comportamental e hábitos comprovados para eliminar a procrastinação.</p>
          </motion.div>
          
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 flex items-center justify-center rounded-lg text-orange-600 mb-2 md:mb-3">
              <span className="text-lg font-bold">🌟</span>
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Funciona para Todos os Perfis</h3>
            <p className="text-gray-600 text-xs md:text-sm">Estudantes, profissionais, criadores ou empreendedores — esse guia é feito para qualquer pessoa que busca consistência.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>;
};

export default Hero;
