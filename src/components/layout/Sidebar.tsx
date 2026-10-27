import React from 'react';
import { Settings, Trash2 } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenChangeCourseModal: () => void;
  onOpenDeleteAllModal: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  onOpenChangeCourseModal,
  onOpenDeleteAllModal,
}) => {
  if (!isOpen) return null;

  return (
    // Overlay escuro sem blur (fecha o menu ao clicar fora)
    <div
      className="fixed inset-0 z-50 bg-black/40 flex"
      onClick={onClose}
    >
      {/* Painel Lateral Azul Escuro idêntico ao Figma */}
      <aside
        className="w-64 bg-[#030626] h-full pt-8 px-6 flex flex-col items-center shadow-2xl select-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Título "Menu" centralizado e branco puro */}
        <h2 className="text-white text-3xl font-bold tracking-normal mb-10 text-center">
          Menu
        </h2>

        {/* Opções do Menu */}
        <nav className="w-full flex flex-col gap-6">
          {/* Opção 1: Mudar ano/curso */}
          <button
            onClick={() => {
              onClose();
              onOpenChangeCourseModal();
            }}
            className="flex items-center gap-3.5 text-white hover:opacity-75 transition-opacity text-left cursor-pointer focus:outline-none"
          >
            <Settings className="w-7 h-7 stroke-[2] shrink-0" />
            <span className="text-base font-bold leading-snug">
              Mudar ano/curso
            </span>
          </button>

          {/* Opção 2: Apagar todas as matérias */}
          <button
            onClick={() => {
              onClose();
              onOpenDeleteAllModal();
            }}
            className="flex items-center gap-3.5 text-white hover:opacity-75 transition-opacity text-left cursor-pointer focus:outline-none"
          >
            <Trash2 className="w-7 h-7 stroke-[2] shrink-0" />
            <span className="text-base font-bold leading-tight">
              Apagar todas as
              <br />
              matérias
            </span>
          </button>
        </nav>
      </aside>
    </div>
  );
};