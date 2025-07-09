
import React from 'react';
import { Clock, TrendingDown, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const UrgencySection = () => {
  return (
    <motion.section 
      className="py-8 sm:py-12 bg-gradient-to-r from-orange-50 to-amber-50 border-y border-orange-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div 
            className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full mb-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <Clock className="w-4 h-4" />
            <span className="font-semibold text-sm">Atenção</span>
          </motion.div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4">
            <div className="flex items-center space-x-2 text-orange-700">
              <TrendingDown className="w-5 h-5" />
              <span className="font-medium text-sm sm:text-base">Desconto de lançamento por tempo limitado.</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Users className="w-5 h-5" />
              <span className="font-medium text-sm sm:text-base">Já são mais de 2.000 pessoas transformadas.</span>
            </div>
          </div>
          
          <motion.p 
            className="text-gray-800 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <span className="text-orange-600 font-semibold">👉 Mais de 2.000 pessoas já tomaram essa decisão.</span> Se você está vendo essa página agora, essa pode ser a sua chance de destravar o que está travado há meses.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default UrgencySection;
