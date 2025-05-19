// src/components/UI/SelectDropdown.tsx
import { FC } from 'react'

interface Option { label: string; value: string }
interface Props {
  options: Option[]
  value: string
  onChange: (value: string) => void
  className?: string
}

export const SelectDropdown: FC<Props> = ({ options, value, onChange, className }) => (
  <select
    value={value}
    onChange={e => onChange(e.target.value)}
    className={`border rounded p-2 bg-white focus:outline-none focus:ring ${className || 'w-full'}`}
  >
    {options.map(o => (
      <option key={o.value} value={o.value}>{o.label}</option>
    ))}
  </select>
)
