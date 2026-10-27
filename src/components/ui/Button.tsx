import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'icon' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'full';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  // Estilo base compartilhado por todos os botões
  const baseStyles =
    'inline-flex items-center justify-center font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none';

  // Variações visuais (Vinho padrão Dev Médias, Quadrado de Ícone ou Transparente)
  const variants = {
    primary: 'bg-[#6B1513] text-white hover:bg-[#821b18] rounded-2xl shadow-sm',
    icon: 'bg-[#6B1513] text-white hover:bg-[#821b18] rounded-lg p-1.5',
    ghost: 'bg-transparent text-[#6B1513] hover:bg-[#6B1513]/10 rounded-lg p-2',
  };

  // Tamanhos para reutilizar nos diferentes modais e telas
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-2.5 text-base', // Ideal para "Apagar" e "Fechar" lado a lado
    lg: 'px-12 py-3 text-lg',    // Ideal para "Calcular média" e "Definir meta"
    full: 'w-full py-3 text-lg', // Ideal para "Confirmar" e "Fechar" largos nos PopUps
  };

  // Se for variante 'icon' ou 'ghost', não aplica o padding de texto do 'sizes'
  const appliedSize = variant === 'primary' ? sizes[size] : '';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${appliedSize} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};