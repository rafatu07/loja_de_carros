'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de envio do formulário
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[300px]">
        <Image
          src="/images/teste3.jpg"
          alt="Contato"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent">
          <div className="container mx-auto h-full flex items-center px-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Entre em Contato
              </h1>
              <p className="text-lg text-gray-200">
                Estamos aqui para ajudar você a encontrar o veículo dos seus sonhos
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário de Contato */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Envie sua Mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-300 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="assunto" className="block text-sm font-medium text-gray-300 mb-2">
                    Assunto
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="compra">Compra de Veículo</option>
                    <option value="venda">Venda de Veículo</option>
                    <option value="financiamento">Financiamento</option>
                    <option value="outros">Outros Assuntos</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-xl font-medium hover:bg-red-700 transition-colors duration-300"
                >
                  Enviar Mensagem
                </button>
              </form>
            </motion.div>

            {/* Informações de Contato */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              {/* Mapa */}
              <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-6">Localização</h2>
                <div className="aspect-video w-full rounded-xl overflow-hidden bg-gray-800">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975829726973!2d-46.6521903!3d-23.5645229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzUyLjMiUyA0NsKwMzknMDcuOSJX!5e0!3m2!1spt-BR!2sbr!4v1635789876543!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              {/* Informações de Contato */}
              <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-6">Informações de Contato</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-900 rounded-full flex items-center justify-center">
                      <FaPhone className="text-red-500 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Telefone</p>
                      <p className="text-lg font-medium text-white">(99) 99999-9999</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-900 rounded-full flex items-center justify-center">
                      <FaWhatsapp className="text-red-500 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">WhatsApp</p>
                      <p className="text-lg font-medium text-white">(99) 99999-9999</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-900 rounded-full flex items-center justify-center">
                      <FaEnvelope className="text-red-500 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">E-mail</p>
                      <p className="text-lg font-medium text-white">contato@lojadecarros.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-900 rounded-full flex items-center justify-center">
                      <FaMapMarkerAlt className="text-red-500 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Endereço</p>
                      <p className="text-lg font-medium text-white">Av. Paulista, 1000 - São Paulo, SP</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-6">Redes Sociais</h2>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-red-900 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                    <FaFacebookF className="text-red-500 text-xl" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-red-900 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                    <FaInstagram className="text-red-500 text-xl" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-red-900 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                    <FaWhatsapp className="text-red-500 text-xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
} 