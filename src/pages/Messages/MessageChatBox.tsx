
import React, { useMemo, useState } from 'react';
import { FiArrowLeft, FiSend } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { ChatMessage, ChatUser, dummyConversation } from '../../components/mock/data/dummyConversation';
import { useAppSelector } from '../../store/hook';

interface ChatConversationProps {
  /** Current logged-in user ID */
  //currentUserId: string;
  /** Array of chat messages (defaults to dummy data) */
  messages?: ChatMessage[];
}

const MessageChatBox: React.FC<ChatConversationProps> = ({
 // currentUserId,
  messages = dummyConversation,
}) => {
  const navigate = useNavigate();
  const [draft, setDraft] = useState('');
  const currentUserId = useAppSelector((state) => state.auth.user?.id);

  // Identify the other participant in the chat
  const partner: ChatUser = useMemo(() => {
    for (const m of messages) {
      if (m.sender.userId !== currentUserId) return m.sender;
      if (m.recipient.userId !== currentUserId) return m.recipient;
    }
    // fallback
    return messages[0].sender;
  }, [messages, currentUserId]);

  // Group messages by date string (e.g. "8/10/2018")
  const grouped = useMemo(
    () =>
      messages.reduce((acc, msg) => {
        const dateKey = new Date(msg.timestamp).toLocaleDateString();
        if (!acc[dateKey]) acc[dateKey] = [];
        acc[dateKey].push(msg);
        return acc;
      }, {} as Record<string, ChatMessage[]>),
    [messages]
  );

  const handleSend = () => {
    // stub: replace with real send logic
    console.log('Sending:', draft);
    setDraft('');
  };

  return (
    <div className="flex flex-col min-h-full mx-auto ">

      <header className="flex items-center p-2 border-b">
        <button onClick={() => navigate(-1)} className="p-2">
          <FiArrowLeft size={24} />
        </button>
        <h1 className="mr-auto text-lg font-semibold text-gray-900 text-center">
          {partner.name}
        </h1>
      </header>

      <main className="flex-1 overflow-y-auto">
        {Object.entries(grouped).map(([date, msgs]) => (
          <div key={date} className="mb-4">
            <div className="text-center text-gray-500 text-sm mb-3">{date}</div>
            {msgs.map((msg) => {
              const isMine = msg.sender.userId === currentUserId;
              return (
                <div
                  key={msg.id}
                  className={`flex mb-2 ${isMine ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 text-sm leading-snug break-words
                      ${
                        isMine
                          ? 'bg-indigo-600 text-white rounded-tl-lg rounded-bl-lg rounded-br-lg'
                          : 'bg-gray-200 text-gray-900 rounded-tr-lg rounded-br-lg rounded-bl-lg'
                      }`}
                  >
                    {msg.content}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </main>

      <footer className="flex items-center p-2 border-t">
        <input
          type="text"
          placeholder="Type something..."
          className="flex-1 border border-gray-300 rounded-full px-2 py-2 focus:outline-none"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
        />
        <button onClick={handleSend} className="p-2">
          <FiSend size={24} className="text-indigo-600" />
        </button>
      </footer>
    </div>
  );
};

export default MessageChatBox;
