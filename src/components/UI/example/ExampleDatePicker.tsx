import { useState } from "react";
import DatePicker from "../DatePicker";

const ExampleDatePicker = () => {
  // const [selectedDate, setSelectedDate] = useState("");

  // return (
  //   <div className="p-4 w-fit">
  //     <DatePicker mode="range" label="Pick a Date" 
  //     onDateChange={(date) => 
  //     setSelectedDate(date as string)} />
  //     <p className="mt-2">Selected Date: {selectedDate}</p>
  //   </div>
  // );
  const [dateRange, setDateRange] = useState<{ start?: string; end?: string }>({});

  return (
    <div className="p-4">
      <DatePicker
        mode="range"
        label="Select Date Range"
        onDateChange={(selected) => {
          setDateRange(selected as { start: string; end: string });
        }}
      />
      
      {dateRange.start && dateRange.end && (
        <p className="mt-4 text-gray-700 font-semibold">
          Selected Range: {dateRange.start} - {dateRange.end}
        </p>
      )}
    </div>
  );
};
export default ExampleDatePicker;
