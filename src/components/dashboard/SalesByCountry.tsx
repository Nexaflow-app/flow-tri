import React from 'react';
import { ArrowRight } from 'lucide-react';

const countries = [
  {
    name: 'United States',
    value: '31,672',
    flag: '🇺🇸',
    color: 'bg-blue-500'
  },
  {
    name: 'Italy',
    value: '29,557',
    flag: '🇮🇹',
    color: 'bg-purple-500'
  },
  {
    name: 'Spain',
    value: '24,562',
    flag: '🇪🇸',
    color: 'bg-pink-500'
  },
  {
    name: 'UAE',
    value: '21,532',
    flag: '🇦🇪',
    color: 'bg-orange-500'
  },
  {
    name: 'Argentina',
    value: '18,753',
    flag: '🇦🇷',
    color: 'bg-purple-500'
  },
  {
    name: 'China',
    value: '12,342',
    flag: '🇨🇳',
    color: 'bg-teal-500'
  },
  {
    name: 'French',
    value: '15,533',
    flag: '🇫🇷',
    color: 'bg-amber-500'
  }
];

export default function SalesByCountry() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-sm text-gray-800">Sales By Country</h3>
        <button className="text-xs text-gray-500 hover:text-gray-700 flex items-center gap-1">
          View All <ArrowRight size={12} />
        </button>
      </div>
      <div className="space-y-3">
        {countries.map((country, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className="text-lg">{country.flag}</span>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">{country.name}</span>
                <span className="text-sm font-semibold text-gray-900">{country.value}</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${country.color} rounded-full`}
                  style={{ 
                    width: `${(parseInt(country.value.replace(/,/g, '')) / 31672) * 100}%`
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
