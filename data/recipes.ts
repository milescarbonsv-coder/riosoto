import type { Recipe, TipCard } from './types';

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Sundae de Lujo con RioSoto",
    excerpt: "Una copa elegante que mezcla RioSoto Premium con chocolate caliente y frutas frescas.",
    prepTime: "10 min",
    difficulty: "Fácil",
    emoji: "🍨",
    ingredients: ["Copa Premium RioSoto", "Chocolate derretido", "Fresas", "Nueces", "Crema batida"],
  },
  {
    id: 2,
    title: "Milkshake de Choco Fresa",
    excerpt: "Refrescante y delicioso. Perfecto para días calurosos en El Salvador.",
    prepTime: "5 min",
    difficulty: "Muy Fácil",
    emoji: "🥤",
    ingredients: ["Helado Choco Fresa RioSoto", "Leche fría", "Miel", "Hielo"],
  },
  {
    id: 3,
    title: "Sándwich Gourmet con RioSoto",
    excerpt: "Nuestro Sandwich Ice Cream con pan tostado y caramelo casero.",
    prepTime: "15 min",
    difficulty: "Medio",
    emoji: "🥪",
    ingredients: ["Sandwich Ice Cream RioSoto", "Pan integral", "Caramelo", "Almendras"],
  },
  {
    id: 4,
    title: "Postre Helado de Mora",
    excerpt: "Un postre sofisticado con nuestro sabor Mora, perfecto para cenas especiales.",
    prepTime: "20 min",
    difficulty: "Medio",
    emoji: "🫐",
    ingredients: ["Helado Mora RioSoto", "Galletas digestivas", "Mermelada de mora", "Menta"],
  },
  {
    id: 5,
    title: "Affogato Salvadoreño",
    excerpt: "Café caliente sobre helado Choco Cream. Simplemente delicioso.",
    prepTime: "5 min",
    difficulty: "Muy Fácil",
    emoji: "☕",
    ingredients: ["Helado Choco Cream RioSoto", "Café espresso", "Azúcar", "Canela"],
  },
  {
    id: 6,
    title: "Horchata Frozen con RioSoto",
    excerpt: "Fusiona la tradición salvadoreña con nuestro helado de Horchata. Increíble.",
    prepTime: "10 min",
    difficulty: "Fácil",
    emoji: "🥛",
    ingredients: ["Helado Horchata RioSoto", "Leche de almendra", "Canela", "Hielo picado"],
  },
];

export const recipeTips: TipCard[] = [
  {
    emoji: "❄️",
    title: "Mantén Frío",
    description: "El helado RioSoto es mejor cuando está bien frío. Saca del congelador solo antes de servir.",
    gradient: "from-blue-100 to-blue-50",
  },
  {
    emoji: "🎨",
    title: "Experimenta",
    description: "Mezcla sabores. Combina Choco Fresa con Mora. Encuentra tu combinación favorita.",
    gradient: "from-purple-100 to-purple-50",
  },
  {
    emoji: "✨",
    title: "Presenta con Estilo",
    description: "Una buena presentación hace que RioSoto sea aún más especial. Usa copas elegantes.",
    gradient: "from-yellow-100 to-yellow-50",
  },
];
