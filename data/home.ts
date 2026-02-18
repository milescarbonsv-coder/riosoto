import type { FlavorHighlight, FeatureCardData, StatItem } from './types';

export const flavorHighlights: FlavorHighlight[] = [
  { name: "Choco Cream", color: "from-amber-600 to-amber-700" },
  { name: "Paly Kakao", color: "from-yellow-600 to-amber-700" },
  { name: "Choco Fresa", color: "from-pink-600 to-red-700" },
  { name: "Choco Coco", color: "from-yellow-200 to-yellow-300" },
  { name: "Torbellino", color: "from-purple-600 to-pink-600" },
  { name: "Horchata", color: "from-orange-300 to-yellow-200" },
  { name: "Mora", color: "from-purple-700 to-pink-700" },
  { name: "Zapote", color: "from-orange-600 to-red-600" },
];

export const heritageStats: StatItem[] = [
  { value: "80", label: "Años" },
  { value: "30+", label: "Sabores" },
  { value: "3", label: "Países" },
  { value: "∞", label: "Sonrisas" },
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
    description: "8 décadas de perfección. Recetas tradiciones que vuelven a tus clientes.",
    borderColor: "border-pink-400",
  },
  {
    emoji: "🚀",
    title: "Variedad Exclusiva",
    description: "30+ sabores únicos. Desde clásicos hasta innovaciones que sorprenden.",
    borderColor: "border-purple-400",
  },
];
