// mirage/data/authData.ts
import { Server } from 'miragejs';

export const signInUserData = (server: Server) => {
  // Create users with roles
  const superAdmin = server.create('user', {
    id: '1',
    firstName: 'Samuel',
    lastName: 'Adedigba',
    email: 'superAdmin@bankapp.com',
    password: '123456',
    role: 'superAdmin',
    
  });

  const bankManager = server.create('user', {
    id: '2',
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'bankManager@bankapp.com',
    password: '123456',
    role: 'bankManager',
  });

  const adminSupport = server.create('user', {
    id: '3',
    firstName: 'John',
    lastName: 'Smith',
    email: 'support@bankapp.com',
    password: '123456',
    role: 'support',
  });
  
  const userAlice = server.create('user', {
    id: '4',
    firstName: 'Alice',
    lastName: 'Baby',
    email: 'user1@bankapp.com',
    password: '123456',
    role: 'user',
   
  });

  const userBob = server.create('user', {
    id: '5',
    firstName: 'Ben',
    lastName: 'John',
    email: 'user2@bankapp.com',
    password: '123456',
    role: 'user',
    
  });
  const userAliceTransaction = server.create('transaction', {
    id: '4',
    balance: 10000,
    creditScore: 750,
    transactions: [
    {
        txn: "txn_001",
        type: "debit",
        amount: 20000,
        description: "Data sub",
        date: "2024-12-01"
      },
     {
      txn: "txn_002",
        type: "credit",
        amount: 800000000,
        description: "For my baby's Shopping",
        date: "2024-11-30"
      },
     {
      txn: "txn_003",
        type: "credit",
        amount: 50000000,
        description: "Skin care for my baby",
        date: "2024-11-29"
      }
    ]

  });

  const userBobTransaction = server.create('transaction', {
    id: '5',
    balance: 10000,
    creditScore: 750,
    transactions: [
      {
        txn: "txn_101",
        type: "debit",
        amount: 200,
        description: "Grocery shopping",
        date: "2024-12-01"
      },
      {
        txn: "txn_102",
        type: "credit",
        amount: 500,
        description: "Salary",
        date: "2024-11-30"
      },
     {
      txn: "txn_103",
        type: "debit",
        amount: 50,
        description: "Netflix subscription",
        date: "2024-11-29"
      }
    ]
  });

};


