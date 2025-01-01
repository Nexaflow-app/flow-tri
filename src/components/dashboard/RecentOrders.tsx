import React from 'react';

type Order = {
  customer: {
    name: string;
    email: string;
    avatar?: string;
  };
  product: string;
  quantity: number;
  amount: number;
  status: 'success' | 'pending' | 'in-progress';
  dateOrdered: string;
};

const orders: Order[] = [
  {
    customer: {
      name: 'Elena Smith',
      email: 'elenasmith387@gmail.com',
    },
    product: 'All-Purpose Cleaner',
    quantity: 3,
    amount: 9.99,
    status: 'in-progress',
    dateOrdered: '03.Sep.2024',
  },
  {
    customer: {
      name: 'Nelson Gold',
      email: 'noahgold555@gmail.com',
    },
    product: 'Kitchen Knife Set',
    quantity: 4,
    amount: 49.99,
    status: 'pending',
    dateOrdered: '26.Jul.2024',
  },
  // Add more orders as needed
];

export default function RecentOrders() {
  return (
    <div className="bg-white rounded-xl shadow-sm h-full flex flex-col">
      <div className="p-4 border-b flex-shrink-0">
        <h3 className="font-semibold text-lg text-gray-800">Recent Orders</h3>
      </div>
      <div className="flex-1 overflow-auto min-h-0">
        <table className="w-full">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="px-4 py-3 text-left text-sm text-gray-500 font-medium">Customer</th>
              <th className="px-4 py-3 text-left text-sm text-gray-500 font-medium">Product</th>
              <th className="px-4 py-3 text-left text-sm text-gray-500 font-medium">Quantity</th>
              <th className="px-4 py-3 text-left text-sm text-gray-500 font-medium">Amount</th>
              <th className="px-4 py-3 text-left text-sm text-gray-500 font-medium">Status</th>
              <th className="px-4 py-3 text-left text-sm text-gray-500 font-medium">Date Ordered</th>
              <th className="px-4 py-3 text-left text-sm text-gray-500 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {orders.map((order, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full" />
                    <div>
                      <div className="font-medium">{order.customer.name}</div>
                      <div className="text-sm text-gray-500">{order.customer.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2">{order.product}</td>
                <td className="px-4 py-2">{order.quantity}</td>
                <td className="px-4 py-2">${order.amount}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    order.status === 'success' ? 'bg-green-100 text-green-800' :
                    order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-2">{order.dateOrdered}</td>
                <td className="px-4 py-2">
                  <div className="flex gap-2">
                    <button className="p-1 text-blue-600 hover:text-blue-800">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                    <button className="p-1 text-red-600 hover:text-red-800">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
