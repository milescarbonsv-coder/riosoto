import type { StatItem } from '@/data/types';

interface StatCardProps extends StatItem {
  variant?: 'frosted' | 'solid';
}

export function StatCard({ value, label, color, variant = 'frosted' }: StatCardProps) {
  if (variant === 'frosted') {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 text-center">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">{value}</div>
        <p className="text-sm font-medium opacity-80">{label}</p>
      </div>
    );
  }

  return (
    <div className="text-center p-8">
      <div className={`text-4xl md:text-5xl font-bold mb-2 ${color ?? 'text-gray-900'}`}>{value}</div>
      <p className="text-gray-500 font-medium text-sm uppercase tracking-wide">{label}</p>
    </div>
  );
}
