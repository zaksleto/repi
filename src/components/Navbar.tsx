import React from 'react';
import { Infinity } from 'lucide-react';

export default function Navbar() {
  const scrollToCTA = () => {
    const ctaSection = document.querySelector('#cta');
    ctaSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Infinity className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">FreedomQuiz</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Funcionalidade</a>
            <a href="#comparison" className="text-gray-600 hover:text-gray-900">Compare</a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Feedback</a>
            <button 
              onClick={scrollToCTA}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Tenha acesso vitalício
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}