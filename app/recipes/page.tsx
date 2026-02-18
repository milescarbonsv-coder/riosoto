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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {recipes.map((recipe) => (
            <article
              key={recipe.id}
              className="bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
            >
              <PlaceholderImage emoji={recipe.emoji} gradient="from-gray-50 to-orange-50" />

              <div className="p-7">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs font-medium">
                    {recipe.difficulty}
                  </span>
                  <span className="text-gray-400 text-xs">{recipe.prepTime}</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  {recipe.title}
                </h3>

                <p className="text-gray-500 mb-5 text-sm leading-relaxed">
                  {recipe.excerpt}
                </p>

                <div className="mb-5">
                  <p className="text-xs font-medium text-gray-900 mb-2 uppercase tracking-wide">Ingredientes</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    {recipe.ingredients.slice(0, 3).map((ingredient, idx) => (
                      <li key={idx}>• {ingredient}</li>
                    ))}
                    {recipe.ingredients.length > 3 && (
                      <li className="text-gray-400">+ {recipe.ingredients.length - 3} más</li>
                    )}
                  </ul>
                </div>

                <button className="text-orange-500 font-medium hover:text-orange-600 text-sm">
                  Ver Receta Completa →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">¿Tu Receta con Riosoto?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Crea tu propia receta con nuestros helados y comparte con nosotros. Podría aparecer aquí.
          </p>
          <a href="/contact" className="inline-block bg-white text-gray-900 px-10 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
            Envía tu Receta
          </a>
        </div>

        {/* Tips Section */}
        <div className="mt-24">
          <p className="text-orange-500 font-semibold text-sm text-center mb-3 tracking-[0.2em] uppercase">CONSEJOS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-900">Consejos para Mejores Recetas</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recipeTips.map((tip) => (
              <div key={tip.title} className="bg-gray-50 p-8 rounded-2xl">
                <div className="text-5xl mb-4">{tip.emoji}</div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">{tip.title}</h3>
                <p className="text-gray-500 leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
