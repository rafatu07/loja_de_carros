'use client';

import { useState } from 'react';
import { RevealOnScroll } from './RevealOnScroll';

const SearchFilters = () => {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <RevealOnScroll width="100%">
          <form className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Marca</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Todas as marcas</option>
                  <option>BMW</option>
                  <option>Mercedes</option>
                  <option>Audi</option>
                  <option>Porsche</option>
                  <option>Volkswagen</option>
                  <option>Ford</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Modelo</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Todos os modelos</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Preço</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Qualquer preço</option>
                  <option>Até R$ 50.000</option>
                  <option>R$ 50.000 - R$ 100.000</option>
                  <option>R$ 100.000 - R$ 200.000</option>
                  <option>R$ 200.000 - R$ 500.000</option>
                  <option>Acima de R$ 500.000</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Ano</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Qualquer ano</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                </select>
              </div>
            </div>

            {/* Advanced Filters Button */}
            <div className="text-center mb-4">
              <button
                type="button"
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                className="text-red-600 hover:text-red-700 flex items-center justify-center gap-2"
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
                  <label className="block text-gray-700 mb-2">Quilometragem</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Qualquer quilometragem</option>
                    <option>Até 10.000 km</option>
                    <option>10.000 - 30.000 km</option>
                    <option>30.000 - 50.000 km</option>
                    <option>50.000 - 100.000 km</option>
                    <option>Acima de 100.000 km</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Combustível</label>
                  <select className="w-full p-2 border rounded-md">
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
                  <label className="block text-gray-700 mb-2">Câmbio</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Qualquer câmbio</option>
                    <option>Automático</option>
                    <option>Manual</option>
                    <option>Automático Sequencial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Cor</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Qualquer cor</option>
                    <option>Preto</option>
                    <option>Branco</option>
                    <option>Prata</option>
                    <option>Cinza</option>
                    <option>Vermelho</option>
                    <option>Azul</option>
                  </select>
                </div>
              </div>
            )}

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors"
              >
                Buscar Carros
              </button>
            </div>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default SearchFilters; 