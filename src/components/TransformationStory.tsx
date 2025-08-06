import React from 'react';
import { motion } from 'framer-motion';
import { Target, BookOpen, Dumbbell, Brain, Zap, HeartHandshake } from 'lucide-react';

const TransformationStory = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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
    <section className="section-container bg-[#121212] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-1/4 w-24 h-24 bg-primary rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 right-1/4 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Eu Cansei De Deixar Tudo Para Depois.. <span className="text-white">E O que Eu Fiz Mudou Tudo.</span>
          </h2>
        </motion.div>

        {/* Story Content */}
        <motion.div 
          className="space-y-8 md:space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section 1: The Beginning */}
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              O despertador tocava, e eu apertava na mente o botão <strong className="text-white">"só mais cinco minutinhos"</strong>.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Prometia que ia começar amanhã, na segunda.<br />
              <strong className="text-white">Segunda virava terça.<br />
              Terça virava mês que vem e assim ia.</strong>
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Eu via meus planos indo cada vez mais por água abaixo
            </p>
            <div className="space-y-2 ml-4">
              <p className="text-lg md:text-xl text-gray-300">Treinos adiados.</p>
              <p className="text-lg md:text-xl text-gray-300">Estudos ignorados.</p>
              <p className="text-lg md:text-xl text-gray-300">Metas prolongadas.</p>
            </div>
            <p className="text-lg md:text-xl text-primary font-semibold">
              A procrastinação me dominava.
            </p>
            <p className="text-lg md:text-xl font-semibold text-white">
              E o pior? Eu sabia o que estava fazendo e as consequências disso.
            </p>
          </motion.div>

          <motion.div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" variants={itemVariants} />

          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Até que um dia, depois de mais uma semana improdutiva,<br />
              <strong className="text-white">eu me olhei no espelho… e me vi totalmente estagnado.</strong>
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Senti vergonha.<br />
              <strong className="text-white">Não pelos erros.<br />
              Mas por saber que eu podia mais, <br />
              e ainda assim não conseguia sair do lugar.</strong>
            </p>
          </motion.div>

          <motion.div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" variants={itemVariants} />

          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-lg md:text-xl font-semibold text-white">
              Foi aí que tomei uma decisão:
            </p>
            <p className="text-lg md:text-xl text-white font-semibold">
              Eu queria entender o que fazia meu cérebro me sabotar tão fácil.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Estudei por longos períodos:
            </p>
            <div className="space-y-2 ml-4">
              <p className="text-lg md:text-xl text-white">- Comportamento humano, comportamento mental</p>
              <p className="text-lg md:text-xl text-white">- hábitos e Disciplina</p>
              <p className="text-lg md:text-xl text-white">- Gestão de tempo</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Testei tudo. Eliminei o que sabia que não funcionava<br />
              <strong className="text-white">E criei um método que finalmente funcionou.<br />
              Funcionou pra mim.<br />
              E hoje, já funcionou para centenas de pessoas que se viam assim como eu, estagnadas, perdidas e paradas pela procrastinação.</strong>
            </p>
          </motion.div>

          <motion.div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" variants={itemVariants} />

          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Todos nós temos um <strong className="text-white">potencial enorme dentro de nós.</strong>
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Se você quer realmente parar de prometer mil coisas <strong className="text-white">e começar a finalmente agir de verdade</strong>
            </p>
            <p className="text-lg md:text-xl font-semibold text-white">
              Você encontrou o lugar certo.
            </p>
            
            <div className="p-6 md:p-8 bg-primary/10 border border-primary/20 rounded-2xl">
              <p className="text-lg md:text-xl text-white font-semibold leading-relaxed">
                O Método Quebrando Correntes foi desenvolvido para quem vive nesse ciclo vicioso de adiamento e culpa.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-4">
                Feito para quem quer muito mais, não apenas produtividade <br />
                <strong className="text-white">mas sim destravar totalmente o potencial que você sabe que tem.</strong>
              </p>
            </div>
            
            <p className="text-xl md:text-3xl font-bold text-center text-white">
              Só você tem a escolha de alcançar seu potencial máximo,<br />
              essa pode finalmente ser a virada da sua vida.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformationStory;
