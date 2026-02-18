import type { StatItem } from '@/data/types';

interface StatCardProps extends StatItem {
  variant?: 'frosted' | 'solid';
}

export function StatCard({ value, label, color, variant = 'frosted' }: StatCardProps) {
  if (variant === 'frosted') {
    return (
      <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center border border-white border-opacity-20">
        <div className="text-2xl sm:text-3xl md:text-4xl font-black mb-2">{value}</div>
        <p className="text-xs sm:text-sm font-semibold">{label}</p>
      </div>
    );
  }

  return (
    <div className="text-center bg-gray-50 p-8 rounded-3xl">
      <div className={`text-5xl font-black mb-2 ${color ?? 'text-gray-900'}`}>{value}</div>
      <p className="text-gray-700 font-semibold">{label}</p>
    </div>
  );
}
