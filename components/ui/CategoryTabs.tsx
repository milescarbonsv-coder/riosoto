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
              ? 'bg-rojo text-white shadow-lg shadow-rojo/25'
              : 'bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
