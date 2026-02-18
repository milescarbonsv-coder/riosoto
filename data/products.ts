import type { FlavorProduct, OtherProduct, ProductCategory, ProductCategoryTab } from './types';

export const productCategoryTabs: ProductCategoryTab[] = [
  { key: 'flavors', label: '🍦 Sabores' },
  { key: 'presentations', label: '🍭 Presentaciones' },
  { key: 'bulk', label: '📦 Mayoristas' },
];

export const products: Record<ProductCategory, FlavorProduct[] | OtherProduct[]> = {
  flavors: [
    { name: "Choco Cream", color: "from-amber-700 to-amber-900", desc: "El clásico", icon: "🍫" },
    { name: "Paly Kakao", color: "from-yellow-600 to-amber-800", desc: "Cacao salvadoreño", icon: "🍫" },
    { name: "Choco Fresa", color: "from-red-500 to-pink-600", desc: "Dulce & afrutado", icon: "🍓" },
    { name: "Choco Coco", color: "from-yellow-100 to-orange-200", desc: "Tropical", icon: "🥥" },
    { name: "Special", color: "from-blue-600 to-purple-600", desc: "Lo único", icon: "✨" },
    { name: "Chocotron", color: "from-amber-700 to-orange-800", desc: "Intenso", icon: "⚡" },
    { name: "Choco Turbo", color: "from-amber-500 to-red-600", desc: "Explosivo", icon: "🚀" },
    { name: "Torbellino", color: "from-purple-600 to-pink-600", desc: "Swirl único", icon: "🌀" },
    { name: "Campeón", color: "from-green-600 to-blue-600", desc: "Ganador", icon: "🏆" },
    { name: "Solaris", color: "from-yellow-400 to-orange-500", desc: "Brillante", icon: "☀️" },
    { name: "Nance", color: "from-yellow-500 to-orange-600", desc: "Frutal", icon: "🍯" },
    { name: "Coco", color: "from-yellow-100 to-yellow-200", desc: "Suave", icon: "🥥" },
    { name: "Mora", color: "from-purple-800 to-pink-800", desc: "Berries", icon: "🫐" },
    { name: "Zapote", color: "from-orange-700 to-red-700", desc: "Centroamericano", icon: "🍊" },
    { name: "Horchata", color: "from-orange-300 to-yellow-300", desc: "Clásico salvadoreño", icon: "🥛" },
  ] satisfies FlavorProduct[],
  presentations: [
    { name: "Mister Cono", emoji: "🍦", desc: "En tu mano" },
    { name: "Sandwich Ice Cream", emoji: "🥪", desc: "Entre pan" },
    { name: "Heladito", emoji: "🍧", desc: "De bolsillo" },
    { name: "Cookies and Cream", emoji: "🍪", desc: "Con sorpresa" },
    { name: "Copa Premium", emoji: "🍷", desc: "Elegante" },
    { name: "Copa Sundae", emoji: "🍨", desc: "El lujo" },
    { name: "Sundae", emoji: "🌈", desc: "Completo" },
    { name: "Mega Sundae", emoji: "🏆", desc: "XXL" },
    { name: "Vasito de Helado", emoji: "🥤", desc: "Clásico" },
  ] satisfies OtherProduct[],
  bulk: [
    { name: "Sorbete", emoji: "🧊", desc: "Individual" },
    { name: "Medio Galón", emoji: "🧊", desc: "Para compartir" },
    { name: "Galones", emoji: "🍯", desc: "Para el negocio" },
    { name: "Caja", emoji: "📦", desc: "Al por mayor" },
  ] satisfies OtherProduct[],
};
