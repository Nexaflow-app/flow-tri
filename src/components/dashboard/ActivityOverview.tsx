import React from 'react';
import { ArrowRight } from 'lucide-react';

const transactions = [
  {
    product: 'SwiftBuds',
    icon: '🎧',
    price: '$39.99',
    status: { label: 'Success', color: 'bg-blue-500 text-white' }
  },
  {
    product: 'CozyCloud Pillow',
    icon: '🛏️',
    price: '$19.95',
    status: { label: 'Pending', color: 'bg-purple-500 text-white' }
  },
  {
    product: 'AquaGrip Bottle',
    icon: '🍶',
    price: '$9.99',
    status: { label: 'Failed', color: 'bg-pink-500 text-white' }
  }
];

const activities = [
  {
    time: '12 Hrs',
    user: 'John Doe',
    action: 'Updated the product description for',
    target: 'Widget X',
    color: 'bg-blue-500'
  },
  {
    time: '4:32pm',
    user: 'Jane Smith',
    action: 'added a new user with username',
    target: 'janesmith89',
    color: 'bg-purple-500'
  },
  {
    time: '11:45am',
    user: 'Michael Brown',
    action: 'Changed the status of order',
    target: '#12345',
    targetStatus: 'Shipped',
    color: 'bg-pink-500'
  }
];

export default function ActivityOverview() {
  return (
    <div className="grid grid-cols-2 gap-3 mb-3">
      {/* Latest Transactions */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-sm text-gray-800">Latest Transactions</h3>
        </div>
        <div className="space-y-2">
          {transactions.map((item, index) => (
            <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
              <div className="flex items-center gap-2">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm font-medium text-gray-700">{item.product}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">{item.price}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${item.status.color}`}>
                  {item.status.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-sm text-gray-800">Recent Activity</h3>
        </div>
        <div className="space-y-3">
          {activities.map((item, index) => (
            <div key={index} className="relative pl-4">
              <div className="flex items-start gap-2">
                <div className={`absolute left-0 top-2 w-1.5 h-1.5 rounded-full ${item.color}`} />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs text-gray-500">{item.time}</span>
                    <span className="text-sm font-medium text-gray-900">{item.user}</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    {item.action}{' '}
                    <span className="text-blue-600 hover:underline cursor-pointer">
                      {item.target}
                    </span>
                    {item.targetStatus && (
                      <span className="text-pink-500"> to {item.targetStatus}</span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
