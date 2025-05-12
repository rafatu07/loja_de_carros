'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGasPump, FaTachometerAlt, FaCog, FaInfoCircle } from 'react-icons/fa';
import { RevealOnScroll } from './RevealOnScroll';
import { useCompare, Car as CompareCar } from './CompareContext';
import { cars } from '@/data/cars';

const cardVariants = {
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    backgroundColor: "#C71818",
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.95
  }
};

export default function FeaturedCars() {
  const { cars: compareCars, addCar, removeCar } = useCompare();

  const isInCompare = (id: number) => compareCars.some((c) => c && c.id === id);

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <RevealOnScroll width="100%">
          <h2 className="text-3xl font-bold text-center mb-4">Veículos em Destaque</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Confira nossa seleção de carros e motos disponíveis em nosso estoque
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cars.map((car) => (
            <RevealOnScroll key={car.id} width="100%">
              <motion.div
                className="bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-800"
                variants={cardVariants}
                whileHover="hover"
                initial="initial"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <motion.div
                    className="w-full h-full relative"
                    variants={imageVariants}
                  >
                    <Image
                      src={car.images[0]}
                      alt={car.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {car.year}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2 h-14 text-white">{car.name}</h3>
                  <p className="text-2xl font-bold text-red-600 mb-4">{car.price}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-400">
                      <FaTachometerAlt className="mr-2" />
                      <span className="text-sm">{car.mileage}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <FaCog className="mr-2" />
                      <span className="text-sm">{car.transmission}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <FaGasPump className="mr-2" />
                      <span className="text-sm">{car.fuel}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <FaInfoCircle className="mr-2" />
                      <span className="text-sm">{car.features.length} itens</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Link href={`/carros/${car.id}`}>
                      <motion.button
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="w-full bg-red-600 text-white py-2 rounded-lg text-center transition-colors"
                      >
                        Ver Detalhes
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
} 