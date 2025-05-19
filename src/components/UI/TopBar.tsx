// src/components/UI/TopBar.tsx
import { FC, ReactNode } from 'react'

interface TopBarProps {
  title: string
  backIcon: ReactNode
  onBack: () => void
  actionIcon?: ReactNode
  onAction?: () => void
}

export const TopBar: FC<TopBarProps> = ({ title, onBack, actionIcon, onAction, backIcon }) => (
  <header className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
    <button onClick={onBack} className="p-2 rounded hover:bg-gray-100">
    {backIcon}
    </button>
    <h1 className="text-lg font-semibold">{title}</h1>
    {actionIcon  && (
      <button onClick={onAction} className="p-2 rounded hover:bg-gray-100">
        {actionIcon}
      </button>
    // ) : (
    //   <div className="w-8" />   
    //   </div>
    )}
  </header>
)
