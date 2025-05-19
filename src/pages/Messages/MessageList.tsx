import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { FaUniversity, FaUser, FaExclamationCircle } from 'react-icons/fa';
import { FaPaypal as PaypalIcon } from 'react-icons/fa';
import { MdOutlineLocalAtm } from 'react-icons/md';
import { dummyMessages, MessageItem } from '../../components/mock/data/dummyMessages';
import { useNavigate } from 'react-router-dom';

const getIconProps = (title: string) => {
  switch (title) {
    case 'Bank of America':
      return { Icon: FaUniversity, bgColor: '#5F2EEA', iconColor: '#FFFFFF' };
    case 'Account':
      return { Icon: FaUser, bgColor: '#FF6A6A', iconColor: '#FFFFFF' };
    case 'Alert':
      return { Icon: FaExclamationCircle, bgColor: '#2D9CDB', iconColor: '#FFFFFF' };
    case 'Paypal':
      return { Icon: PaypalIcon, bgColor: '#F2C94C', iconColor: '#FFFFFF' };
    case 'Withdraw':
      return { Icon: MdOutlineLocalAtm, bgColor: '#27AE60', iconColor: '#FFFFFF' };
    default:
      // Fallback icon/style
      return { Icon: FaUniversity, bgColor: '#CCCCCC', iconColor: '#000000' };
  }
};

const MessageList: React.FC = () => {

          const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
  return (
    <div className="flex flex-col h-fit max-h-screen">
      <header className="flex items-center mr-auto">
      <button className="p-1" onClick={goBack} >
           <FiArrowLeft size={24} />
         </button>
        <h1 className="text-lg font-semibold text-gray-900 text-center">Message</h1>
      </header>

      <main className="flex-1 overflow-y-auto mx-auto">
        {dummyMessages.map((msg: MessageItem) => {
          const { Icon, bgColor, iconColor } = getIconProps(msg.title);
          return (
            <div key={msg.id} onClick={()=> navigate(`/message/${msg.id}`) } className="flex items-center bg-gray-100 rounded-xl p-4 gap-2 mb-3">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: bgColor }}
              >
                <Icon size={20} color={iconColor} />
              </div>
              <div className="flex-1 ml-4">
                <h2 className="text-base font-medium text-gray-900">{msg.title}</h2>
                <p className="text-sm text-gray-500 ">{msg.subtitle}</p>
              </div>
              <i className="text-sm text-zinc-500">{msg.date}</i>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default MessageList;
