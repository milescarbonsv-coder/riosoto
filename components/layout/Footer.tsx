import { footerNavLinks } from '@/data/navigation';

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-16 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold mb-4 text-base">Riosoto</h3>
            <p className="text-gray-500 text-sm leading-relaxed">80 años de tradición en helados de calidad.</p>
          </div>
          <div>
            <h3 className="font-medium mb-4 text-sm text-gray-400 uppercase tracking-wide">Dirección</h3>
            <p className="text-gray-500 text-sm">1a. Calle Oriente #1008<br/>San Salvador, El Salvador</p>
          </div>
          <div>
            <h3 className="font-medium mb-4 text-sm text-gray-400 uppercase tracking-wide">Enlaces</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4 text-sm text-gray-400 uppercase tracking-wide">Contacto</h3>
            <p className="text-gray-500 text-sm">Para consultas de distribución, use nuestro formulario de contacto.</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-600 text-xs">
          <p>&copy; 2026 Helados Riosoto. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
