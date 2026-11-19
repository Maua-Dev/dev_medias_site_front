import React from 'react';
import { BaseModal } from '../ui/BaseModal';
import { Button } from '../ui/Button';

interface ClearGradesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmClear: () => void;
  message?: string;
}

export const ClearGradesModal: React.FC<ClearGradesModalProps> = ({
  isOpen,
  onClose,
  onConfirmClear,
  message = 'Todas as notas vinda da meta de notas seão apagadas',
}) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Tem Certeza?">
      <div className="flex flex-col justify-between min-h-[150px] pt-1">
        <p className="text-sm font-medium text-[#333333] leading-relaxed">
          {message}
        </p>

        <div className="grid grid-cols-2 gap-4 pt-6">
          <Button
            variant="primary"
            size="md"
            onClick={() => {
              onConfirmClear();
              onClose();
            }}
          >
            Apagar
          </Button>
          <Button variant="primary" size="md" onClick={onClose}>
            Fechar
          </Button>
        </div>
      </div>
    </BaseModal>
  );
};