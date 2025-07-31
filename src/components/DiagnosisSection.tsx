import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const DiagnosisSection = () => {
  const isMobile = useIsMobile();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="w-full max-w-6xl mx-auto"
        >
          {/* Bloco de Diagnóstico */}
          <motion.div 
            className="w-full mb-8 px-2 sm:px-4" 
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
          
          {/* Seção de Bônus */}
          <motion.div 
            className="w-full mb-8 sm:mb-12 px-2 sm:px-4" 
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

          {/* Texto emocional final */}
          <motion.div 
            className="w-full max-w-4xl mx-auto px-2 sm:px-4" 
            variants={itemVariants}
          >
            <div className="text-center">
              <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 border border-orange-500/40 rounded-xl p-4 sm:p-6">
                <p className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-relaxed">
                  Você já sofreu demais com a procrastinação. Não adie também a sua chance de mudar tudo agora.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiagnosisSection;