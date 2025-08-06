import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const GuaranteeSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Title */}
          <motion.div 
            variants={itemVariants}
            className="mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Shield className="w-12 h-12 md:w-16 md:h-16 text-orange-500" />
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-black">
                🛡️ Garantia Incondicional de 7 Dias
              </h2>
              <Shield className="w-12 h-12 md:w-16 md:h-16 text-orange-500" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-900/50 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8 md:p-12 mb-8"
          >
            <div className="space-y-6">
              <p className="text-white text-lg md:text-xl leading-relaxed">
                Você tem <strong className="text-orange-400">7 dias inteiros</strong> para ler, aplicar e decidir se o método é pra você.
              </p>
              
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                Se por qualquer motivo você achar que não valeu a pena, é só enviar um e-mail e devolvemos <strong className="text-white">100% do seu dinheiro</strong>.
              </p>
              
              <div className="border-t border-orange-500/20 pt-6">
                <p className="text-white text-lg md:text-xl font-semibold">
                  Sem letras miúdas. Sem pegadinhas. Simples assim.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <p className="text-orange-400 text-xl md:text-2xl font-bold">
              👉 Você pode comprar agora com total tranquilidade.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;