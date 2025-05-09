'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGasPump, FaTachometerAlt, FaCog, FaInfoCircle } from 'react-icons/fa';
import { RevealOnScroll } from './RevealOnScroll';

const cars = [
  {
    id: 1,
    name: 'Jeep Renegade Longitude T270 1.3 Turbo',
    price: 'R$ 139.900',
    year: 2023,
    mileage: '15.000 km',
    transmission: 'Automático',
    fuel: 'Flex',
    image: '/cars/Jeep Renegade Longitude T270 1.3 Turbo 2023/perfil.jpg',
    features: ['4x4', 'Teto Solar', 'Multimídia', 'Câmera de Ré']
  },
  {
    id: 2,
    name: 'Toyota Corolla XEi 2.0',
    price: 'R$ 129.900',
    year: 2022,
    mileage: '20.000 km',
    transmission: 'Automático',
    fuel: 'Flex',
    image: '/cars/Toyota Corolla XEi 2.0 2022/perfil.jpeg',
    features: ['Multimídia', 'Câmera de Ré', 'Sensor de Estacionamento', 'Piloto Automático']
  },
  {
    id: 3,
    name: 'Chevrolet Onix LTZ 1.0 Turbo',
    price: 'R$ 79.900',
    year: 2021,
    mileage: '30.000 km',
    transmission: 'Automático',
    fuel: 'Flex',
    image: '/cars/Chevrolet Onix LTZ 1.0 Turbo 2021/perfil.jpg',
    features: ['Multimídia', 'Câmera de Ré', 'Sensor de Estacionamento', 'Ar Digital']
  },
  {
    id: 4,
    name: 'Hyundai HB20S Comfort Plus 1.6',
    price: 'R$ 69.900',
    year: 2021,
    mileage: '35.000 km',
    transmission: 'Manual',
    fuel: 'Flex',
    image: '/cars/Hyundai HB20S Comfort Plus 1.6 2021/perfil.jpeg',
    features: ['Multimídia', 'Câmera de Ré', 'Ar Digital', 'Vidros Elétricos']
  },
  {
    id: 5,
    name: 'Fiat Strada Volcano 1.3',
    price: 'R$ 89.900',
    year: 2022,
    mileage: '25.000 km',
    transmission: 'Manual',
    fuel: 'Flex',
    image: '/cars/Fiat Strada Volcano 1.3 2022/perfil.jpeg',
    features: ['Multimídia', 'Câmera de Ré', 'Ar Digital', 'Vidros Elétricos']
  },
  {
    id: 6,
    name: 'Volkswagen Gol 1.6 MSI',
    price: 'R$ 59.900',
    year: 2020,
    mileage: '40.000 km',
    transmission: 'Manual',
    fuel: 'Flex',
    image: '/cars/Volkswagen Gol 1.6 MSI 2020/perfil.jpg',
    features: ['Multimídia', 'Ar Digital', 'Vidros Elétricos', 'Trava Elétrica']
  },
  {
    id: 7,
    name: 'Honda CG 160 Titan',
    price: 'R$ 12.900',
    year: 2022,
    mileage: '5.000 km',
    transmission: 'Manual',
    fuel: 'Flex',
    image: '/cars/Honda CG 160 Titan 2022/perfil.jpg',
    features: ['Injeção Eletrônica', 'Partida Elétrica', 'Freio a Disco', 'Painel Digital']
  },
  {
    id: 8,
    name: 'Yamaha Fazer 250 ABS',
    price: 'R$ 19.900',
    year: 2023,
    mileage: '3.000 km',
    transmission: 'Manual',
    fuel: 'Flex',
    image: '/cars/Yamaha Fazer 250 ABS 2023/perfil.jpg',
    features: ['ABS', 'Injeção Eletrônica', 'Partida Elétrica', 'Painel Digital']
  }
];

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
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <RevealOnScroll width="100%">
          <h2 className="text-3xl font-bold text-center mb-4">Veículos em Destaque</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Confira nossa seleção de carros e motos com as melhores condições de pagamento
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cars.map((car) => (
            <RevealOnScroll key={car.id} width="100%">
              <motion.div
                className="bg-white rounded-xl shadow-lg overflow-hidden"
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
                      src={car.image}
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
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2 h-14">{car.name}</h3>
                  <p className="text-2xl font-bold text-red-600 mb-4">{car.price}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <FaTachometerAlt className="mr-2" />
                      <span className="text-sm">{car.mileage}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaCog className="mr-2" />
                      <span className="text-sm">{car.transmission}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaGasPump className="mr-2" />
                      <span className="text-sm">{car.fuel}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
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
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="w-full bg-black text-white py-2 rounded-lg text-center transition-colors"
                    >
                      Agendar Test Drive
                    </motion.button>
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