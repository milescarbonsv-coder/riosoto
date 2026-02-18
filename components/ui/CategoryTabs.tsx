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
    <div className="flex justify-center gap-3 mb-16 flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`px-8 py-4 rounded-full font-bold text-lg transition transform hover:scale-105 ${
            activeKey === tab.key
              ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
              : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
