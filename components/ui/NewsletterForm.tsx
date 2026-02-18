'use client';

import { useState } from 'react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    console.log('Newsletter subscription:', email);
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100/50 p-12 rounded-3xl text-center relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200/30 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-200/20 rounded-full blur-2xl" />

      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-3 text-amber-950">No Te Pierdas las Nuevas Historias</h2>
        <p className="text-amber-800/50 mb-8 max-w-xl mx-auto">
          Recibe nuevos articulos sobre sabores, recetas y la historia de Riosoto.
        </p>
        {submitted ? (
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 font-medium px-6 py-3 rounded-full border border-green-200">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            ¡Gracias por suscribirte!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              className="flex-1 px-5 py-3.5 rounded-full border border-amber-200/50 bg-white text-amber-950 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
            />
            <button
              type="submit"
              className="bg-accent text-white px-7 py-3.5 rounded-full font-semibold hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
            >
              Suscribir
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
