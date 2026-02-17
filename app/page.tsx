export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-orange-50 via-pink-50 to-purple-50 py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-4 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="text-orange-600 font-bold text-xs sm:text-sm md:text-lg mb-2 sm:mb-4 tracking-wide">DESDE 1946</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-3 sm:mb-4 md:mb-6 text-gray-900 leading-tight">
            Helados Riosoto
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-gray-700 mb-3 sm:mb-4 md:mb-6 font-light">
            80 años de tradición, sabor y confianza
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto">
            La marca local que las familias salvadoreñas eligen desde 1946. Ahora trayendo 30+ sabores únicos a tu negocio.
          </p>
          <a href="#distributor" className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:shadow-lg transition transform hover:scale-105">
            Distribuye Riosoto Hoy
          </a>
        </div>
      </section>

      {/* Flavor Highlights Preview */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-center mb-2 sm:mb-3 md:mb-4 text-gray-900">Sabores que Enamoran</h2>
          <p className="text-center text-gray-600 text-sm sm:text-base md:text-lg mb-8 sm:mb-12 md:mb-16">Desde clásicos hasta aventuras exóticas</p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {[
              { name: "Choco Cream", color: "from-amber-600 to-amber-700" },
              { name: "Paly Kakao", color: "from-yellow-600 to-amber-700" },
              { name: "Choco Fresa", color: "from-pink-600 to-red-700" },
              { name: "Choco Coco", color: "from-yellow-200 to-yellow-300" },
              { name: "Torbellino", color: "from-purple-600 to-pink-600" },
              { name: "Horchata", color: "from-orange-300 to-yellow-200" },
              { name: "Mora", color: "from-purple-700 to-pink-700" },
              { name: "Zapote", color: "from-orange-600 to-red-600" },
            ].map((flavor) => (
              <div 
                key={flavor.name}
                className="group cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${flavor.color} rounded-2xl sm:rounded-3xl h-24 sm:h-32 md:h-40 flex items-center justify-center relative overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105`}>
                  <p className="font-bold text-white text-xs sm:text-sm md:text-lg text-center px-2">{flavor.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12 md:mt-16">
            <a href="/products" className="inline-block bg-gray-900 text-white px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-gray-800 transition">
              Ver Todo el Catálogo (30+ Sabores)
            </a>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-4 bg-gradient-to-r from-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4 sm:mb-6">80 Años de Historia</h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 sm:mb-10 max-w-2xl">
            Desde 1946, Riosoto ha sido el sabor de confianza en El Salvador. Generaciones de salvadoreños han crecido con nuestros helados.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center border border-white border-opacity-20">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black mb-2">80</div>
              <p className="text-xs sm:text-sm font-semibold">Años</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center border border-white border-opacity-20">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black mb-2">30+</div>
              <p className="text-xs sm:text-sm font-semibold">Sabores</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center border border-white border-opacity-20">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black mb-2">3</div>
              <p className="text-xs sm:text-sm font-semibold">Países</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center border border-white border-opacity-20">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black mb-2">∞</div>
              <p className="text-xs sm:text-sm font-semibold">Sonrisas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Riosoto */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-center mb-8 sm:mb-12 md:mb-16 text-gray-900">
            Por Qué Elegir Riosoto
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition border-b-4 border-orange-400">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">👨‍👩‍👧‍👦</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-3 sm:mb-4 text-gray-900">Familia Salvadoreña</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700">Empresa 100% salvadoreña con raíces profundas. Conocemos tu mercado mejor que nadie.</p>
            </div>
            
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition border-b-4 border-pink-400">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">✨</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-3 sm:mb-4 text-gray-900">Sabor Probado</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700">8 décadas de perfección. Recetas tradiciones que vuelven a tus clientes.</p>
            </div>
            
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition border-b-4 border-purple-400">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">🚀</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-3 sm:mb-4 text-gray-900">Variedad Exclusiva</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700">30+ sabores únicos. Desde clásicos hasta innovaciones que sorprenden.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="distributor" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-4 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4 sm:mb-6 text-white">
            ¿Listo para Distribuir?
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto">
            Supermercados, distribuidores, vendedores—todos ganan con Riosoto. Márgenes atractivos. Apoyo total. Marca de confianza.
          </p>
          <div className="flex gap-3 sm:gap-4 justify-center flex-col sm:flex-row">
            <a href="/contact" className="inline-block bg-white text-orange-600 px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:shadow-lg transition transform hover:scale-105">
              Solicitar Información
            </a>
            <a href="/products" className="inline-block border-2 border-white text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-white hover:text-orange-600 transition">
              Ver Catálogo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
