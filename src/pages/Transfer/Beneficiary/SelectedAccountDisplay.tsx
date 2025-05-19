import React from 'react';
import { BeneficiaryAccount } from '../../../components/mock/data/bankListData';

interface SelectedAccountDisplayProps {
  account: BeneficiaryAccount;
  bankLogo: string;
}

export const SelectedAccountDisplay: React.FC<SelectedAccountDisplayProps> = ({ account, bankLogo }) => (
  <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg">
    <img src={bankLogo} alt={account.bankName} className="w-10 h-10 rounded-full" />
    <div>
      <p className="text-gray-600 font-semibold">{account.fullName}</p>
      <p className="text-sm text-gray-500">{account.bankName}</p>
      <p className="text-sm text-gray-500">{account.accountNumber}</p>
    </div>
  </div>
);


