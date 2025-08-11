import React from 'react';
import { motion } from 'framer-motion';

const TransformationStory = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const benefits = [
    { emoji: "🧠", text: "Foco mesmo sem motivação — você age mesmo nos dias ruins." },
    { emoji: "⏳", text: "Controle do seu tempo — pare de se sentir perdido e saiba exatamente o que fazer." },
    { emoji: "🔄", text: "Consistência sem esforço — pequenas ações diárias que viram hábitos sólidos." },
    { emoji: "⚡", text: "Mais energia mental — elimine a sobrecarga e mantenha clareza para decidir." },
    { emoji: "🚀", text: "Progresso imediato — resultados perceptíveis já nos primeiros dias." },
    { emoji: "💪", text: "Confiança renovada — sinta que está no comando da sua vida outra vez." },
    { emoji: "🔓", text: "Liberdade de agir — sem ficar travado, sem depender de \"se sentir pronto\"." }
  ];

  return (
    <section className="section-container bg-[#121212] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-1/4 w-24 h-24 bg-primary rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 right-1/4 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main Title */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            O que você vai desbloquear em poucos dias
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Você está a poucos passos de experimentar mudanças reais que vão transformar sua rotina e seus resultados.
          </p>
        </motion.div>

        {/* Benefits List */}
        <motion.div 
          className="space-y-6 md:space-y-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="flex items-start space-x-4 p-4 md:p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <span className="text-2xl md:text-3xl flex-shrink-0 mt-1">
                {benefit.emoji}
              </span>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                <span className="text-white font-semibold">
                  {benefit.text.split(' — ')[0]}
                </span>
                {benefit.text.includes(' — ') && (
                  <>
                    <span className="text-gray-300"> — </span>
                    <span className="text-gray-300">{benefit.text.split(' — ')[1]}</span>
                  </>
                )}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Message */}
        <motion.div 
          className="text-center space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            Você vai perceber que pode muito mais do que imagina — e isso começa agora.
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight"
          >
            Só você tem a escolha de alcançar seu potencial máximo,<br />
            e essa escolha pode finalmente ser a virada para sua vida.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformationStory;
