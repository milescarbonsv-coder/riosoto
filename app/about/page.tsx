import { timelineEntries, values, aboutStats } from '@/data/about';
import { PageHeader } from '@/components/ui/PageHeader';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { StatCard } from '@/components/ui/StatCard';
import { CTASection } from '@/components/ui/CTASection';

export default function About() {
  return (
    <main className="bg-white">
      <PageHeader
        tag="NUESTRA HISTORIA"
        title="80 Años de Sabor"
        description="Desde 1946, Riosoto ha sido la voz del helado en El Salvador."
      />

      <div className="max-w-5xl mx-auto px-4 py-20">
        {/* Core Story */}
        <div className="mb-20">
          <p className="text-3xl font-black text-gray-900 mb-8">
            Una Familia. Un Sueño. 80 Años de Perfección.
          </p>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed font-light">
            En 1946, una familia salvadoreña decide hacer algo simple pero importante: crear el mejor helado posible.
            No el más barato. No el más vendido. El mejor.
          </p>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Eso fue hace 80 años. Y aquí estamos, todavía haciendo lo mismo.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            Hoy, Riosoto es más que una marca. Es una memoria. Es el recuerdo de tu infancia. Es el helado que tu abuela compraba.
            Es lo que pides cuando quieres algo especial. Es El Salvador en una cuchara.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-5xl font-black text-gray-900 mb-12">El Viaje</h2>

          <div className="space-y-12">
            {timelineEntries.map((entry) => (
              <div key={entry.year} className="flex gap-8 items-start">
                <div className={`bg-gradient-to-b ${entry.gradient} text-white rounded-2xl w-32 h-32 flex items-center justify-center font-black ${entry.yearTextSize} flex-shrink-0`}>
                  {entry.year}
                </div>
                <div className={`${entry.bgColor} p-10 rounded-3xl flex-grow border-l-4 ${entry.borderColor}`}>
                  <h3 className="font-black text-2xl text-gray-900 mb-3">{entry.title}</h3>
                  <p className="text-gray-700 text-lg">{entry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-5xl font-black text-gray-900 mb-12">En Qué Creemos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <FeatureCard
                key={value.title}
                emoji={value.emoji}
                title={value.title}
                description={value.description}
                borderColor={value.borderColor}
                variant="about"
                gradient={value.gradient}
              />
            ))}
          </div>
        </div>

        {/* Why Riosoto */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-12 rounded-3xl text-center mb-20">
          <h2 className="text-4xl font-black mb-6">¿Por Qué Riosoto?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-light">
            Porque después de 80 años, sabemos que la calidad y la confianza no tienen precio.
            No somos la tendencia del momento. Somos la tradición de tu vida.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 mb-20">
          {aboutStats.map((stat) => (
            <StatCard key={stat.label} {...stat} variant="solid" />
          ))}
        </div>
      </div>

      {/* CTA */}
      <CTASection
        title="¿Listo para Probar Riosoto?"
        description="Encuentra Riosoto en tu supermercado o distribuidora más cercana. Si no está, pídelo. Queremos estar donde estés tú."
        actions={[
          { href: '/', label: 'Encuentra Riosoto Cerca de Ti', className: 'bg-white text-pink-600 hover:shadow-lg' },
        ]}
      />
    </main>
  );
}
