import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const data = [
  { value: 40 }, { value: 30 }, { value: 45 }, { value: 35 }, 
  { value: 55 }, { value: 40 }, { value: 50 }, { value: 45 },
  { value: 60 }, { value: 45 }, { value: 55 }, { value: 50 }
];

const statistics = [
  {
    label: 'Total Expenses',
    value: '$134,032',
    trend: '+0.49%',
    trendColor: 'text-emerald-500',
    chartColor: '#3b82f6',
    data: data
  },
  {
    label: 'General Leads',
    value: '74,354',
    trend: '+8.84%',
    trendColor: 'text-emerald-500',
    chartColor: '#8b5cf6',
    data: data.map(d => ({ value: d.value * 1.2 }))
  },
  {
    label: 'Churn Rate',
    value: '6.02%',
    trend: '+0.72%',
    trendColor: 'text-emerald-500',
    chartColor: '#ec4899',
    data: data.map(d => ({ value: d.value * 0.8 }))
  }
];

function MiniChart({ data, color }: { data: any[], color: string }) {
  return (
    <div className="h-12 w-24">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.2} />
              <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            fill={`url(#gradient-${color})`}
            strokeWidth={1.5}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function OverallStatistics() {
  return (
    <div className="grid grid-cols-3 gap-3 mb-3">
      {statistics.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h3 className="text-sm text-gray-500 font-medium">{stat.label}</h3>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-xl font-bold text-gray-900">{stat.value}</span>
                <span className={`text-xs ${stat.trendColor}`}>{stat.trend}</span>
              </div>
            </div>
            <button className="text-xs text-gray-500 hover:text-gray-700 flex items-center gap-1">
              See more <ArrowRight size={12} />
            </button>
          </div>
          <MiniChart data={stat.data} color={stat.chartColor} />
        </div>
      ))}
    </div>
  );
}
