'use client';

import { useState, useRef, useEffect } from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const SearchFilters = () => {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([181, 700000]);
  const minPriceRef = useRef(null);
  const maxPriceRef = useRef(null);
  const rangeRef = useRef(null);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMinVal = parseInt(e.target.value);
    if (newMinVal < priceRange[1]) {
      setPriceRange([newMinVal, priceRange[1]]);
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxVal = parseInt(e.target.value);
    if (newMaxVal > priceRange[0]) {
      setPriceRange([priceRange[0], newMaxVal]);
    }
  };

  return (
    <section className="py-8 bg-black">
      <div className="container mx-auto px-4">
        <RevealOnScroll width="100%">
          <form className="bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-gray-300 mb-2">Marca</label>
                <select className="w-full p-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500">
                  <option>Todas as marcas</option>
                  <option>BMW</option>
                  <option>Mercedes</option>
                  <option>Audi</option>
                  <option>Porsche</option>
                  <option>Volkswagen</option>
                  <option>Ford</option>
                  <option>Toyota</option>
                  <option>Chevrolet</option>
                  <option>Hyundai</option>
                  <option>Jeep</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Modelo</label>
                <select className="w-full p-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500">
                  <option>Todos os modelos</option>
                  <option>Corolla</option>
                  <option>Civic</option>
                  <option>Renegade</option>
                  <option>HB20</option>
                  <option>Onix</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Ano</label>
                <select className="w-full p-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500">
                  <option>Qualquer ano</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Status</label>
                <select className="w-full p-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500">
                  <option>Todos</option>
                  <option>Novo</option>
                  <option>Seminovo</option>
                  <option>Usado</option>
                </select>
              </div>
            </div>

            {/* Preço Slider */}
            <div className="mb-6">
              <label className="block text-gray-300 mb-2">Preço</label>
              <div className="px-2">
                <div className="flex justify-between mb-4 text-gray-300">
                  <span>R${priceRange[0]}</span>
                  <span>R${priceRange[1].toLocaleString('pt-BR')}</span>
                </div>
                <Slider
                  range
                  min={181}
                  max={700000}
                  value={priceRange}
                  onChange={(value) => setPriceRange(value as [number, number])}
                  trackStyle={[{ backgroundColor: '#e41d1d' }]}
                  handleStyle={[
                    { borderColor: '#e41d1d', backgroundColor: '#1f2937' },
                    { borderColor: '#e41d1d', backgroundColor: '#1f2937' }
                  ]}
                  railStyle={{ backgroundColor: '#4b5563' }}
                />
              </div>
            </div>

            {/* Cor */}
            <div className="mb-6">
              <label className="block text-gray-300 mb-2">Cor</label>
              <select className="w-full p-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500">
                <option>Qualquer cor</option>
                <option>Preto</option>
                <option>Branco</option>
                <option>Prata</option>
                <option>Cinza</option>
                <option>Vermelho</option>
                <option>Azul</option>
              </select>
            </div>

            {/* Advanced Filters Button */}
            <div className="text-center mb-4">
              <button
                type="button"
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                className="text-red-600 hover:text-red-500 flex items-center justify-center gap-2"
              >
                {showAdvancedFilters ? 'Ocultar Filtros' : 'Mostrar Filtros Avançados'}
                <svg
                  className={`w-4 h-4 transition-transform ${
                    showAdvancedFilters ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            {/* Advanced Filters */}
            {showAdvancedFilters && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <label className="block text-gray-300 mb-2">Quilometragem</label>
                  <select className="w-full p-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500">
                    <option>Qualquer quilometragem</option>
                    <option>Até 10.000 km</option>
                    <option>10.000 - 30.000 km</option>
                    <option>30.000 - 50.000 km</option>
                    <option>50.000 - 100.000 km</option>
                    <option>Acima de 100.000 km</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Combustível</label>
                  <select className="w-full p-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500">
                    <option>Qualquer combustível</option>
                    <option>Gasolina</option>
                    <option>Álcool</option>
                    <option>Flex</option>
                    <option>Diesel</option>
                    <option>Elétrico</option>
                    <option>Híbrido</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Câmbio</label>
                  <select className="w-full p-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500">
                    <option>Qualquer câmbio</option>
                    <option>Automático</option>
                    <option>Manual</option>
                    <option>CVT</option>
                    <option>Semi-automático</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Portas</label>
                  <select className="w-full p-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500">
                    <option>Qualquer número</option>
                    <option>2 portas</option>
                    <option>4 portas</option>
                    <option>5 portas</option>
                  </select>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold transition-colors"
              >
                MOSTRAR 52 CARROS
              </button>
            </div>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default SearchFilters; 