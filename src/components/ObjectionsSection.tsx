import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ObjectionsSection = () => {
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

  const cardVariants = {
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

  const objections = [
    {
      question: "E se eu comprar e travar de novo?",
      answer: "Esse método foi criado justamente pra quem trava. É 100% prático, passo a passo, e pensado pra te destravar aos poucos — mesmo nos dias mais difíceis. O Desafio de 30 Dias é como um empurrão diário na direção certa."
    },
    {
      question: "Já tentei mil coisas... Por que essa seria diferente?",
      answer: "Porque aqui você não depende de força de vontade. A metodologia mistura neurociência, mudança de hábitos e ação mínima diária. E ela já funcionou pra quem estava completamente desacreditado."
    },
    {
      question: "Minha rotina é uma loucura. E se eu não tiver tempo?",
      answer: "Esse método cabe até nos dias mais corridos. As ações são curtas, objetivas, e feitas pra encaixar em qualquer brecha do seu dia. O foco não é quantidade — é consistência."
    },
    {
      question: "Agora não é um bom momento… tô sem grana.",
      answer: "E quanto custa continuar parado? A procrastinação cobra caro: tempo perdido, metas adiadas, autoestima em queda. Isso aqui é um investimento mínimo com potencial de transformar tudo."
    },
    {
      question: "E se não funcionar pra mim?",
      answer: "Você tem 7 dias pra testar sem risco. Se não sentir diferença, é só pedir o reembolso com 1 clique. Simples assim."
    }
  ];

  return (
    <section className="section-container bg-[#121212] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-1/4 w-24 h-24 bg-primary rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 right-1/4 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            ❓ <span className="text-primary">Algo ainda te segurando?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Vamos eliminar, uma por uma, as dúvidas que mais travam quem está prestes a <strong className="text-white">mudar de vida</strong>.
          </p>
        </motion.div>

        {/* Objections Cards */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {objections.map((objection, index) => (
            <motion.div key={index} variants={cardVariants}>
               <Card className="h-full bg-gray-900/50 border border-gray-700/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 md:p-8">
                  {/* Question */}
                  <div className="flex items-start gap-3 mb-6">
                    <span className="text-2xl flex-shrink-0 mt-1">❌</span>
                    <h3 className="text-lg md:text-xl font-semibold text-white leading-tight">
                      "{objection.question}"
                    </h3>
                  </div>
                  
                  {/* Answer */}
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0 mt-1">👉</span>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                      {objection.answer.split(/(\*\*.*?\*\*)/g).map((part, i) => 
                        part.startsWith('**') && part.endsWith('**') ? 
                          <strong key={i} className="text-white font-semibold">
                            {part.slice(2, -2)}
                          </strong> : 
                          part
                      )}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button 
            size="lg" 
            className="text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            🚀 Começar agora
          </Button>
          <p className="text-sm text-gray-400 mt-4">
            Sua transformação começa hoje
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ObjectionsSection;