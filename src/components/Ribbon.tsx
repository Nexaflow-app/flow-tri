import React from 'react';
import { 
  PackageSearch, Truck, Box, Layers, FileDown,
  Save, Share2, Printer, Undo, Redo
} from 'lucide-react';
import RibbonButton from './ribbon/RibbonButton';
import RibbonGroup from './ribbon/RibbonGroup';

export default function Ribbon() {
  return (
    <div className="bg-white border-b shadow-sm">
      <div className="flex items-center gap-4 p-2">
        <RibbonGroup title="Inventarios">
          <RibbonButton icon={PackageSearch} label="Pesquisar" />
          <RibbonButton icon={Save} label="Guardar" />
          <RibbonButton icon={Printer} label="Imprimir" />
        </RibbonGroup>

        <RibbonGroup title="Informacoes Logistica">
          <RibbonButton icon={Truck} label="Entregas" />
          <RibbonButton icon={Share2} label="Partilhar" />
        </RibbonGroup>

        <RibbonGroup title="Lotes">
          <RibbonButton icon={Box} label="Novo Lote" />
          <RibbonButton icon={Undo} label="Historico" />
          <RibbonButton icon={Redo} label="Atualizar" />
        </RibbonGroup>

        <RibbonGroup title="Artigos Compostos">
          <RibbonButton icon={Layers} label="Gerir" />
        </RibbonGroup>

        <RibbonGroup title="Exportar">
          <RibbonButton icon={FileDown} label="Excel" />
          <RibbonButton icon={FileDown} label="PDF" />
        </RibbonGroup>
      </div>
    </div>
  );
}