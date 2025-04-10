import React from "react";
import { bankData, BankData } from "../../components/mock/data/bankListData";
import Card from "../../components/UI/Atm-Card";
import { useBanks } from "../../hooks/useBanks";
import Loading from "../../components/UI/Loading";

const BankList: React.FC = () => {
  const { banks, isLoading } = useBanks(); 

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Available Bank Accounts</h2>

      {/* Show loading state while fetching banks */}
      {isLoading ? (
         <Loading />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
          {bankData.map((bank: BankData) => {
            const matchedBank = banks?.find(
              (b) =>
                b.name.toLowerCase() === bank.name.toLowerCase() ||
                b.slug === bank.name.toLowerCase().replace(/\s+/g, "-")
            );

            return (
              <Card
                key={bank.key}
                className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center 
                w-full max-w-[130px] h-auto aspect-square mx-auto p-3 border border-gray-200"
              >
                <img
                  src={matchedBank?.logo}
                  alt={bank.name}
                  className="w-12 h-12 rounded-md object-cover mb-2"
                />
                <h3 className="text-sm font-medium text-gray-700">{bank.name}</h3>
                <h3 className="text-sm font-bold text-blue-600">{bank.balance}</h3>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BankList;
