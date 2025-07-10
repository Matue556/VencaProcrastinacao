
import React from 'react';
import { Zap, CheckCircle, Star, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CountdownTimer from './CountdownTimer';

const OfferCard = () => {
  const handlePurchase = () => {
    // Redirecionamento para o novo link de checkout
    window.open('https://go.disruptybr.com.br/xleccchllq', '_blank');
  };

  return (
    <section id="offer" className="bg-black text-white py-3 sm:py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-black"></div>
      
      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        {/* Contador regressivo no topo */}
        <CountdownTimer />
        
        {/* Nova Seção de Oferta Relâmpago */}
        <div className="bg-gradient-to-r from-red-900/90 to-red-800/90 backdrop-blur-sm border border-red-500/50 rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-2xl">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-red-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full mb-3 sm:mb-4">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
              <span className="font-bold text-xs sm:text-sm">OFERTA RELÂMPAGO</span>
            </div>
            
            <h2 className="text-lg sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 text-white leading-tight">
              ❗ Para Quem Está Vendo Esta Página Agora
            </h2>
            
            <div className="bg-black/30 border border-orange-500/30 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                <p className="text-sm sm:text-base font-semibold text-orange-200">
                  Mais de 2.000 pessoas já aplicaram esse método e destravaram suas vidas.
                </p>
              </div>
            </div>
            
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <span className="text-lg sm:text-xl mt-0.5">💥</span>
                <div className="text-left">
                  <h3 className="text-sm sm:text-lg font-bold text-white">
                    Acesso Completo ao Guia Quebrando Correntes
                  </h3>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-3 mt-1">
                    <span className="text-gray-400 line-through text-sm sm:text-base">De R$197,00</span>
                    <span className="text-orange-400 font-bold text-lg sm:text-xl">por apenas R$17,99</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-2 sm:space-x-3">
                <span className="text-lg sm:text-xl mt-0.5">📘</span>
                <p className="text-white text-xs sm:text-base text-left leading-relaxed">
                  Método oculto que está destravando a vida de quem já tentou de tudo
                </p>
              </div>
              
              <div className="flex items-start space-x-2 sm:space-x-3">
                <span className="text-lg sm:text-xl mt-0.5">🧠</span>
                <p className="text-white text-xs sm:text-base text-left leading-relaxed">
                  Técnicas científicas comprovadas contra a procrastinação
                </p>
              </div>
              
              <div className="flex items-start space-x-2 sm:space-x-3">
                <span className="text-lg sm:text-xl mt-0.5">🎁</span>
                <p className="text-white text-xs sm:text-base text-left leading-relaxed">
                  Inclui 3 bônus especiais que irão melhorar 100% seu foco (Wallpapers + Frases Mentais + Técnicas de Gestão de Tempo)
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-900/40 to-orange-800/40 border border-orange-500/40 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
              <p className="text-white text-sm sm:text-base font-semibold mb-2">
                🔓 Você não está comprando um eBook.
              </p>
              <p className="text-white text-sm sm:text-base font-semibold mb-2">
                Você está tomando uma decisão.
              </p>
              <p className="text-orange-300 text-sm sm:text-base font-bold">
                A de parar de viver no rascunho da sua própria vida.
              </p>
            </div>
            
            <p className="text-orange-200 text-sm sm:text-base font-semibold mb-4">
              👉 Clique abaixo para iniciar sua transformação:
            </p>
            
            <Button
              onClick={handlePurchase}
              className="w-full py-3 sm:py-4 text-sm sm:text-lg bg-orange-600 hover:bg-orange-700 text-white rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 font-bold relative overflow-hidden group min-h-[50px] sm:min-h-[60px] mb-4"
            >
              <span className="relative z-10 flex items-center justify-center">
                QUERO TRANSFORMAR MINHA VIDA COM 81% OFF
                <Zap className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-125 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>
        </div>

        <div className="text-center mb-2 sm:mb-8 md:mb-12">
          <div className="inline-block mb-1 sm:mb-4 px-2 sm:px-4 py-1 sm:py-2 bg-orange-600 text-white rounded-full text-xs sm:text-sm font-medium">
            🎯 Oferta Especial
          </div>
          <h2 className="text-base sm:text-2xl md:text-4xl font-bold mb-2 sm:mb-6 text-white leading-tight">
            Comece Agora sua Transformação
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-4 mb-2 sm:mb-6">
            <span className="text-sm sm:text-xl md:text-2xl text-gray-400 line-through">De R$197,00</span>
            <span className="text-lg sm:text-3xl md:text-5xl font-bold text-orange-600">R$17,99</span>
          </div>
          <p className="text-gray-300 text-xs sm:text-base md:text-lg px-2 sm:px-4 leading-relaxed">
            Acesso completo ao método que já transformou milhares de vidas
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl shadow-2xl p-2 sm:p-6 md:p-8 relative overflow-hidden">
            <div className="space-y-2 sm:space-y-6">
              <div className="text-center">
                <h3 className="text-sm sm:text-xl md:text-2xl font-bold mb-1 sm:mb-4 text-white">O que você vai receber:</h3>
              </div>
              
              <div className="space-y-1 sm:space-y-4">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="w-3 h-3 sm:w-6 sm:h-6 text-green-400 mt-0.5 sm:mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-xs sm:text-base md:text-lg">Acesso imediato ao Guia Quebrando Correntes</h4>
                    <p className="text-gray-300 text-xs sm:text-sm md:text-base mt-0.5 sm:mt-1">Método completo em formato digital</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="w-3 h-3 sm:w-6 sm:h-6 text-green-400 mt-0.5 sm:mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-xs sm:text-base md:text-lg">Técnicas comprovadas contra a procrastinação</h4>
                    <p className="text-gray-300 text-xs sm:text-sm md:text-base mt-0.5 sm:mt-1">Baseadas em neurociência e psicologia comportamental</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle className="w-3 h-3 sm:w-6 sm:h-6 text-green-400 mt-0.5 sm:mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-xs sm:text-base md:text-lg">Sistema diário de ação para quebrar a procrastinação</h4>
                    <p className="text-gray-300 text-xs sm:text-sm md:text-base mt-0.5 sm:mt-1">Roteiro estruturado para manter o foco e a consistência todos os dias</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <Star className="w-3 h-3 sm:w-6 sm:h-6 text-orange-400 mt-0.5 sm:mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-xs sm:text-base md:text-lg">📱 100 Wallpapers Motivacionais</h4>
                    <p className="text-gray-300 text-xs sm:text-sm md:text-base mt-0.5 sm:mt-1">Mantenha seu foco reforçado com imagens que inspiram ação</p>
                  </div>
                </div>

                <div className="flex items-start space-x-2 sm:space-x-3">
                  <Star className="w-3 h-3 sm:w-6 sm:h-6 text-orange-400 mt-0.5 sm:mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-xs sm:text-base md:text-lg">🧠 25 Frases com Gatilhos Mentais</h4>
                    <p className="text-gray-300 text-xs sm:text-sm md:text-base mt-0.5 sm:mt-1">Ative sua mente e mantenha-se em movimento com mensagens estratégicas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-2 sm:space-x-3">
                  <Star className="w-3 h-3 sm:w-6 sm:h-6 text-orange-400 mt-0.5 sm:mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-xs sm:text-base md:text-lg">⏳ As Melhores Técnicas e Ferramentas de Gestão de Tempo</h4>
                    <p className="text-gray-300 text-xs sm:text-sm md:text-base mt-0.5 sm:mt-1">Aplique métodos práticos para ganhar clareza e produtividade</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-900/30 to-yellow-900/30 rounded-lg p-2 sm:p-4 md:p-6 border border-orange-500/30">
                <div className="text-center">
                  <p className="text-xs sm:text-sm text-gray-300 mb-1 sm:mb-2">⏰ Oferta por tempo limitado</p>
                  <p className="text-orange-400 font-semibold text-xs sm:text-base md:text-lg">Garante já o seu desconto de 81% OFF</p>
                </div>
              </div>
              
              <Button
                onClick={handlePurchase}
                className="w-full py-2 sm:py-6 text-xs sm:text-lg md:text-xl bg-orange-600 hover:bg-orange-700 text-white rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 font-bold relative overflow-hidden group min-h-[40px] sm:min-h-[60px]"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Quero Iniciar Minha Transformação Agora
                  <Zap className="ml-1 sm:ml-3 w-3 h-3 sm:w-6 sm:h-6 group-hover:scale-125 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <div className="text-center">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-300">
                  <div className="flex items-center">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-1 sm:mr-2" />
                    <span className="text-xs sm:text-sm md:text-base font-medium">Pagamento Seguro</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 mr-1 sm:mr-2" />
                    <span className="text-xs sm:text-sm md:text-base font-semibold">Acesso Imediato</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-1 sm:mr-2" />
                    <span className="text-xs sm:text-sm md:text-base font-medium">Garantia 7 dias</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-xs sm:text-sm text-gray-400 mt-2 sm:mt-6 px-2 sm:px-4">
            Processamento seguro. Seus dados estão protegidos com criptografia SSL.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferCard;
