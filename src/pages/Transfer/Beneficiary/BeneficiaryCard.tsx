import React from 'react';
import Card from '../../../components/UI/Atm-Card';
import { BeneficiaryAccount } from '../../../components/mock/data/bankListData';

interface BeneficiaryCardProps {
  account: BeneficiaryAccount;
  isSelected: boolean;
  onSelect: (account: BeneficiaryAccount) => void;
  bankLogo?: string;
}

export const BeneficiaryCard: React.FC<BeneficiaryCardProps> = ({
  account,
  isSelected,
  onSelect,
  bankLogo,
}) => (
  <button
    onClick={() => onSelect(account)}
    className={`p-2  rounded-lg transition duration-200 ease-in-out hover:bg-gray-100 focus:outline-none
      ${isSelected ? 'border border-blue-500' : ''}`}
  >
    <Card className="items-center ">
      {/* Uncomment to show logo */}
      {/* {bankLogo && <img src={bankLogo} alt={account.bankName} className="w-12 h-12 rounded-full mb-2" />} */}
      <p className="font-semibold text-sm text-center leading-tight">{account.fullName}</p>
      <p className="text-sm text-gray-500 text-center">{account.bankName}</p>
      <p className="text-sm font-bold text-gray-500 text-center">{account.accountNumber}</p>
    </Card>
  </button>
);