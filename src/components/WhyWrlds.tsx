
import { CheckCircle, Zap, Target, Heart } from "lucide-react";
import { motion } from "framer-motion";

const WhyQuebrando = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      title: "Liberta você dos ciclos de adiamento",
      description: "Quebre de vez os padrões que te mantêm preso na procrastinação"
    },
    {
      icon: <Target className="w-8 h-8 text-orange-600" />,
      title: "Te ajuda a criar foco e rotina",
      description: "Desenvolva a capacidade de manter concentração e consistência"
    },
    {
      icon: <Heart className="w-8 h-8 text-orange-600" />,
      title: "Redireciona sua mentalidade para o que importa",
      description: "Transforme sua forma de pensar e priorize o que realmente faz diferença"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-orange-600" />,
      title: "Gera ação mesmo nos dias ruins",
      description: "Aprenda a manter momentum mesmo quando a motivação não está presente"
    }
  ];

  const differentials = [
    "Sem enrolação — direto ao ponto",
    "Estratégias que funcionam no mundo real", 
    "Pensado para quem já tentou 'de tudo' e ainda não conseguiu"
  ];

  return (
    <section className="bg-black text-white py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-black"></div>
      
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="inline-block mb-4 px-4 py-2 bg-orange-600 text-white rounded-full text-sm font-medium">
            Por que este eBook é Diferente?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O Que Este Guia Faz por Você
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Não é mais um livro motivacional. É um sistema prático, testado e validado 
            para quem está cansado de promessas vazias.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex-shrink-0 bg-orange-600/20 p-3 rounded-lg">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="bg-gradient-to-r from-orange-600/20 to-orange-800/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-orange-500/30"
          variants={itemVariants}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Diferenciais que Fazem a Diferença
            </h3>
            <p className="text-gray-300 text-lg">
              Criado para quem já tentou outros métodos e quer algo que realmente funcione
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentials.map((differential, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl bg-white/5 border border-white/10"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium">{differential}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
        >
          <div className="inline-flex items-center space-x-2 text-orange-400 mb-4">
            <Zap className="w-5 h-5" />
            <span className="font-medium">Transformação Garantida</span>
            <Zap className="w-5 h-5" />
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Mais de <span className="text-orange-400 font-bold">10.000 pessoas</span> já 
            transformaram suas vidas com este método. Agora é a sua vez.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyQuebrando;
