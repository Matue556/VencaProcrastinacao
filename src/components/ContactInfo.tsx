
import React from 'react';
import { Zap, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OfferCard = () => {
  const handlePurchase = () => {
    // Aqui você pode integrar com sistema de pagamento
    window.open('https://pay.hotmart.com/seu-link-de-pagamento', '_blank');
  };

  return (
    <section id="offer" className="bg-black text-white py-[25px] md:py-[40px] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-black"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-orange-600 text-white rounded-full text-sm font-medium">
            🎯 Oferta Especial
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Comece Agora sua Transformação
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="text-2xl text-gray-400 line-through">De R$97,00</span>
            <span className="text-4xl md:text-5xl font-bold text-orange-600">R$17,99</span>
          </div>
          <p className="text-gray-300 text-lg">
            Acesso completo ao método que já transformou milhares de vidas
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-2xl p-8 relative overflow-hidden">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2 text-white">O que você vai receber:</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Acesso imediato ao Guia Quebrando Correntes</h4>
                    <p className="text-gray-300 text-sm">Método completo em formato digital</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Técnicas comprovadas contra a procrastinação</h4>
                    <p className="text-gray-300 text-sm">Baseadas em neurociência e psicologia comportamental</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Plano prático de 30 dias para transformar sua vida</h4>
                    <p className="text-gray-300 text-sm">Passo a passo estruturado para resultados garantidos</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">BÔNUS EXCLUSIVO: Checklist de produtividade</h4>
                    <p className="text-gray-300 text-sm">Ferramenta prática para acelerar seus resultados</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-900/30 to-yellow-900/30 rounded-lg p-6 border border-orange-500/30">
                <div className="text-center">
                  <p className="text-sm text-gray-300 mb-2">⏰ Oferta por tempo limitado</p>
                  <p className="text-orange-400 font-semibold">Garante já o seu desconto de 81% OFF</p>
                </div>
              </div>
              
              <Button
                onClick={handlePurchase}
                className="w-full py-6 text-xl bg-orange-600 hover:bg-orange-700 text-white rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 font-bold relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Quero Iniciar Minha Transformação Agora
                  <Zap className="ml-3 w-6 h-6 group-hover:scale-125 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <div className="text-center">
                <div className="flex items-center justify-center space-x-6 text-gray-300">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-1" />
                    <span className="text-base font-medium">Pagamento Seguro</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 text-orange-400 mr-1" />
                    <span className="text-lg font-semibold">Acesso Imediato</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-1" />
                    <span className="text-base font-medium">Garantia 7 dias</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-sm text-gray-400 mt-4">
            Processamento seguro. Seus dados estão protegidos com criptografia SSL.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferCard;
