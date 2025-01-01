import React from 'react';
import { ArrowUpRight, ArrowDownRight, Package, Users, DollarSign, ShoppingCart } from 'lucide-react';

type StatCardProps = {
  title: string;
  value: string | number;
  color: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
};

const getIcon = (title: string) => {
  switch (title) {
    case 'Total Products':
      return <Package className="w-5 h-5" />;
    case 'Total Users':
      return <Users className="w-5 h-5" />;
    case 'Total Revenue':
      return <DollarSign className="w-5 h-5" />;
    case 'Total Sales':
      return <ShoppingCart className="w-5 h-5" />;
    default:
      return null;
  }
};

const colorVariants = {
  'bg-blue-500': {
    light: 'bg-blue-50',
    text: 'text-blue-500',
    border: 'border-blue-100'
  },
  'bg-purple-500': {
    light: 'bg-purple-50',
    text: 'text-purple-500',
    border: 'border-purple-100'
  },
  'bg-pink-500': {
    light: 'bg-pink-50',
    text: 'text-pink-500',
    border: 'border-pink-100'
  },
  'bg-orange-500': {
    light: 'bg-orange-50',
    text: 'text-orange-500',
    border: 'border-orange-100'
  }
};

export default function StatCard({ title, value, color, trend }: StatCardProps) {
  const colors = colorVariants[color as keyof typeof colorVariants];
  const icon = getIcon(title);

  return (
    <div className={`bg-white rounded-lg p-4 shadow-sm border ${colors.border} hover:shadow-md transition-all`}>
      <div className="flex items-start justify-between mb-2">
        <div className={`p-2 rounded-lg ${colors.light}`}>
          <div className={colors.text}>
            {icon}
          </div>
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-xs font-medium ${
            trend.isPositive ? 'text-emerald-600' : 'text-red-600'
          } bg-opacity-10 rounded-full px-2 py-1 ${
            trend.isPositive ? 'bg-emerald-50' : 'bg-red-50'
          }`}>
            {trend.isPositive ? (
              <ArrowUpRight className="w-3 h-3" />
            ) : (
              <ArrowDownRight className="w-3 h-3" />
            )}
            {Math.abs(trend.value)}%
          </div>
        )}
      </div>
      <div className="space-y-1">
        <h3 className="text-sm text-gray-500 font-medium">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-xl font-bold text-gray-900">{value}</span>
          {trend && (
            <span className="text-xs text-gray-500">
              vs last month
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
