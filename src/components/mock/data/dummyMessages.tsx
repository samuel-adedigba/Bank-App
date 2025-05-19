// Data structure for message items
export interface MessageItem {
    /** Unique identifier for the message */
    id: string;
    /** Title of the message (e.g. sender name) */
    title: string;
    /** Short preview text or subtitle */
    subtitle: string;
    /** Display date (e.g. "Today", "12/10") */
    date: string;
    /** Icon identifier (you can map this to a React icon or image source) */
    // iconName: string;
    // /** Background color for the icon circle */
    // iconBackgroundColor: string;
    // /** Icon color */
    // iconColor: string;
  }
  
  // Dummy data for message items
  export const dummyMessages: MessageItem[] = [
    {
      id: '1',
      title: 'Bank of America',
      subtitle: 'Bank of America: 256486 is the auth code for your transaction',
      date: 'Today',
    },
    {
      id: '2',
      title: 'Account',
      subtitle: 'Your account is limited. Please follow the instructions to restore access.',
      date: '12/10',
    },
    {
      id: '3',
      title: 'Alert',
      subtitle: 'Your statement is ready for you to download.',
      date: '11/10',
    },
    {
      id: '4',
      title: 'Paypal',
      subtitle: 'Your account has been locked. Please unlock it to proceed.',
      date: '10/11',
    },
    {
      id: '5',
      title: 'Withdraw',
      subtitle: 'Dear customer, 2987456 is your confirmation number.',
      date: '10/12',
    },
  ];
  