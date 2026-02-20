import type { BlogPost, BlogCategory } from './types';

export const blogCategories: BlogCategory[] = [
  'All',
  'Heritage',
  'Behind the Scenes',
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Rio Soto Estrena Nueva Página Web: 80 Años de Sabor, Ahora a un Clic de Distancia",
    excerpt: "Hoy damos un paso importante hacia el futuro sin olvidar nuestras raíces: ¡lanzamos nuestra nueva página web!",
    date: "Feb 19, 2026",
    category: "Heritage",
    readTime: "4 min",
    image: "🌐",
  },
  {
    id: 2,
    title: "RioSoto Invierte en el Futuro: Nueva Maquinaria de Clase Mundial",
    excerpt: "Hemos realizado una inversión significativa en maquinaria de última generación de Tetra Pak para seguir refrescando a Centroamérica.",
    date: "Feb 19, 2026",
    category: "Behind the Scenes",
    readTime: "3 min",
    image: "🏭",
  },
];
