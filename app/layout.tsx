import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Helados Riosoto | Desde 1946",
  description: "80 años de tradición. 30+ sabores únicos. Distribuidores en El Salvador, Honduras y Guatemala.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        {/* Navigation Bar */}
        <nav className="sticky top-0 z-50 bg-white shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-black text-gray-900">Riosoto</h1>
              <p className="text-xs text-orange-600 font-bold tracking-wide">DESDE 1946</p>
            </div>
            <div className="flex gap-8 items-center">
              <a href="/" className="font-semibold text-gray-700 hover:text-orange-500 transition">Inicio</a>
              <a href="/products" className="font-semibold text-gray-700 hover:text-orange-500 transition">Productos</a>
              <a href="/blog" className="font-semibold text-gray-700 hover:text-orange-500 transition">Blog</a>
              <a href="/recipes" className="font-semibold text-gray-700 hover:text-orange-500 transition">Recetas</a>
              <a href="/about" className="font-semibold text-gray-700 hover:text-orange-500 transition">Nosotros</a>
              <a href="/contact" className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transition">Contacto</a>
            </div>
          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 mt-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-4 gap-8 mb-12">
              <div>
                <h3 className="font-black mb-4 text-lg">Riosoto</h3>
                <p className="text-gray-400 text-sm">80 años de tradición en helados de calidad.</p>
              </div>
              <div>
                <h3 className="font-bold mb-4">Dirección</h3>
                <p className="text-gray-400 text-sm">1a. Calle Oriente #1008<br/>San Salvador, El Salvador</p>
              </div>
              <div>
                <h3 className="font-bold mb-4">Enlaces</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/" className="hover:text-orange-400 transition">Inicio</a></li>
                  <li><a href="/products" className="hover:text-orange-400 transition">Productos</a></li>
                  <li><a href="/about" className="hover:text-orange-400 transition">Nosotros</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Contacto</h3>
                <p className="text-gray-400 text-sm">Para consultas de distribución, use nuestro formulario de contacto.</p>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
              <p>&copy; 2026 Helados Riosoto. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
