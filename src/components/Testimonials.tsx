import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Gabriel Gonçalves',
    role: 'Dono de Operação de 7D',
    image: 'https://i.ibb.co/n0BB4BH/340167764-3423336681251853-8040317566430637600-n.jpg',
    quote: 'Oferta irresistível'
  },
  {
    name: 'Jonatas Frez',
    role: 'Mestre do Low-Ticket Latam',
    image: 'https://i.ibb.co/NF3MxfF/465316676-1059351042644862-535678211018112309-n.jpg',
    quote: 'Só de não precisar esperar por editor já salvou o meu negócio'
  },
  {
    name: 'Christopher Vieira',
    role: 'Guru que abriu o low-ticket no Brasil',
    image: 'https://i.ibb.co/Q6sLq82/452863624-1061419078915243-585138481658270515-n.jpg',
    quote: 'Faz essa LP logo, tô usando o Freedom nos meus lows e pra dar aula, nego precisa de libertar do ******'
  },
  {
    name: 'Davi Meurer',
    role: '6D mês só rodando low-ticket com quiz',
    image: 'https://i.ibb.co/KGf6XzV/464466177-557114087039646-8887976511493849351-n.jpg',
    quote: 'Bom demais, principalmente pra mim que rodo com a oferta direto no quiz'
  }
];

export default function Testimonials() {
  return (
    <div id="testimonials" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Quem Conhece Recomenda
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Veja os nossos feedbacks
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center">
                <img className="h-12 w-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-gray-600">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}