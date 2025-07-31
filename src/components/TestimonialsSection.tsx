import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const testimonials = [
    {
      name: "Lucas M.",
      role: "Estudante de Engenharia",
      text: "Esse eBook foi como um tapa na cara que eu precisava. Parei de adiar tudo e hoje tenho rotina, foco e resultados.",
      image: "/lovable-uploads/7d120ee6-3614-4b75-9c35-716d54490d67.png",
    },
    {
      name: "Jéssica A.",
      role: "Empreendedora",
      text: "Achei que seria mais um conteúdo motivacional... Mas me surpreendi. É técnico, prático e direto.",
      image: "/lovable-uploads/843446fe-638e-4efb-b885-ed3cd505325a.png",
    },
    {
      name: "Carlos R.",
      role: "Desenvolvedor",
      text: "Finalmente consegui terminar projetos que estavam parados há meses. O método realmente funciona!",
      image: "/lovable-uploads/aa5291bd-2417-4c1e-9a02-0bcc71a92507.png",
    },
    {
      name: "Marina C.",
      role: "Designer Gráfica",
      text: "Sofri por anos com a procrastinação... Esse método me fez levantar da cadeira e agir. Hoje sou mais produtiva do que nunca!",
      image: "/lovable-uploads/b862d5ae-6abb-44da-84f0-00a222f62906.png",
    },
    {
      name: "Eduardo F.",
      role: "Estudante de Direito",
      text: "Nunca pensei que um simples guia pudesse causar tanto impacto. Meu desempenho na faculdade dobrou. É direto, prático e poderoso.",
      image: "/lovable-uploads/c30e0487-2fa0-41d1-9a0b-699cb2855388.png",
    },
    {
      name: "Renata V.",
      role: "Psicóloga",
      text: "Passei a vida adiando meus objetivos. Agora, acordo com foco e clareza. Foi um divisor de águas pra mim.",
      image: "/lovable-uploads/cf8966e3-de0d-445f-9fbd-ee6c48daa7ff.png",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            🗣️ Histórias de Transformação
          </motion.h2>
          <motion.h3 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-700 mb-6"
          >
            Veja o Que Nossos Leitores Dizem
          </motion.h3>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Milhares de pessoas já transformaram suas vidas.
            <br />
            Essas são algumas das histórias reais de quem aplicou o método "Quebrando Correntes":
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-800 leading-relaxed">
                  💬 "{testimonial.text}"
                </p>
              </div>
              
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={itemVariants}
          className="text-center bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-8 border border-orange-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ⭐ Avaliação Média dos Leitores:
          </h3>
          
          <div className="flex justify-center items-center space-x-2 mb-4">
            <span className="text-4xl font-bold text-orange-600">4.9</span>
            <span className="text-2xl text-gray-700">/5</span>
            <div className="flex ml-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-6 h-6 ${i < 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                />
              ))}
            </div>
          </div>
          
          <p className="text-gray-700 text-lg">
            (Baseado em mais de 2.000 avaliações reais de leitores que aplicaram o método)
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;