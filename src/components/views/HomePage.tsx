import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { 
  FaMoneyBillWave, 
  FaMobile, 
  FaTv, 
  FaBus, 
  FaSchool, 
  FaPlane, 
  FaGamepad, 
  FaChartLine, 
  FaGift,
  FaArrowRight
} from 'react-icons/fa';
import { IoMdCard } from 'react-icons/io';
import { BsFillLightningFill, BsThreeDots } from 'react-icons/bs';
import { RiExchangeFill } from 'react-icons/ri';
import RecentTransactionsPreview from '../../pages/Transaction/RecentTransactionsPreview';
import QuickTransfer from '../../pages/Transfer/QuickTransfer';

const HomePage = () => {
  const navigate = useNavigate();
  const [showQuickTransfer, setShowQuickTransfer] = useState(false);

  const services = [
    { icon: <FaMoneyBillWave className="text-blue-600" size={20} />, name: 'Transfer', path: '/transfer' },
    { icon: <FaMobile className="text-blue-600" size={20} />, name: 'Airtime', path: '' },
    { icon: <FaTv className="text-blue-600" size={20} />, name: 'TV', path: '' },
    { icon: <IoMdCard className="text-blue-600" size={20} />, name: 'Cards', path: '/credit-cards' },
    { icon: <BsFillLightningFill className="text-blue-600" size={20} />, name: 'Electricity', path: '' },
    { icon: <FaBus className="text-blue-600" size={20} />, name: 'Transport', path: '' },
    { icon: <FaSchool className="text-blue-600" size={20} />, name: 'Education', path: '' },
    { icon: <FaPlane className="text-blue-600" size={20} />, name: 'Travel', path: '' },
    { icon: <FaGamepad className="text-blue-600" size={20} />, name: 'Games', path: '' },
    { icon: <FaChartLine className="text-blue-600" size={20} />, name: 'Invest', path: '' },
    { icon: <FaGift className="text-blue-600" size={20} />, name: 'Giftcard', path: '' },
    { icon: <BsThreeDots className="text-blue-600" size={20} />, name: 'More', path: '' },
  ];


  const quickActions = [
    {
      icon: <RiExchangeFill size={18} />,
      name: 'Send Money',
      action: () => setShowQuickTransfer(true),
    },
    {
      icon: <FaMobile size={18} />,
      name: 'Buy Airtime',
      action: () => navigate(''),
    },
    {
      icon: <FaTv size={18} />,
      name: 'Pay Bills',
      action: () => navigate(''),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      {/* Header with wallet balance */}
      <div className="bg-blue-600 text-white px-4 pt-6 pb-8 rounded-b-3xl">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-sm opacity-90">Wallet Balance</p>
            <h2 className="text-2xl font-bold">₦50,000.00</h2>
          </div>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
            Add Money
          </button>
        </div>

        {/* Quick actions */}
        <div className="flex justify-between gap-3">
        {quickActions.map((action, index) => (
          <button
            key={index}
            onClick={action.action}
            className="flex flex-col items-center bg-blue-500 bg-opacity-20 rounded-xl py-3 px-4 flex-1"
          >
            <div className="bg-white bg-opacity-20 p-2 rounded-full mb-1">
              {action.icon}
            </div>
            <span className="text-xs">{action.name}</span>
          </button>
        ))}
      </div>
      {showQuickTransfer && (
        <QuickTransfer
          isOpen={showQuickTransfer}
          onClose={() => setShowQuickTransfer(false)}
        />
      )}
      </div>

      {/* Services grid */}
      <div className="px-4 -mt-6">
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <div className="grid grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div 
                key={index}
                onClick={() => navigate(service.path)}
                className="flex flex-col items-center py-3 active:bg-gray-100 rounded-lg"
              >
                <div className="bg-blue-50 p-3 rounded-full mb-2">
                  {service.icon}
                </div>
                <span className="text-xs text-gray-700">{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Promotions section */}
      <div className="px-4 mt-6">
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium">Promotions</h3>
            <button className="text-blue-600 text-xs flex items-center">
              See all <FaArrowRight className="ml-1" size={12} />
            </button>
          </div>
          <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4">
            <p className="text-yellow-800 text-sm">
              Get 10% cashback on all transfers this week!
            </p>
          </div>
        </div>
      </div>

      {/* Recent transactions */}
      <RecentTransactionsPreview />
      {/* <div className="px-4 mt-6">
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium">Recent Transactions</h3>
            <Link className="text-blue-600 text-xs flex items-center " to="/timeline-transaction" >
              See all <FaArrowRight className="ml-1" size={12} />
            </Link>
          </div>
          <div className="space-y-4">
            {[1, 2].map((item) => (
              <div key={item} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FaMoneyBillWave className="text-blue-600" size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Money Transfer</p>
                    <p className="text-xs text-gray-500">Today, 10:45 AM</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">-₦5,000</p>
                  <p className="text-xs text-gray-500">Successful</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;