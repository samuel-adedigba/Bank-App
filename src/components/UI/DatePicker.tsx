import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import dayjs from "dayjs";
import { CalendarIcon } from "lucide-react";
import Button from "./Button";

interface DatePickerProps {
  mode?: "single" | "range";   label?: string;
  onDateChange: (selected: string | { start: string; end: string }) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ mode = "single", label, onDateChange }) => {
  const [selected, setSelected] = useState<string | { start: string; end: string }>(
    mode === "single" ? "" : { start: "", end: "" }
  );

  const [isOpen, setIsOpen] = useState(false);
  const [tempDate, setTempDate] = useState(dayjs().format("YYYY-MM-DD"));
  
  const [range, setRange] = useState<{ start: string; end: string }>({ start: "", end: "" });

  const handleSelect = () => {
    if (mode === "single") {
      setSelected(tempDate);
      onDateChange(tempDate);
    } else {
      if (range.start.trim() !== "" && range.end.trim() !== "") {
        const selectedRange = { start: range.start, end: range.end };
        setSelected(selectedRange);
        onDateChange(selectedRange);
      }
    }
    setIsOpen(false);
  };

  let displayValue = "";
  if (mode === "single") {
    if (typeof selected === "string" && selected.trim() !== "") {
      displayValue = dayjs(selected).format("DD MMMM YYYY");
    }
  } else {
    if (
      typeof selected === "object" &&
      selected.start.trim() !== "" &&
      selected.end.trim() !== ""
    ) {
      displayValue = `${dayjs(selected.start).format("DD MMMM YYYY")} - ${dayjs(selected.end).format("DD MMMM YYYY")}`;
    }
  }

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      )}

      <div className="relative">
        <input
          type="text"
          readOnly
          value={displayValue}
          placeholder={mode === "single" ? "Select a date" : "Select a date range"}
          onClick={() => setIsOpen(true)}
          className="w-full h-12 bg-white border border-gray-300 rounded-lg px-4 text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as="div" // Render as a real div instead of Fragment to pass ref
            className="w-full max-w-md p-6 bg-white shadow-xl rounded-2xl"
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Title as="h3" className="text-lg font-medium text-gray-900 mb-4">
              {mode === "single" ? "Select a Date" : "Select a Date Range"}
            </Dialog.Title>
            <div className="space-y-4">
              {mode === "single" ? (
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none"
                  value={tempDate}
                  onChange={(e) => setTempDate(e.target.value)}
                />
              ) : (
                <div className="flex flex-col gap-3">
                  <input
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none"
                    placeholder="Start Date"
                    value={range.start}
                    onChange={(e) => setRange({ ...range, start: e.target.value })}
                  />
                  <input
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none"
                    placeholder="End Date"
                    value={range.end}
                    onChange={(e) => setRange({ ...range, end: e.target.value })}
                  />
                </div>
              )}
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <Button title="Cancel" color="secondary" onClick={() => setIsOpen(false)} />
              <Button title="Select" color="primary" onClick={handleSelect} />
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
};

export default DatePicker;
