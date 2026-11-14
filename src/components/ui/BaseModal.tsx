import React from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const BaseModal: React.FC<BaseModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 select-none"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[32px] w-full max-w-[360px] p-6 shadow-2xl flex flex-col gap-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Topo: Tag Vinho + Botão X */}
        <div className="flex items-start justify-between gap-3">
          <div className="bg-[#6B1513] text-white font-bold px-5 py-2.5 rounded-xl text-[17px] shadow-sm">
            {title}
          </div>

          <Button variant="icon" onClick={onClose} aria-label="Fechar">
            <X className="w-5 h-5 stroke-[2.5]" />
          </Button>
        </div>

        {/* Corpo do PopUp */}
        <div className="text-[#1E1E1E] flex flex-col gap-4">
          {children}
        </div>
      </div>
    </div>
  );
};