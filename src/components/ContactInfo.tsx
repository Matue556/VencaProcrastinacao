
import React, { useState } from 'react';
import { Download, CheckCircle, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

const EbookDownload = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast({
        title: "Atenção",
        description: "Por favor, preencha seu nome e email para baixar o eBook.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const EMAILJS_SERVICE_ID = "service_i3h66xg";
      const EMAILJS_TEMPLATE_ID = "template_fgq53nh";
      const EMAILJS_PUBLIC_KEY = "wQmcZvoOqTAhGnRZ3";
      
      const templateParams = {
        from_name: name,
        from_email: email,
        message: `Nova solicitação de download do eBook "Quebrando Correntes" de ${name}.`,
        to_name: 'Quebrando Correntes',
        reply_to: email
      };
      
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "Sucesso!",
        description: "Em breve você receberá o eBook em seu email. Verifique também a caixa de spam.",
        variant: "default"
      });
      
      setEmail("");
      setName("");
      
      // Simular download (em um cenário real, você redirecionaria para o arquivo)
      setTimeout(() => {
        toast({
          title: "Download Iniciado!",
          description: "Seu eBook 'Quebrando Correntes' está sendo baixado.",
          variant: "default"
        });
      }, 2000);
      
    } catch (error) {
      console.error("Erro ao solicitar download:", error);
      
      toast({
        title: "Erro",
        description: "Houve um problema ao processar sua solicitação. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="download" className="bg-gradient-to-b from-orange-50 to-white py-[25px] md:py-[40px]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-orange-600 text-white rounded-full text-sm font-medium">
            Baixe Agora
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Comece Sua Transformação Hoje
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Baixe gratuitamente o eBook "Quebrando Correntes" e descubra como vencer a procrastinação de uma vez por todas.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
            <form onSubmit={handleDownload} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Seu Nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Digite seu nome"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Seu Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Digite seu melhor email"
                  disabled={isSubmitting}
                />
              </div>
              
              <Button
                type="submit"
                className="w-full py-4 text-lg bg-orange-600 hover:bg-orange-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Processando..."
                ) : (
                  <>
                    <Download className="mr-2 w-5 h-5" />
                    Baixar eBook Gratuitamente
                  </>
                )}
              </Button>
            </form>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                  <span>100% Gratuito</span>
                </div>
                <div className="flex items-center">
                  <Zap className="w-4 h-4 text-orange-500 mr-1" />
                  <span>Download Imediato</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                  <span>Sem Spam</span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-sm text-gray-500 mt-4">
            Ao baixar o eBook, você concorda em receber emails com dicas exclusivas sobre produtividade. 
            Você pode cancelar a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EbookDownload;
