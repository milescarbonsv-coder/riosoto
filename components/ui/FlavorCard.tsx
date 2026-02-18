import Image from 'next/image';
import type { FlavorProduct, FlavorHighlight } from '@/data/types';

type FlavorCardProps =
  | { variant: 'compact'; flavor: FlavorHighlight }
  | { variant: 'full'; flavor: FlavorProduct };

export function FlavorCard(props: FlavorCardProps) {
  if (props.variant === 'compact') {
    const { flavor } = props;
    return (
      <div className="group cursor-pointer">
        <div className={`bg-gradient-to-br ${flavor.color} rounded-2xl h-28 sm:h-36 md:h-40 flex items-center justify-center relative overflow-hidden transition-shadow duration-300 hover:shadow-lg`}>
          <p className="font-semibold text-white text-xs sm:text-sm md:text-base text-center px-3">{flavor.name}</p>
        </div>
      </div>
    );
  }

  const { flavor } = props;
  return (
    <div className="group cursor-pointer">
      <div className={`bg-gradient-to-br ${flavor.color} rounded-2xl ${flavor.image ? 'h-64' : 'h-52'} flex flex-col items-center justify-end relative overflow-hidden transition-shadow duration-300 hover:shadow-lg p-4`}>
        {flavor.image ? (
          <Image
            src={flavor.image}
            alt={flavor.name}
            width={160}
            height={160}
            className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-32 object-contain drop-shadow-lg"
          />
        ) : (
          <div className="text-5xl mb-2">{flavor.icon}</div>
        )}
        <div className={flavor.image ? 'mt-auto text-center' : 'text-center'}>
          <p className="font-bold text-white text-base">{flavor.name}</p>
          <p className="text-white/80 text-xs mt-1">{flavor.desc}</p>
        </div>
      </div>
    </div>
  );
}
