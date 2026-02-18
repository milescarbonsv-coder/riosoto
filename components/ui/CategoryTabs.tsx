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
    <div className="flex justify-center gap-2 mb-12 flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-200 ${
            activeKey === tab.key
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
