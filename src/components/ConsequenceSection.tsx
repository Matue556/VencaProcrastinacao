
import React from 'react';
import { AlertTriangle, Clock, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const ConsequenceSection = () => {
  const consequences = [
    {
      icon: AlertTriangle,
      text: "Você vai seguir se cobrando e se frustrando por adiar o que importa."
    },
    {
      icon: FileText,
      text: "Seus projetos vão continuar empilhando, parados no papel."
    },
    {
      icon: Clock,
      text: 'A sensação de "eu sei o que tenho que fazer, mas não faço" vai continuar pesando.'
    }
  ];

  return (
    <motion.section 
      className="py-8 sm:py-12 bg-gradient-to-b from-gray-50 to-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              E se você deixar pra depois... o que continua igual?
            </h3>
          </div>
          
          <div className="space-y-4 mb-6">
            {consequences.map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              >
                <item.icon className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-4 sm:p-6"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed text-center">
              <span className="text-orange-600 font-semibold">👉 Às vezes, a única coisa que falta é um método real para sair do lugar.</span>
              <br />
              <span className="text-gray-700">Esse é o primeiro passo. A escolha está nas suas mãos agora.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ConsequenceSection;
