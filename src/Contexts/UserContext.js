import React, { useState } from 'react';
import { createContext } from 'react';
import app from '../Firebase/firebase.config';
import { getAuth } from 'firebase/auth';

const AuthContext = createContext(app);
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const userInfo = { user, setUser };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
