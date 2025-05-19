// components/UI/SummaryCard.tsx
import { FC } from 'react'

interface Props {
  month: string
  inTotal: string
  outTotal: string
}

export const SummaryCard: FC<Props> = ({ month, inTotal, outTotal }) => (
  <div className="bg-white p-4 mb-2 rounded-lg shadow-sm">
    <div className="flex justify-between items-center">
      <h2 className="text-base font-medium">{month}</h2>
    </div>
    <div className="flex mt-1 space-x-6 text-sm text-gray-600">
      <span>In: <span className="font-semibold text-green-600">{inTotal}</span></span>
      <span>Out: <span className="font-semibold text-red-600">{outTotal}</span></span>
    </div>
  </div>
)
