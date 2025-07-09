
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
    <button
      onClick={scrollToOffer}
      className="fixed bottom-3 left-[5%] w-[90%] bg-orange-600 text-white font-bold text-base px-4 py-3.5 rounded-lg text-center z-50 shadow-lg hover:bg-orange-700 transition-all duration-300 flex items-center justify-center gap-2"
      style={{
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
      }}
    >
      Quero Transformar Minha Vida – 81% OFF
      <Zap className="w-4 h-4 flex-shrink-0" />
    </button>
  );
};

export default MobileFixedCTA;
