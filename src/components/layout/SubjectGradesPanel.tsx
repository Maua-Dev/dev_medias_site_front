import React from 'react';
import { BookOpen, Eraser } from 'lucide-react';
import { SubjectCard } from '../ui/SubjectCard';
import { GradeInput } from '../ui/GradeInput';
import { Button } from '../ui/Button';

export interface SubjectGrades {
    p1: string;
    p2: string;
    k1: string;
    k2: string;
    finalAverage: string;
    goalFields?: {
        p1?: boolean;
        p2?: boolean;
        k1?: boolean;
        k2?: boolean;
    };
}

interface SubjectGradesPanelProps {
    name: string;
    code: string;
    grade?: number | null;
    grades: SubjectGrades;
    onChangeGrade: (field: 'p1' | 'p2' | 'k1' | 'k2', value: string) => void;
    onCalculateAverage: () => void;
    onOpenSyllabusModal: () => void;
    onOpenClearGradesModal: () => void;
    onOpenGoalModal: () => void;
    onBack: () => void;
}

export const SubjectGradesPanel: React.FC<SubjectGradesPanelProps> = ({
    name,
    code,
    grade,
    grades,
    onChangeGrade,
    onCalculateAverage,
    onOpenSyllabusModal,
    onOpenClearGradesModal,
    onOpenGoalModal,
    onBack,
}) => {
    return (
        <div className="w-full max-w-xl flex flex-col gap-3 pb-12">
            {/* Clicar no card da matéria no topo volta para a lista */}
            <SubjectCard
                name={name}
                code={code}
                grade={grade}
                variant="saved"
                onClick={onBack}
            />

            {/* Card Branco Grande de Notas */}
            <div className="w-full bg-white rounded-xl p-6 shadow-lg flex flex-col items-center relative">
                {/* Topo com ícone do Livro (Esquerda), Título "Provas" (Centro) e Borracha (Direita) */}
                <div className="w-full flex items-center justify-between mb-2 px-2">
                    <button
                        onClick={onOpenSyllabusModal}
                        className="text-[#6B1513] hover:opacity-75 transition-opacity p-1 cursor-pointer"
                        aria-label="Plano de ensino"
                    >
                        <BookOpen className="w-9 h-9 stroke-[2]" />
                    </button>

                    <h3 className="text-[#333333] text-xl font-bold">Provas</h3>

                    <button
                        onClick={onOpenClearGradesModal}
                        className="text-[#6B1513] hover:opacity-75 transition-opacity p-1 cursor-pointer"
                        aria-label="Limpar notas"
                    >
                        <Eraser className="w-9 h-9 stroke-[2]" />
                    </button>
                </div>

                {/* Inputs de Provas (P1 e P2) */}
                <div className="flex items-center gap-16 mb-6">
                    <GradeInput
                        label="P1"
                        value={grades.p1}
                        isGoalCalculated={grades.goalFields?.p1}
                        onChange={(val) => onChangeGrade('p1', val)}
                    />
                    <GradeInput
                        label="P2"
                        value={grades.p2}
                        isGoalCalculated={grades.goalFields?.p2}
                        onChange={(val) => onChangeGrade('p2', val)}
                    />
                </div>

                {/* Seção Trabalhos (K1 e K2) */}
                <h3 className="text-[#333333] text-xl font-bold mb-3">Trabalhos</h3>
                <div className="flex items-center gap-16 mb-6">
                    <GradeInput
                        label="K1"
                        value={grades.k1}
                        isGoalCalculated={grades.goalFields?.k1}
                        onChange={(val) => onChangeGrade('k1', val)}
                    />
                    <GradeInput
                        label="K2"
                        value={grades.k2}
                        isGoalCalculated={grades.goalFields?.k2}
                        onChange={(val) => onChangeGrade('k2', val)}
                    />
                </div>

                {/* Média Final */}
                <h3 className="text-[#333333] text-xl font-bold mb-2">Média Final</h3>
                <GradeInput value={grades.finalAverage} readOnly />
            </div>

            {/* Botões Inferiores: Calcular média e Definir meta */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <Button variant="primary" onClick={onCalculateAverage}>
                    Calcular média
                </Button>
                <Button variant="primary" onClick={onOpenGoalModal}>
                    Definir meta
                </Button>
            </div>
        </div>
    );
};