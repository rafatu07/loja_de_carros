'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaSearch, FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('comprar');

  return (
    <div className="relative h-screen w-full">
      {/* Imagem de fundo com efeito parallax */}
      <div className="absolute inset-0">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src="/images/mers.jpg"
            alt="Carro de luxo"
            fill
            className="object-cover object-center transform scale-105 transition-transform duration-10000 hover:scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        </div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 flex h-full flex-col justify-center px-8 md:px-16 lg:w-[60%] text-left text-white">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-5xl font-bold tracking-tight md:text-7xl"
        >
          Encontre o Veículo dos Seus Sonhos
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 max-w-2xl text-lg text-gray-200 md:text-xl"
        >
          A maior seleção de carros e motos novos e usados com as melhores condições de pagamento
        </motion.p>

        {/* Tabs */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-min mb-8 justify-center items-center inline-flex rounded-full bg-white/10 p-1 backdrop-blur-sm"
        >
          <button
            className={`rounded-full px-8 py-3 text-lg transition-all duration-300 ${
              activeTab === 'comprar'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-white hover:bg-white/20'
            }`}
            onClick={() => setActiveTab('comprar')}
          >
            Comprar
          </button>
          <button
            className={`rounded-full px-8 py-3 text-lg transition-all duration-300 ${
              activeTab === 'vender'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-white hover:bg-white/20'
            }`}
            onClick={() => setActiveTab('vender')}
          >
            Vender
          </button>
        </motion.div>

        {/* Search Form */}
        <motion.form 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full max-w-2xl rounded-2xl bg-white/10 p-6 backdrop-blur-md"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="relative">
              <label className="mb-2 block text-sm font-medium text-gray-200">
                Condição
              </label>
              <div className="relative">
                <select className="w-full appearance-none rounded-xl border border-white/20 bg-white/10 p-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                  <option value="">Todas</option>
                  <option value="novo">Novo</option>
                  <option value="usado">Usado</option>
                  <option value="seminovo">Seminovo</option>
                </select>
                <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70" />
              </div>
            </div>
            <div className="relative">
              <label className="mb-2 block text-sm font-medium text-gray-200">
                Marca
              </label>
              <div className="relative">
                <select className="w-full appearance-none rounded-xl border border-white/20 bg-white/10 p-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                  <option value="">Todas as marcas</option>
                  <option value="jeep">Jeep</option>
                  <option value="toyota">Toyota</option>
                  <option value="chevrolet">Chevrolet</option>
                  <option value="hyundai">Hyundai</option>
                </select>
                <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70" />
              </div>
            </div>
            <div className="relative">
              <label className="mb-2 block text-sm font-medium text-gray-200">
                Modelo
              </label>
              <div className="relative">
                <select className="w-full appearance-none rounded-xl border border-white/20 bg-white/10 p-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                  <option value="">Todos os modelos</option>
                </select>
                <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70" />
              </div>
            </div>
            <div className="relative">
              <label className="mb-2 block text-sm font-medium text-gray-200">
                Preço
              </label>
              <div className="relative">
                <select className="w-full appearance-none rounded-xl border border-white/20 bg-white/10 p-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                  <option value="">Qualquer preço</option>
                  <option value="20000">Até R$ 20.000</option>
                  <option value="50000">R$ 20.000 - R$ 50.000</option>
                  <option value="100000">R$ 50.000 - R$ 100.000</option>
                </select>
                <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70" />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-600/50"
          >
            <FaSearch className="mr-2" />
            Buscar Veículos
          </button>
        </motion.form>
      </div>
    </div>
  );
} 