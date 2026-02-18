import type { FlavorProduct, FlavorHighlight } from '@/data/types';

type FlavorCardProps =
  | { variant: 'compact'; flavor: FlavorHighlight }
  | { variant: 'full'; flavor: FlavorProduct };

export function FlavorCard(props: FlavorCardProps) {
  if (props.variant === 'compact') {
    const { flavor } = props;
    return (
      <div className="group cursor-pointer">
        <div className={`bg-gradient-to-br ${flavor.color} rounded-2xl sm:rounded-3xl h-24 sm:h-32 md:h-40 flex items-center justify-center relative overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105`}>
          <p className="font-bold text-white text-xs sm:text-sm md:text-lg text-center px-2">{flavor.name}</p>
        </div>
      </div>
    );
  }

  const { flavor } = props;
  return (
    <div className="group cursor-pointer">
      <div className={`bg-gradient-to-br ${flavor.color} rounded-3xl h-56 flex flex-col items-center justify-center relative overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105 p-4`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
        <div className="text-6xl mb-3 relative z-10">{flavor.icon}</div>
        <p className="font-black text-white text-lg text-center relative z-10">{flavor.name}</p>
        <p className="text-white/90 text-sm mt-2 relative z-10">{flavor.desc}</p>
      </div>
    </div>
  );
}
