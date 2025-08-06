import { motion } from "framer-motion";

const TransformativeBenefitsSection = () => {
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

  const benefits = [
    "Você para de se sabotar e fica sem depender de motivação",
    "Você aprende a fazer mesmo cansado, sem tempo e sem vontade",
    "Você quebra qualquer tarefa em passos tão simples que é impossível travar",
    "Você começa a aplicar no mesmo dia, sem enrolação",
    "Você cria consistência com esforço mínimo",
    "Você finalmente recupera o controle da sua vida."
  ];

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
          className="max-w-5xl mx-auto text-center"
        >
          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-orange-500 text-xl md:text-2xl font-bold mb-6"
          >
            Não é só produtividade. É liberdade.
          </motion.p>

          {/* Main Title */}
          <motion.h2 
            variants={itemVariants}
            className="text-white text-3xl md:text-5xl lg:text-6xl font-black mb-16 leading-tight"
          >
              O Que Muda Quando Você Para de Procrastinar
          </motion.h2>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-6 md:p-8 hover:border-orange-500/50 hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <span className="text-green-400 text-2xl md:text-3xl font-bold">✅</span>
                    </div>
                    <p className="text-white text-lg md:text-xl font-semibold leading-relaxed text-left group-hover:text-orange-100 transition-colors duration-300">
                      {benefit}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Impact Statement */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-orange-500/20 via-orange-600/20 to-orange-500/20 border-2 border-orange-500/40 rounded-2xl p-8 md:p-10"
          >
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-4xl">🔥</span>
              <h3 className="text-white text-2xl md:text-3xl font-bold">
                Isso É Transformação Real
              </h3>
              <span className="text-4xl">🔥</span>
            </div>
            <p className="text-orange-100 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Não é sobre <em>motivação temporária</em>. É sobre <strong className="text-orange-300">mudança permanente</strong> no seu comportamento e na sua vida.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformativeBenefitsSection;
