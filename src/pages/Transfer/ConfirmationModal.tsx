import React, { useState } from "react";
import DialogBox from "../../components/UI/DialogBox";
import { BeneficiaryAccount } from "../../components/mock/data/bankListData";
import { useBanks } from "../../hooks/useBanks"; // Import the useBanks hook
import Loading from "../../components/UI/Loading"; // Import Loading component for better UX
import ResponseMessage from "../../components/UI/ResponseMessage"; // Import ResponseMessage component

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  beneficiary: BeneficiaryAccount | null;
  amount: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, beneficiary, amount }) => {
  const { banks, isLoading } = useBanks(); 

  // State to handle confirmation response
  const [isConfirming, setIsConfirming] = useState(false);
  const [response, setResponse] = useState<{ type: "success" | "error"; message: string } | null>(null);

  if (!beneficiary) return null;

  // Find the bank logo based on the beneficiary's bank name
  const bankData = banks?.find(
    (b) =>
      b.name.toLowerCase() === beneficiary.bankName.toLowerCase() ||
      b.slug === beneficiary.bankName.toLowerCase().replace(/\s+/g, "-")
  );

  // Handle transfer confirmation
  const handleConfirm = () => {
    setIsConfirming(true);
    
    // Simulate API request delay
    setTimeout(() => {
      const success = Math.random() > 0.2; // 80% success rate for testing

      if (success) {
        setResponse({ type: "success", message: "Transfer Successful!" });
      } else {
        setResponse({ type: "error", message: "Transfer Failed. Please try again." });
      }

      setIsConfirming(false);
      onClose(); // Close the modal after confirming
    }, 2000);
  };

  return (
    <>
      <DialogBox isOpen={isOpen} onClose={onClose} title="Confirm Transfer">
        <div className="text-center">
          {isLoading ? (
            <Loading /> // Show loading while fetching bank data
          ) : (
            <>
              <img
                src={bankData?.logo || "/default-bank-logo.png"} // Use bank logo or fallback image
                alt={beneficiary.bankName}
                className="w-16 h-16 rounded-full mx-auto"
              />
              <p className="mt-2 font-semibold text-lg">{beneficiary.fullName}</p>
              <p className="text-gray-500">{beneficiary.bankName}</p>
              <p className="text-xl font-semibold mt-4">
                Amount: <span className="text-blue-600">${amount}</span>
              </p>

              <div className="flex justify-center mt-4 gap-4">
                <button
                  onClick={onClose}
                  className="px-4 py-2 border border-gray-300 rounded-lg"
                  disabled={isConfirming}
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center justify-center"
                  disabled={isConfirming}
                >
                  {isConfirming ? <Loading  /> : "Confirm"}
                </button>
              </div>
            </>
          )}
        </div>
      </DialogBox>

      {/* Show ResponseMessage when transfer is completed */}
      {response && (
        <ResponseMessage
          response={response.type}
          message={response.message}
          isOpen={!!response}
          onClose={() => setResponse(null)} // Close response after displaying
        />
      )}
    </>
  );
};

export default ConfirmationModal;
