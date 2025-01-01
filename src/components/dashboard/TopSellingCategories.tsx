import React from 'react';

const categories = [
  {
    name: 'Overall Sales',
    value: '1,25,875',
    growth: '2.74%',
    color: 'bg-gradient-to-r from-blue-600 to-purple-600',
    growthColor: 'text-emerald-500'
  },
  {
    name: 'Clothing',
    value: '31,245',
    percentage: '25% Gross',
    growth: '0.45%',
    color: 'bg-blue-600',
    growthColor: 'text-emerald-500'
  },
  {
    name: 'Electronics',
    value: '29,553',
    percentage: '16% Gross',
    growth: '0.72%',
    color: 'bg-pink-500',
    growthColor: 'text-amber-500'
  },
  {
    name: 'Grocery',
    value: '24,577',
    percentage: '22% Gross',
    growth: '0.63%',
    color: 'bg-purple-500',
    growthColor: 'text-violet-500'
  }
];

export default function TopSellingCategories() {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm h-full flex flex-col">
      {/* Upgrade Banner */}
      <div className="mb-3 relative overflow-hidden rounded-md bg-gradient-to-r from-pink-500 to-purple-500 p-2">
        <div className="relative z-10">
          <h3 className="text-white font-semibold text-sm mb-0.5">Upgrade to get more</h3>
          <p className="text-white/80 text-xs">
            Maximize sales insights. Optimize performance.
          </p>
        </div>
      </div>

      {/* Categories List */}
      <h3 className="text-sm font-semibold text-gray-800 mb-2">Top Selling Categories</h3>
      <div className="space-y-2 flex-1 overflow-auto">
        {categories.map((category) => (
          <div key={category.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-1 h-6 rounded-full ${category.color}`} />
              <div>
                <div className="font-medium text-sm text-gray-700">{category.name}</div>
                {category.percentage && (
                  <div className="text-xs text-gray-500">{category.percentage}</div>
                )}
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-sm text-gray-900">{category.value}</div>
              <div className={`text-xs ${category.growthColor}`}>{category.growth}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
