import type { StatItem } from '@/data/types';

interface StatCardProps extends StatItem {
  variant?: 'frosted' | 'solid';
}

export function StatCard({ value, label, color, variant = 'frosted' }: StatCardProps) {
  if (variant === 'frosted') {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center border border-white/5 hover-lift">
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-gradient" style={{ WebkitTextFillColor: 'unset', background: 'none', color: 'white' }}>{value}</div>
        <p className="text-sm font-medium text-slate-300 uppercase tracking-wide">{label}</p>
      </div>
    );
  }

  return (
    <div className="text-center p-8 hover-lift">
      <div className={`text-4xl md:text-5xl font-bold mb-2 ${color ?? 'text-slate-900'}`}>{value}</div>
      <p className="text-slate-500 font-medium text-sm uppercase tracking-wide">{label}</p>
    </div>
  );
}
