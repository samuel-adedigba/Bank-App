import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Card from "../../components/UI/Atm-Card"; // Reusing your Card component
import TextInput from "../../components/UI/TextInput";
import Loading from "../../components/UI/Loading";

// Reusable Input Component

const AddNewCard: React.FC = () => {
  const initialValues = {
    cardType: "Classic",
    nameOnCard: "My Cards",
    cardNumber: "**** **** **** ****",
    expirationDate: "25 January 2025",
  };

  const validationSchema = Yup.object({
    cardType: Yup.string().required("Card Type is required"),
    nameOnCard: Yup.string().required("Name on Card is required"),
    cardNumber: Yup.string()
      .matches(/^\d{4} \d{4} \d{4} \d{4}$/, "Invalid Card Number")
      .required("Card Number is required"),
    expirationDate: Yup.string().required("Expiration Date is required"),
  });

  const handleSubmit = (values: any) => {
    console.log("Form Submitted", values);
  };

  return (
      <Card className="mx-auto max-w-full">
        <h1 className="text-2xl font-semibold mb-4">Add New Card</h1>
        <div className="w-2/3 md:w-full bg-white rounded-2xl shadow-md p-6">
          <p className="text-[#718ebf] text-sm leading-6">
            Credit Card generally means a plastic card issued by Scheduled
            Commercial Banks assigned to a Cardholder, with a credit limit, that
            can be used to purchase goods and services on credit or obtain cash
            advances.
          </p>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="mt-6 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <TextInput
                    label="Card Type"
                    name="cardType"
                    placeholder="Classic"
                    isDropdown
                  />
                  <TextInput
                    label="Name On Card"
                    name="nameOnCard"
                    placeholder="My Cards"
                  />
                  <TextInput
                    label="Card Number"
                    name="cardNumber"
                    placeholder="**** **** **** ****"
                  />
                  <TextInput
                    label="Expiration Date"
                    type="date"
                    name="expirationDate"
                    placeholder="25 January 2025"
                    isDropdown
                  />
                </div>

                <button
                  type="submit"
                  className="w-40 h-[50px] bg-[#1814f3] rounded-[9px] text-white text-lg font-medium mt-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <Loading /> : "Add Card"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </Card>
  );
};

export default AddNewCard;
