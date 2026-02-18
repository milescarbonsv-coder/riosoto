import Link from 'next/link';
import { footerNavLinks } from '@/data/navigation';

export function Footer() {
  return (
    <footer className="bg-amber-950 text-white relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Riosoto</h3>
            <p className="text-amber-300/60 text-sm leading-relaxed mb-6">
              80 años creando momentos dulces para las familias centroamericanas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors duration-300 text-sm">IG</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors duration-300 text-sm">FB</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors duration-300 text-sm">TK</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-xs text-amber-300/40 uppercase tracking-[0.2em] mb-5">Explora</h4>
            <ul className="space-y-3">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-amber-100/60 hover:text-white transition-colors duration-200 text-sm">{link.label}</Link>
                </li>
              ))}
              <li><Link href="/blog" className="text-amber-100/60 hover:text-white transition-colors duration-200 text-sm">Blog</Link></li>
              <li><Link href="/recipes" className="text-amber-100/60 hover:text-white transition-colors duration-200 text-sm">Recetas</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xs text-amber-300/40 uppercase tracking-[0.2em] mb-5">Contacto</h4>
            <div className="space-y-3 text-sm text-amber-100/60">
              <p>1a. Calle Oriente #1008</p>
              <p>San Salvador, El Salvador</p>
              <p className="text-amber-100/80">consultas@riosoto.com</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-xs text-amber-300/40 uppercase tracking-[0.2em] mb-5">Distribuidores</h4>
            <p className="text-sm text-amber-100/60 mb-4">
              Lleva el sabor de Riosoto a tu negocio.
            </p>
            <Link
              href="/contact"
              className="inline-block text-sm font-semibold text-accent hover:text-accent-light transition-colors duration-200"
            >
              Conocer Opciones →
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-amber-100/30 text-xs">&copy; 2026 Helados Riosoto. Todos los derechos reservados.</p>
          <p className="text-amber-100/30 text-xs">Hecho con amor en El Salvador</p>
        </div>
      </div>
    </footer>
  );
}
