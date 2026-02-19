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
        <div className="aspect-square flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1">
          {flavor.image ? (
            <Image
              src={flavor.image}
              alt={flavor.name}
              width={140}
              height={140}
              className="w-[80%] h-[80%] object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110"
            />
          ) : null}
        </div>
        <div className="mt-2 text-center">
          <p className="font-bold text-slate-900 text-sm sm:text-base">{flavor.name}</p>
        </div>
      </div>
    );
  }

  const { flavor } = props;
  return (
    <div className="group cursor-pointer product-card">
      <div className={`bg-gradient-to-br ${flavor.color} rounded-3xl ${flavor.image ? 'h-72' : 'h-56'} flex flex-col items-center justify-end relative overflow-hidden p-5`}>
        {flavor.image ? (
          <Image
            src={flavor.image}
            alt={flavor.name}
            width={160}
            height={160}
            className="product-image absolute top-3 left-1/2 -translate-x-1/2 w-32 h-32 object-contain drop-shadow-xl"
          />
        ) : (
          <div className="text-5xl mb-2">{flavor.icon}</div>
        )}
        <div className={flavor.image ? 'mt-auto text-center' : 'text-center'}>
          <p className="font-bold text-white text-base drop-shadow-sm">{flavor.name}</p>
          <p className="text-white/80 text-xs mt-1">{flavor.desc}</p>
          {flavor.price && (
            <p className="text-white font-bold text-sm mt-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-0.5 inline-block">{flavor.price}</p>
          )}
        </div>
      </div>
    </div>
  );
}
