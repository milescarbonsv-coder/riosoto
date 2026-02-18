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
    <div className="bg-gray-50 border border-gray-100 p-12 rounded-2xl text-center">
      <h2 className="text-3xl font-bold mb-3 text-gray-900">No Te Pierdas las Nuevas Historias</h2>
      <p className="text-gray-500 mb-8 max-w-xl mx-auto">
        Recibe nuevos articulos sobre sabores, recetas y la historia de Riosoto.
      </p>
      {submitted ? (
        <p className="text-green-600 font-medium">¡Gracias por suscribirte!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            required
            className="flex-1 px-5 py-3 rounded-full border border-gray-200 text-gray-900 focus:outline-none focus:border-orange-400 transition"
          />
          <button
            type="submit"
            className="bg-gray-900 text-white px-7 py-3 rounded-full font-medium hover:bg-gray-800 transition"
          >
            Suscribir
          </button>
        </form>
      )}
    </div>
  );
}
