/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "../../components/UI/TextInput";
import Card from "../../components/UI/Atm-Card";
import Button from "../../components/UI/Button";
import { bankData, beneficiaryData } from "../../components/mock/data/bankListData";
import { FiSend } from "react-icons/fi";
import DatePicker from "../../components/UI/DatePicker";

const QuickTransferCard: React.FC = () => {
  const [selectedBank, setSelectedBank] = useState<string>("");
  const [accountBalance, setAccountBalance] = useState<number>(0);
  const [beneficiaryFullName, setBeneficiaryFullName] = useState<string>("");
  const [beneficiaryBank, setBeneficiaryBank] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [openDateModal, setDateModal] = useState<boolean>(false);

  const initialValues = {
    account_number: "",
    bank: "",
    amount: "",
    narration: "",
    date: "",
  };

  const validationSchema = Yup.object().shape({
    account_number: Yup.string()
      .required("Account number is required")
      .matches(/^\d+$/, "Must be a valid number"),
    bank: Yup.string().required("Please select a bank"),
    amount: Yup.number()
      .required("Input amount")
      .positive("Amount must be positive"),
    narration: Yup.string(),
  });

  const handleBeneficiaryChange = (
    value: string,
    setFieldValue: (field: string, value: any) => void
  ) => {
    setFieldValue("account_number", value);

    const beneficiaryInfo = beneficiaryData.find(
      (beneficiary) => beneficiary.accountNumber === value
    );

    if (beneficiaryInfo) {
      setBeneficiaryFullName(beneficiaryInfo.fullName);
      setBeneficiaryBank(beneficiaryInfo.bankName);
    } else {
      setBeneficiaryFullName("");
      setBeneficiaryBank("");
    }
  };

  const handlePayment = (values: any, isScheduled: boolean) => {
    const today = new Date().toISOString().split("T")[0]; // Get today's date
    const paymentDate = isScheduled && selectedDate ? selectedDate : today;
  
    if (isScheduled && !selectedDate) {
      console.log("Please select a date before scheduling.");
      return;
    }
  
    const paymentData = { ...values, date: paymentDate }; // No `selectedDate`
  
    // Simulate sending payment
    console.log("Processing Payment:", paymentData);
  //  sendPayment(paymentData);
  };
  

  
  return (
    <Card className="bg-blue-50 rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <h2 className="text-lg font-bold text-gray-900 mb-4"> Schedule Transfer</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          handlePayment(values, false); 
          resetForm();
        }}
      >
        {({ handleSubmit, setFieldValue, isSubmitting, isValid, values }) => (
          <Form onSubmit={handleSubmit}>
            
            <div className="relative flex items-center mb-4">
              <TextInput
                label="Account Number"
                name="account_number"
                placeholder="Enter account number"
                type="text"
                onChange={(value) => handleBeneficiaryChange(value, setFieldValue)}
              />
              <Button
                title=""
                icon={<FiSend />}
                isLoading={isSubmitting}
                disableOnError={!isValid}
                className="absolute right-2 bottom-2 bg-blue-500 text-white p-2 rounded-full"
                onClick={() => alert("Fetching account details...")}
              />
            </div>

            {beneficiaryFullName && (
              <p className="text-gray-700 mb-4">
                Beneficiary:{" "}
                <span className="font-bold">
                  {beneficiaryFullName} - {beneficiaryBank}
                </span>
              </p>
            )}

            <TextInput
              label="Select Bank"
              name="bank"
              isDropdown
              options={bankData.map((bank) => ({ label: bank.name, value: bank.name }))}
              onChange={(bankName) => {
                setFieldValue("bank", bankName);
                setSelectedBank(bankName);

                const bankInfo = bankData.find((bank) => bank.name === bankName);
                setAccountBalance(bankInfo ? bankInfo.balance : 0);
              }}
            />

            {selectedBank && (
              <p className="text-gray-700 mb-4">
                Available Balance: <span className="font-bold">${accountBalance}</span>
              </p>
            )}

            <TextInput label="Enter Amount" name="amount" placeholder="$0.00" type="number" />
            <TextInput label="Narration" name="narration" placeholder="Enter narration" type="text" />

            <div className="flex gap-3 mt-4">
              <Button title="Send Money" color="primary" type="submit" isLoading={isSubmitting} disableOnError={!isValid} />
              <Button title="Schedule Transfer" color="secondary" type="button" 
              onClick={() => {
                if (selectedDate) {
                  handlePayment(values, true); 
                } else {
                  setDateModal(true); 
                }
              }}
              isLoading={isSubmitting} disableOnError={!isValid} />
            </div>
          </Form>
        )}
      </Formik>

      {openDateModal && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Pick a Date for your transfer to be made</h3>

            <DatePicker
              mode="single"
              label="Select a Date"
              onDateChange={(date) => {
                setSelectedDate(date as string);
                setDateModal(false);
              }}
            />

            <div className="flex justify-end mt-4">
              <Button title="Close" color="secondary" onClick={() => setDateModal(false)} />
            </div>
          </div>
        </div>
      )}

      {selectedDate && (
        <p className="mt-4 text-gray-700 font-semibold">Scheduled Date: {selectedDate}</p>
      )}
    </Card>
  );
};

export default QuickTransferCard;
