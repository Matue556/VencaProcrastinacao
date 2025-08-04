import { motion } from "framer-motion";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import testimonialLucas from "@/assets/testimonial-lucas.jpg";
import testimonialJessica from "@/assets/testimonial-jessica.jpg";
import testimonialCarlos from "@/assets/testimonial-carlos.jpg";
import testimonialMarina from "@/assets/testimonial-marina.jpg";
import testimonialEduardo from "@/assets/testimonial-eduardo.jpg";
import testimonialRenata from "@/assets/testimonial-renata.jpg";

const TestimonialsSection = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

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
      image: testimonialLucas,
    },
    {
      name: "Jéssica A.",
      role: "Empreendedora",
      text: "Achei que seria mais um conteúdo motivacional... Mas me surpreendi. É técnico, prático e direto.",
      image: testimonialJessica,
    },
    {
      name: "Carlos R.",
      role: "Desenvolvedor",
      text: "Finalmente consegui terminar projetos que estavam parados há meses. O método realmente funciona!",
      image: testimonialCarlos,
    },
    {
      name: "Marina C.",
      role: "Designer Gráfica",
      text: "Sofri por anos com a procrastinação... Esse método me fez levantar da cadeira e agir. Hoje sou mais produtiva do que nunca!",
      image: testimonialMarina,
    },
    {
      name: "Eduardo F.",
      role: "Estudante de Direito",
      text: "Nunca pensei que um simples guia pudesse causar tanto impacto. Meu desempenho na faculdade dobrou. É direto, prático e poderoso.",
      image: testimonialEduardo,
    },
    {
      name: "Renata V.",
      role: "Psicóloga",
      text: "Passei a vida adiando meus objetivos. Agora, acordo com foco e clareza. Foi um divisor de águas pra mim.",
      image: testimonialRenata,
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
          className="mb-12"
        >
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    variants={itemVariants}
                    className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300 h-full"
                  >
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 md:w-12 md:h-12 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="text-center md:text-left">
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-gray-800 leading-relaxed text-center md:text-left">
                        💬 "{testimonial.text}"
                      </p>
                    </div>
                    
                    <div className="flex justify-center md:justify-start text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
            </div>
          </Carousel>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={itemVariants}
          className="text-center bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-8 border border-orange-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            📊 4.9/5 — Avaliação Média dos Leitores
          </h3>
          
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-6 h-6 text-yellow-400 fill-current" 
                />
              ))}
            </div>
          </div>
          
          <p className="text-gray-700 text-lg">
            (Baseado em mais de 2.000 avaliações reais de quem aplicou o método)
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;