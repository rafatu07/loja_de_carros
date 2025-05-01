import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <div className="relative h-[800px] w-full">
      <Image
        src="/images/header.jpg"
        alt="Concessionária de Carros"
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
              Encontre o Carro Perfeito para Você
            </h1>
            <p className="text-2xl mb-12 text-white/90">
              As melhores ofertas de carros novos e seminovos com as condições mais atrativas do mercado
            </p>
            <div className="flex gap-4">
              <Link href="/estoque">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105">
                  Ver Estoque
                </button>
              </Link>
              <Link href="/contato">
                <button className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105">
                  Fale Conosco
                </button>
              </Link>
            </div>
          </div>
          
          {/* Search Box */}
          <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2">
            <div className="container mx-auto px-4">
              <div className="bg-white rounded-xl shadow-2xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Marca
                    </label>
                    <select className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-red-500">
                      <option value="">Todas as marcas</option>
                      <option value="toyota">Toyota</option>
                      <option value="honda">Honda</option>
                      <option value="volkswagen">Volkswagen</option>
                      <option value="chevrolet">Chevrolet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Modelo
                    </label>
                    <select className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-red-500">
                      <option value="">Todos os modelos</option>
                      <option value="corolla">Corolla</option>
                      <option value="civic">Civic</option>
                      <option value="golf">Golf</option>
                      <option value="onix">Onix</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ano
                    </label>
                    <select className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-red-500">
                      <option value="">Qualquer ano</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105">
                      Buscar Veículos
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 