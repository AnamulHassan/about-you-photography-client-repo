import React, { useEffect, useState } from 'react';
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
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from 'firebase/auth';

export const AuthContext = createContext(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [stepBack, setStepBack] = useState('');
  // console.log(user);
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
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const facebookSignIn = () => {
    return signInWithPopup(auth, facebookProvider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const userInfo = {
    user,
    setUser,
    error,
    setError,
    createUser,
    signInWithEmailPass,
    logOutUser,
    updateUserProfile,
    forgetPassword,
    removeUser,
    googleSignIn,
    facebookSignIn,
    stepBack,
    setStepBack,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
