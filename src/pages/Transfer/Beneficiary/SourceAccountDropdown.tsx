// =====================================
// SourceAccountDropdown.tsx
// =====================================
import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { Bank } from '../../../hooks/useBanks';


interface SourceAccountDropdownProps {
  banks: Bank[];
  selected: Bank | null;
  onSelect: (bank: Bank) => void;
}

export const SourceAccountDropdown: React.FC<SourceAccountDropdownProps> = ({ banks, selected, onSelect }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative mb-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-3 border rounded-lg bg-white"
      >
        {selected?.cardNumber || 'Select card'}
        <FiChevronDown />
      </button>
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-lg mt-1 z-10">
          {banks.map(b => (
            <div
              key={b.id}
              onClick={() => { onSelect(b); setOpen(false); }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {b.cardNumber}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
