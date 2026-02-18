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
    <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white p-12 rounded-3xl text-center">
      <h2 className="text-3xl font-black mb-4">No Te Pierdas las Nuevas Historias</h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto">
        Suscríbete para recibir nuevos artículos sobre sabores, recetas y la historia de Riosoto.
      </p>
      {submitted ? (
        <p className="text-lg font-bold">✅ ¡Gracias por suscribirte!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            required
            className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition"
          >
            Suscribir
          </button>
        </form>
      )}
    </div>
  );
}
