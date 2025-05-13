'use client';

import Image from 'next/image';
import { FaSearch, FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Listbox } from '@headlessui/react';
import { Fragment, useState } from 'react';

export default function HeroSection() {
  const condicoes = [
    { value: '', label: 'Todas' },
    { value: 'novo', label: 'Novo' },
    { value: 'usado', label: 'Usado' },
    { value: 'seminovo', label: 'Seminovo' },
  ];
  const [condicao, setCondicao] = useState(condicoes[0]);

  const marcas = [
    { value: '', label: 'Todas as marcas' },
    { value: 'jeep', label: 'Jeep' },
    { value: 'toyota', label: 'Toyota' },
    { value: 'chevrolet', label: 'Chevrolet' },
    { value: 'hyundai', label: 'Hyundai' },
  ];
  const modelos = [
    { value: '', label: 'Todos os modelos' },
    // Adicione mais modelos conforme necessário
  ];
  const precos = [
    { value: '', label: 'Qualquer preço' },
    { value: '20000', label: 'Até R$ 20.000' },
    { value: '50000', label: 'R$ 20.000 - R$ 50.000' },
    { value: '100000', label: 'R$ 50.000 - R$ 100.000' },
  ];
  const [marca, setMarca] = useState(marcas[0]);
  const [modelo, setModelo] = useState(modelos[0]);
  const [preco, setPreco] = useState(precos[0]);

  return (
    <div className="relative min-h-[80vh] w-full md:h-screen">
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
      <div className="relative z-10 flex h-full flex-col justify-center px-4 sm:px-8 md:px-16 lg:w-[60%] text-left text-white sm:mt-0 md:mt-0">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-3xl sm:text-4xl md:text-5xl md:mb-4 md:font-bold md:tracking-tight md:text-7xl"
        >
          Encontre o Veículo dos Seus Sonhos
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 max-w-2xl text-base sm:text-lg md:text-xl md:mb-12 text-gray-200"
        >
          A maior seleção de carros e motos novos e usados com as melhores condições
        </motion.p>

        {/* Search Form */}
        <motion.form 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full max-w-2xl rounded-2xl bg-white/10 p-4 sm:p-6 md:p-6 backdrop-blur-md"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="relative">
              <label className="mb-2 block text-sm font-medium text-gray-200">
                Condição
              </label>
              <div className="relative">
                <Listbox value={condicao} onChange={setCondicao}>
                  <div className="relative">
                    <Listbox.Button className="w-full appearance-none rounded-xl border border-red-600 bg-black p-3 text-white text-left focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 flex justify-between items-center">
                      <span>{condicao.label}</span>
                      <FaChevronDown className="ml-2 text-white/70" />
                    </Listbox.Button>
                    <Listbox.Options className="absolute z-10 mt-1 w-full rounded-xl bg-black shadow-lg ring-1 ring-red-600 focus:outline-none">
                      {condicoes.map((option) => (
                        <Listbox.Option
                          key={option.value}
                          value={option}
                          as={Fragment}
                        >
                          {({ active, selected }) => (
                            <li
                              className={`cursor-pointer select-none p-3 text-white rounded-xl transition-colors ${
                                selected ? 'bg-red-600 text-white' : active ? 'bg-red-900 text-white' : ''
                              }`}
                            >
                              {option.label}
                            </li>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </div>
                </Listbox>
              </div>
            </div>
            <div className="relative">
              <label className="mb-2 block text-sm font-medium text-gray-200">
                Marca
              </label>
              <div className="relative">
                <Listbox value={marca} onChange={setMarca}>
                  <div className="relative">
                    <Listbox.Button className="w-full appearance-none rounded-xl border border-red-600 bg-black p-3 text-white text-left focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 flex justify-between items-center">
                      <span>{marca.label}</span>
                      <FaChevronDown className="ml-2 text-white/70" />
                    </Listbox.Button>
                    <Listbox.Options className="absolute z-10 mt-1 w-full rounded-xl bg-black shadow-lg ring-1 ring-red-600 focus:outline-none">
                      {marcas.map((option) => (
                        <Listbox.Option
                          key={option.value}
                          value={option}
                          as={Fragment}
                        >
                          {({ active, selected }) => (
                            <li
                              className={`cursor-pointer select-none p-3 text-white rounded-xl transition-colors ${
                                selected ? 'bg-red-600 text-white' : active ? 'bg-red-900 text-white' : ''
                              }`}
                            >
                              {option.label}
                            </li>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </div>
                </Listbox>
              </div>
            </div>
            <div className="relative">
              <label className="mb-2 block text-sm font-medium text-gray-200">
                Modelo
              </label>
              <div className="relative">
                <Listbox value={modelo} onChange={setModelo}>
                  <div className="relative">
                    <Listbox.Button className="w-full appearance-none rounded-xl border border-red-600 bg-black p-3 text-white text-left focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 flex justify-between items-center">
                      <span>{modelo.label}</span>
                      <FaChevronDown className="ml-2 text-white/70" />
                    </Listbox.Button>
                    <Listbox.Options className="absolute z-10 mt-1 w-full rounded-xl bg-black shadow-lg ring-1 ring-red-600 focus:outline-none">
                      {modelos.map((option) => (
                        <Listbox.Option
                          key={option.value}
                          value={option}
                          as={Fragment}
                        >
                          {({ active, selected }) => (
                            <li
                              className={`cursor-pointer select-none p-3 text-white rounded-xl transition-colors ${
                                selected ? 'bg-red-600 text-white' : active ? 'bg-red-900 text-white' : ''
                              }`}
                            >
                              {option.label}
                            </li>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </div>
                </Listbox>
              </div>
            </div>
            <div className="relative">
              <label className="mb-2 block text-sm font-medium text-gray-200">
                Preço
              </label>
              <div className="relative">
                <Listbox value={preco} onChange={setPreco}>
                  <div className="relative">
                    <Listbox.Button className="w-full appearance-none rounded-xl border border-red-600 bg-black p-3 text-white text-left focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 flex justify-between items-center">
                      <span>{preco.label}</span>
                      <FaChevronDown className="ml-2 text-white/70" />
                    </Listbox.Button>
                    <Listbox.Options className="absolute z-10 mt-1 w-full rounded-xl bg-black shadow-lg ring-1 ring-red-600 focus:outline-none">
                      {precos.map((option) => (
                        <Listbox.Option
                          key={option.value}
                          value={option}
                          as={Fragment}
                        >
                          {({ active, selected }) => (
                            <li
                              className={`cursor-pointer select-none p-3 text-white rounded-xl transition-colors ${
                                selected ? 'bg-red-600 text-white' : active ? 'bg-red-900 text-white' : ''
                              }`}
                            >
                              {option.label}
                            </li>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </div>
                </Listbox>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center rounded-xl bg-red-600 px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-600/50"
          >
            <FaSearch className="mr-2" />
            Buscar Veículos
          </button>
        </motion.form>
      </div>
    </div>
  );
} 