import { recipes, recipeTips } from '@/data/recipes';
import { PageHeader } from '@/components/ui/PageHeader';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';

export default function Recipes() {
  return (
    <main className="bg-white">
      <PageHeader
        tag="CREA MOMENTOS ESPECIALES"
        title="Recetas con Riosoto"
        description="Inspiración para usar nuestro helado en postres increíbles."
      />

      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {recipes.map((recipe) => (
            <article
              key={recipe.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition transform hover:scale-105 cursor-pointer overflow-hidden border-t-4 border-pink-500"
            >
              <PlaceholderImage emoji={recipe.emoji} gradient="from-pink-100 to-orange-100" />

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
            {recipeTips.map((tip) => (
              <div key={tip.title} className={`bg-gradient-to-br ${tip.gradient} p-8 rounded-3xl`}>
                <div className="text-6xl mb-4">{tip.emoji}</div>
                <h3 className="text-xl font-black mb-4 text-gray-900">{tip.title}</h3>
                <p className="text-gray-700">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
