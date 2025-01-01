import React, { useState } from 'react';
import { PackageSearch, Building2, Receipt, ClipboardList, Wallet2, FileSpreadsheet } from 'lucide-react';
import Ribbon from './components/Ribbon';
import Sidebar from './components/Sidebar';
import StatCard from './components/dashboard/StatCard';
import SalesChart from './components/dashboard/SalesChart';
import RecentOrders from './components/dashboard/RecentOrders';
import TopSellingCategories from './components/dashboard/TopSellingCategories';
import ActivityOverview from './components/dashboard/ActivityOverview';
import OverallStatistics from './components/dashboard/OverallStatistics';
import SalesByCountry from './components/dashboard/SalesByCountry';
import OrderStats from './components/dashboard/OrderStats';

function App() {
  const [activeNav, setActiveNav] = useState('Geral');

  const navItems = [
    { id: 'Geral', icon: Building2 },
    { id: 'Vendas', icon: Receipt },
    { id: 'Inventarios', icon: ClipboardList },
    { id: 'Pagamentos e recebimentos', icon: Wallet2 },
    { id: 'Obrigacoes Declarativas', icon: FileSpreadsheet },
  ];

  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-2 bg-white text-gray-800 border-b">
          <PackageSearch size={24} className="text-gray-700" />
          <h1 className="text-lg font-semibold">NexaFlow Plano FlowTRI</h1>
        </div>

        {/* Navigation Menu */}
        <nav className="bg-gray-50 border-b">
          <div className="flex space-x-4 px-4 py-2">
            {navItems.map(({ id, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveNav(id)}
                className={`
                  relative flex items-center gap-1 px-3 py-1 text-sm rounded-md
                  ${activeNav === id 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }
                `}
              >
                <Icon size={16} />
                <span className="font-semibold">{id}</span>
                {activeNav === id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* Ribbon */}
        <Ribbon />

        {/* Main Content Area */}
        <div className="flex-1 bg-gray-100 overflow-hidden">
          <div className="h-full flex flex-col p-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-4 flex-shrink-0">
              <h2 className="text-lg font-semibold text-gray-700">Vendas e Marketing Dashboard</h2>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-lg shadow-sm">
                  <span className="text-sm text-gray-600">2016-10-10 - 2016-10-20</span>
                </div>
                <button className="bg-blue-600 text-white px-3 py-1 rounded-lg shadow-sm hover:bg-blue-700 text-sm">
                  Share
                </button>
              </div>
            </div>

            {/* Content with auto scroll */}
            <div className="flex-1 overflow-auto min-h-0">
              <div className="grid grid-cols-4 gap-4 mb-4">
                <StatCard 
                  title="Total Products" 
                  value="854" 
                  color="bg-blue-500"
                  trend={{ value: 12.5, isPositive: true }}
                />
                <StatCard 
                  title="Total Users" 
                  value="31,876" 
                  color="bg-purple-500"
                  trend={{ value: 8.2, isPositive: true }}
                />
                <StatCard 
                  title="Total Revenue" 
                  value="$34,241" 
                  color="bg-pink-500"
                  trend={{ value: 5.7, isPositive: true }}
                />
                <StatCard 
                  title="Total Sales" 
                  value="176,586" 
                  color="bg-orange-500"
                  trend={{ value: 2.3, isPositive: false }}
                />
              </div>

              <div className="grid grid-cols-3 gap-3 mb-3">
                <div className="col-span-2">
                  <SalesChart />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="min-h-[300px]">
                    <OrderStats />
                  </div>
                  <div className="min-h-[300px]">
                    <TopSellingCategories />
                  </div>
                </div>
              </div>

              <ActivityOverview />

              <OverallStatistics />

              <div className="grid grid-cols-4 gap-3">
                <div className="col-span-3">
                  <RecentOrders />
                </div>
                <div>
                  <SalesByCountry />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="flex items-center justify-between px-4 py-1 bg-gray-100 border-t text-sm text-gray-600">
          <div>Utilizador: Admin</div>
          <div>Versão: 1.0.0</div>
        </div>
      </div>
    </div>
  );
}

export default App;