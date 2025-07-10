
import { useIsMobile } from '@/hooks/use-mobile';
import { Zap } from 'lucide-react';

const MobileFixedCTA = () => {
  const isMobile = useIsMobile();

  const scrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    const offerSection = document.getElementById('offer');
    if (offerSection) {
      offerSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  // Só renderiza no mobile
  if (!isMobile) {
    return null;
  }

  return (
    <div className="fixed bottom-3 left-[5%] w-[90%] z-50">
      {/* Texto de urgência social */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold text-xs px-3 py-2 rounded-t-lg text-center shadow-lg animate-pulse-slow">
        🟡 Hoje 500 pessoas já decidiram mudar de vida. Comece agora
      </div>
      
      {/* Botão principal */}
      <button
        onClick={scrollToOffer}
        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm px-3 py-3 rounded-b-lg text-center shadow-lg transition-all duration-300 flex items-center justify-center gap-2 max-h-[48px]"
        style={{
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
        }}
      >
        <span className="truncate">Quero Iniciar Minha Transformação - 81% OFF</span>
        <Zap className="w-4 h-4 flex-shrink-0" />
      </button>
    </div>
  );
};

export default MobileFixedCTA;
