
import { Download } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Erro",
        description: "Por favor, digite seu email.",
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
        from_name: "Assinante Newsletter",
        from_email: email,
        message: `Nova inscrição na newsletter do Quebrando Correntes.`,
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
        description: "Obrigado por se inscrever! Você receberá dicas exclusivas em breve.",
        variant: "default"
      });
      
      setEmail("");
    } catch (error) {
      console.error("Erro ao inscrever na newsletter:", error);
      
      toast({
        title: "Erro",
        description: "Houve um problema ao processar sua inscrição. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-10 border-b border-gray-700">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-orange-400 mb-2">Quebrando Correntes</h3>
              <p className="text-gray-400 text-sm">Transforme sua Vida com Ação</p>
            </div>
            <p className="text-gray-300 mb-6">
              "Quebrando Correntes" é um guia prático e direto para quem está cansado de procrastinar 
              e quer transformar a vida com ação. Métodos baseados em ciência e experiências reais 
              para criar uma rotina de disciplina e foco.
            </p>
            <div className="bg-orange-600/20 rounded-lg p-4 border border-orange-500/30">
              <h4 className="font-semibold text-orange-400 mb-2">✨ O que você vai encontrar:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Método testado para vencer a procrastinação</li>
                <li>• Plano de 30 dias com ações práticas</li>
                <li>• Técnicas baseadas em neurociência</li>
                <li>• Estratégias para criar foco e disciplina</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Receba Dicas Exclusivas</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Cadastre-se e receba conteúdos exclusivos sobre produtividade, mindset e transformação pessoal.
            </p>
            <form className="space-y-4" onSubmit={handleSubscribe}>
              <div>
                <input 
                  type="email" 
                  placeholder="Seu melhor email" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <button 
                type="submit" 
                className="w-full px-4 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Inscrevendo..." : (
                  <>
                    Quero Receber Dicas
                    <Download className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </form>
            <p className="text-gray-500 text-xs mt-2">
              Sem spam. Você pode cancelar a qualquer momento.
            </p>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Quebrando Correntes. Todos os direitos reservados.
          </p>
          <div className="text-center">
            <p className="text-gray-500 text-xs">
              Um método criado para transformar vidas através da ação
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
