import React from 'react';
import { Check, X } from 'lucide-react';
import ComparisonRow from './ComparisonRow';
import { comparisonPoints } from '../data/comparisonData';

export default function Comparison() {
  return (
    <div id="comparison" className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Porque Os Grandes Players Preferem o FreedomQuiz
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Veja como somos diferentes das plataformas de quiz tradicionais
          </p>
        </div>
        <div className="mt-16">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <p className="text-lg font-medium text-gray-500">Outras Plataformas</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-medium text-indigo-600">FreedomQuiz</p>
              </div>
            </div>
            <div className="space-y-6">
              {comparisonPoints.map((point, index) => (
                <ComparisonRow 
                  key={index}
                  point={point}
                  isFirst={index === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
