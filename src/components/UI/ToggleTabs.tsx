// // =====================================
// // ToggleTabs.tsx
// // A reusable tab switcher component
// // =====================================
// import React from 'react';

// interface ToggleTabsProps<T extends string> {
//   tabs: { key: T; label: string }[];
//   selectedKey: T;
//   onChange: (key: T) => void;
// }

// export function ToggleTabs<T extends string>({ tabs, selectedKey, onChange }: ToggleTabsProps<T>) {
//   return (
//     <div className="flex bg-gray-100 rounded-full p-1 mb-6">
//       {tabs.map(tab => {
//         const active = tab.key === selectedKey;
//         return (
//           <button
//             key={tab.key}
//             onClick={() => onChange(tab.key)}
//             className={`flex-1 text-center py-2 rounded-full transition
//               ${active ? 'bg-indigo-600 text-white' : 'text-gray-500'}`}
//           >
//             {tab.label}
//           </button>
//         );
//       })}
//     </div>
//   );
// }

import React from 'react';
interface ToggleTabsProps<T extends string> {
  tabs: ReadonlyArray<{ key: T; label: string }>;   
  selectedKey: T;
  onChange: (key: T) => void;
}


export function ToggleTabs<T extends string>({ tabs, selectedKey, onChange }: ToggleTabsProps<T>) {
  return (
    <div
      className="overflow-x-auto scrollbar-hide whitespace-nowrap rounded-full p-1 mb-6 flex border shadow-sm"
      style={{ WebkitOverflowScrolling: 'touch' }} // smooth scrolling on iOS
    >
      {tabs.map(tab => {
        const active = tab.key === selectedKey;
        return (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={`inline-block  px-4 py-2 mx-1 rounded-full transition whitespace-normap text-center flex-1
              ${active ? 'bg-indigo-600 text-white' : 'text-gray-500'}`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

