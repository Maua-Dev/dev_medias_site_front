import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from './Button';

interface SubjectCardProps {
  name: string;
  code: string;
  grade?: number | null;
  variant?: 'saved' | 'search'; // Define se é um resultado de busca ou uma matéria salva
  onClick?: () => void;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({
  name,
  code,
  grade,
  variant = 'saved',
  onClick,
}) => {
  const displayGrade = grade !== undefined && grade !== null ? grade.toFixed(1) : 'N.A';

  return (
    <div
      onClick={variant === 'saved' ? onClick : undefined}
      className="w-full max-w-xl bg-white rounded-xl p-2 flex items-center justify-between shadow-sm cursor-pointer hover:bg-gray-50 transition-colors select-none"
    >
      <div className="flex items-center gap-4">
        {/* Renderiza o quadrado vinho apenas se a matéria estiver salva */}
        {variant === 'saved' && (
          <div className="w-[60px] h-[60px] bg-[#6B1513] rounded-[10px] flex items-center justify-center shrink-0">
            <span className="text-white font-medium text-[17px]">
              {displayGrade}
            </span>
          </div>
        )}

        {/* Textos da Matéria */}
        <div className={`flex flex-col ${variant === 'search' ? 'pl-2 py-2' : ''}`}>
          <h3 className="text-[#333333] text-[19px] leading-tight font-medium">
            {name}
          </h3>
          <span className="text-[#666666] text-[13px] font-medium mt-0.5">
            {code}
          </span>
        </div>
      </div>

      {/* Renderiza o botão + apenas se for um resultado de pesquisa */}
      {variant === 'search' && (
        <div className="pr-2">
          <Button variant="icon" onClick={onClick} aria-label="Adicionar matéria">
            <Plus className="w-5 h-5 stroke-[3]" />
          </Button>
        </div>
      )}
    </div>
  );
};