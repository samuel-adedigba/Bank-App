import React, { useState } from "react";
import Card from "../../components/UI/Atm-Card";
import { BsSend } from "react-icons/bs";
import DialogBox from "../../components/UI/DialogBox";
import Button from "../../components/UI/Button";
import ConfirmationModal from "../Transfer/ConfirmationModal";
import {
  BeneficiaryAccount,
  beneficiaryData,
} from "../../components/mock/data/bankListData";
import { useBanks } from "../../hooks/useBanks";
import Loading from "../../components/UI/Loading";

// Beneficiary Accounts Data
const QuickTransfer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] =
    useState<BeneficiaryAccount | null>(null);
  const [amount, setAmount] = useState(""); // Amount input
  const [searchQuery, setSearchQuery] = useState(""); // Search input
  const { banks, isLoading } = useBanks();

  // Handle beneficiary selection
  const handleAccountSelect = (account: BeneficiaryAccount) => {
    setSelectedAccount(account);
    setIsModalOpen(false);
  };

  // Confirm transfer action
  const handleConfirmTransfer = () => {
    if (selectedAccount && amount) {
      setIsConfirmModalOpen(true);
    }
  };
  if (isLoading)
    return (
      <div>
        {" "}
        <Loading />{" "}
      </div>
    );
  // Filter beneficiaries by search
  const filteredBeneficiaries = beneficiaryData.filter(
    (acc) =>
      acc.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      acc.accountNumber.includes(searchQuery) ||
      acc.bankName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const bankData =
    selectedAccount &&
    banks?.find(
      (b) =>
        b.name.toLowerCase() === selectedAccount.bankName.toLowerCase() ||
        b.slug === selectedAccount.bankName.toLowerCase().replace(/\s+/g, "-")
    );
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-[#343C6A] py-4">
        Quick Transfer
      </h2>

      {/* Main Transfer Card */}
      <div className="flex flex-col gap-4 bg-white max-w-lg w-fi rounded-3xl p-2 shadow-md ">
        {/* Beneficiary Selection */}
        {/* Beneficiary Selection - Mobile Responsive */}
        <div className="grid  grid-cols-2 gap-4 items-center overflow-auto scrollbar-hide ">
          {filteredBeneficiaries.slice(0, 4).map((account) => {
            const bankInfo = banks?.find(
              (b) =>
                b.name.toLowerCase() === account.bankName.toLowerCase() ||
                b.slug === account.bankName.toLowerCase().replace(/\s+/g, "-")
            );

            return (
              <button
                key={account.id}
                onClick={() => handleAccountSelect(account)}
                className={`p-3 rounded-lg transition duration-200 ease-in-out hover:bg-gray-100 focus:outline-none ${
                  selectedAccount?.accountNumber === account.accountNumber
                    ? "border border-blue-500"
                    : ""
                }`}
              >
                <Card className="items-center ">
                  {/* <img
                    src={bankInfo?.logo}
                    alt={account.bankName}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-2 object-cover"
                  /> */}
                  <p className="font-semibold text-sm sm:text-base text-center leading-tight">
                    {account.fullName}
                  </p>
                  <p className="text-lg sm:text-base  text-gray-500 text-center">
                    {account.bankName}
                  </p>
                  <p className="text-lg sm:text-base font-bold text-gray-500 text-center ">
                    {account.accountNumber}
                  </p>
                </Card>
              </button>
            );
          })}

          <Button
            title=">"
            onClick={() => setIsModalOpen(true)}
            className="rounded-full shadow-md w-10 h-10 flex justify-center ml-14 items-center bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
          />
        </div>

        {/* Selected Account Display */}
        {bankData && selectedAccount && (
          <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg">
            <img
              src={bankData.logo}
              alt={selectedAccount.bankName}
              className="w-10 h-10"
            />
            <div>
              <p className="text-gray-600 font-semibold">
                {selectedAccount.fullName}
              </p>
              <p className="text-sm text-gray-500">
                {selectedAccount.bankName}
              </p>
              <p className="text-sm text-gray-500">
                {selectedAccount.accountNumber}
              </p>
            </div>
          </div>
        )}

        {/* Amount Input */}
        <div className="flex flex-wrap items-center gap-4 px-4">
          <p className="text-gray-500 text-lg font-semibold">Enter Amount</p>
          <div className="flex lg:flex-row lg:mx-auto mb-3  flex-col gap-4" >       
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full lg:w-fit text-xl p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
          />
          <Button
            title="Send"
            icon={<BsSend className="text-2xl" />}
            onClick={handleConfirmTransfer}
            disableOnError={!selectedAccount || !amount}
            className="flex items-center gap-2"
          />
        </div>
           </div>
      </div>

      

      {/* DialogBox for Beneficiary Selection */}
      <DialogBox
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Select a Beneficiary"
      >
        <input
          type="text"
          placeholder="Search beneficiary..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
        />
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 h-[25rem] overflow-hidden overflow-y-auto scrollbar-hide">
          {isLoading ? (
            <p>Loading banks...</p>
          ) : (
            filteredBeneficiaries.map((account) => {
              const bankInfo = banks?.find(
                (b) =>
                  b.name.toLowerCase() === account.bankName.toLowerCase() ||
                  b.slug === account.bankName.toLowerCase().replace(/\s+/g, "-")
              );

              return (
                <button
                  key={account.id}
                  className="p-2 hover:bg-gray-100 rounded-lg transition"
                  onClick={() => handleAccountSelect(account)}
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={bankInfo?.logo || "/default-logo.png"}
                      alt={account.bankName}
                      className="w-6 h-6"
                    />
                    <div>
                      <p className="text-sm font-semibold">
                        {account.fullName}
                      </p>
                      <p className="text-xs text-gray-500">
                        {account.bankName}
                      </p>
                      <p className="text-xs text-gray-500">
                        {account.accountNumber}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })
          )}
        </div>
      </DialogBox>

      {/* Confirmation Modal */}
      {isConfirmModalOpen && selectedAccount && (
        <ConfirmationModal
          isOpen={isConfirmModalOpen}
          onClose={() => setIsConfirmModalOpen(false)}
          beneficiary={selectedAccount}
          amount={amount}
        />
      )}
    </div>
  );
};

export default QuickTransfer;
