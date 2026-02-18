'use client';

interface CategoryTab<T extends string> {
  key: T;
  label: string;
}

interface CategoryTabsProps<T extends string> {
  tabs: CategoryTab<T>[];
  activeKey: T;
  onChange: (key: T) => void;
}

export function CategoryTabs<T extends string>({
  tabs,
  activeKey,
  onChange,
}: CategoryTabsProps<T>) {
  return (
    <div className="flex justify-center gap-2 mb-14 flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
            activeKey === tab.key
              ? 'bg-accent text-white shadow-lg shadow-accent/25'
              : 'bg-amber-100/50 text-amber-800/60 hover:bg-amber-100 hover:text-amber-900'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
