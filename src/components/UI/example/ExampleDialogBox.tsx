import { useState } from "react";
import DialogBox from "../DialogBox";
import Button from "../Button";


const ExampleDialogBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <Button title="Open Modal" onClick={() => setIsOpen(true)} />

      <DialogBox
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Transfer Confirmation"
        actionButton={{
          text: "Confirm",
          onClick: () => alert("Transfer Successful"),
        }}
      >
        <p className="text-gray-600">
          Are you sure you want to proceed with this transaction?
        </p>
      </DialogBox>
    </div>
  );
};

export default ExampleDialogBox;
