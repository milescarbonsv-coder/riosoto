import Image from 'next/image';
import type { FlavorProduct, FlavorHighlight } from '@/data/types';

type FlavorCardProps =
  | { variant: 'compact'; flavor: FlavorHighlight }
  | { variant: 'full'; flavor: FlavorProduct };

export function FlavorCard(props: FlavorCardProps) {
  if (props.variant === 'compact') {
    const { flavor } = props;
    return (
      <div className="group cursor-pointer product-card">
        <div className={`bg-gradient-to-br ${flavor.color} rounded-3xl h-36 sm:h-44 md:h-48 flex flex-col items-center justify-center relative overflow-hidden`}>
          {flavor.image ? (
            <>
              <Image
                src={flavor.image}
                alt={flavor.name}
                width={100}
                height={100}
                className="product-image w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-lg mb-2"
              />
              <p className="font-semibold text-white text-xs sm:text-sm text-center px-3 drop-shadow-sm">{flavor.name}</p>
            </>
          ) : (
            <p className="font-semibold text-white text-xs sm:text-sm md:text-base text-center px-3">{flavor.name}</p>
          )}
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
