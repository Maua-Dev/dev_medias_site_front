import React, { useState } from 'react';
import { Button } from '../ui/Button';

interface CourseYearModalProps {
  isOpen: boolean;
  initialCourse: string;
  initialYear: string;
  onConfirm: (course: string, year: string) => void;
  onClose?: () => void;
}

const COURSES = [
  'Ciência da Computação',
  'Engenharia de Computação',
  'Sistemas de Informação',
  'Design',
  'Administração',
  'Relações Internacionais',
  'Engenharia Mecânica',
  'Engenharia Elétrica',
  'Engenharia Química',
  'Engenharia Civil',
];

const YEARS = ['1º Ano', '2º Ano', '3º Ano', '4º Ano', '5º Ano'];

export const CourseYearModal: React.FC<CourseYearModalProps> = ({
  isOpen,
  initialCourse,
  initialYear,
  onConfirm,
  onClose,
}) => {
  const [course, setCourse] = useState(initialCourse);
  const [year, setYear] = useState(initialYear);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!course || !year) return;
    onConfirm(course, year);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 select-none"
      onClick={onClose}
    >
      <div
        className="bg-[#030626] rounded-[36px] w-full max-w-[380px] px-8 py-8 shadow-2xl flex flex-col items-center text-white border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Espaço Cinza para a Logo da DevMédias */}
        <div className="w-28 h-28 bg-[#D9D9D9] mb-5 shrink-0" />

        <p className="text-center text-sm font-medium leading-snug mb-6 px-2">
          Selecione seu curso e ano para
          <br />
          serem adicionados
        </p>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
          {/* Dropdown: Seu curso */}
          <div className="flex flex-col gap-1.5">
            <label className="text-white font-bold text-base">
              Seu curso
            </label>
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
              className="w-full bg-white text-gray-800 font-medium rounded-lg px-3 py-2.5 focus:outline-none cursor-pointer"
            >
              <option value="" disabled>
                Selecione...
              </option>
              {COURSES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Dropdown: Seu ano (um pouco mais estreito e centralizado igual ao Figma) */}
          <div className="flex flex-col gap-1.5 w-11/12 mx-auto">
            <label className="text-white font-bold text-base">
              Seu ano
            </label>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
              className="w-full bg-white text-gray-800 font-medium rounded-lg px-3 py-2.5 focus:outline-none cursor-pointer"
            >
              <option value="" disabled>
                Selecione...
              </option>
              {YEARS.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>

          <div className="pt-3">
            <Button type="submit" variant="primary" size="full">
              Confirmar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};