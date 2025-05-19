import React, { useMemo } from 'react';
import { BeneficiaryAccount, beneficiaryData } from '../../../components/mock/data/bankListData';
import { useBanks } from '../../../hooks/useBanks';
import Loading from '../../../components/UI/Loading';
import { BeneficiaryCard } from './BeneficiaryCard';

interface BeneficiarySelectorProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onSelect: (account: BeneficiaryAccount) => void;
  selectedAccount: BeneficiaryAccount | null;
}

export const BeneficiarySelector: React.FC<BeneficiarySelectorProps> = ({
  searchQuery,
  onSearchChange,
  onSelect,
  selectedAccount,
}) => {
  const { banks, isLoading } = useBanks();

  const filtered = useMemo(() =>
    beneficiaryData.filter(acc =>
      acc.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      acc.accountNumber.includes(searchQuery) ||
      acc.bankName.toLowerCase().includes(searchQuery.toLowerCase()),
    ),
    [searchQuery]
  );

  if (isLoading) return <Loading />;

  return (
    <div>
      <input
        type="text"
        placeholder="Search beneficiary..."
        value={searchQuery}
        onChange={e => onSearchChange(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-64 overflow-y-auto scrollbar-hide">
        {filtered.map(account => {
          const bankLogo = banks?.find(
            b => b.name.toLowerCase() === account.bankName.toLowerCase() ||
                 b.slug === account.bankName.toLowerCase().replace(/\s+/g, '-')
          )?.logo;
          return (
            <BeneficiaryCard
              key={account.id}
              account={account}
              bankLogo={bankLogo}
              isSelected={selectedAccount?.accountNumber === account.accountNumber}
              onSelect={onSelect}
            />
          );
        })}
      </div>
    </div>
  );
};