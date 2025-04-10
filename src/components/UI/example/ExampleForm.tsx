import { useState } from "react";
import * as Yup from "yup";
import Button from "../Button";
import ModalForm from "../ModalForm";

const ExampleForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formFields = [
    { name: "name", label: "Full Name", type: "text", placeholder: "Enter your name" },
    { name: "email", label: "Email Address", type: "email", placeholder: "Enter your email" },
    { name: "message", label: "Message", type: "text", placeholder: "Type your message" },
  ];

  const formValidationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message cannot be empty"),
  });

  const handleFormSubmit = (formData: any) => {
    console.log("Form Data Submitted:", formData);
    alert(`Form submitted:\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div className="p-6">
      <Button title="Open Form" color="primary" onClick={() => setIsModalOpen(true)} type="button" />

      <ModalForm 
        header=" Submit Your Details"
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleFormSubmit} 
        fields={formFields}
        validationSchema={formValidationSchema}
      />
    </div>
  );
};

export default ExampleForm;
