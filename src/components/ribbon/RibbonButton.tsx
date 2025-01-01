import React from 'react';

type RibbonButtonProps = {
  icon: React.ElementType;
  label: string;
};

export default function RibbonButton({ icon: Icon, label }: RibbonButtonProps) {
  return (
    <button className="flex flex-col items-center px-2 py-1 hover:bg-gray-100 rounded">
      <Icon size={20} className="text-gray-700" />
      <span className="text-xs mt-1">{label}</span>
    </button>
  );
}