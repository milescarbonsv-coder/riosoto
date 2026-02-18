'use client';

import { useState } from 'react';
import type { ContactType, ContactFormData } from '@/data/types';
import { PageHeader } from '@/components/ui/PageHeader';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [contactType, setContactType] = useState<ContactType>('consumer');
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data: ContactFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
      contactType,
      ...(contactType === 'distributor' && {
        business: formData.get('business') as string,
        businessType: formData.get('businessType') as string,
        location: formData.get('location') as string,
      }),
    };

    // Validation
    const newErrors: Record<string, string> = {};
    if (!data.name?.trim()) newErrors.name = 'El nombre es requerido';
    if (!data.email?.trim()) newErrors.email = 'El email es requerido';
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = 'Email inválido';
    if (!data.message?.trim()) newErrors.message = 'El mensaje es requerido';
    if (contactType === 'distributor') {
      if (!data.business?.trim()) newErrors.business = 'La empresa es requerida';
      if (!data.businessType?.trim()) newErrors.businessType = 'Selecciona un tipo';
      if (!data.location?.trim()) newErrors.location = 'La ubicación es requerida';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    console.log('Contact form submitted:', data);
    setSubmitted(true);
    e.currentTarget.reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleTypeChange = (type: ContactType) => {
    setContactType(type);
    setErrors({});
  };

  const inputClasses = (field: string) =>
    `w-full border-2 ${errors[field] ? 'border-red-400' : 'border-gray-300'} rounded-2xl p-4 focus:border-orange-500 focus:outline-none transition text-lg`;

  return (
    <main className="bg-white">
      <PageHeader
        title="Hablemos"
        description="Ya sea que ames Riosoto o quieras distribuirlo, nos encantaría escucharte."
      />

      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Contact Type Selection */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          <button
            onClick={() => handleTypeChange('consumer')}
            className={`px-8 py-4 rounded-full font-bold text-lg transition ${
              contactType === 'consumer'
                ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
            }`}
          >
            💬 Soy Cliente
          </button>
          <button
            onClick={() => handleTypeChange('distributor')}
            className={`px-8 py-4 rounded-full font-bold text-lg transition ${
              contactType === 'distributor'
                ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
            }`}
          >
            🏪 Soy Distribuidor
          </button>
        </div>

        <div className="grid grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-10 rounded-3xl shadow-lg border-t-4 border-orange-500">
            <h2 className="text-3xl font-black mb-2 text-gray-900">
              {contactType === 'consumer' ? '💌 Tu Opinión Importa' : '🤝 Trabajemos Juntos'}
            </h2>
            <p className="text-gray-600 mb-8">
              {contactType === 'consumer'
                ? 'Cuéntanos qué piensas de Riosoto, dónde lo encontraste, o qué sabor desearías probar.'
                : 'Comparte tu información y hablemos sobre cómo Riosoto puede llegar a más salvadoreños a través de tu negocio.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-bold mb-3 text-gray-900">Tu Nombre *</label>
                <input
                  type="text"
                  name="name"
                  required
                  className={inputClasses('name')}
                  placeholder="¿Cómo te llamas?"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block font-bold mb-3 text-gray-900">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className={inputClasses('email')}
                  placeholder="tu@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {contactType === 'distributor' && (
                <>
                  <div>
                    <label className="block font-bold mb-3 text-gray-900">Empresa/Negocio *</label>
                    <input
                      type="text"
                      name="business"
                      required
                      className={inputClasses('business')}
                      placeholder="Nombre de tu negocio"
                    />
                    {errors.business && <p className="text-red-500 text-sm mt-1">{errors.business}</p>}
                  </div>

                  <div>
                    <label className="block font-bold mb-3 text-gray-900">¿Qué eres? *</label>
                    <select
                      name="businessType"
                      required
                      className={inputClasses('businessType')}
                    >
                      <option value="">Selecciona...</option>
                      <option value="supermarket">Supermercado</option>
                      <option value="distributor">Distribuidor</option>
                      <option value="vendor">Vendedor/Carrito</option>
                      <option value="other">Otro</option>
                    </select>
                    {errors.businessType && <p className="text-red-500 text-sm mt-1">{errors.businessType}</p>}
                  </div>

                  <div>
                    <label className="block font-bold mb-3 text-gray-900">Ubicación (Ciudad/Región) *</label>
                    <input
                      type="text"
                      name="location"
                      required
                      className={inputClasses('location')}
                      placeholder="¿Dónde estás?"
                    />
                    {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                  </div>
                </>
              )}

              <div>
                <label className="block font-bold mb-3 text-gray-900">
                  {contactType === 'consumer' ? 'Tu Mensaje' : 'Cuéntanos Más'} *
                </label>
                <textarea
                  name="message"
                  required
                  className={inputClasses('message')}
                  style={{ height: '10rem' }}
                  placeholder={contactType === 'consumer'
                    ? '¿Qué piensas de Riosoto? ¿Qué sabor amas? ¿Dónde lo compraste?'
                    : 'Cuéntanos sobre tu negocio y por qué te interesa distribuir Riosoto.'}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 rounded-2xl font-bold hover:shadow-lg transition text-lg"
              >
                {contactType === 'consumer' ? 'Enviar Mi Opinión' : 'Solicitar Información'}
              </button>

              {submitted && (
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-2xl text-green-700 font-semibold">
                  ✅ ¡Gracias! Nos contactaremos muy pronto.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info + Social */}
          <div className="space-y-6">
            <div className="bg-white p-10 rounded-3xl shadow-lg border-t-4 border-purple-500">
              <h2 className="text-3xl font-black mb-8 text-gray-900">Contacto Directo</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">📍 Dirección</h3>
                  <p className="text-gray-700 text-lg">1a. Calle Oriente #1008<br/>San Salvador, El Salvador</p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">📧 Email</h3>
                  <p className="text-gray-700 text-lg">consultas@riosoto.com</p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">📍 Google Maps</h3>
                  <a
                    href="https://goo.gl/maps/nttC9PqK6WZXsVRBA"
                    target="_blank"
                    className="text-orange-600 hover:text-orange-700 font-semibold text-lg inline-block"
                  >
                    Ver en el Mapa →
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-10 rounded-3xl border-t-4 border-pink-500">
              <h3 className="font-black text-gray-900 mb-6 text-lg">📱 Síguenos</h3>
              <p className="text-gray-700 mb-6 font-light">
                Encuentra Riosoto en redes sociales. Comparte tu momento con nosotros.
              </p>
              <div className="space-y-3">
                <a href="#" className="block text-pink-600 font-bold hover:text-pink-700">📸 @riosotohelados en Instagram</a>
                <a href="#" className="block text-pink-600 font-bold hover:text-pink-700">👍 Riosoto en Facebook</a>
                <a href="#" className="block text-pink-600 font-bold hover:text-pink-700">🎵 Riosoto en TikTok</a>
              </div>
            </div>

            {contactType === 'consumer' && (
              <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-10 rounded-3xl border-t-4 border-orange-500">
                <h3 className="font-black text-gray-900 mb-3 text-lg">⏱️ Respuesta Rápida</h3>
                <p className="text-gray-800">Tu opinión nos importa. Respondemos en 24 horas.</p>
              </div>
            )}

            {contactType === 'distributor' && (
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-10 rounded-3xl border-t-4 border-blue-500">
                <h3 className="font-black text-gray-900 mb-3 text-lg">🤝 Oportunidad Real</h3>
                <p className="text-gray-800 mb-4">Si amas Riosoto y quieres que llegue a más gente, hablemos. Hay margen para todos.</p>
                <p className="text-gray-800 text-sm">Distribuidores, supermercados y vendedores bienvenidos.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Trust CTA */}
      <section className="py-16 px-4 bg-gray-900 text-white text-center mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-4">Esperamos tu Mensaje</h2>
          <p className="text-lg text-gray-300">
            Riosoto es para todos. Cliente, distribuidor, o simplemente alguien que quiere saber más: queremos escucharte.
          </p>
        </div>
      </section>
    </main>
  );
}
