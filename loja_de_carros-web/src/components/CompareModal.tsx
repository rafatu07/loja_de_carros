'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FaCar, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { useCompare } from './CompareContext';
import { cars } from '@/data/cars';

interface Car {
  id: number;
  name: string;
  price: string;
  year: number;
  status: string;
  color: string;
  model: string;
  brand: string;
  image: string;
  images: string[];
}

interface CompareModalProps {
  open: boolean;
  onClose: () => void;
}

export const CompareModal: React.FC<CompareModalProps> = ({ open, onClose }) => {
  const { cars: compareCars, addCar, removeCar } = useCompare();
  const [selectingSlot, setSelectingSlot] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Carros disponíveis para adicionar (não estão no comparador)
  const availableCars = cars.filter(
    (c) => !compareCars.filter((comp): comp is Car => !!comp).some((comp) => comp.id === c.id)
  );

  // Função para detectar cliques fora do modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div 
        ref={modalRef}
        className="relative bg-black border border-gray-800 rounded-xl shadow-2xl w-full max-w-6xl mx-4 p-8"
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-red-600 text-2xl"
          onClick={onClose}
          aria-label="Fechar"
        >
          <FaTimes />
        </button>
        <h2 className="text-3xl font-bold text-white mb-8">COMPARAR CARROS</h2>
        <div className="grid grid-cols-3 gap-8 mb-8">
          {compareCars.map((car, idx) => (
            <div key={idx} className="flex flex-col items-center relative">
              {car ? (
                <>
                  <div className="w-full h-40 relative mb-4">
                    <Image src={car.image} alt={car.name} fill className="object-cover rounded-lg" />
                    <button
                      className="absolute top-2 right-2 bg-black bg-opacity-60 rounded-full p-1 text-gray-300 hover:text-red-600"
                      onClick={() => removeCar(car.id)}
                      title="Remover do comparador"
                    >
                      <FaTimes />
                    </button>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-300 text-xs mb-1">{car.brand} {car.model}</div>
                    <div className="text-white font-bold text-lg mb-2">{car.name}</div>
                    <div className="inline-block bg-red-600 text-white px-4 py-1 rounded font-bold text-base mb-2">{car.price}</div>
                  </div>
                </>
              ) : (
                <button
                  className="flex flex-col items-center justify-center w-full h-40 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  onClick={() => setSelectingSlot(idx)}
                >
                  <FaCar className="text-5xl text-gray-400 mb-2" />
                  <span className="text-gray-400 text-sm">ADICIONE CARRO PARA COMPARAR</span>
                </button>
              )}
              {/* Dropdown de seleção de carro */}
              {selectingSlot === idx && (
                <div className="absolute top-44 left-0 right-0 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-50 p-4">
                  <div className="mb-2 text-white font-semibold">Escolha um veículo:</div>
                  <div className="max-h-60 overflow-y-auto">
                    {availableCars.length === 0 && (
                      <div className="text-gray-400">Nenhum veículo disponível</div>
                    )}
                    {availableCars.map((c) => (
                      <button
                        key={c.id}
                        className="flex items-center w-full text-left p-2 hover:bg-gray-800 rounded transition-colors"
                        onClick={() => {
                          addCar({
                            ...c,
                            status: '',
                            model: c.name,
                            brand: c.name.split(' ')[0],
                            image: c.images[0],
                          });
                          setSelectingSlot(null);
                        }}
                      >
                        <Image src={c.images[0]} alt={c.name} width={48} height={32} className="rounded mr-2" />
                        <span className="text-white">{c.name} <span className="font-bold">{c.price}</span></span>
                      </button>
                    ))}
                  </div>
                  <button
                    className="mt-2 text-xs text-gray-400 hover:text-red-500"
                    onClick={() => setSelectingSlot(null)}
                  >
                    Cancelar
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Nova tabela de comparação - cada coluna representa um veículo */}
        <div className="border-t border-gray-800 pt-6">
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="text-gray-400 text-sm font-semibold">CARACTERÍSTICAS</div>
            {compareCars.map((_, idx) => (
              <div key={idx} className="text-gray-400 text-sm"></div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="text-gray-400 text-sm font-semibold">MARCA</div>
            {compareCars.map((car, idx) => (
              <div key={idx} className="text-white text-sm">{car ? car.brand : '-'}</div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="text-gray-400 text-sm font-semibold">MODELO</div>
            {compareCars.map((car, idx) => (
              <div key={idx} className="text-white text-sm">{car ? car.model : '-'}</div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="text-gray-400 text-sm font-semibold">ANO</div>
            {compareCars.map((car, idx) => (
              <div key={idx} className="text-white text-sm">{car ? car.year : '-'}</div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="text-gray-400 text-sm font-semibold">STATUS</div>
            {compareCars.map((car, idx) => (
              <div key={idx} className="text-white text-sm">{car ? car.status : '-'}</div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="text-gray-400 text-sm font-semibold">COR</div>
            {compareCars.map((car, idx) => (
              <div key={idx} className="text-white text-sm">{car ? car.color : '-'}</div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="text-gray-400 text-sm font-semibold">CARACTERÍSTICAS ADICIONAIS</div>
            {compareCars.map((car, idx) => (
              <div key={idx} className="text-white text-sm">{car ? 'Ver detalhes' : '-'}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 