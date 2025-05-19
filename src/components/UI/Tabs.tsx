// components/UI/Tabs.tsx
import { FC } from 'react'

interface Tab { key: string; label: string }
interface Props {
  tabs: Tab[]
  activeKey: string
  onChange: (key: string) => void
}

export const Tabs: FC<Props> = ({ tabs, activeKey, onChange }) => (
  <div className="flex border-b bg-white">
    {tabs.map(tab => (
      <button
        key={tab.key}
        onClick={() => onChange(tab.key)}
        className={`flex-1 py-2 text-center ${
          tab.key === activeKey
            ? 'border-b-2 border-green-500 text-green-600'
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        {tab.label}
      </button>
    ))}
  </div>
)
