
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
                Conheça o método invisível que está quebrando o ciclo da procrastinação, sem motivação, sem força, só resultado.
              </motion.h2>
              
              {/* Terceira frase (subtítulo) - mantida igual */}
              <motion.p className="text-white text-base sm:text-xl md:text-2xl font-medium px-2 sm:px-4 leading-relaxed mb-8 sm:mb-12" variants={itemVariants} style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.9)' }}>
                E se você pudesse ter foco mesmo nos dias ruins começando hoje?
              </motion.p>
              
              {/* Bloco de Diagnóstico - mantido igual */}
              <motion.div 
                className="w-full max-w-6xl mx-auto mb-6 sm:mb-8 px-2 sm:px-4" 
                variants={itemVariants}
              >
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-orange-500/20 p-4 sm:p-8 shadow-2xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                    {/* Lado esquerdo - Diagnóstico */}
                    <div className="text-left">
                      <h3 className="text-orange-500 text-lg sm:text-2xl font-bold mb-4 sm:mb-6">
                        Isso soa familiar para você?
                      </h3>
                      
                      <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                        <div className="flex items-start space-x-3">
                          <span className="text-red-400 text-lg sm:text-xl mt-1">❌</span>
                          <p className="text-white text-sm sm:text-base leading-relaxed">
                            Você começa animado, mas logo perde o foco?
                          </p>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <span className="text-red-400 text-lg sm:text-xl mt-1">❌</span>
                          <p className="text-white text-sm sm:text-base leading-relaxed">
                            Vive adiando tarefas e dizendo "depois eu faço"?
                          </p>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <span className="text-red-400 text-lg sm:text-xl mt-1">❌</span>
                          <p className="text-white text-sm sm:text-base leading-relaxed">
                            Já tentou vários métodos, mas nada realmente funcionou?
                          </p>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <span className="text-red-400 text-lg sm:text-xl mt-1">❌</span>
                          <p className="text-white text-sm sm:text-base leading-relaxed">
                            Sente que sabe o que tem que fazer, mas não consegue agir?
                          </p>
                        </div>
                      </div>
                      
                      <div className="border-l-4 border-orange-500 pl-4 sm:pl-6">
                        <div className="flex items-start space-x-2 sm:space-x-3">
                          <span className="text-orange-500 text-lg sm:text-xl mt-1">👉</span>
                          <p className="text-white text-sm sm:text-lg font-medium leading-relaxed">
                            Então o método <span className="text-orange-500 font-bold">Quebrando Correntes</span> foi feito justamente para você.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Lado direito - Mockup do eBook */}
                    <div className="flex justify-center lg:justify-end">
                      <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                        <div className="relative">
                          <img 
                            src="https://i.imgur.com/XIe91yv.png" 
                            alt="Quebrando Correntes - Capa do eBook" 
                            className="w-48 sm:w-64 lg:w-72 h-auto rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Seção de Bônus - mantida igual */}
              <motion.div 
                className="w-full max-w-6xl mx-auto mb-8 sm:mb-12 px-2 sm:px-4" 
                variants={itemVariants}
              >
                <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl border border-orange-500/30 p-4 sm:p-6 shadow-2xl">
                  <div className="text-center mb-6 sm:mb-8">
                    <h3 className="text-orange-500 text-xl sm:text-2xl font-bold mb-2">
                      🎁 Bônus Exclusivos
                    </h3>
                    <p className="text-white text-sm sm:text-base opacity-90">
                      Além do método completo, você ganha esses 3 bônus especiais:
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    {/* Bônus 1 */}
                    <div className="bg-black/40 rounded-xl p-4 sm:p-5 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="flex justify-center mb-3 sm:mb-4">
                        <img 
                          src="https://i.imgur.com/jTPdQpR.jpg" 
                          alt="25 Frases de Gatilhos Mentais" 
                          className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg shadow-lg"
                        />
                      </div>
                      <h4 className="text-white text-sm sm:text-base font-bold text-center mb-2 sm:mb-3">
                        🎁 BÔNUS 1 — 25 Frases de Gatilhos Mentais Para Usar No Dia a Dia
                      </h4>
                      <p className="text-white/80 text-xs sm:text-sm text-center leading-relaxed">
                        Frases de gatilhos mentais para retomar o seu foco durante o dia.
                      </p>
                    </div>
                    
                    {/* Bônus 2 */}
                    <div className="bg-black/40 rounded-xl p-4 sm:p-5 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="flex justify-center mb-3 sm:mb-4">
                        <img 
                          src="https://i.imgur.com/qBnNxX7.jpg" 
                          alt="Wallpapers Motivacionais" 
                          className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg shadow-lg"
                        />
                      </div>
                      <h4 className="text-white text-sm sm:text-base font-bold text-center mb-2 sm:mb-3">
                        🎁 BÔNUS 2 — Wallpapers Motivacionais
                      </h4>
                      <p className="text-white/80 text-xs sm:text-sm text-center leading-relaxed">
                        Imagens que inspiram ação e clareza mental, direto na sua tela.
                      </p>
                    </div>
                    
                    {/* Bônus 3 */}
                    <div className="bg-black/40 rounded-xl p-4 sm:p-5 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="flex justify-center mb-3 sm:mb-4">
                        <img 
                          src="https://i.imgur.com/3BhimyG.jpg" 
                          alt="Técnicas e Ferramentas de Gestão de Tempo" 
                          className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg shadow-lg"
                        />
                      </div>
                      <h4 className="text-white text-sm sm:text-base font-bold text-center mb-2 sm:mb-3">
                        🎁 BÔNUS 3 — As Melhores Técnicas e Ferramentas de Gestão de Tempo
                      </h4>
                      <p className="text-white/80 text-xs sm:text-sm text-center leading-relaxed">
                        Aprenda como usar as melhores técnicas e ferramentas de gestão de tempo para poder retomar o controle da sua rotina em pouco tempo.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* NOVO CTA APÓS OS BÔNUS */}
              <motion.div 
                className="w-full max-w-4xl mx-auto mb-8 sm:mb-12 px-2 sm:px-4" 
                variants={itemVariants}
              >
                <div className="text-center space-y-6 sm:space-y-8">
                  {/* Texto emocional */}
                  <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 border border-orange-500/40 rounded-xl p-4 sm:p-6">
                    <p className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-relaxed">
                      Você já sofreu demais com a procrastinação. Não adie também a sua chance de mudar tudo agora.
                    </p>
                  </div>
                  
                  {/* Botão CTA */}
                  <Button
                    onClick={scrollToOffer}
                    className="w-full py-4 sm:py-6 md:py-8 text-base sm:text-lg md:text-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 font-bold relative overflow-hidden group min-h-[60px] sm:min-h-[80px] border-2 border-emerald-400"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Sim, Quero Assumir o Controle da Minha Vida! 💪
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>;
};

export default Hero;
