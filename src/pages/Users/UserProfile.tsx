

import React from 'react';
import { useAppSelector } from '../../store/hook';

export const UserProfile = () => {
      const user = useAppSelector(state => state.auth.user);
      const fullName = user?.firstName + ' ' + user?.lastName;
      return (

  <div className="flex flex-col items-center mb-6">
    <img
      src="/avatar.png"
      alt={fullName}
      className="w-24 h-24 rounded-full object-cover mb-2"
    />
    <h3 className="text-lg font-semibold text-indigo-600">{fullName}</h3>
  </div>
)
}