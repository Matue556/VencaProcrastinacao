
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
          <div className="inline-block mb-2 sm:mb-4 px-3 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-full text-sm sm:text-base font-bold shadow-lg">
            🎯 Sua Chance de Quebrar as Correntes Que Te Prendem
          </div>
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-6 text-white leading-tight max-w-3xl mx-auto">
            Você está a um clique de silenciar a voz da procrastinação, e finalmente assumir o controle da sua vida.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800/80 backdrop-blur-sm border-2 border-orange-500 rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-8 md:p-10 relative overflow-hidden">
            {/* Gradiente sutil de fundo */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-gray-900/30 rounded-xl sm:rounded-2xl"></div>
            
            <div className="relative z-10 space-y-4 sm:space-y-6 md:space-y-8">
              {/* Texto persuasivo inicial */}
              <div className="text-center space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
                  Mais de <strong className="text-orange-400">2000 pessoas</strong> já saíram do ciclo de procrastinação com este método.
                </p>
                <p className="text-base sm:text-lg md:text-xl font-semibold text-white">
                  A única diferença entre elas e você?
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-200 bg-orange-900/30 p-3 sm:p-4 rounded-lg border-l-4 border-orange-500">
                  👉 <strong>Elas decidiram agir</strong>, mesmo com medo, mesmo sem tempo, mesmo sem motivação.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
                  Você está levando muito mais do que um simples método.<br/>
                  Está levando um método <strong className="text-orange-400">real, validado e direto</strong>, que finalmente funciona no mundo real. <em>sem precisar acordar às 5h da manhanha ou virar uma máquina.</em>
                </p>
              </div>

              {/* Preços em destaque */}
              <div className="text-center bg-gradient-to-r from-orange-900/40 to-orange-800/40 p-4 sm:p-6 rounded-lg border border-orange-500">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-3 sm:mb-4">
                  <span className="text-lg sm:text-2xl md:text-3xl text-gray-400 line-through">De R$197,00</span>
                  <span className="text-2xl sm:text-4xl md:text-6xl font-bold text-orange-400">R$17,99</span>
                </div>
                <p className="text-orange-300 font-semibold text-sm sm:text-base">⚡ 81% OFF somente no dia de hoje. E se você não sentir diferença nos primeiros 7 dias, devolvemos seu dinheiro.⚡</p>
              </div>

              {/* Lista de benefícios */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-center text-white mb-4 sm:mb-6">
                  ✅ O que você vai desbloquear por R$17,99:
                </h3>
                
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6 text-green-400 mt-0.5 sm:mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white text-sm sm:text-base">📘 Guia Completo Quebrando Correntes</h4>
                      <p className="text-gray-300 text-xs sm:text-sm">(baseado em neurociência e comportamento real)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6 text-green-400 mt-0.5 sm:mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white text-sm sm:text-base">🧠 Sistema simples mas poderoso</h4>
                      <p className="text-gray-300 text-xs sm:text-sm">Para eliminar a procrastinação em poucos dias</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6 text-green-400 mt-0.5 sm:mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white text-sm sm:text-base">🎯 Técnicas e ferramentas que funcionam para todos</h4>
                    </div>
                  </div>
                </div>

                {/* Bônus */}
                <div className="bg-gray-700/50 p-3 sm:p-4 rounded-lg border border-gray-600 mt-4 sm:mt-6">
                  <h4 className="font-semibold text-orange-300 text-sm sm:text-base mb-2 sm:mb-3">🎁 3 bônus práticos para ativar o foco no dia a dia:</h4>
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex items-start space-x-2">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-200 text-xs sm:text-sm">25 Frases de Gatilhos Mentais Para Usar No Dia a Dia</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-200 text-xs sm:text-sm">Wallpapers Motivacionais Para Manter o Foco</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-200 text-xs sm:text-sm">As Melhores Técnicas e Ferramentas de Gestão de Tempo</span>
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
              
              {/* Botão principal */}
              <Button
                onClick={handlePurchase}
                className="w-full py-3 sm:py-6 md:py-8 text-sm sm:text-lg md:text-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 font-bold relative overflow-hidden group min-h-[48px] sm:min-h-[70px] border-2 border-orange-400 animate-pulse-slow"
              >
                <span className="relative z-10 flex items-center justify-center">
                  ✅ Sim, Estou Pronto para Quebrar Minhas Correntes!
                  <Unlock className="ml-2 sm:ml-3 w-4 h-4 sm:w-6 sm:h-6 group-hover:scale-125 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>

              {/* Bloco final de persuasão emocional */}
              <div className="bg-gradient-to-r from-orange-900/30 to-gray-800/30 p-4 sm:p-6 md:p-8 rounded-lg border-l-4 border-orange-500 text-center space-y-3 sm:space-y-4">
                <h4 className="font-bold text-white text-sm sm:text-base md:text-lg">E se você não fizer nada agora?</h4>
                <p className="text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed">
                  A rotina segue igual. Os planos continuam empilhados.<br/>
                  A frustração de saber o que fazer — e não fazer — vai se repetir.
                </p>
                <p className="font-semibold text-orange-400 text-sm sm:text-base md:text-lg">
                  💭 Mas e se hoje for o dia em que tudo muda?
                </p>
                <p className="text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed">
                  Porque com esse método, você não precisa esperar a motivação.<br/>
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
