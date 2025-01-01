import React from 'react';

type RibbonGroupProps = {
  title: string;
  children: React.ReactNode;
};

export default function RibbonGroup({ title, children }: RibbonGroupProps) {
  return (
    <div className="border-r border-gray-200 px-2">
      <div className="flex gap-1">{children}</div>
      <div className="text-xs text-gray-500 text-center mt-1">{title}</div>
    </div>
  );
}