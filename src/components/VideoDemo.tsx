import React from 'react';
import { Play } from 'lucide-react';

export default function VideoDemo() {
  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Veja o FreedomQuiz em Ação
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Descubra como é fácil criar funis de quiz de alta conversão sem limite algum
          </p>
        </div>
        
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative pb-[56.25%] rounded-2xl overflow-hidden shadow-xl bg-gray-900">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&controls=1&showinfo=0"
              title="FreedomQuiz Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-600">
              Crie quantos funis quiser, customize qualquer componente e coloque no ar instantaneamente — tudo isso no seu domínio, sem mensalidades ou limites do que você pode ou não fazer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
