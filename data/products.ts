import type { FlavorProduct, OtherProduct, ProductCategory, ProductCategoryTab } from './types';

export const productCategoryTabs: ProductCategoryTab[] = [
  { key: 'paletas', label: 'Paletas' },
  { key: 'conos', label: 'Conos & Sandwich' },
  { key: 'individual', label: 'Individual' },
  { key: 'bulk', label: 'Mayoristas' },
];

export const products: Record<ProductCategory, FlavorProduct[] | OtherProduct[]> = {
  paletas: [
    { name: "ChocoCream", color: "from-amber-700 to-amber-900", desc: "El clásico", icon: "🍫", image: "/products/choco-cream.png", price: "$0.50" },
    { name: "Paly Kakao", color: "from-yellow-600 to-amber-800", desc: "Cacao salvadoreño", icon: "🍫", image: "/products/paly-kakao.png", price: "$0.50" },
    { name: "ChocoFresa", color: "from-red-500 to-pink-600", desc: "Dulce & afrutado", icon: "🍓", image: "/products/choco-fresa.png", price: "$0.50" },
    { name: "ChocoCoco", color: "from-yellow-100 to-orange-200", desc: "Tropical", icon: "🥥", image: "/products/choco-coco.png", price: "$0.50" },
    { name: "Special", color: "from-blue-600 to-purple-600", desc: "Lo único", icon: "✨", image: "/products/special.png", price: "$0.40" },
    { name: "ChocoTron", color: "from-amber-700 to-orange-800", desc: "Intenso", icon: "⚡", image: "/products/chocotron.png", price: "$0.30" },
    { name: "ChocoTurbo", color: "from-amber-500 to-red-600", desc: "Explosivo", icon: "🚀", image: "/products/choco-turbo.png", price: "$0.55" },
    { name: "ChocoTron 2", color: "from-amber-800 to-orange-900", desc: "Doble intenso", icon: "⚡", image: "/products/chocotron2.png", price: "$0.55" },
    { name: "Torbellino", color: "from-purple-600 to-pink-600", desc: "Swirl único", icon: "🌀", image: "/products/torbellino.png", price: "$0.55" },
    { name: "Campeón Fresa", color: "from-red-500 to-pink-500", desc: "Fresa ganadora", icon: "🏆", image: "/products/campeon-fresa.png", price: "$0.45" },
    { name: "Campeón Naranja", color: "from-orange-500 to-amber-500", desc: "Naranja ganadora", icon: "🏆", image: "/products/campeon-naranja.png", price: "$0.45" },
    { name: "Solaris", color: "from-yellow-400 to-orange-500", desc: "Brillante", icon: "☀️", image: "/products/solaris.png", price: "$0.45" },
    { name: "Gely Fruta", color: "from-green-400 to-lime-500", desc: "Gelatina frutal", icon: "🍬", image: "/products/gelly-fruta.png", price: "$0.40" },
    { name: "Due", color: "from-pink-400 to-rose-500", desc: "Doble sabor", icon: "🍦", image: "/products/due.png", price: "$0.30" },
    { name: "Tutifruta", color: "from-green-500 to-teal-500", desc: "Mezcla frutal", icon: "🍇", image: "/products/tutifruta.png", price: "$0.25" },
    { name: "Mango Twist", color: "from-yellow-400 to-orange-400", desc: "Mango cremoso", icon: "🥭", image: "/products/mangotwist.png", price: "$0.45" },
    { name: "Nance", color: "from-yellow-500 to-orange-600", desc: "Frutal", icon: "🍯", image: "/products/nance.png", price: "$0.45" },
    { name: "Coco", color: "from-yellow-100 to-yellow-200", desc: "Suave", icon: "🥥", image: "/products/coco.png", price: "$0.45" },
    { name: "Mora", color: "from-purple-800 to-pink-800", desc: "Berries", icon: "🫐", image: "/products/mora.png", price: "$0.45" },
    { name: "Zapote", color: "from-orange-700 to-red-700", desc: "Centroamericano", icon: "🍊", image: "/products/zapote.png", price: "$0.45" },
    { name: "Horchata", color: "from-orange-300 to-yellow-300", desc: "Clásico salvadoreño", icon: "🥛", image: "/products/horchata.png", price: "$0.45" },
  ] satisfies FlavorProduct[],
  conos: [
    { name: "Mr. Cono", emoji: "🍦", desc: "En tu mano", image: "/products/mister-cono.png", price: "$0.60" },
    { name: "Sandwich", emoji: "🥪", desc: "Entre pan", image: "/products/sandwich.png", price: "$0.55" },
  ] satisfies OtherProduct[],
  individual: [
    { name: "Heladito", emoji: "🍧", desc: "De bolsillo", image: "/products/heladito.png", price: "$0.30" },
    { name: "Cookies", emoji: "🍪", desc: "Con sorpresa", image: "/products/cookies.png", price: "$1.25" },
    { name: "Copa Premium", emoji: "🍷", desc: "Elegante", image: "/products/copa-premium.png", price: "$0.99" },
    { name: "Copa Sundae", emoji: "🍨", desc: "El lujo", image: "/products/copa-sundae.png", price: "$0.95" },
    { name: "Sundae", emoji: "🌈", desc: "Completo", image: "/products/sundae.png", price: "$0.65" },
    { name: "Vasitos", emoji: "🥤", desc: "Clásico", image: "/products/vasitos.png", price: "$0.40" },
    { name: "Mega Sundae", emoji: "🏆", desc: "XXL", image: "/products/mega-sundae.png", price: "$1.20" },
  ] satisfies OtherProduct[],
  bulk: [
    { name: "Cuarto", emoji: "🧊", desc: "1/4 galón", image: "/products/cuarto.png", price: "$2.55" },
    { name: "Medio", emoji: "🧊", desc: "1/2 galón", image: "/products/medio.png", price: "$4.55" },
    { name: "Galón", emoji: "🍯", desc: "Para el negocio", image: "/products/galon.png", price: "$6.55" },
    { name: "Tarros", emoji: "📦", desc: "13-15 litros", image: "/products/tarros.png", price: "$12.30+" },
  ] satisfies OtherProduct[],
};
