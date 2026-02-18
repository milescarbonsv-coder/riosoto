import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { recipes as recipesData, recipeTips as recipeTipsData } from '@/data/recipes';
import { PageHeader } from '@/components/ui/PageHeader';
import { PlaceholderImage } from '@/components/ui/PlaceholderImage';

export default async function Recipes() {
  const t = await getTranslations('recipes');

  return (
    <main>
      <PageHeader
        tag={t('headerTag')}
        title={t('headerTitle')}
        description={t('headerDescription')}
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {recipesData.map((recipe) => (
            <article
              key={recipe.id}
              className="bg-white rounded-3xl border border-slate-200/50 hover-lift cursor-pointer overflow-hidden group"
            >
              <PlaceholderImage emoji={recipe.emoji} gradient="from-blue-50 to-sky-50" />

              <div className="p-7">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block bg-rojo/10 text-rojo px-3 py-1 rounded-full text-xs font-semibold">
                    {recipe.difficulty}
                  </span>
                  <span className="text-slate-400 text-xs">{recipe.prepTime}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight group-hover:text-rojo transition-colors duration-200">
                  {t(`items.${recipe.id}.title`)}
                </h3>

                <p className="text-slate-500 mb-5 text-sm leading-relaxed">
                  {t(`items.${recipe.id}.excerpt`)}
                </p>

                <div className="mb-5">
                  <p className="text-xs font-semibold text-slate-900 mb-2 uppercase tracking-wide">{t('ingredientsLabel')}</p>
                  <ul className="text-sm text-slate-500 space-y-1">
                    {recipe.ingredients.slice(0, 3).map((ingredient, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rojo/40 flex-shrink-0" />
                        {ingredient}
                      </li>
                    ))}
                    {recipe.ingredients.length > 3 && (
                      <li className="text-slate-400">+ {recipe.ingredients.length - 3} más</li>
                    )}
                  </ul>
                </div>

                <button className="text-rojo font-semibold hover:text-rojo-dark text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                  {t('viewRecipe')}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-slate-900 text-white p-12 rounded-3xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-48 h-48 bg-rojo/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">{t('ctaTitle')}</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">{t('ctaDescription')}</p>
            <Link href="/contact" className="inline-block bg-rojo text-white px-10 py-4 rounded-full font-semibold hover:bg-rojo-dark hover:shadow-lg hover:shadow-rojo/25 transition-all duration-300">
              {t('ctaAction')}
            </Link>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-24">
          <div className="text-center mb-14">
            <span className="inline-block text-rojo font-semibold text-xs tracking-[0.25em] uppercase mb-4">{t('tipsTag')}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t('tipsTitle')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recipeTipsData.map((tip) => (
              <div key={tip.title} className="bg-gradient-to-br from-blue-50 to-sky-50 p-8 rounded-3xl border border-slate-200/50 hover-lift">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-3xl mb-5 shadow-sm">{tip.emoji}</div>
                <h3 className="text-lg font-bold mb-3 text-slate-900">{t(`tips.${tip.emoji === '❄️' ? 'cold' : tip.emoji === '🎨' ? 'experiment' : 'style'}.title`)}</h3>
                <p className="text-slate-500 leading-relaxed">{t(`tips.${tip.emoji === '❄️' ? 'cold' : tip.emoji === '🎨' ? 'experiment' : 'style'}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
