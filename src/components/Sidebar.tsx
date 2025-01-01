import React, { useState } from 'react';
import SidebarItem from './sidebar/SidebarItem';

const menuItems = [
  'Marketing e Vendas',
  'Compras',
  'Servicos',
  'Financas',
  'Recursos Humanos'
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState(menuItems[0]);

  return (
    <div className="w-16 bg-white border-r text-gray-700 flex flex-col items-center justify-center py-4 space-y-8">
      {menuItems.map((text) => (
        <SidebarItem 
          key={text} 
          text={text} 
          isActive={activeItem === text}
          onClick={() => setActiveItem(text)}
        />
      ))}
    </div>
  );
}