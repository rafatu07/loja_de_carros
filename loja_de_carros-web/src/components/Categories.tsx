'use client';

import Link from 'next/link';
import { FaCar, FaMotorcycle, FaTruck, FaCogs, FaCarBattery, FaCarCrash } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { RevealOnScroll } from './RevealOnScroll';

const categories = [
  {
    id: 1,
    name: 'Carros Novos',
    icon: FaCar,
    description: 'Encontre os melhores carros 0km',
    count: 150,
    color: 'bg-gray-900 text-white',
    hoverColor: 'hover:bg-gray-800',
  },
  {
    id: 2,
    name: 'Carros Usados',
    icon: FaCar,
    description: 'Veículos seminovos com garantia',
    count: 300,
    color: 'bg-gray-900 text-white',
    hoverColor: 'hover:bg-gray-800',
  },
  {
    id: 3,
    name: 'Motos',
    icon: FaMotorcycle,
    description: 'Motos de todas as cilindradas',
    count: 80,
    color: 'bg-gray-900 text-white',
    hoverColor: 'hover:bg-gray-800',
  },
  {
    id: 4,
    name: 'Utilitários',
    icon: FaTruck,
    description: 'Vans, pickups e utilitários',
    count: 45,
    color: 'bg-gray-900 text-white',
    hoverColor: 'hover:bg-gray-800',
  },
];

export default function Categories() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <RevealOnScroll width="100%">
          <h2 className="text-3xl font-bold text-center mb-4">Categorias</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Explore nossa ampla seleção de veículos
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {categories.map((category) => (
            <RevealOnScroll key={category.id} width="100%">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "tween" }}
              >
                <Link href="/">
                  <div className={`p-6 rounded-xl ${category.color} ${category.hoverColor} transition-all duration-300 h-full border border-gray-800`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <category.icon className="text-3xl mr-3 text-red-500" />
                        <div>
                          <h3 className="text-xl font-semibold">{category.name}</h3>
                          <p className="text-sm text-gray-300">{category.description}</p>
                        </div>
                      </div>
                      <span className="text-sm font-semibold bg-black bg-opacity-50 px-3 py-1 rounded-full border border-gray-700">
                        {category.count}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center mt-6">
                      <span className="text-sm font-medium">Ver mais</span>
                      <svg
                        className="w-5 h-5 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
} 