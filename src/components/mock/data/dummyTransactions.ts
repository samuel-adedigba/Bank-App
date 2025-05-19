// src/components/mock/data/dummyTransactions.ts

export interface Transaction {
    id: string
    recipientName: string
    type: 'transfer' | 'payment' | 'deposit' | 'withdrawal'
    date: string             // ISO timestamp
    amount: number           // negative = debit, positive = credit
    currency: string         // e.g. 'NGN'
    status: 'pending' | 'completed' | 'failed'
    bankAccountId: string    // ties this transaction to one bank account
  }
  
  export const dummyTransactions: Transaction[] = [
    {
      id: 'txn_001',
      recipientName: 'Bob Smith',
      type: 'transfer',
      date: '2025-04-25T10:45:00Z',
      amount: -5000,
      currency: 'NGN',
      status: 'completed',
      bankAccountId: 'acc_1',  // Zenith Bank (Alice)
    },
    {
      id: 'txn_002',
      recipientName: 'SuperMart',
      type: 'payment',
      date: '2025-04-24T14:30:00Z',
      amount: -12000,
      currency: 'NGN',
      status: 'pending',
      bankAccountId: 'acc_2',  // GTBank (Alice)
    },
    {
      id: 'txn_003',
      recipientName: 'Alice Johnson',
      type: 'deposit',
      date: '2025-04-23T09:15:00Z',
      amount: 20000,
      currency: 'NGN',
      status: 'completed',
      bankAccountId: 'acc_3',  // UBA (Alice)
    },
    {
      id: 'txn_004',
      recipientName: 'ATM Withdrawal',
      type: 'withdrawal',
      date: '2025-04-22T16:00:00Z',
      amount: -8000,
      currency: 'NGN',
      status: 'failed',
      bankAccountId: 'acc_4',  // Access Bank (Bob)
    },
    {
      id: 'txn_005',
      recipientName: 'John Doe',
      type: 'transfer',
      date: '2025-04-21T11:20:00Z',
      amount: -3000,
      currency: 'NGN',
      status: 'completed',
      bankAccountId: 'acc_5',  // First Bank (Bob)
    },
    {
      id: 'txn_006',
      recipientName: 'Jane Wilson',
      type: 'payment',
      date: '2025-04-20T15:10:00Z',
      amount: -4500,
      currency: 'NGN',
      status: 'completed',
      bankAccountId: 'acc_6',  // Fidelity (Bob)
    },
    {
      id: 'txn_007',
      recipientName: 'Energy Corp',
      type: 'payment',
      date: '2025-04-19T08:00:00Z',
      amount: -7600,
      currency: 'NGN',
      status: 'pending',
      bankAccountId: 'acc_1',
    },
    {
      id: 'txn_008',
      recipientName: 'Mobile Top-Up',
      type: 'payment',
      date: '2025-04-18T18:45:00Z',
      amount: -2000,
      currency: 'NGN',
      status: 'completed',
      bankAccountId: 'acc_2',
    },
    {
      id: 'txn_009',
      recipientName: 'Daniel Craig',
      type: 'transfer',
      date: '2025-04-17T12:30:00Z',
      amount: -9500,
      currency: 'NGN',
      status: 'failed',
      bankAccountId: 'acc_3',
    },
    {
      id: 'txn_010',
      recipientName: 'Savings Account',
      type: 'deposit',
      date: '2025-04-16T09:00:00Z',
      amount: 15000,
      currency: 'NGN',
      status: 'completed',
      bankAccountId: 'acc_4',
    },
    {
      id: 'txn_011',
      recipientName: 'Travel Co',
      type: 'payment',
      date: '2025-04-15T11:15:00Z',
      amount: -22000,
      currency: 'NGN',
      status: 'pending',
      bankAccountId: 'acc_5',
    },
    {
      id: 'txn_012',
      recipientName: 'Emma Stone',
      type: 'transfer',
      date: '2025-04-14T13:50:00Z',
      amount: -6200,
      currency: 'NGN',
      status: 'completed',
      bankAccountId: 'acc_6',
    },
    {
      id: 'txn_013',
      recipientName: 'Payroll Deposit',
      type: 'deposit',
      date: '2025-04-13T06:00:00Z',
      amount: 50000,
      currency: 'NGN',
      status: 'completed',
      bankAccountId: 'acc_1',
    },
    {
      id: 'txn_014',
      recipientName: 'Coffee Shop',
      type: 'payment',
      date: '2025-04-12T07:45:00Z',
      amount: -1500,
      currency: 'NGN',
      status: 'completed',
      bankAccountId: 'acc_2',
    },
    {
      id: 'txn_015',
      recipientName: 'Liam Payne',
      type: 'transfer',
      date: '2025-04-11T17:30:00Z',
      amount: -8800,
      currency: 'NGN',
      status: 'pending',
      bankAccountId: 'acc_3',
    },
  ]
  