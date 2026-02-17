export default function Recipes() {
  const recipes = [
    {
      id: 1,
      title: "Sundae de Lujo con Riosoto",
      excerpt: "Una copa elegante que mezcla Riosoto Premium con chocolate caliente y frutas frescas.",
      prepTime: "10 min",
      difficulty: "Fácil",
      emoji: "🍨",
      ingredients: ["Copa Premium Riosoto", "Chocolate derretido", "Fresas", "Nueces", "Crema batida"]
    },
    {
      id: 2,
      title: "Milkshake de Choco Fresa",
      excerpt: "Refrescante y delicioso. Perfecto para días calurosos en El Salvador.",
      prepTime: "5 min",
      difficulty: "Muy Fácil",
      emoji: "🥤",
      ingredients: ["Helado Choco Fresa Riosoto", "Leche fría", "Miel", "Hielo"]
    },
    {
      id: 3,
      title: "Sándwich Gourmet con Riosoto",
      excerpt: "Nuestro Sandwich Ice Cream con pan tostado y caramelo casero.",
      prepTime: "15 min",
      difficulty: "Medio",
      emoji: "🥪",
      ingredients: ["Sandwich Ice Cream Riosoto", "Pan integral", "Caramelo", "Almendras"]
    },
    {
      id: 4,
      title: "Postre Helado de Mora",
      excerpt: "Un postre sofisticado con nuestro sabor Mora, perfecto para cenas especiales.",
      prepTime: "20 min",
      difficulty: "Medio",
      emoji: "🫐",
      ingredients: ["Helado Mora Riosoto", "Galletas digestivas", "Mermelada de mora", "Menta"]
    },
    {
      id: 5,
      title: "Affogato Salvadoreño",
      excerpt: "Café caliente sobre helado Choco Cream. Simplemente delicioso.",
      prepTime: "5 min",
      difficulty: "Muy Fácil",
      emoji: "☕",
      ingredients: ["Helado Choco Cream Riosoto", "Café espresso", "Azúcar", "Canela"]
    },
    {
      id: 6,
      title: "Horchata Frozen con Riosoto",
      excerpt: "Fusiona la tradición salvadoreña con nuestro helado de Horchata. Increíble.",
      prepTime: "10 min",
      difficulty: "Fácil",
      emoji: "🥛",
      ingredients: ["Helado Horchata Riosoto", "Leche de almendra", "Canela", "Hielo picado"]
    }
  ];

  return (
    <main className="bg-white">
      {/* Header */}
      <div className="py-20 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-orange-400 font-bold text-lg mb-4 tracking-widest">CREA MOMENTOS ESPECIALES</p>
          <h1 className="text-6xl font-black mb-4">Recetas con Riosoto</h1>
          <p className="text-xl text-gray-300">Inspiración para usar nuestro helado en postres increíbles.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {recipes.map((recipe) => (
            <article
              key={recipe.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition transform hover:scale-105 cursor-pointer overflow-hidden border-t-4 border-pink-500"
            >
              <div className="bg-gradient-to-br from-pink-100 to-orange-100 h-40 flex items-center justify-center text-8xl">
                {recipe.emoji}
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block bg-pink-100 text-pink-700 px-4 py-1 rounded-full text-sm font-semibold">
                    {recipe.difficulty}
                  </span>
                  <span className="text-gray-500 text-sm">{recipe.prepTime}</span>
                </div>

                <h3 className="text-xl font-black text-gray-900 mb-3 leading-tight">
                  {recipe.title}
                </h3>

                <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                  {recipe.excerpt}
                </p>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-900 mb-3">Ingredientes:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {recipe.ingredients.slice(0, 3).map((ingredient, idx) => (
                      <li key={idx}>• {ingredient}</li>
                    ))}
                    {recipe.ingredients.length > 3 && (
                      <li className="text-gray-500">+ {recipe.ingredients.length - 3} más</li>
                    )}
                  </ul>
                </div>

                <button className="text-pink-600 font-bold hover:text-pink-700 text-sm">
                  Ver Receta Completa →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white p-12 rounded-3xl text-center">
          <h2 className="text-3xl font-black mb-4">¿Tu Receta con Riosoto?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Crea tu propia receta con nuestros helados y comparte con nosotros. Podría aparecer aquí.
          </p>
          <a href="/contact" className="inline-block bg-white text-pink-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg transition">
            Envía tu Receta
          </a>
        </div>

        {/* Tips Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-black text-center mb-12 text-gray-900">Consejos para Mejores Recetas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-3xl">
              <div className="text-6xl mb-4">❄️</div>
              <h3 className="text-xl font-black mb-4 text-gray-900">Mantén Frío</h3>
              <p className="text-gray-700">El helado Riosoto es mejor cuando está bien frío. Saca del congelador solo antes de servir.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-8 rounded-3xl">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-xl font-black mb-4 text-gray-900">Experimenta</h3>
              <p className="text-gray-700">Mezcla sabores. Combina Choco Fresa con Mora. Encuentra tu combinación favorita.</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-8 rounded-3xl">
              <div className="text-6xl mb-4">✨</div>
              <h3 className="text-xl font-black mb-4 text-gray-900">Presenta con Estilo</h3>
              <p className="text-gray-700">Una buena presentación hace que Riosoto sea aún más especial. Usa copas elegantes.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
