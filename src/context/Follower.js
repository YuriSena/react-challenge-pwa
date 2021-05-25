import React, { createContext, useState } from 'react';

export const Follower = createContext();

export default function FollowerProvider( {children} ) {
  const [follower, setFollower] = useState(false);
  return (
    <Follower.Provider value={{ follower, setFollower}}>
      {children}
    </Follower.Provider>
  );
}