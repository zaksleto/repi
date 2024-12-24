import React from 'react';
import { Infinity, Lock, Palette, Zap } from 'lucide-react';

const features = [
  {
    icon: Infinity,
    title: '100% Ilimitado',
    description: 'Crie funis de quiz ilimitados, colete respostas ilimitadas e faça seu negócio crescer sem nenhuma restrição'
  },
  {
    icon: Lock,
    title: 'Sem Aprovação Necessária',
    description: 'Coloque seus funis no ar instantaneamente sem esperar pela aprovação de ninguém. Seu negócio, suas regras.'
  },
  {
    icon: Palette,
    title: 'Liberdade Completa',
    description: 'Crie seus funis do seu jeito. Sem nenhum requisito, marcações obrigatórias, ou contato pra suporte.'
  },
  {
    icon: Zap,
    title: 'Pagamento Único',
    description: 'Diga adeus às assinaturas mensais. Pague uma vez e use o software para sempre.'
  }
];

export default function Features() {
  return (
    <div id="features" className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Tudo o Que Você Precisa, Nada do Que Não Precisa
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Feito para profissionais de marketing que buscam liberdade, não restrições.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute -top-4 left-4">
                <div className="bg-indigo-600 rounded-lg p-3">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="mt-8 text-lg font-medium text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-base text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
