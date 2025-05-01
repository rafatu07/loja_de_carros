'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { AnimatedStat } from '@/components/AnimatedStat';
import { RevealOnScroll } from '@/components/RevealOnScroll';

export default function SobrePage() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <Image
          src="/images/teste3.jpg"
          alt="Showroom da loja"
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
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold text-white mb-4"
              >
                Nossa História
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-200"
              >
                Conheça nossa trajetória de excelência e compromisso com a satisfação dos nossos clientes
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Missão e Valores */}
            <div className="space-y-8">
              <RevealOnScroll width="100%">
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
                  <h2 className="text-2xl font-bold text-zinc-900 mb-4">Nossa Missão</h2>
                  <p className="text-zinc-600">
                    Proporcionar a melhor experiência na compra e venda de veículos, 
                    com transparência, qualidade e excelência no atendimento, 
                    superando as expectativas dos nossos clientes.
                  </p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll width="100%">
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
                  <h2 className="text-2xl font-bold text-zinc-900 mb-4">Nossos Valores</h2>
                  <ul className="text-zinc-600 space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span>Transparência em todas as negociações</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span>Compromisso com a satisfação do cliente</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span>Excelência no atendimento</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span>Responsabilidade social e ambiental</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span>Inovação constante</span>
                    </li>
                  </ul>
                </div>
              </RevealOnScroll>
            </div>

            {/* História e Números */}
            <div className="space-y-8">
              <RevealOnScroll width="100%">
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
                  <h2 className="text-2xl font-bold text-zinc-900 mb-4">Nossa História</h2>
                  <p className="text-zinc-600">
                    Desde 2010, somos referência no mercado automotivo, 
                    oferecendo os melhores veículos novos e seminovos. 
                    Nossa trajetória é marcada pela busca constante da excelência 
                    e pelo compromisso com a satisfação dos nossos clientes.
                  </p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll width="100%">
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
                  <h2 className="text-2xl font-bold text-zinc-900 mb-6">Números que nos Orgulham</h2>
                  <div className="grid grid-cols-2 gap-6">
                    <AnimatedStat
                      end={5000}
                      label="Clientes Satisfeitos"
                      prefix="+"
                    />
                    <AnimatedStat
                      end={10000}
                      label="Veículos Vendidos"
                      prefix="+"
                    />
                    <AnimatedStat
                      end={13}
                      label="Anos no Mercado"
                    />
                    <AnimatedStat
                      end={4.9}
                      label="Avaliação dos Clientes"
                    />
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>

          {/* Equipe */}
          <div className="mt-16">
            <RevealOnScroll width="100%">
              <h2 className="text-3xl font-bold text-zinc-900 text-center mb-12">Nossa Equipe</h2>
            </RevealOnScroll>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <RevealOnScroll width="100%">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                    <Image
                      src="/images/diretor-comercial.jpeg"
                      alt="Diretor Comercial"
                      fill
                      sizes="(max-width: 768px) 96px, 96px"
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900">João Silva</h3>
                  <p className="text-zinc-600">Diretor Comercial</p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll width="100%">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                    <Image
                      src="/images/gerente-vendas.jpeg"
                      alt="Gerente de Vendas"
                      fill
                      sizes="(max-width: 768px) 96px, 96px"
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900">Maria Santos</h3>
                  <p className="text-zinc-600">Gerente de Vendas</p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll width="100%">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                    <Image
                      src="/images/consultor-tecnico.jpeg"
                      alt="Consultor Técnico"
                      fill
                      sizes="(max-width: 768px) 96px, 96px"
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900">Pedro Oliveira</h3>
                  <p className="text-zinc-600">Consultor Técnico</p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 