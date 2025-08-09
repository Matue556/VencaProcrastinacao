
import React from 'react';
import { Zap, CheckCircle, Star, Users, TrendingUp, Unlock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CountdownTimer from './CountdownTimer';

const OfferCard = () => {
  const handlePurchase = () => {
    // Redirecionamento para o novo link de checkout
    window.open('https://go.disruptybr.com.br/xleccchllq', '_blank');
  };

  return (
    <section id="offer" className="bg-gradient-to-br from-gray-900 to-black text-white py-6 sm:py-16 md:py-20 relative overflow-hidden border-t-4 border-orange-500">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 to-gray-900/20"></div>
      
      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        {/* Contador regressivo no topo */}
        <CountdownTimer />

        <div className="text-center mb-4 sm:mb-8 md:mb-12">
          {/* Golpe Inicial - Impacto emocional */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 text-white leading-tight max-w-4xl mx-auto">
             Pare de adiar sua vida     e transforme a procrastinação em ação imparável!
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-blue-800/80 backdrop-blur-sm border-2 border-dark blue-500 rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-8 md:p-10 relative overflow-hidden">
            {/* Gradiente sutil de fundo */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 to-gray-900/30 rounded-xl sm:rounded-2xl"></div>
            
            <div className="relative z-10 space-y-4 sm:space-y-6 md:space-y-8">
              {/* Golpe Duplo - Oferta + Preço com hierarquia */}
              <div className="text-center space-y-6 sm:space-y-8">
                {/* Preço com hierarquia visual clara */}
                <div className="bg-gradient-to-r from-blue-900/60 to-dark blue-900/60 p-6 sm:p-8 rounded-lg border-2 border-black-500">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <span className="text-4x1 sm:text-5x1 text-white-300 font-big">De</span>
                    <span className="text-2xl sm:text-3xl md:text-4xl text-gray-400 line-through font-bold">R$197,00</span>
                    <span className="text-lg sm:text-xl text-gray-300 font-medium">Por apenas</span>
                    <span className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl font-black text-green-400 drop-shadow-lg">R$17,99</span>
                  </div>
                  <p className="text-orange-300 font-semibold text-sm sm:text-base mt-4">⚡ Oportunidade única - Se você não sentir diferença nos primeiros 7 dias, devolvemos seu dinheiro ⚡</p>
                </div>

                {/* Benefícios e Bônus organizados */}
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-white">
                    ✅ O que você vai desbloquear por R$17,99:
                  </h3>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white text-sm sm:text-base">📘 Guia Completo Quebrando Correntes</h4>
                        <p className="text-gray-300 text-xs sm:text-sm">(baseado em neurociência e comportamento mental)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white text-sm sm:text-base">🧠 Sistema simples, porém poderoso</h4>
                        <p className="text-gray-300 text-xs sm:text-sm">Para eliminar a procrastinação em poucos dias</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white text-sm sm:text-base">🎯 Técnicas e ferramentas de gestão de tempo que funcionam para todos</h4>
                      </div>
                    </div>
                  </div>

                  {/* Bônus */}
                  <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 p-4 sm:p-6 rounded-lg border border-yellow-500/50">
                    <h4 className="font-bold text-yellow-300 text-base sm:text-lg mb-3 sm:mb-4 text-center">🎁 3 bônus práticos para ativar o foco no dia a dia:</h4>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-200 text-sm sm:text-base">25 Frases de Gatilhos Mentais Para Usar No Dia a Dia</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-200 text-sm sm:text-base">Wallpapers Motivacionais Para Manter o Foco</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-200 text-sm sm:text-base">As Melhores Técnicas e Ferramentas de Gestão de Tempo</span>
                      </div>
                    </div>
                  </div>
                </div>
               </div>

              {/* Garantias */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-300 bg-green-900/30 p-3 sm:p-4 rounded-lg">
                <div className="flex items-center">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-1 sm:mr-2" />
                  <span className="text-xs sm:text-sm font-medium">🔐 Acesso imediato e vitalício</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-1 sm:mr-2" />
                  <span className="text-xs sm:text-sm font-medium">🛡️ Garantia de 7 dias sem risco</span>
                </div>
              </div>

              {/* Diferenciação */}
              <div className="bg-gray-700/50 p-4 sm:p-6 rounded-lg border border-gray-600">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-center">
                  <div>
                    <p className="text-red-400 font-semibold text-xs sm:text-sm mb-1">❌ Não é motivacional vazio.</p>
                    <p className="text-red-400 font-semibold text-xs sm:text-sm">❌ Não é mais uma promessa furada.</p>
                  </div>
                  <div>
                    <p className="text-green-400 font-semibold text-xs sm:text-sm">✅ É um caminho prático que já mudou vidas, e pode mudar a sua.</p>
                  </div>
                </div>
              </div>
              
              {/* Golpe Final - CTA Poderoso */}
              <Button
                onClick={handlePurchase}
                className="w-full py-4 sm:py-6 md:py-8 lg:py-10 text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 font-black relative overflow-hidden group min-h-[60px] sm:min-h-[80px] border-3 border-red-400 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center">
                  🔥 Quero Começar Minha Transformação Agora
                  <Unlock className="ml-2 sm:ml-3 w-5 h-5 sm:w-7 sm:h-7 group-hover:scale-125 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>

              {/* Bloco final de persuasão emocional */}
              <div className="bg-gradient-to-r from-orange-900/30 to-gray-800/30 p-4 sm:p-6 md:p-8 rounded-lg border-l-4 border-orange-500 text-center space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
                  <strong>Você só precisa dar o primeiro passo.</strong>
                </p>
                <p className="font-bold text-white text-sm sm:text-base md:text-lg">
                  Adquira seu acesso<br/>
                  E quebre as correntes de uma vez por todas.
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-center text-xs sm:text-sm text-gray-400 mt-3 sm:mt-6 px-2 sm:px-4">
            Processamento seguro. Seus dados estão protegidos com criptografia SSL.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferCard;
