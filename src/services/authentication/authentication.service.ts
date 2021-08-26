import { auth } from "../firebase";

export const authenticationRequest = async (
  email: string,
  password: string
) => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const unAuthenticationRequest = async () => {
  await auth.signOut();
};
