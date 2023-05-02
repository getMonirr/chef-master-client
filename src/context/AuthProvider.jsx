import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebas.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  //google sign in
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // log out 
  const logOut = () => {
    return signOut(auth);
  }

  // observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (newUser) => {
      setUser(newUser);
      console.log("inside on auth");
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // auth info
  const authInfo = {
    user,
    googleLogin,
    logOut
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
