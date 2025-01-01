import React, { useState } from 'react';
import { ArrowUpRight, ArrowDownRight, Calendar } from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const data = [
  { name: 'Jan', sales: 4000, revenue: 2400 },
  { name: 'Feb', sales: 3000, revenue: 1398 },
  { name: 'Mar', sales: 2000, revenue: 9800 },
  { name: 'Apr', sales: 2780, revenue: 3908 },
  { name: 'May', sales: 1890, revenue: 4800 },
  { name: 'Jun', sales: 2390, revenue: 3800 },
  { name: 'Jul', sales: 3490, revenue: 4300 },
  { name: 'Aug', sales: 4000, revenue: 2400 },
  { name: 'Sep', sales: 3000, revenue: 1398 },
  { name: 'Oct', sales: 2000, revenue: 9800 },
  { name: 'Nov', sales: 2780, revenue: 3908 },
  { name: 'Dec', sales: 3490, revenue: 4300 }
];

const timeRanges = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-100">
        <p className="text-sm font-medium text-gray-600 mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2">
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm text-gray-600">
              {entry.name}: 
              <span className="font-semibold ml-1">
                {entry.name === 'revenue' ? '$' : ''}{entry.value.toLocaleString()}
              </span>
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function SalesChart() {
  const [selectedRange, setSelectedRange] = useState('Monthly');

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 h-full flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Sales Overview</h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-900">$43,132</span>
              <div className="flex items-center text-emerald-500 text-sm bg-emerald-50 px-2 py-1 rounded-full">
                <ArrowUpRight className="w-4 h-4" />
                <span>+12.5%</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-900">23,543</span>
              <div className="flex items-center text-red-500 text-sm bg-red-50 px-2 py-1 rounded-full">
                <ArrowDownRight className="w-4 h-4" />
                <span>-3.2%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex bg-gray-100 rounded-lg p-1">
            {timeRanges.map((range) => (
              <button
                key={range}
                onClick={() => setSelectedRange(range)}
                className={`px-3 py-1 text-sm rounded-md transition-all ${
                  selectedRange === range
                    ? 'bg-white text-gray-800 shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Calendar className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ec4899" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748b', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748b', fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              iconType="circle"
              wrapperStyle={{
                paddingTop: '20px'
              }}
            />
            <Area
              type="monotone"
              dataKey="sales"
              name="Sales"
              stroke="#6366f1"
              fill="url(#salesGradient)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              name="Revenue"
              stroke="#ec4899"
              fill="url(#revenueGradient)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
