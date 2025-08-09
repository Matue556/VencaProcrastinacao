
import React, { useState, useEffect } from 'react';
import { Clock, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 15,
    seconds: 0
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          setIsExpired(true);
          clearInterval(timer);
          return prevTime;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isExpired) {
    return (
      <motion.div 
        className="text-center py-4 px-6 mx-4 sm:mx-6 mb-6 bg-gradient-to-r from-red-900/90 to-red-800/90 backdrop-blur-sm border border-red-500/30 rounded-xl shadow-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center space-x-2 text-red-300">
          <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
          <p className="text-sm sm:text-lg font-bold">
            ⚠️ O desconto expirou! Tente novamente em breve.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="text-center py-4 px-6 mx-4 sm:mx-6 mb-6 bg-gradient-to-r from-blue-900/90 to-dark blue-800/90 backdrop-blur-sm border border-dark blue-500/30 rounded-xl shadow-2xl"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-center space-x-2 mb-3">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-orange-300" />
        </motion.div>
        <h3 className="text-sm sm:text-lg font-bold text-white-450">
          ⏰ Está oferta irá acabar em:
        </h3>
      </div>
      
      <div className="flex items-center justify-center space-x-4 sm:space-x-6">
        <motion.div 
          className="text-center"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-white bg-black/30 rounded-lg px-2 sm:px-4 py-1 sm:py-2">
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <div className="text-xs sm:text-sm text-white-300 mt-1 font-medium">
            HORAS
          </div>
        </motion.div>
        
        <div className="text-2xl sm:text-4xl text-orange-300 font-bold animate-pulse">:</div>
        
        <motion.div 
          className="text-center"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
        >
          <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-white bg-black/30 rounded-lg px-2 sm:px-4 py-1 sm:py-2">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div className="text-xs sm:text-sm text-white-300 mt-1 font-medium">
            MINUTOS
          </div>
        </motion.div>
        
        <div className="text-2xl sm:text-4xl text-orange-300 font-bold animate-pulse">:</div>
        
        <motion.div 
          className="text-center"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
        >
          <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-white bg-black/30 rounded-lg px-2 sm:px-4 py-1 sm:py-2">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className="text-xs sm:text-sm text-white-300 mt-1 font-medium">
            SEGUNDOS
          </div>
        </motion.div>
      </div>
      
      <motion.p 
        className="text-1x1 sm:text-sm text-orange-300 mt-7 font-big"
        animate={{ opacity: [0.9, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        🔥 Não perca essa oportunidade única!
      </motion.p>
    </motion.div>
  );
};

export default CountdownTimer;
