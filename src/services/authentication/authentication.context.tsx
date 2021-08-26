import firebase from "firebase";
import React, { createContext, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  authenticationRequest,
  unAuthenticationRequest,
} from "./authentication.service";

interface IAuthenticationReturn {
  user: firebase.User | null | undefined;
  loading: boolean;
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
  const [user, loading] = useAuthState(firebase.auth());

  const login = async (email: string, password: string) => {
    await authenticationRequest(email, password);
  };

  const logout = async () => {
    await unAuthenticationRequest();
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        loading,
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
