import React, { useState } from "react";
import { ErrorMessage, Field, useFormikContext, FormikContextType } from "formik";
import { ChevronDown } from "lucide-react";
import dayjs from "dayjs";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";

interface TextInputProps {
  label?: string;
  name: string;
  placeholder?: string;
  isDropdown?: boolean;
  options?: { label: string; value: string }[]; // Structured options for dropdown mode
  type?: string;
  onChange?: (value: string) => void; // External onChange callback receives the new value
  value?: string; // For controlled usage outside Formik
  className?: string;
}

// Custom hook that safely returns Formik context if available, otherwise null.
function useSafeFormikContext<T = any>(): FormikContextType<T> | null {
  try {
    return useFormikContext<T>();
  } catch (error) {
    return null;
  }
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  placeholder,
  isDropdown = false,
  options = [],
  type = "text",
  onChange,
  value: propValue,
  className = "",
}) => {
  const formik = useSafeFormikContext();
  // Use local state if not controlled by Formik or no prop value is provided.
  const [localValue, setLocalValue] = useState<string>(propValue || "");
  
  // Determine the current value: from Formik if available, otherwise local.
  const inputValue = formik ? formik.values[name] : localValue;

  // Handler for standard input changes (including date formatting).
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    if (type === "date") {
      newValue = dayjs(newValue).format("DD MMMM YYYY");
    }
    if (formik) {
      formik.setFieldValue(name, newValue);
    } else {
      setLocalValue(newValue);
    }
    if (onChange) {
      onChange(newValue);
    }
  };

  // Handler for dropdown selection changes.
  const handleSelectChange = (val: string) => {
    if (formik) {
      formik.setFieldValue(name, val);
    } else {
      setLocalValue(val);
    }
    if (onChange) {
      onChange(val);
    }
  };

  return (
    <div className={`flex flex-col w-full ${className}`}>
      {label && (
        <label htmlFor={name} className="text-gray-700 text-sm font-medium mb-2">
          {label}
        </label>
      )}

      <div className="relative">
        {isDropdown ? (
      <Listbox value={inputValue} onChange={handleSelectChange}>
      <ListboxButton className="w-full h-[50px] bg-white rounded-lg border border-gray-300 px-4 text-gray-700 flex justify-between items-center focus:outline-none  ">
        {inputValue || placeholder}
        <ChevronDown className="text-gray-500 ml-auto" />
      </ListboxButton>
      <ListboxOptions className="absolute w-full bg-white border border-gray-300 mt-1 rounded-lg shadow-md z-10 max-h-60 overflow-auto scrollbar-hide">
        {options.map((option, index) => (
          <ListboxOption
            key={index}
            value={option.value}
            className="cursor-pointer select-none py-2 px-4 hover:bg-gray-100"
          >
            {option.label}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>     
        ) : formik ? (
          // When inside Formik, use Field to leverage Formik's state management.
          <Field name={name}>
            {({ field }: { field: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void } }) => (
              <input
                {...field}
                id={name}
                type={type}
                placeholder={placeholder}
                value={inputValue}
                onChange={handleInputChange}
                className="w-full h-[50px] bg-white rounded-lg border border-gray-300 px-4 text-gray-700 focus:outline-none"
              />
            )}
          </Field>
        ) : (
          // Fallback for standalone usage (without Formik)
          <input
            id={name}
            type={type}
            placeholder={placeholder}
            value={inputValue}
            onChange={handleInputChange}
            className="w-full h-[50px] bg-white rounded-lg border border-gray-300 px-4 text-gray-700 focus:outline-none"
          />
        )}
      </div>

      {formik && (
        <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1" />
      )}
    </div>
  );
};

export default TextInput;
