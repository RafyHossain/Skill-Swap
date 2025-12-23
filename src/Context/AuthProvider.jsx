import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
const GoogleProvider = new GoogleAuthProvider();
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn=(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password);
  }

  const googleLogIn=()=>{
    return signInWithPopup(auth, GoogleProvider)
  }

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (currenUser) => {
      setUser(currenUser);
    });
    return () => {
      unSubscribed();
    };
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    logIn,
    logOut,
    googleLogIn,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
