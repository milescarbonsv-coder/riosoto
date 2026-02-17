'use client';

import { useState } from 'react';

type ProductCategory = 'flavors' | 'presentations' | 'bulk';

interface FlavorProduct {
  name: string;
  color: string;
  desc: string;
  icon: string;
}

interface OtherProduct {
  name: string;
  emoji: string;
  desc: string;
}

const products: Record<ProductCategory, FlavorProduct[] | OtherProduct[]> = {
  flavors: [
    { name: "Choco Cream", color: "from-amber-700 to-amber-900", desc: "El clásico", icon: "🍫" },
    { name: "Paly Kakao", color: "from-yellow-600 to-amber-800", desc: "Cacao salvadoreño", icon: "🍫" },
    { name: "Choco Fresa", color: "from-red-500 to-pink-600", desc: "Dulce & afrutado", icon: "🍓" },
    { name: "Choco Coco", color: "from-yellow-100 to-orange-200", desc: "Tropical", icon: "🥥" },
    { name: "Special", color: "from-blue-600 to-purple-600", desc: "Lo único", icon: "✨" },
    { name: "Chocotron", color: "from-amber-700 to-orange-800", desc: "Intenso", icon: "⚡" },
    { name: "Choco Turbo", color: "from-amber-500 to-red-600", desc: "Explosivo", icon: "🚀" },
    { name: "Torbellino", color: "from-purple-600 to-pink-600", desc: "Swirl único", icon: "🌀" },
    { name: "Campeón", color: "from-green-600 to-blue-600", desc: "Ganador", icon: "🏆" },
    { name: "Solaris", color: "from-yellow-400 to-orange-500", desc: "Brillante", icon: "☀️" },
    { name: "Nance", color: "from-yellow-500 to-orange-600", desc: "Frutal", icon: "🍯" },
    { name: "Coco", color: "from-yellow-100 to-yellow-200", desc: "Suave", icon: "🥥" },
    { name: "Mora", color: "from-purple-800 to-pink-800", desc: "Berries", icon: "🫐" },
    { name: "Zapote", color: "from-orange-700 to-red-700", desc: "Centroamericano", icon: "🍊" },
    { name: "Horchata", color: "from-orange-300 to-yellow-300", desc: "Clásico salvadoreño", icon: "🥛" },
  ],
  presentations: [
    { name: "Mister Cono", emoji: "🍦", desc: "En tu mano" },
    { name: "Sandwich Ice Cream", emoji: "🥪", desc: "Entre pan" },
    { name: "Heladito", emoji: "🍧", desc: "De bolsillo" },
    { name: "Cookies and Cream", emoji: "🍪", desc: "Con sorpresa" },
    { name: "Copa Premium", emoji: "🍷", desc: "Elegante" },
    { name: "Copa Sundae", emoji: "🍨", desc: "El lujo" },
    { name: "Sundae", emoji: "🌈", desc: "Completo" },
    { name: "Mega Sundae", emoji: "🏆", desc: "XXL" },
    { name: "Vasito de Helado", emoji: "🥤", desc: "Clásico" },
  ],
  bulk: [
    { name: "Sorbete", emoji: "🧊", desc: "Individual" },
    { name: "Medio Galón", emoji: "🧊", desc: "Para compartir" },
    { name: "Galones", emoji: "🍯", desc: "Para el negocio" },
    { name: "Caja", emoji: "📦", desc: "Al por mayor" },
  ]
};

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('flavors');
  const currentProducts = products[activeCategory] as (FlavorProduct | OtherProduct)[];

  return (
    <main className="bg-white">
      {/* Header */}
      <div className="py-20 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-orange-400 font-bold text-lg mb-4 tracking-widest">DESCUBRE</p>
          <h1 className="text-6xl font-black mb-4">30+ Sabores para Explorar</h1>
          <p className="text-xl text-gray-300">Desde clásicos que amas hasta aventuras que nunca imaginaste.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Category Tabs */}
        <div className="flex justify-center gap-3 mb-16 flex-wrap">
          {[
            { key: 'flavors' as const, label: '🍦 Sabores' },
            { key: 'presentations' as const, label: '🍭 Presentaciones' },
            { key: 'bulk' as const, label: '📦 Mayoristas' }
          ].map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key as ProductCategory)}
              className={`px-8 py-4 rounded-full font-bold text-lg transition transform hover:scale-105 ${
                activeCategory === cat.key
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {activeCategory === 'flavors' ? (
            // Flavor Cards
            currentProducts.map((product) => (
              <div 
                key={product.name}
                className="group cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${product.color} rounded-3xl h-56 flex flex-col items-center justify-center relative overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105 p-4`}>
                  {/* Premium shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                  
                  <div className="text-6xl mb-3 relative z-10">{product.icon}</div>
                  <p className="font-black text-white text-lg text-center relative z-10">{product.name}</p>
                  <p className="text-white/90 text-sm mt-2 relative z-10">{product.desc}</p>
                </div>
              </div>
            ))
          ) : (
            // Presentations/Bulk
            currentProducts.map((product) => (
              <div 
                key={product.name}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition transform hover:scale-105 border-2 border-gray-200 hover:border-orange-400 text-center cursor-pointer"
              >
                <div className="text-6xl mb-4">{product.emoji}</div>
                <h3 className="font-black text-gray-900 text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.desc}</p>
              </div>
            ))
          )}
        </div>

        {/* Flavor Cards - Detailed View */}
        {activeCategory === 'flavors' && (
          <div className="bg-gradient-to-r from-orange-50 to-pink-50 p-12 rounded-3xl mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">Cada Sabor Cuenta Una Historia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🍫</div>
                <h3 className="font-black text-gray-900 text-xl mb-2">Chocolates</h3>
                <p className="text-gray-700">Choco Cream, Paly Kakao, Choco Fresa, Choco Coco, Chocotron, Choco Turbo. Los clásicos que todas las generaciones aman.</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🌈</div>
                <h3 className="font-black text-gray-900 text-xl mb-2">Frutas & Especiales</h3>
                <p className="text-gray-700">Mora, Zapote, Horchata, Nance, Solaris. Lo único. Lo especial. Lo que te sorprenderá.</p>
              </div>
            </div>
          </div>
        )}

        {/* Info Box */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-12 rounded-3xl">
          <h3 className="font-black text-2xl mb-4">¿Dónde Comprar Riosoto?</h3>
          <p className="text-lg mb-6">
            Riosoto está en supermercados, distribuidoras y carros de venta en todo El Salvador. 
            Busca la marca roja y naranja que conoces.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="/" className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:shadow-lg transition">
              Encuentra Riosoto Cerca de Ti
            </a>
            <a href="/contact" className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-blue-900 transition">
              No Encuentras? Cuéntanos
            </a>
          </div>
        </div>
      </div>

      {/* Distributor CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-center mt-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-4">¿Distribuyes o Vendes?</p>
          <h2 className="text-3xl font-black mb-4">Distribuye Riosoto</h2>
          <p className="text-lg mb-8">Lleva el sabor de El Salvador a tu negocio. Márgenes atractivos. Marca de confianza.</p>
          <a href="/contact" className="inline-block bg-white text-pink-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg transition">
            Conoce Opciones de Distribución
          </a>
        </div>
      </section>
    </main>
  );
}
