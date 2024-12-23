import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const benefits = [
  'Sem limite de funis ou número de leads',
  'Sem mensalidades',
  'Ninguém tem acesso ao seu quiz ou diz o que você pode ou não rodar',
  'Coloque na sua hospedagem, sem risco da plataforma cair',
  'Comprou uma vez, é seu pra sempre'
];

export default function CTA() {
  return (
    <div id="cta" className="bg-indigo-600">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                <span className="block">Pronto para começar?</span>
                <span className="block text-indigo-600">Garanta seu acesso vitalício hoje.</span>
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Junte-se aos profissionais de marketing que escaparam do inferno das assinaturas. Um pagamento, tudo ilimitado, para sempre.
              </p>
              <ul className="mt-8 space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="ml-3 text-gray-500">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="py-16 px-6 sm:px-16 lg:py-16 lg:px-20 lg:flex lg:flex-col lg:justify-center bg-gray-50">
            <div className="text-center lg:text-left">
              <p className="text-lg font-medium text-gray-900">Oferta só para 2024</p>
              <div className="mt-4 flex items-center justify-center lg:justify-start">
                <span className="text-5xl font-extrabold text-gray-900">R$594</span>
                <span className="ml-3 text-xl font-medium text-gray-500">pagamento único</span>
              </div>
              <p className="mt-4 text-sm text-gray-500">Preço normal: R$997</p>
              <div className="mt-6">
                <a 
                  href="https://checkout.payt.com.br/5a704ff416494bc5729eb71bdf39657c"
                  className="inline-flex w-full items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700">
                  Assine o plano vitalício
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}