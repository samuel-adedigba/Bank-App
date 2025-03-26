import { ErrorMessage, Field, useFormikContext } from "formik";
import { ChevronDown } from "lucide-react";
import dayjs from "dayjs";
import { useState } from "react";

const TextInput = ({ label, name, placeholder, isDropdown = false }: { 
  label: string; 
  name: string; 
  placeholder: string; 
  isDropdown?: boolean; 
}) => {
  const { setFieldValue } = useFormikContext();
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = dayjs(e.target.value).format("DD MMMM YYYY"); // Format to "25 January 2025"
    setSelectedDate(newDate);
    setFieldValue(name, newDate);
  };

  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="text-[#232323] text-sm font-medium mb-2">
        {label}
      </label>
      <div className="relative">
        {isDropdown && name === "expirationDate" ? (
          <input
            type="date"
            id={name}
            name={name}
            value={selectedDate}
            onChange={handleDateChange}
            className="w-full h-[50px] bg-white rounded-[12px] border border-[#dfeaf2] px-4 text-[#718ebf] focus:outline-none"
          />
        ) : (
          <Field
            id={name}
            name={name}
            placeholder={placeholder}
            className="w-full h-[50px] bg-white rounded-[12px] border border-[#dfeaf2] px-4 text-[#718ebf] focus:outline-none"
          />
        )}
        {isDropdown && name !== "expirationDate" && (
          <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#718ebf]" />
        )}
      </div>
      <ErrorMessage name={name} component="p" className="text-red-500 text-sm mt-1" />
    </div>
  );
};

export default TextInput;
