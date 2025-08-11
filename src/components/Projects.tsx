
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
  const isMobile = useIsMobile();

  const testimonials = [
    {
      quote: "Esse eBook foi como um tapa na cara que eu precisava. Parei de adiar tudo e hoje tenho rotina, foco e resultados.",
      author: "Lucas M.",
      role: "Estudante de Engenharia",
      avatar: "/lovable-uploads/bb6e9a17-8122-498b-810e-c94ef2a23410.png"
    },
    {
      quote: "Achei que seria mais um conteúdo motivacional... Mas me surpreendi. É técnico, prático e direto.",
      author: "Jéssica A.",
      role: "Empreendedora",
      avatar: "/lovable-uploads/a5e5e703-0b43-447b-b83f-79bad001a7a6.png"
    },
    {
      quote: "Finalmente consegui terminar projetos que estavam parados há meses. O método realmente funciona!",
      author: "Carlos R.",
      role: "Desenvolvedor",
      avatar: "https://imgur.com/sQ1i0LZ.png"
    },
    {
      quote: "Sofri por anos com a procrastinação... Esse método me fez levantar da cadeira e agir. Hoje sou mais produtiva do que nunca!",
      author: "Marina C.",
      role: "Designer Gráfica",
      avatar: "https://imgur.com/uzASPgc.png"
    },
    {
      quote: "Nunca pensei que um simples guia pudesse causar tanto impacto. Meu desempenho na faculdade dobrou. É direto, prático e poderoso.",
      author: "Eduardo F.",
      role: "Estudante de Direito",
      avatar: "https://imgur.com/r8OPw3j.png"
    },
    {
      quote: "Passei a vida adiando meus objetivos. Agora, acordo com foco e clareza. Foi um divisor de águas pra mim.",
      author: "Renata V.",
      role: "Psicóloga",
      avatar: "https://imgur.com/XzO4GkO.png"
    }
  ];

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

  return (
    <section id="testimonials" className="bg-gray-50 py-16 md:py-24">
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="inline-block mb-4 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
            Histórias de Transformação
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Veja o Que Nossos Leitores Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Milhares de pessoas já transformaram suas vidas. Essas são algumas das histórias reais 
            de quem aplicou o método "Quebrando Correntes".
          </p>
        </motion.div>

        <motion.div variants={containerVariants}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: isMobile ? 1 : 3,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/3">
                  <motion.div
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative hover:shadow-xl transition-all duration-300 h-full"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    <div className="absolute top-6 right-6 text-orange-200">
                      <Quote className="w-8 h-8" />
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex text-orange-400 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-gray-700 text-lg leading-relaxed italic">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="mr-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.author}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {!isMobile && (
              <>
                <CarouselPrevious className="hidden md:flex -left-12 bg-white/90 hover:bg-white shadow-lg border-gray-200" />
                <CarouselNext className="hidden md:flex -right-12 bg-white/90 hover:bg-white shadow-lg border-gray-200" />
              </>
            )}
          </Carousel>
        </motion.div>

        <motion.div 
          className="text-center mt-16 bg-white rounded-2xl p-8 shadow-lg"
          variants={itemVariants}
        >
          <div className="inline-flex items-center space-x-2 text-orange-600 mb-4">
            <Star className="w-6 h-6 fill-current" />
            <span className="font-bold text-2xl">4.9/5</span>
            <Star className="w-6 h-6 fill-current" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Avaliação Média dos Leitores
          </h3>
          <p className="text-gray-600">
            Baseado em mais de 2.000 avaliações de leitores que aplicaram o método
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
