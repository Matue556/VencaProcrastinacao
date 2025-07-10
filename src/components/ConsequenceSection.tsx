
import React from 'react';
import { AlertTriangle, Clock, FileText, Target, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ConsequenceSection = () => {
  const consequences = [
    {
      icon: AlertTriangle,
      text: "Você vai seguir se cobrando e se frustrando por adiar o que importa.",
      color: "text-red-500"
    },
    {
      icon: FileText,
      text: "Seus projetos vão continuar empilhando, parados no papel.",
      color: "text-orange-500"
    },
    {
      icon: Clock,
      text: 'A sensação de "eu sei o que tenho que fazer, mas não faço" vai continuar pesando.',
      color: "text-amber-500"
    }
  ];

  return (
    <motion.section 
      className="py-8 sm:py-12 bg-gradient-to-b from-gray-50 via-gray-100 to-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background effects */}
      <motion.div 
        className="absolute top-0 left-0 w-32 h-32 bg-red-200/20 rounded-full blur-xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-40 h-40 bg-orange-200/20 rounded-full blur-xl"
        animate={{ 
          x: [0, -30, 0],
          y: [0, -40, 0],
          scale: [1.2, 1, 1.2] 
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="bg-white border-2 border-gray-200 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 via-transparent to-orange-50/30 pointer-events-none"></div>
          
          <div className="text-center mb-8 relative z-10">
            <motion.div
              className="inline-flex items-center space-x-3 mb-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1] 
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                E se você deixar pra depois...
              </h3>
              <motion.div
                animate={{ 
                  rotate: [0, -10, 10, 0],
                  scale: [1, 1.2, 1] 
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Clock className="w-8 h-8 text-orange-500" />
              </motion.div>
            </motion.div>
            
            <motion.h4 
              className="text-lg sm:text-xl font-semibold text-red-600 mb-6"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              o que continua igual?
            </motion.h4>
          </div>
          
          <div className="space-y-4 mb-8 relative z-10">
            {consequences.map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-start space-x-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 shadow-md relative overflow-hidden group"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.15, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)" 
                }}
              >
                {/* Hover effect background */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-red-50/50 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, 8, -8, 0],
                    scale: [1, 1.1, 1] 
                  }}
                  transition={{ 
                    duration: 2 + index * 0.3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.2 
                  }}
                >
                  <item.icon className={`w-6 h-6 ${item.color} flex-shrink-0 relative z-10`} />
                </motion.div>
                
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed relative z-10 flex-1">
                  {item.text}
                </p>
                
                <motion.div
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4 text-orange-500" />
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="bg-gradient-to-r from-orange-500/10 via-orange-400/10 to-amber-500/10 border-2 border-orange-300 rounded-2xl p-6 sm:p-8 relative overflow-hidden"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-orange-200/20 to-amber-200/20"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 relative z-10">
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 15, -15, 0] 
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Target className="w-8 h-8 text-orange-600" />
              </motion.div>
              
              <div className="text-center sm:text-left">
                <motion.div 
                  className="mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <p className="text-orange-600 font-bold text-base sm:text-lg mb-2">
                    👉 Você não está comprando apenas um método.
                  </p>
                  <p className="text-orange-600 font-bold text-base sm:text-lg mb-2">
                    Está comprando algo que pode transformar sua vida.
                  </p>
                  <p className="text-gray-700 font-semibold text-base sm:text-lg mb-3">
                    E essa escolha só depende de você.
                  </p>
                </motion.div>
                
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-2 sm:space-y-0 sm:space-x-3">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Zap className="w-5 h-5 text-orange-500" />
                  </motion.div>
                  <motion.div 
                    className="text-center sm:text-left"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    <span className="text-orange-600 font-black text-lg sm:text-xl bg-gradient-to-r from-orange-100 to-red-100 px-4 py-2 rounded-full shadow-md">
                      🔥 Só você pode quebrar essas correntes.
                    </span>
                  </motion.div>
                </div>
                
                <motion.p 
                  className="text-gray-700 font-semibold text-base sm:text-lg mt-3"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                >
                  Adquira agora e mude sua história.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ConsequenceSection;
