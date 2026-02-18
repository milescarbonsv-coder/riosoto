import type { FlavorProduct, OtherProduct, ProductCategory, ProductCategoryTab } from './types';

export const productCategoryTabs: ProductCategoryTab[] = [
  { key: 'flavors', label: '🍦 Sabores' },
  { key: 'presentations', label: '🍭 Presentaciones' },
  { key: 'bulk', label: '📦 Mayoristas' },
];

export const products: Record<ProductCategory, FlavorProduct[] | OtherProduct[]> = {
  flavors: [
    { name: "Choco Cream", color: "from-amber-700 to-amber-900", desc: "El clásico", icon: "🍫", image: "/products/choco-cream.png" },
    { name: "Paly Kakao", color: "from-yellow-600 to-amber-800", desc: "Cacao salvadoreño", icon: "🍫", image: "/products/paly-kakao.png" },
    { name: "Choco Fresa", color: "from-red-500 to-pink-600", desc: "Dulce & afrutado", icon: "🍓", image: "/products/choco-fresa.png" },
    { name: "Choco Coco", color: "from-yellow-100 to-orange-200", desc: "Tropical", icon: "🥥", image: "/products/choco-coco.png" },
    { name: "Special", color: "from-blue-600 to-purple-600", desc: "Lo único", icon: "✨", image: "/products/special.png" },
    { name: "Chocotron", color: "from-amber-700 to-orange-800", desc: "Intenso", icon: "⚡", image: "/products/chocotron.png" },
    { name: "Choco Turbo", color: "from-amber-500 to-red-600", desc: "Explosivo", icon: "🚀", image: "/products/choco-turbo.png" },
    { name: "Torbellino", color: "from-purple-600 to-pink-600", desc: "Swirl único", icon: "🌀", image: "/products/torbellino.png" },
    { name: "Campeón Fresa", color: "from-red-500 to-pink-500", desc: "Fresa ganadora", icon: "🏆", image: "/products/campeon-fresa.png" },
    { name: "Campeón Naranja", color: "from-orange-500 to-amber-500", desc: "Naranja ganadora", icon: "🏆", image: "/products/campeon-naranja.png" },
    { name: "Solaris", color: "from-yellow-400 to-orange-500", desc: "Brillante", icon: "☀️", image: "/products/solaris.png" },
    { name: "Gelly Fruta", color: "from-green-400 to-lime-500", desc: "Gelatina frutal", icon: "🍬", image: "/products/gelly-fruta.png" },
    { name: "Due", color: "from-pink-400 to-rose-500", desc: "Doble sabor", icon: "🍦", image: "/products/due.png" },
    { name: "Nance", color: "from-yellow-500 to-orange-600", desc: "Frutal", icon: "🍯", image: "/products/nance.png" },
    { name: "Coco", color: "from-yellow-100 to-yellow-200", desc: "Suave", icon: "🥥", image: "/products/coco.png" },
    { name: "Mora", color: "from-purple-800 to-pink-800", desc: "Berries", icon: "🫐", image: "/products/mora.png" },
    { name: "Zapote", color: "from-orange-700 to-red-700", desc: "Centroamericano", icon: "🍊", image: "/products/zapote.png" },
    { name: "Horchata", color: "from-orange-300 to-yellow-300", desc: "Clásico salvadoreño", icon: "🥛", image: "/products/horchata.png" },
  ] satisfies FlavorProduct[],
  presentations: [
    { name: "Mister Cono", emoji: "🍦", desc: "En tu mano", image: "/products/mister-cono.png" },
    { name: "Sandwich Ice Cream", emoji: "🥪", desc: "Entre pan", image: "/products/sandwich.png" },
    { name: "Heladito", emoji: "🍧", desc: "De bolsillo", image: "/products/heladito.png" },
    { name: "Cookies and Cream", emoji: "🍪", desc: "Con sorpresa", image: "/products/cookies.png" },
    { name: "Copa Premium", emoji: "🍷", desc: "Elegante", image: "/products/copa-premium.png" },
    { name: "Copa Sundae", emoji: "🍨", desc: "El lujo", image: "/products/copa-sundae.png" },
    { name: "Sundae", emoji: "🌈", desc: "Completo", image: "/products/sundae.png" },
    { name: "Mega Sundae", emoji: "🏆", desc: "XXL", image: "/products/mega-sundae.png" },
    { name: "Vasito de Helado", emoji: "🥤", desc: "Clásico", image: "/products/vasitos.png" },
  ] satisfies OtherProduct[],
  bulk: [
    { name: "Cuarto de Galón", emoji: "🧊", desc: "Individual", image: "/products/cuarto.png" },
    { name: "Medio Galón", emoji: "🧊", desc: "Para compartir", image: "/products/medio.png" },
    { name: "Galón", emoji: "🍯", desc: "Para el negocio", image: "/products/galon.png" },
    { name: "Tarros", emoji: "📦", desc: "Al por mayor", image: "/products/tarros.png" },
  ] satisfies OtherProduct[],
};
