import SearchFilters from "@/components/SearchFilters";
import FeaturedCars from "@/components/FeaturedCars";

export default function Estoque() {
  return (
    <main className="min-h-screen py-8">
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
              <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
                Grid
              </button>
              <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
                Lista
              </button>
            </div>
          </div>
          <FeaturedCars />
        </div>
        
        {/* Paginação */}
        <div className="flex justify-center gap-2">
          <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
            Anterior
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            1
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
            2
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
            3
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
            Próximo
          </button>
        </div>
      </div>
    </main>
  );
} 