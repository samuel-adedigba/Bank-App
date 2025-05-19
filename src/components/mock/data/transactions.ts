// src/components/mock/data/transactions.ts

export interface Transaction {
  id: string
  narration: string
  beneficiaryName: string
  beneficiaryBank: string
  dateDebited: string    // ISO timestamp
  senderBank: string
  amount: number         // debit = negative, credit = positive
  oldBalance: number
  newBalance: number
  status: 'pending' | 'completed' | 'failed'
}

export const transactions: Transaction[] = [
  {
    id: 'txn_001',
    narration: 'Rent payment',
    beneficiaryName: 'Landlord Co.',
    beneficiaryBank: 'First Bank',
    dateDebited: '2025-04-25T09:30:00Z',
    senderBank: 'Zenith Bank',
    amount: -50000,
    oldBalance: 150000,
    newBalance: 100000,
    status: 'completed',
  },
  {
    id: 'txn_002',
    narration: 'Salary credit',
    beneficiaryName: 'ABC Corp.',
    beneficiaryBank: 'GTBank',
    dateDebited: '2025-04-24T08:00:00Z',
    senderBank: 'GTBank',
    amount: 250000,
    oldBalance: 100000,
    newBalance: 350000,
    status: 'completed',
  },
  {
    id: 'txn_003',
    narration: 'Grocery shopping',
    beneficiaryName: 'SuperMart',
    beneficiaryBank: 'Access Bank',
    dateDebited: '2025-04-23T17:45:00Z',
    senderBank: 'Zenith Bank',
    amount: -12000,
    oldBalance: 350000,
    newBalance: 338000,
    status: 'pending',
  },
]
