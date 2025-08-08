import { motion } from "framer-motion";

const ThreePillarsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const pillars = [
    {
      icon: "🧠",
      title: "Clareza na Rotina",
      description: "Crie uma rotina produtiva de verdade com métodos práticos e simples."
    },
    {
      icon: "🧪",
      title: "Método Prático e Validado",
      description: "Baseado em neurociência, comportamento humano e psicologia."
    },
    {
      icon: "🌍",
      title: "Para Todos os Perfis",
      description: "Estudantes, criadores, empreendedores, CLT..."
    }
  ];

  return (
    <section className="py-10 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5"></div>
      
      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          {/* Main Title */}
          <motion.h2 
            variants={itemVariants}
            className="text-white text-3xl md:text-4xl lg:text-5xl font-black mb-4"
          >
            🔥 Os 3 Pilares da Transformação
          </motion.h2>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group text-center"
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-6 md:p-8 hover:border-orange-500/50 hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 h-full">
                  {/* Icon */}
                  <div className="text-5xl md:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {pillar.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-orange-500 text-xl md:text-2xl font-bold mb-4">
                    {pillar.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white text-base md:text-lg leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThreePillarsSection;