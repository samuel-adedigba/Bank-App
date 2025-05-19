
import React from 'react';
import { BsSend } from 'react-icons/bs';
import { BeneficiaryAccount } from '../../../components/mock/data/bankListData';
import Button from '../../../components/UI/Button';

interface TransferActionsProps {
  selectedAccount: BeneficiaryAccount | null;
  amount: string;
  onConfirm: () => void;
}

export const TransferActions: React.FC<TransferActionsProps> = ({ selectedAccount, amount, onConfirm }) => (
  <div className="flex lg:flex-row flex-col items-center gap-4 px-4 mb-4">
    <Button
      title="Send"
      icon={<BsSend className="text-2xl" />}
      onClick={onConfirm}
      disableOnError={!(selectedAccount && amount)}
      className="flex items-center gap-2 w-full"
    />
  </div>
);

