import React from 'react';
import { BaseModal } from '../ui/BaseModal';
import { Button } from '../ui/Button';

interface SyllabusModalProps {
  isOpen: boolean;
  onClose: () => void;
  weights?: {
    examsTotal: string;
    p1: string;
    p2: string;
    projectsTotal: string;
    k1: string;
    k2: string;
  };
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({
  isOpen,
  onClose,
  weights = {
    examsTotal: '70.0%',
    p1: '40.0%',
    p2: '60.0%',
    projectsTotal: '30.0%',
    k1: '40.0%',
    k2: '60.0%',
  },
}) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Definição da Matéria">
      <div className="flex flex-col gap-4 py-1">
        <h4 className="text-[19px] font-bold text-[#1E1E1E]">
          Plano de ensino
        </h4>

        <div className="flex flex-col gap-0.5">
          <p className="text-[15px] font-bold text-[#1E1E1E]">
            Provas: {weights.examsTotal}
          </p>
          <p className="text-xs font-medium text-[#333333]">
            P1: {weights.p1} P2: {weights.p2}
          </p>
        </div>

        <div className="flex flex-col gap-0.5">
          <p className="text-[15px] font-bold text-[#1E1E1E]">
            Trabalho: {weights.projectsTotal}
          </p>
          <p className="text-xs font-medium text-[#333333]">
            K1: {weights.k1} K2: {weights.k2}
          </p>
        </div>

        <div className="pt-3">
          <Button variant="primary" size="full" onClick={onClose}>
            Fechar
          </Button>
        </div>
      </div>
    </BaseModal>
  );
};