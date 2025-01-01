import React from 'react';

type SidebarItemProps = {
  text: string;
  isActive: boolean;
  onClick: () => void;
};

export default function SidebarItem({ text, isActive, onClick }: SidebarItemProps) {
  return (
    <div 
      className={`
        relative vertical-text cursor-pointer transition-colors text-center px-2 py-4
        ${isActive 
          ? 'text-blue-600 font-semibold' 
          : 'text-gray-600 hover:text-gray-900'
        }
      `}
      style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
      onClick={onClick}
    >
      {isActive && (
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-600" />
      )}
      {text}
    </div>
  );
}