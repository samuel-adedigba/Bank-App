
import React from 'react';

// export interface Account {
//     id: string;
//     label: string;       // e.g. "Account 1"
//     number: string;      // e.g. "1900 8988 1234"
//     balance: number;     // in dollars
//     branch: string;      // e.g. "New York"
//   }
  export interface Account{key:string;name:string;balance:string;icon:string;}
  
interface AccountListProps {
  accounts: Account[];
}
interface AccountItemProps {
    account: Account;
  }

const AccountItem: React.FC<AccountItemProps> = ({ account }) => (
    <div className="bg-white rounded-xl shadow p-4 mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="font-medium text-gray-800">{account.name}</span>
        <span className="font-semibold text-gray-800"> 36367383397 </span>
      </div>
      <div className="flex justify-between text-sm text-gray-500">
        <div>
          <p>Available balance</p>
          <p className="text-indigo-600 font-medium">{account.balance.toLocaleString()}</p>
        </div>
        {/* <div className="text-right">
          <p>Branch</p>
          <p className="font-medium text-indigo-600">{account.branch}</p>
        </div> */}
      </div>
    </div>
  );

export const AccountList: React.FC<AccountListProps> = ({ accounts }) => (
  <div>
    {accounts.map(acc => (
      <AccountItem key={acc.key} account={acc} />
    ))}
  </div>
);
