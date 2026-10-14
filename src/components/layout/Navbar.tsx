import React from 'react';
import { Menu, Headset } from 'lucide-react';

interface NavbarProps {
  onOpenSidebar: () => void;
  onOpenReportModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSidebar,
  onOpenReportModal,
}) => {
  return (
    <header className="w-full bg-[#030626] border-b border-white/80 px-6 py-4 flex items-center justify-between">
      {/* Botão Menu Lateral (Esquerda) */}
      <button
        onClick={onOpenSidebar}
        className="text-white hover:text-gray-300 transition-colors p-1"
        aria-label="Abrir menu lateral"
      >
        <Menu className="w-9 h-9" />
      </button>

      {/* Logo / Título Centralizado */}
      <h1
        className="text-white text-3xl md:text-4xl font-extrabold tracking-wide select-none"
        style={{
          // Reproduz o efeito glitch/sombra azul e vermelha da logo Dev Médias
          textShadow: '-2px -1px 0px #0077ff, 2px 2px 0px #b91c1c',
        }}
      >
        Dev Médias
      </h1>

      {/* Botão Reportar Erro / Fone de Ouvido (Direita) */}
      <button
        onClick={onOpenReportModal}
        className="text-white hover:text-gray-300 transition-colors p-1"
        aria-label="Reportar erro"
      >
        <Headset className="w-9 h-9" />
      </button>
    </header>
  );
};