import type { FlavorHighlight, FeatureCardData, StatItem } from './types';

export const flavorHighlights: FlavorHighlight[] = [
  { name: "ChocoCream", color: "from-amber-600 to-amber-700", image: "/products/choco-cream.png" },
  { name: "Paly Kakao", color: "from-yellow-600 to-amber-700", image: "/products/paly-kakao.png" },
  { name: "ChocoFresa", color: "from-pink-600 to-red-700", image: "/products/choco-fresa.png" },
  { name: "Torbellino", color: "from-purple-600 to-pink-600", image: "/products/torbellino.png" },
  { name: "Horchata", color: "from-orange-300 to-yellow-200", image: "/products/horchata.png" },
  { name: "Mora", color: "from-purple-700 to-pink-700", image: "/products/mora.png" },
  { name: "Mango Twist", color: "from-yellow-400 to-orange-400", image: "/products/mangotwist.png" },
  { name: "Solaris", color: "from-yellow-400 to-orange-500", image: "/products/solaris.png" },
];

export const heritageStats: StatItem[] = [
  { value: "80", label: "Años" },
  { value: "30+", label: "Sabores" },
  { value: "3", label: "Países" },
  { value: "1946", label: "Fundada" },
];

export const featureCards: FeatureCardData[] = [
  {
    emoji: "👨‍👩‍👧‍👦",
    title: "Familia Salvadoreña",
    description: "Empresa 100% salvadoreña con raíces profundas. Conocemos tu mercado mejor que nadie.",
    borderColor: "border-orange-400",
  },
  {
    emoji: "✨",
    title: "Sabor Probado",
    description: "8 décadas de perfección. Recetas tradicionales que vuelven a tus clientes.",
    borderColor: "border-pink-400",
  },
  {
    emoji: "🚀",
    title: "Variedad Exclusiva",
    description: "30+ sabores únicos. Desde clásicos hasta innovaciones que sorprenden.",
    borderColor: "border-purple-400",
  },
];
