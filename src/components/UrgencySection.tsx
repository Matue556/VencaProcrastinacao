
import React from 'react';
import { Clock, TrendingDown, Users, Zap, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const UrgencySection = () => {
  return (
    <motion.section 
      className="py-8 sm:py-12 bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border-y border-orange-200 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-transparent"></div>
      <motion.div 
        className="absolute top-4 right-4 w-20 h-20 bg-orange-200/20 rounded-full"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-4 left-4 w-16 h-16 bg-amber-200/20 rounded-full"
        animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div 
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full mb-6 shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Clock className="w-5 h-5" />
            </motion.div>
            <span className="font-bold text-base">⚠️ ATENÇÃO</span>
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Zap className="w-4 h-4" />
            </motion.div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
            <motion.div 
              className="flex items-center justify-center space-x-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md border border-orange-200"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(234, 88, 12, 0.15)" }}
            >
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 5, -5, 0] 
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <TrendingDown className="w-6 h-6 text-orange-600" />
              </motion.div>
              <div className="text-center">
                <span className="font-bold text-orange-700 text-sm sm:text-base block">
                  🔥 Desconto de lançamento
                </span>
                <span className="text-orange-600 text-xs sm:text-sm font-medium">
                  por tempo limitado
                </span>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-center space-x-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md border border-orange-200"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(234, 88, 12, 0.15)" }}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, -5, 5, 0] 
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Users className="w-6 h-6 text-gray-700" />
              </motion.div>
              <div className="text-center">
                <span className="font-bold text-gray-700 text-sm sm:text-base block">
                  +2.000 pessoas
                </span>
                <span className="text-gray-600 text-xs sm:text-sm font-medium">
                  já transformadas
                </span>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="bg-gradient-to-r from-orange-600/10 to-orange-500/10 backdrop-blur-sm border-2 border-orange-300 rounded-2xl p-6 sm:p-8 shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0] 
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Target className="w-6 h-6 text-orange-600" />
              </motion.div>
              <motion.span 
                className="text-orange-600 font-bold text-lg sm:text-xl"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                👉 Mais de 2.000 pessoas já tomaram essa decisão.
              </motion.span>
            </div>
            
            <motion.p 
              className="text-gray-800 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Se você está vendo essa página agora, essa pode ser a sua{' '}
              <motion.span 
                className="text-orange-600 font-bold bg-orange-100 px-2 py-1 rounded"
                animate={{ backgroundColor: ["#fed7aa", "#ffedd5", "#fed7aa"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                chance de destravar
              </motion.span>
              {' '}o que está travado há meses.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default UrgencySection;
