import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
// Usar as imagens dos uploads existentes como placeholder
// Você pode substituir pelos uploads corretos das imagens do Imgur

const MinimalTestimonials = () => {
  const testimonials = [
    {
      name: "Roberto carlos",
      image: "https://i.imgur.com/pApvouN.jpg" // Placeholder - substitua pela imagem correta
    },
    {
      name: "João Ferreira", 
      image: "https://i.imgur.com/2eTWePu.jpg" // Placeholder - substitua pela imagem correta
    },
    {
      name: "pintonaldo santos",
      image: "https://i.imgur.com/YTtKDIp.jpg" // Placeholder - substitua pela imagem correta
    }
  ];

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
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="w-full mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={`Depoimento de ${testimonial.name}`}
                    className="w-full h-auto rounded-lg object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center">
                  {testimonial.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Quero começar hoje mesmo
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MinimalTestimonials;
