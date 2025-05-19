// src/components/UI/BottomNav.tsx
import { FC } from 'react'
import { Link } from 'react-router-dom'

export const BottomNav: FC = () => (
  <nav className="fixed bottom-0 w-full bg-white border-t">
    <ul className="flex justify-around">
      <li>
        <Link to="/transactions" className="block py-2 text-center text-green-600 hover:bg-gray-100">
          Transactions
        </Link>
      </li>
      <li>
        <Link to="/statistics" className="block py-2 text-center text-gray-600 hover:bg-gray-100">
          Statistics
        </Link>
      </li>
    </ul>
  </nav>
)
