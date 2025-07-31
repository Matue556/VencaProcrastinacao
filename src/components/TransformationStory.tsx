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
    <section className="section-container bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Eu Cansei de Me Sabotar.
            <br />
            <span className="text-primary">E Isso Mudou Tudo.</span>
          </h2>
        </motion.div>

        {/* Content blocks */}
        <motion.div 
          className="space-y-12 md:space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Block 1 */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6">
              O despertador tocava, e eu apertava <strong>"só mais cinco minutinhos"</strong>.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Prometia que ia começar na segunda.<br />
              Segunda virava terça.<br />
              Terça virava <strong>mês que vem</strong>.
            </p>
            <p className="text-lg md:text-xl text-foreground mb-6">
              Eu via meus planos escorrendo pelos dedos:
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-lg md:text-xl">
              <div className="flex items-center gap-3">
                <Dumbbell className="text-primary" size={24} />
                <span>Treinos adiados.</span>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen className="text-primary" size={24} />
                <span>Estudos ignorados.</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="text-primary" size={24} />
                <span>Metas postergadas.</span>
              </div>
            </div>
          </motion.div>

          {/* Separator */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="w-32 h-px bg-border"></div>
          </motion.div>

          {/* Block 2 */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6">
              A <strong>procrastinação</strong> me dominava.<br />
              E o pior? Eu <strong>sabia o preço</strong> que estava pagando.
            </p>
          </motion.div>

          {/* Separator */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="w-32 h-px bg-border"></div>
          </motion.div>

          {/* Block 3 */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              Até que um dia, depois de mais uma semana improdutiva,<br />
              eu me olhei no espelho… e me vi <strong>estagnado</strong>.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Senti <strong>vergonha</strong>.<br />
              Não pelos erros.<br />
              Mas por saber que eu <strong>podia mais</strong> —<br />
              e ainda assim <strong>não conseguia sair do lugar</strong>.
            </p>
          </motion.div>

          {/* Separator */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="w-32 h-px bg-border"></div>
          </motion.div>

          {/* Block 4 */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
              Foi aí que tomei uma decisão:
            </p>
            <p className="text-lg md:text-xl text-primary font-semibold mb-8">
              Eu ia entender o que fazia meu cérebro me sabotar.
            </p>
            <p className="text-lg md:text-xl text-foreground mb-6">
              Estudei obsessivamente:
            </p>
            <div className="flex flex-col gap-4 text-lg md:text-xl">
              <div className="flex items-center justify-center gap-3">
                <Brain className="text-primary" size={24} />
                <span>Comportamento humano</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Zap className="text-primary" size={24} />
                <span>Foco e hábitos</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <HeartHandshake className="text-primary" size={24} />
                <span>Mentalidade realista</span>
              </div>
            </div>
          </motion.div>

          {/* Separator */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="w-32 h-px bg-border"></div>
          </motion.div>

          {/* Block 5 */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              Testei tudo. Eliminei o que era <strong>papo furado</strong>.<br />
              E criei um método que <strong>funcionou</strong>.<br />
              Funcionou pra mim.<br />
              E hoje, já funcionou pra <strong>centenas de pessoas</strong>.
            </p>
          </motion.div>

          {/* Separator */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="w-32 h-px bg-border"></div>
          </motion.div>

          {/* Block 6 */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              Se você sente que tem um <strong>potencial enorme preso dentro de você</strong>...
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              Se está <strong>cansado de se prometer mil coisas — e nunca cumprir</strong>...
            </p>
            <p className="text-xl md:text-2xl text-primary font-semibold">
              Você está no <strong>lugar certo</strong>.
            </p>
          </motion.div>

          {/* Separator */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="w-32 h-px bg-border"></div>
          </motion.div>

          {/* Block 7 */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6">
              <strong>O Quebrando Correntes</strong> é pra quem vive nesse ciclo vicioso de adiar e se culpar.
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
              É pra quem sabe que <strong>pode mais</strong> —<br />
              mas ainda não descobriu <strong>como destravar</strong>.
            </p>
          </motion.div>

          {/* Highlighted final message */}
          <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20 shadow-lg">
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                Se você permitir,<br />
                essa pode ser a <strong className="text-primary">virada da sua vida</strong>.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformationStory;