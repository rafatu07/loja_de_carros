'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaGasPump, FaTachometerAlt, FaCog, FaCalendar, FaCheck, FaWhatsapp, FaArrowLeft } from 'react-icons/fa';
import { cars } from '@/data/cars';

export default function CarDetails({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const router = useRouter();

  // Encontra o carro com base no ID da URL
  const carData = cars.find(car => car.id === parseInt(params.id));

  // Se o carro não for encontrado, redireciona para a página inicial
  if (!carData) {
    router.push('/');
    return null;
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Botão Voltar */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={() => router.back()}
            className="flex items-center text-gray-600 hover:text-red-600 transition-colors group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            <span>Voltar para listagem</span>
          </button>
        </motion.div>

        <motion.div 
          className="bg-white rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Galeria de Imagens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="space-y-4">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={carData.images[selectedImage]}
                  alt={carData.name}
                  fill
                  className="object-cover"
                />
              </div>
              {carData.images.length > 1 && (
                <div className="grid grid-cols-2 gap-4">
                  {carData.images.map((image, index) => (
                    <motion.div
                      key={index}
                      className={`relative h-24 rounded-lg overflow-hidden cursor-pointer ${
                        selectedImage === index ? 'ring-2 ring-red-600' : ''
                      }`}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setSelectedImage(index)}
                    >
                      <Image
                        src={image}
                        alt={`${carData.name} - Imagem ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Informações do Veículo */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{carData.name}</h1>
                <p className="text-4xl font-bold text-red-600">{carData.price}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center text-gray-600">
                  <FaCalendar className="mr-2" />
                  <span>Ano: {carData.year}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaTachometerAlt className="mr-2" />
                  <span>KM: {carData.mileage}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaCog className="mr-2" />
                  <span>Câmbio: {carData.transmission}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaGasPump className="mr-2" />
                  <span>Combustível: {carData.fuel}</span>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Descrição</h2>
                <p className="text-gray-600">{carData.description}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Características</h2>
                <div className="grid grid-cols-2 gap-2">
                  {carData.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <FaCheck className="mr-2 text-red-600" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <motion.button
                  className="w-full bg-green-600 text-white py-3 rounded-lg flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                >
                  <FaWhatsapp className="text-xl" />
                  <span>Conversar pelo WhatsApp</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 