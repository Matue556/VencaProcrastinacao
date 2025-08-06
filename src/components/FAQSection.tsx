import React from 'react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Unlock } from 'lucide-react';
import { motion } from 'framer-motion';

const FAQSection = () => {
  const handlePurchase = () => {
    // Redirecionamento para o checkout (mesmo link da oferta)
    window.open('https://go.disruptybr.com.br/xleccchllq', '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const faqs = [
    {
      question: "❓ Preciso de muito tempo por dia para aplicar o método?",
      answer: "💬 Não. O método foi feito para se adaptar à sua rotina. Mesmo com **10 minutos por dia** você já começa a ter resultados."
    },
    {
      question: "❓ Já tentei de tudo. E se eu não conseguir aplicar?",
      answer: "💬 O Quebrando Correntes é **simples, direto ao ponto** e feito para funcionar até quando você está sem motivação. Nada de teoria chata — é **prática real**. E você ainda tem **acesso vitalício** para revisar quando quiser."
    },
    {
      question: "❓ O acesso é imediato? Como recebo o conteúdo?",
      answer: "💬 Sim! Assim que você finalizar a compra, tudo chega direto no seu **e-mail** em poucos minutos."
    },
    {
      question: "❓ Por quanto tempo terei acesso ao conteúdo?",
      answer: "💬 O acesso é **vitalício**. Compre uma vez, e o conteúdo é seu **para sempre**."
    },
    {
      question: "❓ É um curso? Tem vídeos?",
      answer: "💬 Não. É um **eBook direto ao ponto** com leitura leve e aplicação rápida. Você lê e já **coloca em prática** no mesmo dia."
    },
    {
      question: "❓ E se eu não gostar? Tem garantia?",
      answer: "💬 Sim! Você tem **7 dias de garantia incondicional**. Não precisa justificar. Se não gostar, devolvemos **100% do seu dinheiro**."
    }
  ];

  const formatAnswer = (answer: string) => {
    return answer.split('**').map((part, index) => {
      if (index % 2 === 1) {
        return <span key={index} className="text-orange-400 font-bold">{part}</span>;
      }
      return part;
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Title Section */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight">
              🧠 <strong>Ainda com dúvidas?</strong>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Abaixo estão as perguntas mais comuns antes de tomar a decisão. Talvez a sua já esteja aqui:
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-gray-900/50 backdrop-blur-sm border border-orange-500/20 rounded-2xl px-6 py-2 hover:border-orange-500/50 hover:bg-gray-900/70 transition-all duration-300"
                >
                  <AccordionTrigger className="text-white text-lg md:text-xl font-semibold text-left hover:text-orange-300 transition-colors duration-300 hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-200 text-base md:text-lg leading-relaxed pb-6">
                    {formatAnswer(faq.answer)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
                👉 <strong>Quero Vencer a Procrastinação Agora</strong>
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

export default FAQSection;