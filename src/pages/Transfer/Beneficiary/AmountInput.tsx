
import React from 'react';

interface AmountInputProps {
  amount: string;
  onChange: (value: string) => void;
}

export const AmountInput: React.FC<AmountInputProps> = ({ amount, onChange }) => (
  <div className="flex flex-wrap items-center gap-4 px-4">
    <p className="text-gray-500 text-lg font-semibold">Enter Amount</p>
    <input
      type="number"
      placeholder="Amount"
      value={amount}
      onChange={e => onChange(e.target.value)}
      className="w-full lg:w-auto text-xl p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
    />
  </div>
);