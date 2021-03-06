import firebase from "firebase";
import React, { createContext, useContext, useState } from "react";

import {
  authenticationRequest,
  registerRequest,
  unAuthenticationRequest,
} from "./authentication.service";

const AuthenticationContext = createContext<
  | {
      user: firebase.User | null;
      loading: boolean;
      error: string;
      login: (email: string, password: string) => Promise<void>;
      register: (email: string, password: string) => Promise<void>;
      logout: () => void;
    }
  | undefined
>(undefined);

export function AuthenticationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<
    {
      user: firebase.User | null;
      loading: boolean;
      error: string;
      login: (email: string, password: string) => Promise<void>;
      register: (email: string, password: string) => Promise<void>;
      logout: () => void;
    }["user"]
  >(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  firebase.auth().onAuthStateChanged((storedUser) => {
    if (storedUser) {
      setUser(storedUser);
      setLoading(false);
    } else {
      setLoading(false);
    }
  });

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      setUser((await authenticationRequest(email, password)).user);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };
  const register = async (email: string, password: string) => {
    setLoading(true);
    try {
      setUser((await registerRequest(email, password)).user);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await unAuthenticationRequest();
    setUser(null);
    setError("");
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        loading,
        error,
        login,
        register,
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
