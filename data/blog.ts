import type { BlogPost, BlogCategory } from './types';

export const blogCategories: BlogCategory[] = [
  'All',
  'Flavor Story',
  'Heritage',
  'Behind the Scenes',
  'Community',
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "80 Años de Sabor: La Historia Detrás de Choco Cream",
    excerpt: "El sabor que comenzó todo. Desde 1946 hasta hoy, Choco Cream ha sido el helado que define a Riosoto.",
    date: "Feb 15, 2026",
    category: "Flavor Story",
    readTime: "4 min",
    image: "🍫",
  },
  {
    id: 2,
    title: "¿Por Qué Riosoto es Diferente? El Secreto está en la Tradición",
    excerpt: "No copiamos tendencias. Creamos sabores que perduran. Descubre qué nos hace únicos en El Salvador.",
    date: "Feb 12, 2026",
    category: "Heritage",
    readTime: "5 min",
    image: "❤️",
  },
  {
    id: 3,
    title: "Horchata de Riosoto: El Clásico Salvadoreño Reinventado",
    excerpt: "Horchata es tradición. Riosoto es tradición. Juntas forman magia. Te contamos la historia.",
    date: "Feb 10, 2026",
    category: "Flavor Story",
    readTime: "3 min",
    image: "🥛",
  },
  {
    id: 4,
    title: "Detrás de Escenas: Cómo Hacemos Nuestros Helados",
    excerpt: "Desde el cacao hasta tu cuchara. Un tour por el proceso que convierte ingredientes simples en experiencias especiales.",
    date: "Feb 8, 2026",
    category: "Behind the Scenes",
    readTime: "6 min",
    image: "👨‍🍳",
  },
  {
    id: 5,
    title: "Las 5 Formas en que Riosoto Apareció en Tu Infancia",
    excerpt: "Escuela. Celebraciones. Premios. Riosoto siempre estaba. Te contamos nuestros momentos favoritos con clientes.",
    date: "Feb 5, 2026",
    category: "Community",
    readTime: "4 min",
    image: "🎉",
  },
  {
    id: 6,
    title: "Mora: El Sabor Especial que Casi No Creamos",
    excerpt: "Una historia de innovación y riesgo. Cómo Mora se convirtió en uno de nuestros favoritos.",
    date: "Feb 1, 2026",
    category: "Flavor Story",
    readTime: "5 min",
    image: "🫐",
  },
];
