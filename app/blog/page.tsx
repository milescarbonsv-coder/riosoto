export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "80 Años de Sabor: La Historia Detrás de Choco Cream",
      excerpt: "El sabor que comenzó todo. Desde 1946 hasta hoy, Choco Cream ha sido el helado que define a Riosoto.",
      date: "Feb 15, 2026",
      category: "Flavor Story",
      readTime: "4 min",
      image: "🍫"
    },
    {
      id: 2,
      title: "¿Por Qué Riosoto es Diferente? El Secreto está en la Tradición",
      excerpt: "No copiamos tendencias. Creamos sabores que perduran. Descubre qué nos hace únicos en El Salvador.",
      date: "Feb 12, 2026",
      category: "Heritage",
      readTime: "5 min",
      image: "❤️"
    },
    {
      id: 3,
      title: "Horchata de Riosoto: El Clásico Salvadoreño Reinventado",
      excerpt: "Horchata es tradición. Riosoto es tradición. Juntas forman magia. Te contamos la historia.",
      date: "Feb 10, 2026",
      category: "Flavor Story",
      readTime: "3 min",
      image: "🥛"
    },
    {
      id: 4,
      title: "Detrás de Escenas: Cómo Hacemos Nuestros Helados",
      excerpt: "Desde el cacao hasta tu cuchara. Un tour por el proceso que convierte ingredientes simples en experiencias especiales.",
      date: "Feb 8, 2026",
      category: "Behind the Scenes",
      readTime: "6 min",
      image: "👨‍🍳"
    },
    {
      id: 5,
      title: "Las 5 Formas en que Riosoto Apareció en Tu Infancia",
      excerpt: "Escuela. Celebraciones. Premios. Riosoto siempre estaba. Te contamos nuestros momentos favoritos con clientes.",
      date: "Feb 5, 2026",
      category: "Community",
      readTime: "4 min",
      image: "🎉"
    },
    {
      id: 6,
      title: "Mora: El Sabor Especial que Casi No Creamos",
      excerpt: "Una historia de innovación y riesgo. Cómo Mora se convirtió en uno de nuestros favoritos.",
      date: "Feb 1, 2026",
      category: "Flavor Story",
      readTime: "5 min",
      image: "🫐"
    }
  ];

  return (
    <main className="bg-white">
      {/* Header */}
      <div className="py-20 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-orange-400 font-bold text-lg mb-4 tracking-widest">HISTORIAS</p>
          <h1 className="text-6xl font-black mb-4">El Blog de Riosoto</h1>
          <p className="text-xl text-gray-300">Historias de sabor, tradición y los momentos que hacen especial a Riosoto.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Category Filter */}
        <div className="flex gap-3 mb-16 flex-wrap justify-center">
          {['All', 'Flavor Story', 'Heritage', 'Behind the Scenes', 'Community'].map((cat) => (
            <button
              key={cat}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                cat === 'All'
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition transform hover:scale-105 cursor-pointer overflow-hidden border-t-4 border-orange-500"
            >
              <div className="bg-gradient-to-br from-orange-100 to-pink-100 h-40 flex items-center justify-center text-8xl">
                {post.image}
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-black text-gray-900 mb-3 leading-tight">
                  {post.title}
                </h3>

                <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">{post.date}</span>
                  <button className="text-orange-600 font-bold hover:text-orange-700">
                    Leer →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white p-12 rounded-3xl text-center">
          <h2 className="text-3xl font-black mb-4">No Te Pierdas las Nuevas Historias</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Suscríbete para recibir nuevos artículos sobre sabores, recetas y la historia de Riosoto.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none"
            />
            <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
              Suscribir
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
