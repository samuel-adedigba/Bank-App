import React, { useState } from 'react';
import {  AccountList } from './AccountList';
import { ToggleTabs } from '../../components/UI/ToggleTabs';
import { UserProfile } from '../Users/UserProfile';
import { CardList } from './CardList';
import { bankData } from '../../components/mock/data/bankListData';



export interface Card {
    id: string;
    type: string;        // e.g. "Visa"
    number: string;      // e.g. "**** **** **** 1234"
    expiry: string;      // e.g. "08/24"
    holder: string;      // e.g. "Push Puttichai"
    balance: number;     // in dollars
  }

const dummyCards: Card[] = [
  { id: 'c1', type: 'Visa', number: '1929 **** **** 1234', expiry: '08/24', holder: 'Push Puttichai',  balance: 20000 },
  { id: 'c2', type: 'Mastercard', number: '3389 **** **** 5678', expiry: '11/25', holder: 'Push Puttichai',  balance: 89000 },
  { id: "c3", balance: 5756, holder: "Eddy Cusuma", expiry: "12/22", number: "3778 **** **** 1234", type: 'Verve',  },
  { id: "c4", balance: 8420, holder: "John Doe",  expiry: "06/24", number: "4123 **** **** 9876", type: 'Visa',},
  {id: "c5", balance: 5756, holder: "Eddy Cusuma", expiry: "12/22", number: "3778 **** **** 1234", type: 'Wallet Card', },
];

export const AccountAndCardPage: React.FC = () => {

  type TabKey = 'account' | 'card';
  const [tab, setTab] = useState<TabKey>('account');

  const tabs = [
    { key: 'account' as TabKey, label: 'Account' },
    { key: 'card' as TabKey, label: 'Card' },
  ];

  return (
    <div className="p-4">

      <ToggleTabs tabs={tabs} selectedKey={tab} onChange={setTab} />
      <UserProfile/>
      {tab === 'account' ? (
        <AccountList accounts={bankData} />
      ) : (
        <CardList cards={dummyCards} />
      )}
    </div>
  );
};

export default AccountAndCardPage;