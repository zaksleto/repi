import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToCTA = () => {
    const ctaSection = document.querySelector('#cta');
    ctaSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
            <span className="block">Crie Funis de Quiz</span>
            <span className="block text-indigo-600">Ilimitados e sem Mensalidades</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            A única ferramenta de construção de funis de quiz que deixa você completamente livre para rodar o que quiser sem limite de quiz ativos e nenhuma mensalidade. Você paga uma vez, instala e usa pra sempre.
          </p>
          <div className="mt-10">
            <button 
              onClick={scrollToCTA}
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700">
              Acesso Vitalício - R$594
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <p className="mt-3 text-sm text-gray-500">Sem mensalidades. Sem restrições do que você pode ou não rodar. Pra sempre.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
