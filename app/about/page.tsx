export default function About() {
  return (
    <main className="bg-white">
      {/* Header */}
      <div className="py-20 px-4 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-400 font-bold text-lg mb-4 tracking-widest">NUESTRA HISTORIA</p>
          <h1 className="text-6xl font-black mb-6">80 Años de Sabor</h1>
          <p className="text-xl text-gray-300">Desde 1946, Riosoto ha sido la voz del helado en El Salvador.</p>
        </div>
      </div>

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
            <div className="flex gap-8 items-start">
              <div className="bg-gradient-to-b from-orange-500 to-pink-500 text-white rounded-2xl w-32 h-32 flex items-center justify-center font-black text-4xl flex-shrink-0">1946</div>
              <div className="bg-orange-50 p-10 rounded-3xl flex-grow border-l-4 border-orange-500">
                <h3 className="font-black text-2xl text-gray-900 mb-3">Nace una Obsesión</h3>
                <p className="text-gray-700 text-lg">Una familia salvadoreña apasionada funda Riosoto. Recetas secretas. Ingredientes reales. Obsesión por la calidad. Comienza una tradición que duraría 80 años.</p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="bg-gradient-to-b from-yellow-500 to-orange-500 text-white rounded-2xl w-32 h-32 flex items-center justify-center font-black text-2xl flex-shrink-0">1960s</div>
              <div className="bg-yellow-50 p-10 rounded-3xl flex-grow border-l-4 border-yellow-500">
                <h3 className="font-black text-2xl text-gray-900 mb-3">Crece Dentro del Corazón</h3>
                <p className="text-gray-700 text-lg">Riosoto se convierte en parte de la infancia salvadoreña. Escuelas. Celebraciones. Momentos especiales. La marca que todos conocen.</p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="bg-gradient-to-b from-purple-500 to-blue-500 text-white rounded-2xl w-32 h-32 flex items-center justify-center font-black text-2xl flex-shrink-0">1980s</div>
              <div className="bg-blue-50 p-10 rounded-3xl flex-grow border-l-4 border-blue-500">
                <h3 className="font-black text-2xl text-gray-900 mb-3">Se Expande en la Región</h3>
                <p className="text-gray-700 text-lg">Riosoto cruza fronteras. Honduras. Guatemala. Llevamos el sabor salvadoreño a toda Centroamérica.</p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="bg-gradient-to-b from-pink-500 to-purple-500 text-white rounded-2xl w-32 h-32 flex items-center justify-center font-black text-2xl flex-shrink-0">2000s</div>
              <div className="bg-purple-50 p-10 rounded-3xl flex-grow border-l-4 border-pink-500">
                <h3 className="font-black text-2xl text-gray-900 mb-3">Innovación con Raíces</h3>
                <p className="text-gray-700 text-lg">Ampliamos a 30+ sabores. Nuevas presentaciones. Pero mantuvimos lo que nos hace especiales: la calidad, la tradición, el amor al sabor.</p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="bg-gradient-to-b from-orange-500 to-red-500 text-white rounded-2xl w-32 h-32 flex items-center justify-center font-black text-3xl flex-shrink-0">2026</div>
              <div className="bg-orange-50 p-10 rounded-3xl flex-grow border-l-4 border-orange-500">
                <h3 className="font-black text-2xl text-gray-900 mb-3">El Futuro es Ahora</h3>
                <p className="text-gray-700 text-lg">Riosoto se moderniza. Conectamos directamente contigo. Porque después de 80 años, solo queremos una cosa: que sigas disfrutando de nuestro helado.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-5xl font-black text-gray-900 mb-12">En Qué Creemos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-100 to-pink-100 p-10 rounded-3xl border-t-4 border-orange-500">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-black mb-4 text-gray-900">Calidad Sin Compromiso</h3>
              <p className="text-gray-700 text-lg">Cada sabor es una promesa. Ingredientes reales. Recetas perfeccionadas por 80 años. Nunca cortamos esquinas. Nunca.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-10 rounded-3xl border-t-4 border-purple-500">
              <div className="text-6xl mb-6">❤️</div>
              <h3 className="text-2xl font-black mb-4 text-gray-900">Amor por El Salvador</h3>
              <p className="text-gray-700 text-lg">Somos salvadoreños. Raíces profundas. Entendemos tu cultura, tu mercado, tu familia. No somos una empresa corporativa—somos vuestros.</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-10 rounded-3xl border-t-4 border-yellow-500">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-2xl font-black mb-4 text-gray-900">Innovación con Tradición</h3>
              <p className="text-gray-700 text-lg">Nos reinventamos, pero nunca perdemos de vista lo que nos hizo especiales. 30+ sabores. Presentaciones nuevas. Pero el DNA de Riosoto sigue igual.</p>
            </div>

            <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-10 rounded-3xl border-t-4 border-pink-500">
              <div className="text-6xl mb-6">🎉</div>
              <h3 className="text-2xl font-black mb-4 text-gray-900">Tu Momento Especial</h3>
              <p className="text-gray-700 text-lg">Riosoto es lujo accesible. Tu capricho. Tu premio. Mereces algo bueno. Así de simple.</p>
            </div>
          </div>
        </div>

        {/* Why Riosoto vs Sarita (implicit positioning) */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-12 rounded-3xl text-center mb-20">
          <h2 className="text-4xl font-black mb-6">¿Por Qué Riosoto?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-light">
            Porque después de 80 años, sabemos que la calidad y la confianza no tienen precio. 
            No somos la tendencia del momento. Somos la tradición de tu vida.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 mb-20">
          <div className="text-center bg-gray-50 p-8 rounded-3xl">
            <div className="text-5xl font-black text-orange-600 mb-2">80</div>
            <p className="text-gray-700 font-semibold">Años de Historia</p>
          </div>
          <div className="text-center bg-gray-50 p-8 rounded-3xl">
            <div className="text-5xl font-black text-pink-600 mb-2">30+</div>
            <p className="text-gray-700 font-semibold">Sabores Únicos</p>
          </div>
          <div className="text-center bg-gray-50 p-8 rounded-3xl">
            <div className="text-5xl font-black text-purple-600 mb-2">3</div>
            <p className="text-gray-700 font-semibold">Países</p>
          </div>
          <div className="text-center bg-gray-50 p-8 rounded-3xl">
            <div className="text-5xl font-black text-blue-600 mb-2">∞</div>
            <p className="text-gray-700 font-semibold">Momentos Especiales</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black mb-6">¿Listo para Probar Riosoto?</h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto">
            Encuentra Riosoto en tu supermercado o distribuidora más cercana. Si no está, pídelo. Queremos estar donde estés tú.
          </p>
          <a href="/" className="inline-block bg-white text-pink-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg transition">
            Encuentra Riosoto Cerca de Ti
          </a>
        </div>
      </section>
    </main>
  );
}
