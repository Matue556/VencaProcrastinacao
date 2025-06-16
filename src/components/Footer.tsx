
const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="pb-10 border-b border-gray-700">
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
