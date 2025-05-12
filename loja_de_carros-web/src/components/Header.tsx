'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaUser, FaSearch, FaShoppingCart, FaCar } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex justify-between items-center py-2 border-b border-gray-800">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-300 flex items-center">
              <FaPhone className="mr-1 text-red-600" /> (11) 9999-9999
            </span>
            <span className="text-sm text-gray-300 flex items-center">
              <FaEnvelope className="mr-1 text-red-600" /> contato@lojadecarros.com
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-sm text-gray-300 hover:text-red-600 flex items-center">
              <FaUser className="mr-1" /> Login
            </Link>
            <Link href="/" className="text-sm text-gray-300 hover:text-red-600">
              Cadastro
            </Link>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-white flex items-center">
              <FaCar className="mr-2 text-red-600" /> Loja de Carros
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-red-600 transition-colors">
                Início
              </Link>
              <Link href="/estoque" className="text-white hover:text-red-600 transition-colors">
                Estoque
              </Link>
              <Link href="/sobre" className="text-white hover:text-red-600 transition-colors">
                Sobre
              </Link>
              <Link href="/contato" className="text-white hover:text-red-600 transition-colors">
                Contato
              </Link>
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-white hover:text-red-600 transition-colors"
              >
                <FaSearch className="text-xl" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Search Bar */}
          {searchOpen && (
            <div className="mt-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar carros..."
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-800 text-white border-gray-700"
                />
                <button className="absolute right-2 top-2 text-gray-400 hover:text-red-600">
                  <FaSearch />
                </button>
              </div>
            </div>
          )}

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4 bg-black">
              {/* Informações de contato e login/cadastro no mobile */}
              <div className="flex flex-col space-y-2 border-b border-gray-800 pb-2 mb-2">
                <span className="text-sm text-gray-300 flex items-center">
                  <FaPhone className="mr-1 text-red-600" /> (11) 9999-9999
                </span>
                <span className="text-sm text-gray-300 flex items-center">
                  <FaEnvelope className="mr-1 text-red-600" /> contato@lojadecarros.com
                </span>
                <Link href="/" className="text-sm text-gray-300 hover:text-red-600 flex items-center">
                  <FaUser className="mr-1" /> Login
                </Link>
                <Link href="/" className="text-sm text-gray-300 hover:text-red-600">
                  Cadastro
                </Link>
              </div>
              <Link href="/" className="block text-white hover:text-red-600">
                Início
              </Link>
              <Link href="/estoque" className="block text-white hover:text-red-600">
                Estoque
              </Link>
              <Link href="/sobre" className="block text-white hover:text-red-600">
                Sobre
              </Link>
              <Link href="/contato" className="block text-white hover:text-red-600">
                Contato
              </Link>
              <div className="flex items-center space-x-4">
                <button className="text-white hover:text-red-600">
                  <FaSearch className="text-xl" />
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header; 