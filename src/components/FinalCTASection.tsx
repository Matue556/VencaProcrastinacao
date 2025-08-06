import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Unlock } from 'lucide-react';

const FinalCTASection = () => {
  const handlePurchase = () => {
    // Redirecionamento para o checkout (mesmo link da oferta)
    window.open('https://go.disruptybr.com.br/xleccchllq', '_blank');
  };

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
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-600/5 rounded-full blur-2xl"></div>
      
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
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight">
              🔥 <span className="text-orange-400">Chega de adiar sua transformação.</span>
            </h2>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={itemVariants}
            className="mb-12 space-y-6"
          >
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Você já sabe que procrastinar está te atrasando.<br />
              <strong className="text-white">Agora é hora de virar o jogo com o Quebrando Correntes.</strong>
            </p>
            
            <p className="text-white text-xl md:text-2xl font-semibold">
              A decisão é sua. E o risco é zero.
            </p>
            
            <p className="text-orange-400 text-lg md:text-xl font-bold">
              👉 Clique no botão abaixo e comece agora mesmo.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <Button
              onClick={handlePurchase}
              className="w-full max-w-2xl mx-auto py-6 md:py-8 text-lg md:text-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 font-bold relative overflow-hidden group min-h-[60px] md:min-h-[70px] border-2 border-orange-400 animate-pulse-slow"
            >
              <span className="relative z-10 flex items-center justify-center">
                🟧 <strong>Sim, quero vencer a procrastinação!</strong>
                <Unlock className="ml-3 w-5 h-5 md:w-6 md:h-6 group-hover:scale-125 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </motion.div>

          {/* Security Note */}
          <motion.p 
            variants={itemVariants}
            className="text-center text-sm text-gray-400 mt-6 px-4"
          >
            🔒 Processamento seguro. Seus dados estão protegidos com criptografia SSL.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;