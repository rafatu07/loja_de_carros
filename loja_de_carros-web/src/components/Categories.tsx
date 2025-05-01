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
    color: 'bg-blue-50 text-blue-600',
    hoverColor: 'hover:bg-blue-100',
  },
  {
    id: 2,
    name: 'Carros Usados',
    icon: FaCar,
    description: 'Veículos seminovos com garantia',
    count: 300,
    color: 'bg-green-50 text-green-600',
    hoverColor: 'hover:bg-green-100',
  },
  {
    id: 3,
    name: 'Motos',
    icon: FaMotorcycle,
    description: 'Motos de todas as cilindradas',
    count: 80,
    color: 'bg-red-50 text-red-600',
    hoverColor: 'hover:bg-red-100',
  },
  {
    id: 4,
    name: 'Utilitários',
    icon: FaTruck,
    description: 'Vans, pickups e utilitários',
    count: 45,
    color: 'bg-purple-50 text-purple-600',
    hoverColor: 'hover:bg-purple-100',
  },
  {
    id: 5,
    name: 'Peças',
    icon: FaCogs,
    description: 'Peças originais e acessórios',
    count: 1200,
    color: 'bg-orange-50 text-orange-600',
    hoverColor: 'hover:bg-orange-100',
  },
  {
    id: 6,
    name: 'Serviços',
    icon: FaCarBattery,
    description: 'Manutenção e reparos',
    count: 20,
    color: 'bg-teal-50 text-teal-600',
    hoverColor: 'hover:bg-teal-100',
  },
];

export default function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <RevealOnScroll width="100%">
          <h2 className="text-3xl font-bold text-center mb-4">Categorias</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Explore nossa ampla seleção de veículos e serviços
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <RevealOnScroll key={category.id} width="100%">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "tween" }}
              >
                <Link href="/">
                  <div className={`p-6 rounded-xl ${category.color} ${category.hoverColor} transition-all duration-300 h-full`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <category.icon className="text-3xl mr-3" />
                        <div>
                          <h3 className="text-xl font-semibold">{category.name}</h3>
                          <p className="text-sm opacity-80">{category.description}</p>
                        </div>
                      </div>
                      <span className="text-sm font-semibold bg-white bg-opacity-50 px-3 py-1 rounded-full">
                        {category.count}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center mt-6">
                      <span className="text-sm font-medium">Ver mais</span>
                      <svg
                        className="w-5 h-5"
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