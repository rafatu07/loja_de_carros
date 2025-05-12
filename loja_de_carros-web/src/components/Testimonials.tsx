'use client';

import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { RevealOnScroll } from './RevealOnScroll';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: 'João Silva',
    role: 'Comprador',
    image: '/testimonials/persona3.jpeg',
    rating: 5,
    text: 'Excelente experiência na compra do meu carro. A equipe foi muito atenciosa e profissional. Recomendo a todos que buscam um veículo de qualidade.',
  },
  {
    id: 2,
    name: 'Maria Santos',
    role: 'Vendedora',
    image: '/testimonials/persona2.jpeg',
    rating: 5,
    text: 'Como vendedora, posso dizer que a loja oferece as melhores condições do mercado. Os clientes sempre saem satisfeitos com suas compras.',
  },
  {
    id: 3,
    name: 'Pedro Oliveira',
    role: 'Comprador',
    image: '/testimonials/persona4.jpeg',
    rating: 5,
    text: 'Processo de compra muito transparente e sem complicações. O financiamento foi aprovado rapidamente e o carro estava em perfeito estado.',
  },
  {
    id: 4,
    name: 'Ana Costa',
    role: 'Compradora',
    image: '/testimonials/persona1.jpeg',
    rating: 5,
    text: 'Fiquei impressionada com a variedade de carros disponíveis. Encontrei exatamente o que procurava e com um preço justo.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <RevealOnScroll width="100%">
          <h2 className="text-3xl font-bold text-center mb-4">O que nossos clientes dizem</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Veja o que nossos clientes têm a dizer sobre sua experiência conosco
          </p>
        </RevealOnScroll>

        <RevealOnScroll width="100%">
          <div className="max-w-4xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="testimonial-swiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="bg-black p-8 rounded-lg shadow-lg border border-gray-800">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                        <p className="text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-red-600" />
                      ))}
                    </div>
                    <p className="text-gray-300 italic">"{testimonial.text}"</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </RevealOnScroll>
      </div>

      <style jsx global>{`
        .testimonial-swiper .swiper-button-next,
        .testimonial-swiper .swiper-button-prev {
          color: #E41D1D;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #E41D1D;
        }
        .testimonial-swiper .swiper-pagination-bullet {
          background: #9CA3AF;
        }
      `}</style>
    </section>
  );
} 