// Data structures for a two-way chat conversation

/**
 * Represents a participant in the chat (sender or recipient)
 */
export interface ChatUser {
    /** Unique identifier for the user */
    userId: string;
    /** Display name */
    name: string;
    /** Role of the user in the conversation (e.g., customer, bank) */
    role: string;
  }
  
  /**
   * Represents a single message exchanged between two users
   */
  export interface ChatMessage {
    /** Unique identifier for the message */
    id: string;
    /** Who sent this message */
    sender: ChatUser;
    /** Who receives this message */
    recipient: ChatUser;
    /** Content text of the message */
    content: string;
    /** ISO timestamp or human-readable date */
    timestamp: string;
  }
  
  /**
   * Dummy conversation between a bank and a customer
   */
  export const dummyConversation: ChatMessage[] = [
    {
      id: 'msg-1',
      sender: { userId: 'bank-1', name: 'Bank of America', role: 'bank' },
      recipient: { userId: '4', name: 'John Doe', role: 'customer' },
      content:
        'Did you attempt transaction on debit card ending in 0000 at Mechani in NJ for $1,200? Reply YES or NO',
      timestamp: '2018-08-10T09:09:00Z',
    },
    {
      id: 'msg-2',
      sender: { userId: '4', name: 'Alice Baby', role: 'customer' },
      recipient: { userId: 'bank-1', name: 'Bank of America', role: 'bank' },
      content: 'Yes',
      timestamp: '2018-08-10T09:10:12Z',
    },
    {
      id: 'msg-3',
      sender: { userId: 'bank-1', name: 'Bank of America', role: 'bank' },
      recipient: { userId: '4', name: 'Alice Baby', role: 'customer' },
      content:
        'Bank of America: 256486 is your authorization code which expires in 10 minutes. If you didn\'t request the code, call: 18009898 for assistance.',
      timestamp: '2018-08-10T09:12:34Z',
    },
    {
      id: 'msg-4',
      sender: { userId: '4', name: 'Alice Baby', role: 'customer' },
      recipient: { userId: 'bank-1', name: 'Bank of America', role: 'bank' },
      content: 'Thanks!',
      timestamp: '2018-08-10T09:13:00Z',
    },
  ];
  