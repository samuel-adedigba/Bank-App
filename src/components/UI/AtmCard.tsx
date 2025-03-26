// import React from "react";
// import Card from "./Atm-Card";


// interface AtmCardProps {
//   bankName: string;
//   cardNumber: string;
//   cardHolder: string;
//   expiryDate: string;
//   bgColor?: string;
// }

// const AtmCard: React.FC<AtmCardProps> = ({ bankName, cardNumber, cardHolder, expiryDate, bgColor }) => {
//   return (
//     <Card
//       bgColor={bgColor} 
//       className="w-full max-w-xs rounded-lg shadow-lg p-4"
//     >
//       {/* Bank Name */}
//       <div className="text-xl font-bold">{bankName}</div>

//       {/* Card Number */}
//       <div className="text-lg tracking-widest my-2">
//         {cardNumber.replace(/\d{4}(?=.)/g, "$& ")} {/* Format card number */}
//       </div>

//       {/* Card Holder & Expiry Date */}
//       <div className="flex justify-between mt-2 text-sm">
//         <div>
//           <span className="block text-gray-200">Card Holder</span>
//           <span className="font-semibold">{cardHolder}</span>
//         </div>
//         <div>
//           <span className="block text-gray-200">Expires</span>
//           <span className="font-semibold">{expiryDate}</span>
//         </div>
//       </div>
//     </Card>
//   );
// };

// export default AtmCard;
