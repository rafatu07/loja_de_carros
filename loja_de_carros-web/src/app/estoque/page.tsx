import SearchFilters from "@/components/SearchFilters";
import FeaturedCars from "@/components/FeaturedCars";

export default function Estoque() {
  return (
    <main className="min-h-screen py-8 bg-black text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Nosso Estoque</h1>
        
        {/* Filtros Avançados */}
        <div className="mb-8">
          <SearchFilters />
        </div>
        
        {/* Grid de Veículos */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Veículos Disponíveis</h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors border border-gray-700">
                Grid
              </button>
              <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors border border-gray-700">
                Lista
              </button>
            </div>
          </div>
          <FeaturedCars />
        </div>
        
        {/* Paginação */}
        <div className="flex justify-center gap-2">
          <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors border border-gray-700">
            Anterior
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            1
          </button>
          <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors border border-gray-700">
            2
          </button>
          <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors border border-gray-700">
            3
          </button>
          <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors border border-gray-700">
            Próximo
          </button>
        </div>
      </div>
    </main>
  );
} 