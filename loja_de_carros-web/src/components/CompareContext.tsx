'use client';
import React, { createContext, useContext, useState } from 'react';

export interface Car {
  id: number;
  name: string;
  price: string;
  year: number;
  status: string;
  color: string;
  model: string;
  brand: string;
  image: string;
}

interface CompareContextType {
  cars: (Car | null)[];
  addCar: (car: Car) => void;
  removeCar: (id: number) => void;
  clear: () => void;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export const CompareProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cars, setCars] = useState<(Car | null)[]>([null, null, null]);

  const addCar = (car: Car) => {
    if (cars.find((c) => c && c.id === car.id)) return;
    const idx = cars.findIndex((c) => c === null);
    if (idx !== -1) {
      const newCars = [...cars];
      newCars[idx] = car;
      setCars(newCars);
    }
  };

  const removeCar = (id: number) => {
    setCars((prev) => prev.map((c) => (c && c.id === id ? null : c)));
  };

  const clear = () => setCars([null, null, null]);

  return (
    <CompareContext.Provider value={{ cars, addCar, removeCar, clear }}>
      {children}
    </CompareContext.Provider>
  );
};

export function useCompare() {
  const ctx = useContext(CompareContext);
  if (!ctx) throw new Error('useCompare deve ser usado dentro de CompareProvider');
  return ctx;
} 