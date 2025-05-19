import React from 'react';

// Extended Card interface with balance
export interface Card {
  id: string;
  holder: string;       // e.g. "John Smith"
  type: string;         // e.g. "Amazon Platinum"
  number: string;       // e.g. "4756 1234 9018"
  balance: number;      // e.g. 3469.52
}

// Switch styles, chip and logo per card id
const getCardStyles = (id: string) => {
    switch (id) {
      case 'c1':
        return {
          bgColor: 'bg-gradient-to-r from-[#1E1F6A] to-[#2751FF] text-white',
          chip: "/atm_chip.png",
        logo: "/atm_logo.png",
        };
      case 'c2':
        return {
          bgColor: 'bg-gradient-to-r from-[#FF6A88] to-[#FF8E53] text-white',
          chip: "/chip_card2.png",
        logo: "/atm_logo2.png",
        };
      case 'c3':
        return {
          bgColor: 'bg-gradient-to-r from-[#2D60FF] to-[#539BFF] text-white',
          chip: "/atm_chip.png",
          logo: "/atm_logo.png",
        };
      case 'c4':
        return {
          bgColor: 'bg-gradient-to-r from-[#6A3093] to-[#A044FF] text-white',
          chip: "/chip_card2.png",
          logo: "/atm_logo2.png",
        };
      case 'c5':
        return {
          bgColor: 'bg-gradient-to-r from-[#11998E] to-[#38EF7D] text-white',
          chip: "/atm_chip.png",
        logo: "/atm_logo.png",
        };
      default:
        return {
          bgColor: 'bg-gray-200 text-black',
          chip: "/atm_chip.png",
        logo: "/atm_logo.png",
        };
    }
  };


// Utility to mask middle card digits
const maskNumber = (num: string) => {
  // split in blocks
  const parts = num.split(' ');
  if (parts.length < 2) return num;
  const first = parts[0];
  const last = parts[parts.length - 1];
  return `${first} •••• •••• ${last}`;
};

interface CardItemProps {
  card: Card;
}

export const CardItem: React.FC<CardItemProps> = ({ card }) => {
  const { bgColor, chip, logo } = getCardStyles(card.id);

  return (
    <div className={`relative rounded-2xl p-6 overflow-hidden shadow-lg ${bgColor}`}>
      <div className="absolute -top-8 -left-8 w-40 h-40 bg-blue-400 rounded-full opacity-20" />
      <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white rounded-full opacity-20" />

      <img src={chip} alt="chip" className="w-10" />
      <div className="flex justify-between items-center mt-6 mb-4">
        <h3 className="text-lg font-semibold">{card.holder}</h3>
        <img src={logo} alt="card logo" className="w-16" />
      </div>
      <p className="text-sm mb-2 opacity-80">{card.type}</p>
      <p className="text-xl tracking-widest font-mono">{maskNumber(card.number)}</p>
      <p className="mt-4 text-base font-bold ">
        {/* ${card.balance.toLocaleString(undefined, { minimumFractionDigits: 2 })} */}
        {/* {card.balance.toLocaleString(undefined, {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 2,
        })} */}
     Balance:   {card.balance}   
        </p>
    </div>
  );
};

interface CardListProps {
  cards: Card[];
}

export const CardList: React.FC<CardListProps> = ({ cards }) => (
  <div className="space-y-6">
    {cards.map(c => (
      <CardItem key={c.id} card={c} />
    ))}
  </div>
);

export default CardList;
