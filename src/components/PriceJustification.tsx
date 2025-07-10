
import React from 'react';
import { DollarSign, Users, Target, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const PriceJustification = () => {
  const justifications = [
    {
      icon: Users,
      text: "Preferimos alcançar milhares de pessoas a cobrar caro de poucos."
    },
    {
      icon: Target,
      text: "Você está levando um método testado com base em ciência e prática por menos do que custa um lanche."
    }
  ];

  return (
    <motion.section 
      className="py-8 sm:py-12 bg-black text-white relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 to-black"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="text-center mb-6">
            <div className="inline-flex items-center space-x-2 bg-orange-600 text-white px-4 py-2 rounded-full mb-4">
              <DollarSign className="w-4 h-4" />
              <span className="font-semibold text-sm">Valor Justo</span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Por que R$17,99 por algo que transforma sua vida?
            </h3>
            
            <p className="text-lg font-semibold text-orange-400 mb-4">
              Porque acreditamos que transformação de verdade deve ser acessível.
            </p>
          </div>
          
          <div className="space-y-4 mb-6">
            {justifications.map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-start space-x-3 p-4 rounded-lg bg-white/5 border border-white/10"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              >
                <item.icon className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="bg-gradient-to-r from-orange-900/30 to-orange-800/30 border border-orange-500/30 rounded-xl p-4 sm:p-6"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            <div className="text-center space-y-3">
              <p className="text-white text-base sm:text-lg font-semibold">
                <span className="text-orange-400">👉 Esse pode ser o investimento mais inteligente e impactante do seu dia.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm sm:text-base">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-orange-400" />
                  <span className="text-gray-300 font-medium">Menos de R$0,60 por dia</span>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                O que é mais caro: o valor do guia — ou seguir travado mais um mês?
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PriceJustification;
