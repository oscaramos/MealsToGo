import firebase from "firebase";
import React, { createContext, useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import {
  authenticationRequest,
  unAuthenticationRequest,
} from "./authentication.service";
import { auth } from "../firebase";

interface IAuthenticationReturn {
  user: firebase.User | null | undefined;
  loading: boolean;
  error: string;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthenticationContext = createContext<IAuthenticationReturn | undefined>(
  undefined
);

interface IAuthenticationProviderProps {
  children: React.ReactNode;
}

export function AuthenticationProvider({
  children,
}: IAuthenticationProviderProps) {
  const [user, loading] = useAuthState(auth);
  const [error, setError] = useState("");

  const login = async (email: string, password: string) => {
    try {
      await authenticationRequest(email, password);
    } catch (e) {
      setError(e.message);
    }
  };

  const logout = async () => {
    await unAuthenticationRequest();
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        loading,
        error,
        login,
        logout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

export function useAuthentication() {
  const context = useContext(AuthenticationContext);
  if (context === undefined) {
    throw new Error(
      "useAuthentication must be within a AuthenticationProvider"
    );
  }
  return context;
}
