export default function Home() {
  return (
    <main>
      {/* Premium Hero - Emotional & Aspirational */}
      <section className="relative bg-black text-white py-32 px-4 overflow-hidden">
        {/* Gradient overlay for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-black to-purple-900/40"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="text-orange-400 font-bold text-lg mb-6 tracking-widest">DESDE 1946</p>
          <h1 className="text-7xl font-black mb-6 leading-tight">
            El Sabor de <br/>tu Niñez
          </h1>
          <p className="text-2xl text-gray-200 mb-8 max-w-2xl font-light">
            80 años. Generaciones de salvadoreños. Un sabor que nunca olvidas.
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl">
            Riosoto no es solo helado. Es la tradición de tu familia. El premio después de la escuela. El lujo de lo simple. 
            Lo que siempre quisiste, ahora realidad.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#find-riosoto" className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition transform hover:scale-105">
              Encuentra Riosoto Cerca de Ti
            </a>
            <a href="#flavors" className="inline-block border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition">
              Descubre los Sabores
            </a>
          </div>
        </div>
      </section>

      {/* Hero Image Alternative - Could use ice cream photo */}
      <section className="bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-br from-orange-300 to-pink-400 rounded-3xl h-96 flex items-center justify-center text-6xl">
            🍦
          </div>
          <p className="text-gray-600 mt-6 italic">Tu helado favorito espera. Disponible en tu tienda más cercana.</p>
        </div>
      </section>

      {/* Flavor Showcase - Premium & Drool-Worthy */}
      <section id="flavors" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-black text-center mb-4 text-gray-900">30+ Sabores para Explorar</h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            Desde clásicos que amas hasta aventuras de sabor que nunca imaginaste. Cada uno es una experiencia.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Choco Cream", color: "from-amber-700 to-amber-900", desc: "El clásico atemporal" },
              { name: "Paly Kakao", color: "from-yellow-600 to-amber-800", desc: "Cacao puro de Riosoto" },
              { name: "Choco Fresa", color: "from-red-500 to-pink-600", desc: "Dulce y afrutado" },
              { name: "Choco Coco", color: "from-yellow-100 to-orange-200", desc: "Tropical y cremoso" },
              { name: "Torbellino", color: "from-purple-600 to-pink-600", desc: "Sabor Riosoto único" },
              { name: "Horchata", color: "from-orange-300 to-yellow-300", desc: "Clásico salvadoreño" },
              { name: "Mora", color: "from-purple-800 to-pink-800", desc: "Berries frescos" },
              { name: "Zapote", color: "from-orange-700 to-red-700", desc: "Frutal y especial" },
            ].map((flavor) => (
              <div 
                key={flavor.name}
                className="group cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${flavor.color} rounded-3xl h-56 flex flex-col items-center justify-center relative overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105 p-4`}>
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                  <p className="font-black text-white text-xl text-center relative z-10">{flavor.name}</p>
                  <p className="text-white/80 text-sm mt-2 text-center relative z-10">{flavor.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a href="/products" className="inline-block bg-gray-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition">
              Ver Todo el Catálogo
            </a>
          </div>
        </div>
      </section>

      {/* Why Riosoto - Emotional Connection */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16 text-gray-900">
            ¿Por Qué Riosoto?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-7xl mb-6">❤️</div>
              <h3 className="text-2xl font-black mb-4 text-gray-900">Tradición que Amas</h3>
              <p className="text-gray-700 text-lg">80 años de sabor. Tu abuelo lo probó. Tú lo pruebas. Tus hijos lo amarán. Es más que helado—es familia.</p>
            </div>
            
            <div className="text-center">
              <div className="text-7xl mb-6">✨</div>
              <h3 className="text-2xl font-black mb-4 text-gray-900">Calidad Premium</h3>
              <p className="text-gray-700 text-lg">No cortamos esquinas. Ingredientes reales. Recetas que se perfeccionaron por 80 años. Así se ve la calidad.</p>
            </div>
            
            <div className="text-center">
              <div className="text-7xl mb-6">🎉</div>
              <h3 className="text-2xl font-black mb-4 text-gray-900">El Lujo Accesible</h3>
              <p className="text-gray-700 text-lg">Riosoto es tu momento especial. Tu premio. Tu capricho. Porque mereces algo bueno, siempre.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Section - Why Riosoto Over Sarita */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-black mb-8">El Orgullo Salvadoreño</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl">
            Riosoto es El Salvador en cada cucharada. Fundada en 1946 por una familia salvadoreña que creía en algo simple: 
            hacer el mejor helado. 80 años después, seguimos creyendo lo mismo.
          </p>
          
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white border-opacity-20 hover:bg-opacity-20 transition">
              <div className="text-4xl font-black mb-3">80</div>
              <p className="font-semibold text-lg">Años Locales</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white border-opacity-20 hover:bg-opacity-20 transition">
              <div className="text-4xl font-black mb-3">3</div>
              <p className="font-semibold text-lg">Países</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white border-opacity-20 hover:bg-opacity-20 transition">
              <div className="text-4xl font-black mb-3">30+</div>
              <p className="font-semibold text-lg">Sabores</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white border-opacity-20 hover:bg-opacity-20 transition">
              <div className="text-4xl font-black mb-3">∞</div>
              <p className="font-semibold text-lg">Sonrisas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Find Riosoto Near You */}
      <section id="find-riosoto" className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-6 text-gray-900">Encuentra Riosoto Cerca de Ti</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Disponible en supermercados, distribuidoras y carros de venta en todo El Salvador. Busca la marca roja y naranja que conoces.
          </p>
          
          <div className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-3xl p-12 border-2 border-orange-400">
            <p className="text-gray-700 mb-6 text-lg">
              💡 Tip: No encuentras Riosoto en tu tienda favorita?
            </p>
            <p className="text-gray-900 font-semibold mb-8">
              Pídelo. Los distribuidores lo traen cuando saben que lo quieres. Tu voz importa.
            </p>
            <a href="/contact" className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition">
              Contáctanos
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof / UGC Placeholder */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4 text-gray-900">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Sigue a @riosotohelados en Instagram para ver momentos reales con Riosoto
          </p>
          
          <div className="grid grid-cols-3 gap-6">
            {[
              { name: "María", text: "El mejor helado de El Salvador. Punto.", emoji: "😋" },
              { name: "Carlos", text: "Llevo 30 años comiendo Riosoto. Nunca decepciona.", emoji: "🙌" },
              { name: "Ana", text: "Mis hijos lo aman. Yo lo amaba. Mi mamá también. Eso es herencia.", emoji: "❤️" },
            ].map((testimonial) => (
              <div key={testimonial.name} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
                <div className="text-3xl mb-4">{testimonial.emoji}</div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold text-gray-900">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distributor CTA - Secondary but Present */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg mb-6">¿Eres Distribuidor o Mayorista?</p>
          <h2 className="text-4xl font-black mb-6">
            Únete al Movimiento Riosoto
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Queremos que Riosoto llegue a más salvadoreños. Si distribuyes, vende o administras una tienda, hablemos.
          </p>
          <a href="/contact" className="inline-block bg-white text-pink-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg transition transform hover:scale-105">
            Contáctanos para Distribuir
          </a>
        </div>
      </section>
    </main>
  );
}
