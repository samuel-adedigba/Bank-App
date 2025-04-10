import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

interface SelectInputProps {
  label?: string;
  name: string;
  options: string[];
  value?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const Select: React.FC<SelectInputProps> = ({
  label,
  name,
  options,
  value = "",
  placeholder = "",
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState(value);

  const handleChange = (val: string) => {
    setSelectedValue(val);
    onChange(val);
  };

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label htmlFor={name} className="text-gray-700 text-sm font-medium mb-2">
          {label}
        </label>
      )}

      <Listbox value={selectedValue} onChange={handleChange}>
        <div className="relative">
          <Listbox.Button className="w-full h-[50px] bg-white rounded-lg border border-gray-300 px-4 text-gray-700 flex justify-between items-center">
            {selectedValue || placeholder}
            <ChevronDown className="text-gray-500" />
          </Listbox.Button>
          <Listbox.Options className="absolute w-full bg-white border border-gray-300 mt-1 rounded-lg shadow-md z-10">
            {options.map((option, index) => (
              <Listbox.Option key={index} value={option} className="p-2 hover:bg-gray-100 cursor-pointer">
                {option}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};

export default Select;
