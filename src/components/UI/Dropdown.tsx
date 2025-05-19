// // components/UI/Dropdown.tsx
// import { FC } from 'react'
// import { Dropdown } from 'flowbite-react'

// interface Option { label: string; value: string }
// interface Props {
//   label: string
//   options: Option[]
//   value: string
//   onChange: (value: string) => void
// }

// export const SelectDropdown: FC<Props> = ({ label, options, value, onChange }) => (
//   <Dropdown label={label} inline>
//     {options.map(o => (
//       <Dropdown.Item
//         key={o.value}
//         onClick={() => onChange(o.value)}
//         className={value === o.value ? 'bg-gray-100' : ''}
//       >
//         {o.label}
//       </Dropdown.Item>
//     ))}
//   </Dropdown>
// )
