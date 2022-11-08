import React, { useState } from 'react';
import { createContext } from 'react';
import app from '../Firebase/firebase.config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  deleteUser,
} from 'firebase/auth';

export const AuthContext = createContext(app);
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithEmailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOutUser = () => {
    return signOut(auth);
  };
  const updateUserProfile = (userName, userPhotoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: userPhotoUrl,
    });
  };
  const forgetPassword = email => {
    return sendPasswordResetEmail(auth, email);
  };
  const removeUser = () => {
    return deleteUser(auth.currentUser);
  };

  const userInfo = {
    user,
    setUser,
    createUser,
    signInWithEmailPass,
    logOutUser,
    updateUserProfile,
    forgetPassword,
    removeUser,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
