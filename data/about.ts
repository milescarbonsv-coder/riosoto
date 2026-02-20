import type { TimelineEntry, ValueCard, StatItem } from './types';

export const timelineEntries: TimelineEntry[] = [
  {
    year: "1946",
    gradient: "from-orange-500 to-pink-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-500",
    title: "Nace una Obsesión",
    description: "Una familia salvadoreña apasionada funda RioSoto. Recetas secretas. Ingredientes reales. Obsesión por la calidad. Comienza una tradición que duraría 80 años.",
    yearTextSize: "text-4xl",
  },
  {
    year: "1960s",
    gradient: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-500",
    title: "Crece Dentro del Corazón",
    description: "RioSoto se convierte en parte de la infancia salvadoreña. Escuelas. Celebraciones. Momentos especiales. La marca que todos conocen.",
    yearTextSize: "text-2xl",
  },
  {
    year: "1980s",
    gradient: "from-purple-500 to-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-500",
    title: "Se Expande en la Región",
    description: "RioSoto cruza fronteras. Honduras. Guatemala. Un sabor que conecta a toda Centroamérica.",
    yearTextSize: "text-2xl",
  },
  {
    year: "2000s",
    gradient: "from-pink-500 to-purple-500",
    bgColor: "bg-purple-50",
    borderColor: "border-pink-500",
    title: "Innovación con Raíces",
    description: "Ampliamos a 30+ sabores. Nuevas presentaciones. Pero mantuvimos lo que nos hace especiales: la calidad, la tradición, el amor al sabor.",
    yearTextSize: "text-2xl",
  },
  {
    year: "2026",
    gradient: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-500",
    title: "El Futuro es Ahora",
    description: "RioSoto se moderniza. Conectamos directamente contigo. Porque después de 80 años, solo queremos una cosa: que sigas disfrutando de nuestro helado.",
    yearTextSize: "text-3xl",
  },
];

export const values: ValueCard[] = [
  {
    emoji: "🎯",
    title: "Calidad Sin Compromiso",
    description: "Cada sabor es una promesa. Ingredientes reales. Recetas perfeccionadas por 80 años. Nunca cortamos esquinas. Nunca.",
    gradient: "from-orange-100 to-pink-100",
    borderColor: "border-orange-500",
  },
  {
    emoji: "❤️",
    title: "Amor por Centroamérica",
    description: "Nacimos en El Salvador, pero Centroamérica es nuestro hogar. Entendemos tu cultura, tu mercado, tu familia. No somos una empresa corporativa—somos tuyos.",
    gradient: "from-purple-100 to-blue-100",
    borderColor: "border-purple-500",
  },
  {
    emoji: "🚀",
    title: "Innovación con Tradición",
    description: "Nos reinventamos, pero nunca perdemos de vista lo que nos hizo especiales. 30+ sabores. Presentaciones nuevas. Pero el DNA de RioSoto sigue igual.",
    gradient: "from-yellow-100 to-orange-100",
    borderColor: "border-yellow-500",
  },
  {
    emoji: "🎉",
    title: "Tu Momento Especial",
    description: "RioSoto es lujo accesible. Tu capricho. Tu premio. Mereces algo bueno. Así de simple.",
    gradient: "from-pink-100 to-purple-100",
    borderColor: "border-pink-500",
  },
];

export const aboutStats: StatItem[] = [
  { value: "80", label: "Años de Historia", color: "text-rojo" },
  { value: "30+", label: "Sabores Únicos", color: "text-azul" },
  { value: "3", label: "Países", color: "text-amarillo-dark" },
  { value: "∞", label: "Momentos Especiales", color: "text-rojo-dark" },
];
