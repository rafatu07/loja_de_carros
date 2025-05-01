'use client';

import { useState } from 'react';
import { RevealOnScroll } from './RevealOnScroll';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Formulário enviado:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <RevealOnScroll width="100%">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Entre em Contato</h2>
            <p className="text-gray-600">
              Estamos aqui para ajudar você a encontrar o carro perfeito
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid gap-8 md:grid-cols-2">
          <RevealOnScroll width="100%">
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-xl font-semibold">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg
                    className="mr-4 h-6 w-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold">Endereço</h4>
                    <p className="text-gray-600">
                      Av. Paulista, 1000 - São Paulo, SP
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="mr-4 h-6 w-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold">Telefone</h4>
                    <p className="text-gray-600">(11) 9999-9999</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="mr-4 h-6 w-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">contato@lojadecarros.com.br</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="mr-4 h-6 w-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold">Horário de Funcionamento</h4>
                    <p className="text-gray-600">
                      Segunda a Sexta: 09:00 - 18:00
                      <br />
                      Sábado: 09:00 - 14:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Mapa */}
              <div className="mt-8 h-64 w-full overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197584455617!2d-46.6586759!3d-23.5611081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1645541234567!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll width="100%">
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-xl font-semibold">Envie uma Mensagem</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
                    placeholder="(11) 99999-9999"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
                    rows={4}
                    placeholder="Sua mensagem"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
} 