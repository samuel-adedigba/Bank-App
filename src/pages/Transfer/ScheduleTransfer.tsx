import React, { useState } from 'react'
import * as Yup from "yup";
import Button from '../../components/UI/Button';
import ModalForm from '../../components/UI/ModalForm';

interface FieldConfig {
    name: string;
    label: string;
    type: string;
    placeholder?: string;
  }
interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: any) => void;
  data: any;
  fields: FieldConfig[];
}

const ScheduleTransfer:React.FC<Props> = ( {data,  isOpen,
    onClose,
  } ) => {
  //  const [isModalOpen, setIsModalOpen] = useState(false);

    const formFields = [
      { name: "transfer_schedule_date", label: "Set date", type: "date", placeholder: "Pick date to make transfer" },
    ];
  
    const formValidationSchema = Yup.object().shape({
      name: Yup.string().required("Date is required"),
    });
  
    const handleFormSubmit = (formData: any) => {
        data(formData)
      console.log("Form Data Submitted:", formData);
      alert(`Form submitted:\n${JSON.stringify(formData, null, 2)}`);
    };
  
    return (
      <div className="p-6">
        {/* <Button title="Open Form" color="primary" onClick={() => setIsModalOpen(true)} type="button" /> */}
  
        <ModalForm 
          header="Schedule Your Transfer"
          isOpen={isOpen} 
          onClose={onClose} 
          onSubmit={handleFormSubmit} 
          fields={formFields}
          validationSchema={formValidationSchema}
        />
      </div>
    );
  };

export default ScheduleTransfer
