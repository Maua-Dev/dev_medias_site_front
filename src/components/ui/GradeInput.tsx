import React from 'react';

interface GradeInputProps {
  label?: string;
  value: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  isGoalCalculated?: boolean;
}

export const GradeInput: React.FC<GradeInputProps> = ({
  label,
  value,
  onChange,
  readOnly = false,
  isGoalCalculated = false,
}) => {
  return (
    <div className="flex flex-col items-center gap-1">
      {label && (
        <span className="text-[#333333] text-xs font-semibold">
          {label}
        </span>
      )}
      <input
        type="number"
        step="0.1"
        min="0"
        max="10"
        readOnly={readOnly}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={`w-20 h-11 border border-gray-500 rounded-lg text-center font-bold text-base focus:outline-none focus:border-[#6B1513] bg-white ${
          isGoalCalculated ? 'text-red-600' : 'text-[#333333]'
        }`}
      />
    </div>
  );
};