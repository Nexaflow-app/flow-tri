import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';
import { Package, ArrowUpRight } from 'lucide-react';

const data = [
  { name: 'Completed', value: 75, color: '#6366f1' },
  { name: 'Pending', value: 15, color: '#f59e0b' },
  { name: 'Cancelled', value: 10, color: '#ef4444' }
];

const stats = [
  { label: 'Total Orders', value: '1,256', trend: '+12.5%', color: 'text-emerald-500' },
  { label: 'Processing', value: '245', trend: '+8.3%', color: 'text-emerald-500' },
  { label: 'Delivered', value: '856', trend: '+6.2%', color: 'text-emerald-500' }
];

export default function OrderStats() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-3 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between shrink-0">
        <h3 className="text-sm font-semibold text-gray-800">Order Stats</h3>
        <div className="flex items-center gap-1 text-[10px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded-full">
          <Package className="w-3 h-3" />
          <span>This Month</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-1.5 mt-2 shrink-0">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-50 rounded-md p-1.5">
            <div className="text-[10px] text-gray-500 mb-0.5 truncate">{stat.label}</div>
            <div className="flex items-baseline gap-1 flex-wrap">
              <span className="text-xs font-semibold text-gray-900">{stat.value}</span>
              <span className={`text-[10px] ${stat.color} flex items-center whitespace-nowrap`}>
                <ArrowUpRight className="w-2.5 h-2.5" />
                {stat.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Chart Section - Fills remaining space */}
      <div className="flex-1 flex flex-col justify-between min-h-0 mt-2">
        {/* Chart Container */}
        <div className="flex-1 min-h-0 relative" style={{ minHeight: '120px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="80%"
                paddingAngle={2}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                <Label
                  content={({ viewBox: { cx, cy } }) => (
                    <>
                      <text
                        x={cx}
                        y={cy - 6}
                        textAnchor="middle"
                        className="fill-gray-900 text-lg font-bold"
                      >
                        75%
                      </text>
                      <text
                        x={cx}
                        y={cy + 8}
                        textAnchor="middle"
                        className="fill-gray-500 text-[10px]"
                      >
                        Completed
                      </text>
                    </>
                  )}
                />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-2 mt-2 flex-wrap shrink-0">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-1">
              <div 
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <div className="flex items-baseline gap-0.5">
                <span className="text-[10px] text-gray-600 whitespace-nowrap">{item.name}</span>
                <span className="text-[10px] font-semibold text-gray-900">{item.value}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
