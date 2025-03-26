import React, { useState } from "react";
import Card from "../../components/UI/Atm-Card";
import { GoChevronRight } from "react-icons/go";
import { BsSend } from "react-icons/bs";
import { Dialog } from "@headlessui/react"; // Modal UI library

interface UserProps {
  id: number;
  name: string;
  designation: string;
  img: string;
}

// Sample users data (100+ users)
const users: UserProps[] = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  designation: i % 5 === 0 ? "CEO" : "Employee",
  img: "/livia.png",
}));

const QuickTransfer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserProps | null>(null);

  const handleUserSelect = (user: UserProps) => {
    setSelectedUser(user);
    setIsModalOpen(false); // Close modal after selection
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-[#343C6A] py-4">Quick Transfer</h2>

      <div className="flex flex-col gap-4 bg-white rounded-3xl w-fit max-w-full p-4 shadow-md">
        
        {/* Display First 5 Users */}
        <div className="flex gap-4 items-center overflow-x-auto scrollbar-hide ">
          {users.slice(0, 3).map((user) => (
            <button key={user.id} onClick={() => handleUserSelect(user)} className="text-center focus:outline-none">
              <Card className={`p-2 rounded-lg cursor-pointer ${selectedUser?.id === user.id ? "border border-blue-500" : ""}`}>
                <div className="flex flex-col items-center">
                  <img src={user.img} alt={user.name} className="w-14 h-14 rounded-full object-cover" />
                  <p className="mt-2 font-semibold text-sm">{user.name}</p>
                  <p className="text-xs text-[#718EBF]">{user.designation}</p>
                </div>
              </Card>
            </button>
          ))}

          {/* Open Modal Button */}
          <button
            className="rounded-full shadow-md w-10 h-10 flex justify-center items-center transition-transform duration-300"
            onClick={() => setIsModalOpen(true)}
          >
            <GoChevronRight className="text-2xl" />
          </button>
        </div>

        {/* "Write Amount" Section */}
        <div className="flex items-center gap-4 px-4 py-3 bg-white rounded-2xl shadow-sm w-full">
          <p className="text-gray-500 text-lg font-semibold">Write Amount</p>
          <div className="flex items-center bg-[#EDF1F7] rounded-full px-4 py-2">
            <span className="text-gray-500 text-xl">525.50</span>
            <div className="bg-[#1814F3] text-white rounded-full p-3 flex items-center gap-2 cursor-pointer hover:bg-blue-700 transition">
              Send <BsSend className="text-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Selecting Users */}
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <Dialog.Panel className="bg-white rounded-2xl p-6 w-[90%] max-w-lg max-h-[80vh] overflow-y-auto scrollbar-hide">
            <Dialog.Title className="text-lg font-semibold text-center mb-4">Select a User</Dialog.Title>
            
            <div className="grid grid-cols-3 gap-4">
              {users.map((user) => (
                <button key={user.id} className="flex flex-col items-center p-2 hover:bg-gray-100 rounded-lg transition" onClick={() => handleUserSelect(user)}>
                  <img src={user.img} alt={user.name} className="w-14 h-14 rounded-full object-cover" />
                  <p className="text-sm font-semibold mt-2">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.designation}</p>
                </button>
              ))}
            </div>

            {/* Close Button */}
            <button onClick={() => setIsModalOpen(false)} className="w-full mt-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default QuickTransfer;
