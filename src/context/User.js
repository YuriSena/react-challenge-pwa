import React, { createContext, useState } from 'react';

export const User = createContext();

export default function UserProvider( {children} ) {
  const [user, setUser] = useState(false);
  return (
    <User.Provider value={{ user, setUser}}>
      {children}
    </User.Provider>
  );
}